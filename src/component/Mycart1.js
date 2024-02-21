import React, { useState } from 'react'

export default function Mycart1({val, val1}) {
  const[total,setTotal]=useState(0);
  return (
    
    <div class="container">
      <h1>My cart({val1})</h1>
       {
        
      
          

             <table style={{borderBlockColor:'red'}}>
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Name </th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {
                  val.map((d,i)=>{
                  return(
                    <tr>
                      <td>{i+1}</td>
                      <td>{d.Title}</td>
                      <td>${d.Price}setTotal(...total,d.Price)</td>
                    </tr>
                  )

                  })

                }
              </tbody>
              <tfoot>

              </tfoot>
             </table>
        
          
          }
     <h1>total</h1>
     </div>
  )
}
