import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

function MealItemForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value; //získaná hodnota z Input.js ref (je to vždy string!)
        const enteredAmountNum = +enteredAmount; //konverze na číslo

        if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
            setAmountIsValid(false);
            return;
        }
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount" ref={amountInputRef} input={{ //ref nelze použít v komponentě -> přenáší se jako props
                id: props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/> {/* vkládám do props objekt, se kterým se pracuje v Input.js */}
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
}

export default MealItemForm;