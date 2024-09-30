import './Sidebar.css'
import BlankProfile from "./assets/BlankProfile.webp"
//import Dashboard from './components/Dashboard';
//import Metrics from './components/Metrics';
//import Customers from './components/Customers';
//import Products from './components/Products';
//import Calendar from './components/Calendar';

//import BlankProfile from "./assets/BlankProfile.webp"

function SideBar()
{
    return (
          <nav className='SideBar'>
            <div className='PhotoAndName'>
              <img src={BlankProfile} id='ProfilePhoto'/>
              Profile Name
            </div>
            <a href={`/dashboard`}> <button>Dashboard</button> </a>
            <a href={`/customers`}> <button>Customers</button> </a>
            <a href={`/products`}> <button>Products</button> </a>
            <a href={`/calendar`}> <button>Calendar</button> </a>
          </nav>
    )
}

export default SideBar;

            /*<div className="SideBar">
                <div className='PhotoAndName'>
                    <img src={BlankProfile} id='ProfilePhoto'/>
                    Profile Name
                </div>
                <button>
                    Dashboard
                </button>
                <button>
                    Metrics
                </button>
                <button>
                    Customers
                </button>
                <button>
                    Products
                </button>
                <button>
                    Calendar
                </button>
            </div>*/
           /* 
         <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/Metrics' element={<Metrics/>}/>
                <Route path='/Customers' element={<Customers/>}/>
                <Route path='/Products' element={<Products/>}/>
                <Route path='/Calendar' element={<Calendar/>}/>
            </Routes>
         </BrowserRouter>  */ 

/*
          <nav>
            <ul>
              <li>
                <a href={`/dashboard`}>Dashboard</a>
              </li>
              <li>
                <a href={`/metrics`}>Metrics</a>
              </li>
              <li>
                <a href={`/customers`}>Customers</a>
              </li>
              <li>
                <a href={`/products`}>Products</a>
              </li>
              <li>
                <a href={`/calendar`}>Calendar</a>
              </li>
            </ul>
          </nav>
        <div id="detail"></div>
*/