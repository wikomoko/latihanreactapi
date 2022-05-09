
import { useEffect, useState } from 'react';
import FoodCard from './Components/FoodCard';
import TopNavBar from './Components/TopNavBar';

const API_KEY = 'e5d79dffe2b66474ff75017f1e0f357d';
const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=a03c43af&app_key=${API_KEY}`;

function App() {

  const [foods,setFoods] = useState([]);
  const [searchFood,setSeacrhFood] = useState('');
  const FindFoods = async (finder) => {
    const response = await fetch(`${API_URL}&q=${finder}`);
    const data =await response.json();
    // console.log(data.hits);
    setFoods(data.hits);
  }

  useEffect(()=>{
    FindFoods('Salmon');
  },[]);

  const [numba,setNumba]=useState(0);

  return (
    <div className="App">
      <TopNavBar numba={numba}/>
      {
        foods.length != 0 ?
        (
          <>
          <div className='container text-center mt-5'>
            <div className="row">
              {
                foods.map((food)=>(
                  <div className="col-md-3" onClick={()=>setNumba(z=>z+1)}>
                    <FoodCard  datasource={food} />
                  </div>
                ))
              }
            </div>
          </div>
          </>
        ) :
        (
          <h3 className='mt-5'>There is no data</h3>
        )
      }
    </div>
  );
}

export default App;
