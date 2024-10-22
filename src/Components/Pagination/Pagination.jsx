import React, { useEffect, useState } from 'react'
import "../Pagination/Pagination.css"
import Shimmer from '../Shimmer/Shimmer';
const Pagination = () => {


    const [products,setProducts] = useState(); 
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);
   const lastProductIndex = currentPage* productsPerPage;
   const firstProductIndex = lastProductIndex - productsPerPage;
    const currentPageProducts = products?.products?.slice(firstProductIndex,lastProductIndex);
    const totalPage = Math.ceil(products?.total/productsPerPage);

    const fetchProduct = async ()=>{
     const res =  await fetch("https://dummyjson.com/products?limit=0");
      const data = await res.json();
         if(data && data.products){
          setProducts(data);
         }
    }

    useEffect(()=>{
        fetchProduct()
    },[]);

    const handlePrev = ()=>{
      setCurrentPage(((prev)=>Math.max(prev-1,1)))
    }
    const handleNext =()=>{
      setCurrentPage((next)=>Math.min(next+1,totalPage))
    }

  return (
    <div className="container">
    <div className="product-list">
    {!(currentPageProducts && currentPageProducts.length>0)?
    " "
    :
    (
      currentPageProducts.map((prods) => (
        <div key={prods.id} className="product">
          <img src={prods.thumbnail} alt={prods.title} />
          <div className="product-name">{prods.title}</div>
          <div className="product-price">${prods.price.toFixed(2)}</div>
          <div className="product-description">{prods.description}</div>
        </div>
      ))
    )}
  </div>
  <div className="pagination">
    <button onClick={handlePrev} disabled={currentPage===1}>Prev</button>
       {Array.from({length:totalPage},(_,index)=>(
      <button onClick={()=>{
             setCurrentPage(index+1)
      }} className={currentPage===index+1?"active":""}>
        {index+1}</button>
    ))}
    <button onClick={handleNext} disabled={currentPage===totalPage}>Next</button>
  </div>
  </div>
  )
}

export default Pagination