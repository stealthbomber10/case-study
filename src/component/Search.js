import React from 'react'; 
import StartDate from './StartDate'
import EndDate from './EndDate'
import StockTicker from './StockTicker'
import handSubmit from '../handleSubmit'
function Search() { 
return(
    <div>
        <form>
            <StartDate />
            <EndDate />
            <StockTicker />
            <input type= 'submit' value = 'Submit'/> 
        </form>
    </div>

); 
} 

export default Search; 