import React from 'react'

const FirstContainer = ({product}) => {
  return (
    <>
       {product.map((item , index) =>
         <div key={index} className='first-container'>
            <img src={item.img} alt="" />
                <p>{item.date} </p>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
        </div>
        )}
    </>
  )
}

export default FirstContainer
   