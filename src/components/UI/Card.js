import './Card.css'
///this file is the file that wraps all the expenses inculdind the items.
function Card(props){
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>

}

export default Card;