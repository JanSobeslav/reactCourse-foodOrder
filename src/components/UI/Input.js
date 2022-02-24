import classes from './Input.module.css';

function Input(props) {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
            {/* ...props.input zajistí, že se vše z objektu input dostane jako atribut => 
            <input id='' type='' min='' max='' atd. /> 
            musí to být atributy, které <input /> opravdu má! */}
        </div>
    );
}

export default Input;