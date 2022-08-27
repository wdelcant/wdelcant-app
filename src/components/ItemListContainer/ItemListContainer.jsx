import './ItemListContainer.scss';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({img, title, price, description, stock}) => {
    return (
        <div className="item-list-container">
            <span className="item-list-container__item">
                <img className="item-list-container__item__image" src={img} alt={title}/>
                <h2 className="item-list-container__item__title">{title}</h2>
                <p className="item-list-container__item__price">${price}</p>
                <p className="item-list-container__item__description">{description}</p>
                <span className="item-list-container__item__icon"><img src="assets/images/heart.svg" alt="" /></span>
                <ItemCount stock={stock}/>
            </span>            
        </div>
        
    )
}

export default ItemListContainer