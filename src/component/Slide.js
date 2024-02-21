import React from 'react'
import '../App.css';
export default function Slide({products,myCart}) {
     
  return (
    <>
    <h1>Product list</h1>
    <div  className="flex">
      
      {
        
      products.map((productsItem,productsIndex)=>{
         return(
          <>
         
          <div style={{width:'30% ' ,padding:'50px' ,marginLeft:'40px',marginRight:'0px'}}>
            
              <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                {
                productsItem.Title
                }
                </nav>
                 <img src={productsItem.ImageUrl } width='100%' alt='jai shree ram'></img>
                  <p className="cutoff">{productsItem.Description}</p>
                  <p><b>Category: </b>{productsItem.Category}</p>
                  <p><b>Made By: </b>{productsItem.Manufacturer}</p>
                  <p><b>Organic: </b>{productsItem.Organic}</p>
                  <p><b>Price: $</b>{productsItem.Price}</p>
                  <button onClick={()=>myCart(productsItem)}>Add to Cart</button>
              </div>
              </>
         )
      })
      }
        </div>
        </>
  );
}
