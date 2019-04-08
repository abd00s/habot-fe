import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

    constructor(props) {
      super(props);
      this.state = {goals: []};
    }

    componentDidMount(){
      axios.get('http://localhost:3001/goals')
        .then(response => {
          this.setState({ goals: response.data });
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    tabRow(){
      return this.state.goals.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
        return (
            <div>
                <p>Goals</p>
              <table style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Frequency</th>
                  <th>Period</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { this.tabRow() }
              </tbody>
            </table>
          </div>
        )
    }
}
