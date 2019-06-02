import React, { Component } from 'react'
import { InputGroup, FormControl } from "react-bootstrap"

export class Stories extends Component {
  render() {
    return (
      <div>
          <br></br><br></br>
        <InputGroup size="lg">
            <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>

        <textarea></textarea>
      </div>
    )
  }
}

export default Stories
