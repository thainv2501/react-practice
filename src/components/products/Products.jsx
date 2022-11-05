import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Products.css"
const Products = () => {

    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        const respond = await fetch("https://dummyjson.com/products");
        const data = await respond.json();
        console.log(data.products);
        setProducts(data.products)

    };

    useEffect(() => {
        fetchData();
        return () => {
            console.log("clear function run , now load products")
        }
    }, [])

    return (
        <div className='products_container'>
            <h1>Products</h1>
            {products.map((item, index) => {
                return (
                    <h1 key={index}>
                        <Link to={`/products/item/${item.id}`}> {item.title}</Link>
                    </h1>
                );

            })}
        </div >
    );
}

export default Products