import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

export class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home"> Best Man Hall of Fame </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/pics">Pics</Nav.Link>
                <Nav.Link href="/videos">Videos</Nav.Link>
                <Nav.Link href="/stories">Stories</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
      </div>
    )
  }
}

export default Navigation
