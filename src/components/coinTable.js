import React from "react";
import CoinRow from "./coinRow";


const CoinTable= ({coins, search})=>{
    const filteredCoins= coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())
     |  coin.symbol.toLowerCase().includes(search.toLowerCase())   
    )

    const Elements=["Id", "Name", "Current price", "Price Changed"]
    return(
<>
<table className="table table-dark table-hover mt-4">
    <thead>
        <tr>
        {Elements.map((element, index)=>  
        
            <td key={index +1}> {element}</td>
        
            )}
        </tr>    
    </thead>
    <tbody>
        
         {filteredCoins.map((coin,index)=> <CoinRow coin={coin} index={index} key={index+1}/>
         )}  
         
    </tbody>
</table>
</>
    )
}

export default CoinTable;