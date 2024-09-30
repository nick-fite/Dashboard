import SideBar from "../Sidebar";
import "../Page.css"
import Calendar from "react-calendar";

function CalendarSection()
{
    console.log("test");
    return(
    <div className="Page">
        <SideBar/>
        <div className="Content">
            <Calendar/>
        </div>
    </div>);
}

export default CalendarSection;