import React from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
    title: {
      text: 'My stock chart'
    },
    series: [{
      data: [1,5,18,29,56,110],
    }
    
    ],
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    },
    line: {
        dataLabels: {
            enabled: true
        },
        enableMouseTracking: true
    }
}

class Charts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentWillReceiveProps(props) {
        console.log("New data received to redraw chart.");
        // parse data from props and map to chart data
    }

    render() {
        return (
            <div className="Charts">
                <HighchartsReact
                highcharts={Highcharts}
                options={options}
                />
            </div>
        )
    }
}

// function Charts() {
//     return (
//         <div className="Charts">
//             <HighchartsReact
//                 highcharts={Highcharts}
//                 options={options}
//             />
//         </div>
//     );
// }

export default Charts;