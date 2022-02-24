import classes from './Card.module.css';

function Card(props) {
    return (
        //props.children vypíše všechny potomky, kolem kterých je comp <Card> children </Card> => jinak nefunguje jako wrapper
        <div className={classes.card}>{props.children}</div>
    );
}

export default Card;