import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";
function Navigation(){
    return(
        <div className={classes.topbar}>
                <header>
                <ul>
            
                    <div className={classes.logo}>
                      <h3>ACME</h3>
                    </div>
                    <li>
                     <Link to='/'>Home</Link>
                    </li>
                    <li>
                     <Link to='/About'>About Us</Link>
                    </li>
                    <li>
                      <Link to='/Updates'>Updates</Link>
                    </li>
                    <li>
                     <Link to='/Spaces'>Spaces</Link>
                    </li>
                 
                 </ul>
                 </header>

        </div>
    )
}
export default Navigation;