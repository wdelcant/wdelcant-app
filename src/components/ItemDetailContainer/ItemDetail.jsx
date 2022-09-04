import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";

const ItemDetail = ({ title, description, image, price, stock }) => {
  const onAdd = (count) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("click", () => {
          Swal.close();
        });
      },
    });
    Toast.fire({
      icon: "success",
      title: `Has agregado un total de ${count} productos correctamente`,
    });
  };

  return (
    <div id="item-detail">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
      <p>{price}</p>
      <ItemCount stock={stock} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
