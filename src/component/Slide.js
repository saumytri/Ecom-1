import React , {useState}from 'react'
import '../App.css';
export default function Slide({products,myCart}) {
  const [currentPage,setCurrentPage]= useState(1);
  const frameinonepage=9;
  const lastindex=currentPage*frameinonepage;
  const firstindex=lastindex-frameinonepage;
  const record=products.slice(firstindex,lastindex);
  function prePage()
  {
    if(currentPage!==1)
    {
      setCurrentPage(currentPage-1);
    }
     

  }
  function nextCPage(id)
  {
    setCurrentPage(id)
    
  }
  function nextPage()
  {
    if(currentPage!==3)
    {
      setCurrentPage(currentPage+1);
    }
  }
  return (
    <>
    <h1>Product list</h1>
    <p>Showing {firstindex+1}-{lastindex} of 24 products</p>
    <div  className="flex">
      
      {
        
      record.map((productsItem,productsIndex)=>{
         return(
          <>
         
          <div style={{width:'30% ' ,padding:'10px' ,marginLeft:'40px',marginBottom:'40px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            
              <nav  style={{textAlign:'center',backgroundColor:'grey',color:'rgb(0,0,249)',height:'50px'}}>
              <h3> 
                {
              productsItem.Title
                }
                </h3>
                </nav>
                 <img src={productsItem.ImageUrl } width='100%' alt='jai shree ram'></img>
                  <p className="cutoff">{productsItem.Description}</p>
                  <p><b>Category: </b>{productsItem.Category}</p>
                  <p><b>Made By: </b>{productsItem.Manufacturer}</p>
                  <p><b>Organic: </b>{productsItem.Organic}</p>
                  <p><b>Price: $</b>{productsItem.Price}</p>
                  <button onClick={()=>myCart(productsItem)} type="button" class="btn btn-primary">Add to Cart</button>
                   
              </div>
              </>
         )
      })
      }
        </div>
        <nav >
  <ul className="pagination" style={{justifyContent:'center'}}>
    <li className="page-item" ><a class="page-link" href='#'onClick={prePage}>Previous </a></li>
    <li className={`page-item ${currentPage===1?'active':''}`}  ><a class="page-link" href='#' onClick={()=>nextCPage(1)}>1 </a></li>
    <li className={`page-item ${currentPage===2?'active':''}`}   ><a class="page-link"  href='#' onClick={()=>nextCPage(2)}>2 </a></li>
    <li className={`page-item ${currentPage===3?'active':''}`}  ><a class="page-link" href='#' onClick={()=>nextCPage(3)}>3 </a></li>
    <li className= "page-item"  ><a class="page-link" href='#'onClick={nextPage}> Next</a> </li>
  </ul>
</nav>
        </>
  );
}
