//importing components
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; JAM & RED test2 | 2024</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
