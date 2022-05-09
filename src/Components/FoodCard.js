import { Card } from "react-bootstrap";
import './FoodCard.css';
const FoodCard = ({datasource}) => {
  return (
    <>
      <Card style={{margin:'8px'}} className='ngambang rounded'>
        <Card.Img variant="top" src={datasource.recipe.images.SMALL.url} />
        <Card.Body>
          <Card.Title className="text-truncate ">{datasource.recipe.label}</Card.Title>
          <Card.Text className="text-truncate">
            {datasource.recipe.source}
          </Card.Text> 
        </Card.Body>
      </Card>
    </>
  );
};

export default FoodCard;
