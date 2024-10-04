import { useRouteError } from "react-router-dom";
import SideBar from "../Sidebar";
import "../Page.css"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="Page">
        <SideBar/>
      <div className="Content">

        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    </div>
  );
}