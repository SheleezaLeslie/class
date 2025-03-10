import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Overview = () => {
  const [overview, setOverview] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/getOverview')
      .then((response) => response.json())
      .then((data) => setOverview(data))
      .catch((error) => console.error('Error fetching overview:', error));
  }, []);

  if (!overview) return <p>Loading...</p>;

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Overview</Card.Title>
              <Card.Text>{overview.description}</Card.Text>
              <Button variant="primary" onClick={() => alert('Contact me!')}>
                Contact Me
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Overview;
