import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

function MealItemForm(props) {
    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/> {/* vkládám do props objekt, se kterým se pracuje v Input.js */}
            <button>+ Add</button>
        </form>
    );
}

export default MealItemForm;