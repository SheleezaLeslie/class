import React, { useState, useEffect } from 'react';
import { ListGroup, Container, Row, Col, Card } from 'react-bootstrap';

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getEdu')
      .then((response) => response.json())
      .then((data) => setEducation(data))
      .catch((error) => console.error('Error fetching education:', error));
  }, []);

  if (education.length === 0) return <p>Loading...</p>;

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Education</Card.Title>
              <ListGroup variant="flush">
                {education.map((edu, index) => (
                  <ListGroup.Item key={index}>
                    {edu.degree} from {edu.school} ({edu.year})
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

export default Education;
