import React from 'react'; 
import StartDate from './StartDate'
import EndDate from './EndDate'
import StockTicker from './StockTicker'
import getStartDate from '../getStartDate'
function Search() {  return(
    <div>
        <form onSubmit = {getStartDate}>
            <StartDate />
            <EndDate />
            <StockTicker />
           <div className="button" /> <input type= 'submit' value = 'Submit' class = 'button'/> <div/>
           </form>
    </div> ); 
    } 

export default Search; 
