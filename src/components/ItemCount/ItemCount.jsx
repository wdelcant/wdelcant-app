import './ItemCount.scss';
import { React, useState } from 'react';
import AddToCard from './alert';

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial=1);
    
    const Add = () => {
        setCount(count + 1);
    }
    const Sub = () => {
        setCount(count - 1);
    }

    return (
            <div className="item__count">
                <div className="item__product">

                        <p className="item__stock">Stock disponible: {stock}</p>

                    <div>
                        <button className="item__button no-active" onClick={Sub} disabled={count <= initial}>-</button>
                        <span className="item__total">{count}</span>
                        <button className="item__button" onClick={Add} disabled={count >= stock}>+</button>
                    </div>
                    <button className="item__button--add" onClick={AddToCard}>Añadir al carro</button>
                </div>
            </div>
    )
}
export default ItemCount



