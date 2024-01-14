import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardItem(props) {

  return (
    <Card 
    border="secondary"
    style={{
      alignItems:"center",
      width: '48rem' ,
      backgroundColor: 'white',
      padding: '4em',
      }}>
      <Card.Img 
      variant="top" src={ props.image }
      style={{borderRadius:"5em",height:260, width:260}}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text
        style={{ textAlign:"left", padding:"4em", }}
        className='text-muted'
        >
        {props.description }
        </Card.Text>
       {/* <Button variant="primary"></Button> */}
      </Card.Body>
    </Card>
  );
}

export default CardItem;