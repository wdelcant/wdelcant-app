import './ItemListContainer.scss';

const ItemListContainer = ({img, title, price, description}) => {
    return (
        <div className="item-list-container">
            <div className="item-list-container__item">
                <img src={img} alt="Product images" />
                <h2>{title}</h2>
                <p>${price}</p>
                <p>{description}</p>
            </div>            
        </div>
    )
}

export default ItemListContainer
