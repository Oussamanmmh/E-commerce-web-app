"use client"
import React, { useEffect, useState } from 'react';
import ProduitCard from '../_components/produitCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { ThreeDots } from 'react-loader-spinner';

const ListProduits = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);    

  useEffect(() => {
    const fetchProducts = async () => {
      const produitsRef = collection(db, 'products');
      const productSnapshot = await getDocs(produitsRef);
      const productList = productSnapshot.docs.map(doc => doc.data());
      setProducts(productList);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex gap-5 ml-4 w-full overflow-x-scroll pb-5 listproduits">
      {products.map((product, index) => (
       <ProduitCard product={product}/>
      ))}
      </div>
      {
        loading &&  <div className="inset-4 -translate-y-1/2 flex justify-center items-center bg-opacity-10  ">
        <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>
      }
    </>
  );
};

export default ListProduits;
