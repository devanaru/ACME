import classes from './Footer.module.css';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer(props){
    return(
        <div className={classes.foot}>
            <p>© ACME 2020. All rights reserved</p>
            <p>Handled by ACME Public relations</p>
             <div className={classes.socialicon}>
                <FaFacebook  className={classes.socialicondiff}/>
               <FaInstagram  className={classes.socialicondiff}/>
               <FaLinkedin   className={classes.socialicondiff}/>
             </div>
        </div>
    );
}

export default Footer;