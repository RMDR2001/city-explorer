import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CitySearch = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.displayLatLon();
    };

    return (

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de la Ciudad </Form.Label>
                    <Form.Control onChange={props.updateCity} type="text" placeholder="City Name" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    A EXPLORAR!
                </Button>
            </Form>
    )
}

export default CitySearch;