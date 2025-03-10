import React, { useState, useEffect } from 'react';
import { ListGroup, Container, Row, Col, Card } from 'react-bootstrap';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getSkills') 
      .then((response) => response.json())
      .then((data) => setSkills(data)) 
      .catch((error) => console.error('Error fetching skills:', error));
  }, []);

  if (skills.length === 0) return <p>Loading...</p>;

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Skills</Card.Title>
              <ListGroup variant="flush">
                {skills.map((skill, index) => (
                  <ListGroup.Item key={index}>
                    {skill}
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

export default Skills;
