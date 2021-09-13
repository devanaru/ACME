import classes from '../modules/Home.module.css';
import Cards from "../ui/Cards";
import Footer from "../ui/Footer";
function Home(){
     return (
        <div className={classes.subs}>
         <p> We're a</p>
         <div className={classes.bouncemainheading}>
             <span id="bounce__1"  className={classes.bounce}>C</span>
             <span id="bounce__1"  className={classes.bounce}>O</span>
             <span id="bounce__1"  className={classes.bounce}>M</span>
             <span id="bounce__1"  className={classes.bounce}>M</span>
             <span id="bounce__1"  className={classes.bounce}>U</span>
             <span id="bounce__1"  className={classes.bounce}>N</span>
             <span id="bounce__1"  className={classes.bounce}>I</span>
             <span id="bounce__1"  className={classes.bounce}>T</span>
             <span id="bounce__1"  className={classes.bounce}>Y</span>
            </div>
          <p>Of mechanical engineers with a key motive to benefit the students with their Technical Development, encourage and access students by organizing various Technical events like Workshops, Technical Fests, Webinars and Industrial Visits.
           ACME aims at helping students learn latest Technologies, come up with Innovative solutions to real time Engineering Problems, promotes high level and yet a healthy competition among the  students and keep them up-to this day and age !!</p>
          <div className={classes.card}> 
             <Cards  text="HEAT AND FLUID DYNAMICS" imagetext="This is heat"></Cards>
             <Cards  text="DESIGN ENGINEERING"  imagetext="This is design engineering"/>
             <Cards  text="MANUFACTURING ENGINEERING" imagetext="This is Manufacturing Engineering"/>
            </div>
            <Footer />
        </div>
     )
}

export default Home;