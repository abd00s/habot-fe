import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeFrequency = this.onChangeFrequency.bind(this);
    this.onChangePeriod = this.onChangePeriod.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      frequency: '',
      period:''
    }
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeFrequency(e) {
    this.setState({
      frequency: e.target.value
    })
  }
  onChangePeriod(e) {
    this.setState({
      period: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      frequency: this.state.frequency,
      period: this.state.period,
      user_id: 1
    };
    axios.post('http://localhost:3001/goals', obj)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response);
      })

    this.setState({
      title: '',
      frequency: '',
      period: ''
    })
  }

  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Goal</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Title:  </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                      />
                </div>
                <div className="form-group">
                    <label>Frequency: </label>
                    <input type="text"
                      className="form-control"
                      value={this.state.frequency}
                      onChange={this.onChangeFrequency}
                      />
                </div>
                <div className="form-group">
                    <label>Period: </label>
                    <input type="text"
                      className="form-control"
                      value={this.state.period}
                      onChange={this.onChangePeriod}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Goal!" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}
