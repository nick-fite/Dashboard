import SideBar from "../Sidebar";
import "../Page.css"
import { useEffect, useState } from "react";
import Customer, { CustomerDataType } from "../Customer";

const CUSTOMER_CSV = "/Dashboard/TestCSV.csv";



function Customers()
{
    const [text, setText] = useState<CustomerDataType[]>();
    
    useEffect(() => {
        fetch(CUSTOMER_CSV).then(response => response.text()).then(responseText => {
            const CSVTest = responseText;
            const rows = CSVTest.split("\n");
            const parsedData = rows.map(row => row.split(","));
            let customers: CustomerDataType[] = [];
            parsedData.forEach(DataArray => {
                let customer: CustomerDataType = {name: DataArray[0], profilePictureLoc: DataArray[1], 
                    totalRev: DataArray[2], lastPurchase: DataArray[3]};
                customers.push(customer);
            });
            setText(() =>{ return customers});
        });
    }, []);
    
    
    return(
    <div className="Page">
        <SideBar/>
        <div className="Content">
            <h1>Customers</h1>
            <div className="Items">
                {text?.map(test => <div className="Item"><Customer name={test.name} profilePictureLoc={test.profilePictureLoc} 
                    totalRev={test.totalRev} lastPurchase={test.lastPurchase}/> </div>)}
            </div>
        </div>
    </div>);
}

export default Customers;