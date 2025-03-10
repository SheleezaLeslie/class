import React, { useState, useEffect } from 'react';
import { ListGroup, Container, Row, Col, Card } from 'react-bootstrap';

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getExp')
      .then((response) => response.json())
      .then((data) => setExperience(data))
      .catch((error) => console.error('Error fetching experience:', error));
  }, []);

  if (experience.length === 0) return <p>Loading...</p>;

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Experience</Card.Title>
              <ListGroup variant="flush">
                {experience.map((exp, index) => (
                  <ListGroup.Item key={index}>
                    {exp.role} at {exp.company} ({exp.duration})
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
