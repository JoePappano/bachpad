import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap"

export class Stories extends Component {
  render() {
    return (
      <div>
          
        <h1 className="text-center" style={ headStyle }>Tell your craziest story!</h1>

        <div className="text-center">
          <Form style={formStyle}>
            <textarea style={ inputAreaStyle } type="textarea" label="Example label" />
            <br/>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>

        <hr/>
        
        <div className="text-center">
          <h3> Stories appear here</h3>
        </div>


      </div>
    )
  }
}

const formStyle = {
  margin: "10px",
}

const inputAreaStyle = {
  width: "50%",
  height: "150px",
}

const headStyle = {
  margin: "20px",
}

export default Stories
