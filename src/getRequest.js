import React from 'react'
import getStartDate from './getStartDate';
import getStockTicker from './getStockTicker';
import getEndDate from './getEndDate';
import getRequest1 from './getRequest1';
function getRequest(e){
    var x = 'localhost:3000/home/getStockInfo/'+getStockTicker()+'/'+getStartDate()+'/'+getEndDate();
    getRequest1(x,'error');
    alert(x);
    return x;
}
export default getRequest