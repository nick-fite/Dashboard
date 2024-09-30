import SideBar from "../Sidebar";
import "../Page.css"
import "./Metrics.css"
import { LineChart} from "@mui/x-charts";
import { useState } from "react";
import { axisClasses, legendClasses } from "@mui/x-charts";


const METRICS_CSV = "/TestMetrics.csv";

interface testType {
    label: string;
    curve: "linear";
    data: number[];
}

function Metrics()
{
    const sxProps = {
        "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
            strokeWidth:"0.4",
            fill:"#ffffff"
        },
        [`& .MuiChartsAxis-left .MuiChartsAxis-line`]:{
            stroke:"#ffffff",
            strokeWidth:0.4
        },
        [`& .MuiChartsAxis-left .${axisClasses.tick}`]:{
            stroke:"#ffffff",
            strokeWidth:0.4
        },
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
            strokeWidth:"0.5",
            fill:"#ffffff"
        },
        "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
            stroke:"#ffffff",
            strokeWidth:0.4
        },
        [`& .MuiChartsAxis-bottom .${axisClasses.tick}`]:{
            stroke:"#ffffff",
            strokeWidth:0.4
        },
        [`& .MuiChartsAxis-bottom .${legendClasses.mark}`]:{
            stroke:"#ffffff",
            strokeWidth:0.4
        },
        typography:{
            color: "white",
            fill: "white"
        },
        "& text": { 
            backgroundColor: "#ffffff",
            fill: "white"
        },
    };
    const slotProps = {
        legend: {
            opacity: 0,
            margin: "10%",
            labelStyle:{
                fill: "white",
            }
        }
    };
    const [dataOutput, SetData] = useState<testType[]>();
    const Lines = [{
        data: [1,3,3],
        curve: "linear",
        label: "ToBeRemoved",
    }]; //making this a type causes issues when inputed into the chart. By making it generic we can trick it into working.

    FetchCSV(METRICS_CSV).then(str => {
        SetData(() =>{ return ParseCSV(str)});
    });

    dataOutput?.forEach(elem => {
        Lines.push({
            data: elem.data,
            curve: "linear",
            label: elem.label
        });
    });
    
    return(
        <div className="Page">
            <SideBar/>
            <div className="Content">
                <h1>Metrics</h1>
                <div className="Metrics">
                        <div className="MetricsSpotlight">
                            <div className="MainMetricBlock">
                                <LineChart
                                    margin={{top: 100}}
                                    series={Lines}
                                    sx={sxProps}
                                    slotProps={slotProps}
                                />
                            </div>
                            <div className="RightMetricsBlock">
                                {dataOutput?.splice(0,2)?.map(line => <div className="RightMetric" key={"Item" + line.label}>
                                    <LineChart series={[{data: line.data, curve: "linear", label: line.label}]} sx={sxProps} slotProps={slotProps} />
                                </div>)}
                            </div>
                        </div>
                        <div className="Items">
                    {dataOutput?.map(line => <div className="Item" key={"Item" + line.label}>
                        <LineChart series={[{data: line.data, curve: "linear", label: line.label}]} sx={sxProps} slotProps={slotProps} />
                    </div>)}
                        </div>
                </div>
            </div>
        </div>);
}

export default Metrics;

function ParseCSV(text: string)
{
    const data: testType[] = [];
    const rows = text.split("\n");
    const parsedData = rows.map(row => row.split(","))
    parsedData.forEach(row => {
        const label = row[0];
        const dataNum: number[] = [];
        row.splice(1, row.length).forEach(element => {
            dataNum.push(+element);
        });
        const line: testType = {
            data: dataNum,
            curve: "linear",
            label: label
        }
        data.push(line);
    });
    return data;
}

async function FetchCSV(csvPath: string) : Promise<string>
{
    const response = await fetch(csvPath);
    return response.text();
}