import React from 'react';
import PropTypes from 'prop-types';
import DdfInfoContext from './DdfInfoContext';

export default class DdfInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: [{
        name:"Total Value of Fund",
        loadingSize: "130"
      }, {
        name: "Total Payout",
        loadingSize: "130"
      }, {
        name: "Open Tasks",
        loadingSize: "50"
      }, {
        name: "Completed Tasks",
        loadingSize: "50"
      }, {
        name: "No. of Contributors",
        loadingSize: "50"
      }],
      selectedCategory: "Development",
      selectedFilter: "None",
    }
  }

 getStats(){
  const stats = [{
        name:"Total Value of Fund",
        value: "$896,950.00",
        loadingSize: "130"
      }, {
        name: "Total Payout",
        value: "$103,050.00",
        loadingSize: "130"
      }, {
        name: "Open Tasks",
        value: "219",
        loadingSize: "50"
      }, {
        name: "Completed Tasks",
        value: "36",
        loadingSize: "50"
      }, {
        name: "No. of Contributors",
        value: "9",
        loadingSize: "50"
      }
    ]

    new Promise(async (resolve, reject) => {
      setTimeout(() =>
        this.setState({stats: stats})
      , 1000);
    });
  }

  componentDidMount() {
    this.getStats();
  }

  render() {
    return (
      <DdfInfoContext.Provider value={this.state}>
        {this.props.children}
      </DdfInfoContext.Provider>
    );
  }
}

DdfInfo.propTypes = {
  children: PropTypes.node.isRequired,
};
