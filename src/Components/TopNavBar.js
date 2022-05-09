import EdamameImage from '../Assets/edamame.PNG';
import { Navbar,Container } from 'react-bootstrap';
const TopNavBar = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='fixed-top'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Edamame"
              src={EdamameImage}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
           Food Recipe
          </Navbar.Brand>
          
        </Container>
        <p className='text-white m-2'>{props.numba}</p>
      </Navbar>
    </>
  );
};

export default TopNavBar;
