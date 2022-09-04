const ItemDetail = ({ title, description, image, price }) => {
  return (
    <div id="item-detail">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
      <p>{price}</p>
    </div>
  );
};

export default ItemDetail;
