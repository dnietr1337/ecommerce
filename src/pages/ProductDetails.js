import React, { useContext } from 'react';
import Product from '../components/Product.js';
import { useParams } from 'react-router-dom';

import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  const similarItems = products.filter(
    (item) => item.category === product.category && item !== product
  );

  console.log(similarItems);
  const { title, price, description, image } = product;
  return (
    <>
      <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto  ">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
              <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                {title}
              </h1>
              <div className="text-xl text-red-500 font-medium mb-6">
                $ {price}
              </div>
              <p className="mb-8 ">{description}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-primary py-4 px-8 text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Similar produts       */}
      <section className="pt-16 pb-8 lg:py-24 flex items-center">
        <div className="container mx-auto  ">
          <div className="mb-8">
            <h1 className="lg:text-[70px] md:text-5xl text-2xl leading-[1.1] font-light mb-4 uppercase">
              you might also like from
              <p className="font-semibold">{product.category}</p>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {similarItems.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
