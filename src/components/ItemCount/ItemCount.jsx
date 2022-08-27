import './ItemCount.scss';
import { React, useState } from 'react';

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1);
    // const [stock] = useState(10);

    function counter(operacion) {
        if (operacion === '+') {
            if (count < stock) {
                setCount(count + 1);
            }
        } else {
            if (count > 1) {
                setCount(count - 1);
            }
        }
    }
    

    return (
        <>
            <div className="item__count">
                <div className="item__product">
                    <p>
                        <span className="item__stock">Stock disponible: {stock}</span>
                    </p>
                    <div>
                        <button className="item__button no-active" onClick={ ( )=> counter("-") }>-</button>
                        <input type="text" readonly class="item__total" value={count} aria-label="Producto en carro"/>
                        <button className="item__button" onClick={ ( )=> counter("+") } >+</button>
                    </div>
                    <button className="item__button--add">Añadir al carro</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount



