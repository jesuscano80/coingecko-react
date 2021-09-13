import React from "react";

const CoinRow = ({coin, index})=>{
    return (
        
        <tr>
         <td>{index+1}</td>
         <td>
            
            <img src={coin.image} className="me-3" style={{width: "5%"}} alt={coin.name}/> 
            <span>{coin.name}</span>
            <span className="ms-3 text-muted">{coin.symbol.toUpperCase()}</span>
        </td>
         <td>{coin.current_price}</td>
         <td className={coin.price_change_24h>0 ? "text-success" : "text-danger"}>{coin.price_change_24h}</td> 
            </tr>
        
    )
}

export default CoinRow;