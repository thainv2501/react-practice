import React from 'react'
import "./Products.css"
const Products = ({ state, dispatch }) => {

    const { products, cart } = state;
    return <div className='products_container'>
        <h1>Products</h1>
        <div className='products'>
            {products.map((product, index) => (
                <div key={index} className='product_item'>
                    <div className='product_img' ><img src={product.thumbnail} alt="" /> </div>
                    <div className='product_info'>
                        <p className='name'>{product.title}</p>
                        <h4 className='price'>$ {product.price}</h4>
                    </div>

                    {
                        cart.some(c => c.product.id === product.id) ?
                            (<button className='btn red' onClick={() => {
                                dispatch({
                                    type: 'REMOVE_TO_CART',
                                    payload: product
                                })
                            }}>
                                Remove to cart
                            </button>)
                            :
                            (<button className='btn green' onClick={() => {
                                dispatch({
                                    type: 'ADD_TO_CART',
                                    payload: {
                                        product, quantity: 1,
                                    }
                                })
                            }}>
                                Add to cart
                            </button>)
                    }


                </div>
            )
            )}

        </div>
    </div>
}

export default Products