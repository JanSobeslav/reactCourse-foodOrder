import React from 'react';
import classes from './Header.module.css';
import image from '../../assets/meals.jpg'; //lze importovat obrázek -> důležité je napsat koncovku ".jpg"
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
    return (
        
         <React.Fragment>  {/* fragment se využívá proto, aby nevznikaly obalové divy -> zpomalení aplikace */}
            <header className={classes.header}> {/*CSS Module přistoupení k názvu třídy */}
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>  {/*CSS Module přistoupení k názvu pokud je nějak rozdělenen např. '-' */}
                <img src={image} alt="Table full of delicious food!" />
            </div>
        </React.Fragment>
    );
}

export default Header;