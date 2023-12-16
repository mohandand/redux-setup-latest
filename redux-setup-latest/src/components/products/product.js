import React, {useState, useEffect} from 'react';
import './style.css'

export default function Product(){  
     const [products, setProducts] = useState([]);

    async function fetchProducts(){
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts([...data]);
    }

    useEffect(() => {
        fetchProducts();
    },[])

    const ItemCard =({id,title,price,image}) => {
       return(
        <div key={id} className="item-card">
        <img src= {image}/>
        <div  className="item-details">
            <p>Name: {title}</p> <br/>
            <p>Price: {price}</p>
        </div>
        <button>ADD TO CART</button>
    </div>
       )
    }
    return <div className='container'>
        {products.map((product) => {
            return <ItemCard id={product.id} title={product.title} price={product.price} image={product.image}/>
        })}
    </div>
}