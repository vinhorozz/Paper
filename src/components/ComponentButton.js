import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Nav1() {
  return (
    <div>
      <h1>
        
        <Badge bg="secondary" as={Button}>New</Badge>
        <Badge bg="primary" as={Button}> Home</Badge>
        <Badge bg="secondary" as={Button}>Sobre</Badge>
        <Badge bg="secondary" as={Button}>Loja</Badge>
        <Badge bg="secondary" as={Button}>login</Badge>
      </h1>
    </div>
  );
}

export default Nav1;