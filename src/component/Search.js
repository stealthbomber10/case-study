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
        <div className="button"> <input type= 'submit'/>  </div>
    </div>

); 
} 

export default Search; 