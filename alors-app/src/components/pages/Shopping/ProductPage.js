import React, {useState, useEffect} from 'react';
import './ProductPage.css';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const [item, setItem] = useState([]);
  const [category, setCategory] = useState([]);
  const [urlCategory, seturlCategory] = useState();
  const { id } = useParams();
  const urlItem = `http://localhost:3000/items/${id}`;

  
  const fetchItem = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setItem(data)

      return data.results;
    } catch (error) {
      console.error('Error fetching items:', error);
      return [];
    }
  };

  const fetchCategory = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      setCategory(data)  
      return data.results;
    } catch (error) {
      console.error('Error fetching items:', error);
      return [];
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const itemData = await fetchItem(urlItem); // do not delete this line 
        const categoryUrl = `http://localhost:3000/categories/${item.category_id}`;
        await seturlCategory(categoryUrl);
        const categoryData = await fetchCategory(categoryUrl); // do not delete this line 
      } catch (error) {
        console.error('Error in useEffect:', error);
      }
    }

    fetchData();
  }, []);
  
  const handleAddToCart = (e) => {
    e.preventDefault();
   
    const userCart = JSON.parse(localStorage.getItem('user_cart')) || [];

    const existingItem = userCart.find((cartItem) => cartItem.item_id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newItem = { item_id: item.id, quantity: 1 };
      userCart.push(newItem);
    }

    localStorage.setItem('user_cart', JSON.stringify(userCart));
  };



  return (
    <>
    <div className="container">
      <div className="categories">
      {/* category name will be a link to shopping/category */}
        <p>{category.name}</p> 
      </div>
      <div className="row">
        <div className="col-sm">
            <div className="image border border-dark mb-2">
            <img
                src={item.photo_path}
                alt="Sample"
                style={{ width: '100%' }}
            />
            </div>
        </div>
        <div className="col-sm">
            <div className='item-details' >
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <h1>{item.name}</h1>
                                    <h3>{item.description}</h3>
                                </div>
                                <div class="col-4">
                                    <Button className="btn btn-light">Add to wish list</Button>
                                </div>
                                
                            </div>
                            <div>
                             <h3>${item.price}</h3>
                            </div>
                           
                            <div class="row">
                                <div class="col">
                                    <Button onClick={handleAddToCart}>Add to Cart</Button>
                                </div>
                                <div class="col">
                                    <p>Only {item.quantity} left in stock</p>
                                </div>
                                
                            </div>
                            
                       
                         </div>
               
                
            </div>
            
        </div>
        
       
      </div>
    </div>
   
    </>
    
  );
}

export default ProductPage;
