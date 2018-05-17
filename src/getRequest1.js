import React, {Component} from 'react';
import axios from 'axios';
function getRequest1(uri){
    axios.get(uri)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
export default getRequest1