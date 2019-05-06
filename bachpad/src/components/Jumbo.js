import React, { Component } from 'react';
import { Jumbotron, Button } from "react-bootstrap";

export class Jumbo extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
            <h1>Best Man Hall of Fame</h1>
                <p>
                    More info is put here.
                </p>
                <p>
                    <Button variant="primary">Learn more!</Button>
                </p>
        </Jumbotron>;
      </div>
    )
  }
}

export default Jumbo
