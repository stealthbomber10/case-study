import React from 'react'; 
import StartDate from './StartDate'
import EndDate from './EndDate'
import StockTicker from './StockTicker'
function Search() { 
return(
    <div>
        <StartDate />
        <EndDate />
        <StockTicker />
        <input type= 'submit'/> 
    </div>

); 
} 

export default EndDate; 