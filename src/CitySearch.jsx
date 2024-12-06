import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CitySearch = () => {
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de la Ciudad </Form.Label>
                    <Form.Control type="text" placeholder="City Name" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    A EXPLORAR!
                </Button>
            </Form>
        </>
    )
}

export default CitySearch;