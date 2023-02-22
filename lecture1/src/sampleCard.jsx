import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//State Management

function SampleCard(props) {
    const [fullName, setFullName] = useState(props.firstName);
    function handleClick()
    {
        alert('clicked')
    }
    return ( 
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.firstName}</Card.Title>
        <Card.Text>
          {props.lastName}
        </Card.Text>
        <Button onClick={handleClick} variant="primary">Click here</Button>
      </Card.Body>
    </Card>
     );
}

export default SampleCard;