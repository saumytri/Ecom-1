import React, { useState } from 'react'
import '../App.css';

export default function Mycart1({val, val1}) {
   
  return (
    
    <div class="container">
      <h1>My cart({val1}):</h1>
       {
        
      
          

             <table  className="table1">
              <thead>
                
                <tr className="table1">
                  <th className="table1">S.no</th>
                  <th className="table1" style={{leftmargin:'10px'}}>Name </th>
                  <th className="table1">Price</th>
                  <th className="table1">Quantity</th>
                  <th></th>
                </tr>
               
              </thead>
              <tbody>
                {
                  val.map((d,i)=>{
                  return(
                    <tr>
                      <td className="table1">{i+1}</td>
                      
                      <td className="table1">{d.Title}</td>
                      <td className="table1">${d.Price}</td>
                      <td className="table1"><input type="number"  defaultValue={1} value={document.getElementById()}/></td>
                      <td  ><button style={{color:'red' }}>X</button></td>
                      <hr></hr>
                    </tr>
                  )

                  })

                }
              </tbody>
              <tfoot>
                <tr>
                <td></td>
              <th>Subtotal</th>
              <th>$
               {
                 val.map(d => d.Price).reduce((total,value)=>total+value,0)
               }</th>
               <th>{}items</th>
                </tr>
              </tfoot>
             </table>
        
          
          }
     <h5>
      Total=</h5>
     </div>
  )
}
