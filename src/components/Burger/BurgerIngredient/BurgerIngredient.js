import React, { Component } from 'react';
import PropTypes from  'prop-types';

import '../../../index.css'

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
//keys from BuregerBuilder state ( salad, cheese and so on) must be equal to keys we check here, they should be same casing and same name
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className="BreadBottom"></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className="Meat"></div>;
                break;
            case ('salad'):
                ingredient = <div className="Salad"></div>;
                break;
            case ('cheese'):
                ingredient = <div className="Cheese"></div>;
                break;
            case ('bacon'):
                ingredient = <div className="Bacon"></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;
