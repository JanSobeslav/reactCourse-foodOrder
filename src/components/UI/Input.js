import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => { //přijatý props ref lze využít jako skutečný ref pomocí React.forwardRef()
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} /> {/* získaný ref vložíme do skutečného ref */}
            {/* ...props.input zajistí, že se vše z objektu input dostane jako atribut => 
            <input id='' type='' min='' max='' atd. /> 
            musí to být atributy, které <input /> opravdu má! */}
        </div>
    );
});

export default Input;