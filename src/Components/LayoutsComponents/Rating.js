import React from 'react'
import { FaStar } from 'react-icons/fa'
export default function Rating(props) {
 
    const rating = props.rating
    return (
        <div className="uk-rating d-flex">
        {rating > 0 ?
        <>
        <span className='pr-1'>( { rating.toPrecision(2)})</span>
     
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input type="radio" name="rating"
                value={rating.toPrecision(2)} hidden />
              <FaStar className='star'
              style = {{cursor: 'context-menu'}}
                color={ratingValue <= ( rating.toPrecision(2)) ? "F90" : "rgb(161, 158, 158)"} size={18} />
            </label>
          )
        })} 
        </>
        :
        <>     {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input type="radio" name="rating"
                // value={rating.toPrecision(2)} 
                hidden />
              <FaStar className='star'
              style = {{cursor: 'context-menu'}}
                color={ "rgb(161, 158, 158)"} size={18} />
            </label>
          )
        })} 
        </>
        }
      
      </div>
    )
}
