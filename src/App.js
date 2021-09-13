
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import {useEffect, useState} from "react";
import CoinTable from './components/coinTable';
import SearchBar from './components/searchBar';

function App() {
const [search,setSearch]=useState("");
const [coins, setCoins]= useState([]);  
const getData= async()=>{
 const res= await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1")
setCoins(res.data);
}

useEffect(()=>{
getData();
}, [])
  return (
 <div>
   <h1> Coin Market</h1>
   <SearchBar search={search} setSearch={setSearch}></SearchBar>
   <CoinTable coins={coins} search={search}></CoinTable>
 </div>
  );
}

export default App;
