import classes from './Cards.module.css';

function Cards(props){
    return(
        <div className={classes.cards}>
            <h3>{props.text}</h3>
            <p>{props.imagetext}</p>
        </div>
    );
}

export default Cards;