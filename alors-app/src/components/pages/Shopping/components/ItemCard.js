import React from 'react';
import { useNavigate } from 'react-router-dom';

function ItemCard(props) {
  const navigate = useNavigate();

  // const navigateToDedicatedPage = () => {
  //   navigate('/DedicatedPage', { state: { title: props.title, image: props.image, id: props.id, type: props.type, overview: props.overview } });
  // };

   const navigateToDedicatedPage = () => {
    console.log("delete this and uncomment the function above this");
  };

  return (
    <div className="movie border col-md-3" onClick={navigateToDedicatedPage} style={{ cursor: 'pointer', backgroundImage:`url(${props.image})`, height:'110%' }}>
      <h3>{props.title}</h3>
      <div>${props.score}</div>
      <button>ADD TO CART</button>
    </div>
  );
}

export default ItemCard;