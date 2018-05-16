import React from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
    title: {
      text: 'My stock chart'
    },
    series: [{
      data: [1,5,18,29,56,110],
      pointStart: 2000
    }
    
]
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