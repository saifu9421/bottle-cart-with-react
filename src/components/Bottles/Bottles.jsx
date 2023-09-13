import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLs } from "../../utilities/localstorage";
import './Cartimage.css';

const Bottles = () => {
    const [bottles ,setBottles] = useState([]);

    const [cart , setCart] = useState([]);

  const [cartImage , setImage] = useState([]);

    useEffect(()=>{
    fetch('bottles.json')
    .then(res => res.json())
    .then(data => setBottles(data) )
    },[]);
    
 const handleAddToCart = bottle =>{
        const newCart = [...cart , bottle];
        setCart(newCart);
        addToLs(bottle.id);
 };

   const handleImage = image =>{
    const newImag = [...cartImage , image];
    setImage(newImag);
   }

    return (
        <div>
            <h2>Bottles Available:{bottles.length} </h2>

              <div>
              <h4>Cart:{cart.length}</h4>

              </div>
               {/* img */}

               <div className="img-container">
                {
                    cartImage.map(img => <img key={img.id}  src={img}>
                    </img>)
                }
               </div>

            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle 
                key={bottle.id}
                handleAddToCart={handleAddToCart}
                handleImage ={handleImage}
                 bottle={bottle}>
        
                </Bottle>)
             }
            </div>

        </div>
    );
};

export default Bottles;