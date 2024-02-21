import React from 'react'


export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <nav className="navbar bg-body-tertiary">
  <div className="container">
    
      <h1>Tripathi Store</h1>
     
  </div>
</nav>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button onClick={()=>props.setHome(false)} className="nav-link active" aria-current="page">Home</button>
        </li>
        <li className="nav-item">
          <button onClick={()=>props.setHome(true)} className="nav-link" >MY CART</button>
          </li>
          </ul>
      <form className="d-flex" role="search">
         <button >Cart({props.val})</button>
      </form>
    </div>
  </div>
</nav>
  )
}
