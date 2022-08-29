import Swal from 'sweetalert2';



const AddToCard = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('click', () => {
                Swal.close();
            } )
        }
        })
        Toast.fire({
        icon: 'success',
        title: `El artículo ha sido agregado al carrito de compras correctamente`,

        })
}
export default AddToCard;