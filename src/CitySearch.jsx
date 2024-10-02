import React from "react";
import { Button, Form } from "react-bootstrap";

class CitySearch extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            < Form >
                <Form.Group className="mn-3" controlId="cityName">
                    <Form.Label>Ingresa la dirección a explorar: </Form.Label>
                    <Form.Control onchange type="text" placeholder="Ingresa Dirección" />
                </Form.Group>
                <Button variant="primary" type="submit"></Button>
            </Form >
        )
    }
}

export default CitySearch