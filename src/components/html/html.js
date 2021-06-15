import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


class HTML extends React.Component {

  render() {
    return (
      <div class="container">
        <div className="row">

          <form>
            <div className="input-group">
              <label>cb1</label>
              <input type="checkbox" value={1} onChange={this.onChange.bind(this)} />
            </div>
            <div className="input-group">
              <label>cb2</label>
              <input type="checkbox" value={2} onChange={this.onChange.bind(this)} />
            </div>
            <div className="input-group">
              <label>cb3</label>
              <input type="checkbox" value={3} onChange={this.onChange.bind(this)} />
            </div>
          </form>

          <div className="selected-items">
            {this.state.options.map(number =>
              <p key={number}>item: {number}</p>
            )}
          </div>



        </div>
      </div>
    )
  }
}

export default HTML;