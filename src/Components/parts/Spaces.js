 import classes from "../modules/Spaces.module.css";
 import Footer from "../ui/Footer";

function Spaces(){
     return (
        <div className={classes.where}>
        <p>Spaces</p>
        <div className={classes.locate}> 
         <Footer />
        </div>
        </div>
     );
}

export default Spaces;