import React, {useEffect, useState, useParams} from 'react';
import ItemDetail from './ItemDetail';
import Products from '../../data/data';
import Loader from '../Loader/Loader';
import './ItemDetailContainer.scss';

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {itemId} = useParams();

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Products);
            } , 2000);
        } )
        getProducts
        .then((response) => {
            const item = response.find((item)=> item.id === Number(itemId))
            setProducts(response);
        } )
        .catch((error) => {
            console.log(error);
        } )
        .finally(() => {
            setIsLoading(false);
        } )
    } , [])

    return (
        <div className="">
            {
            isLoading ?
                    <Loader />
            :
                    <ItemDetail {...products}/>
            }
            </div>
    )
}

export default ItemDetailContainer