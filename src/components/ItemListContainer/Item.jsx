import React from 'react'
import ItemCount from '../ItemCount/ItemCount';


const Item = ({id, img, title, price, description, stock}) => {
    return (
            <div className="item-list-container__item" id="item">
                <div className="item-list-container__item__image"><img src={img} alt={title}/></div>
                <h2 className="item-list-container__item__title">{title}</h2>
                <p className="item-list-container__item__price">${price}</p>
                <p className="item-list-container__item__description">{description}</p>
                <span className="item-list-container__item__icon"><img src="assets/images/heart.svg" alt="" /></span>
                <ItemCount stock={stock}/>
            </div>  
    )
}
export default Item