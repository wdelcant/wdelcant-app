import React, {useEffect, useState} from 'react';
import './ItemListContainer.scss';
import ItemList from './ItemList';
import Loader from '../Loader/Loader';
import Products from '../../data/data';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Products);
            }, 2000);
        })

        getProducts
        .then((response) => {
            setProducts(response);
        }
        )
        .catch((error) => {
            console.log(error);
        }
        )
        .finally(() => {
            setIsLoading(false);
        }
        )
        
    } , [])

    return (
        <div>
        <h3 className="item-list-titles"> <span>|</span>  Productos destacados</h3>
        

        <div className="item-list-container">
            
            
        {
        isLoading ?
                <Loader />
        :
        <ItemList items={products}/>
        }
        </div>
        </div>
        
    )
}

export default ItemListContainer