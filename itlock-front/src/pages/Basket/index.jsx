import React, { useContext } from 'react'
import "./index.scss";
import { BasketContext } from '../../context/BasketContext';
import { Helmet } from 'react-helmet-async';
const Basket = () => {
    const {basket ,removeBasket,increaseCount,decreaseCount} = useContext(BasketContext)
  return (
    <>
    <Helmet>
        <title>Basket</title>
      </Helmet>
    <div className="brands_cards">
        {basket &&
          basket.map((x) => (
            <div className="brands_card">
              <div className="card_img">
                <img src={x.img} alt="" />
              </div>
              <div className="card_text">
                <h4>{x.title}</h4>
                <p>{x.category}</p>
              </div>
              <p>{x.count}</p>
              <button onClick={()=>increaseCount(x)}>+</button>
              <button onClick={()=>decreaseCount(x)}>-</button>
              <button onClick={() => removeBasket(x)}>delete basket</button>
            </div>
          ))}
      </div>
    </>
  )
}

export default Basket