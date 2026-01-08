import React from 'react'
import './Hcard.css'
import image1 from '../../assets/images/Rectangle 5.png'
import image2 from '../../assets/images/Rectangle 6.png'
import image3 from '../../assets/images/Rectangle 7.png'

const Hcard = () => {
  const Image = [

      {

      image: image3,
      productname: "Lamp",
      price: "223.00 $",
      top : "Sold"
    },
    {

      image: image1,
      productname: "Chair",
      price: "223.00 $",
      top : "New"
    },
      {

      image: image2,
      productname: "Pot",
      price: "223.00 $",
      top : "Sold"
    }
  ]
  return (
    <div className='hcard'>
      <h1>Products of the week</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio malesuada at condimentum adipiscing iaculis semper.</p>
      <img src="" alt="" />
      <div className='cards'>
        {
          Image.map((item , index  ) => {
            return (
              <div className='card' key={index}>
                <span id='span' >{item.top}</span>
                <img src={item.image} alt="" />
                <h3>{item.productname}</h3>
                <p>{item.price}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default Hcard              