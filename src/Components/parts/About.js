import Footer from "../ui/Footer";
import classes from "../modules/About.module.css";
function About(){
     return (
        <div className={classes.where}>
         <p>ALL ABOUT US</p>
         <div className={classes.locate}> 
             <Footer />
          </div>
        </div>
     );
}

export default About;