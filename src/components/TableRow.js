import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.frequency}
          </td>
          <td>
            {this.props.obj.period}
          </td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;
