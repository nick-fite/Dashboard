import SideBar from "../Sidebar";
import "../Page.css"
import Product from "../Product";

const DATA = [
    {
        imageLocation: "/Dashboard/vite.svg",
        title: "sdf",
        sales: "1",
    },
    {
        imageLocation: "/Dashboard/vite.svg",
        title: "sdf",
        sales: "1",
    },
    {
        imageLocation: "/Dashboard/vite.svg",
        title: "sdf",
        sales: "1",
    },
    {
        imageLocation: "/Dashboard/vite.svg",
        title: "sdf",
        sales: "1",
    },
    {
        imageLocation: "/Dashboard/vite.svg",
        title: "sdf",
        sales: "1",
    },
    {
        imageLocation: "/Dashboard/vite.svg",
        title: "sdf",
        sales: "1",
    },
    {
        imageLocation: "/Dashboard/vite.svg",
        title: "sdf",
        sales: "1",
    },
]

function Products() {
    return(
    <div className="Page">
        <SideBar/>
        <div className="Content">
            <h1>Products</h1>
            <div className="Items">
                {DATA.map( (item) =>
                <Product imageLocation={item.imageLocation} title={item.title} sales={item.sales}/> )}
            </div>
        </div>
    </div>);
}

export default Products;