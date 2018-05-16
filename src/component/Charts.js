import React from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
    title: {
      text: 'My stock chart'
    },
    series: [{
      data: [1, 2, 3,4,5,6,7,8,9]
    }]
}

function Charts() {
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}

export default Charts;