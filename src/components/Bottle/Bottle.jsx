
import './Bottle.css'
// eslint-disable-next-line react/prop-types
const Bottle = ({bottle,handleAddToCart,handleImage }) => {
    console.log(bottle);
    const {name,img,price} = bottle;
    return (
        <div className="bottle" >
             <h3>Bottle:{name}</h3>
             <img src={img}alt="" />
             <p>price:${price}</p>
             <button onClick={()=>{
                handleAddToCart(bottle)
             }}>
                Purchase
             </button>
             <br />
             <hr />
             <button onClick={()=>{
                handleImage(bottle.img)
             }}>
                Add img
             </button>
        </div>
    );
};

export default Bottle;