import React from 'react';

class StockTicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleChange(event) {
        if (event.length > 0) {
            // get rest data and set it in ticker
        }
        else {
            this.props.onChange(undefined);
        }
    }

    render() {
        return (
            <div class = 'stock-ticker'> Stock Ticker: <input type= 'text' id = 'sTicker'/>
            </div>
        );
    }
}

// function StockTicker() { 
// return(
//     <div class = 'stock-ticker'> Stock Ticker: <input type= 'text' id = 'sTicker'/> </div>

// ); 
// } 

export default StockTicker; 