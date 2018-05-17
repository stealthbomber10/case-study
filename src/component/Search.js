import React from 'react'; 
import StartDate from './StartDate'
import EndDate from './EndDate'
import StockTicker from './StockTicker'
import getRequest from '../getRequest';
function Search() {  return(
    <div>
        <form onSubmit = {getRequest}>
            <StartDate />
            <EndDate />
            <StockTicker />
           <div className="button" /> <input type= 'submit' value = 'Submit' class = 'button'/> <div/>
           </form>
    </div> ); 
    } 

export default Search; 
