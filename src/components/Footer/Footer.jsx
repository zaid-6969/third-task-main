import React from 'react'

const FooterLinkList = ({ title, list }) => {
  return (
    <ul className='footer-card'>
      <h1>{title}</h1>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
const Footer = () => {
  return (
    <div className='footer'>
      <h1>Soudemy</h1>
      <div className='footer-section'>
        <div className='footer-para'>
          <h1>About us</h1>
          <p>We design and curate thoughtfully crafted sofas, lamps, and chairs that bring comfort, style, and functionality into everyday living. Each piece is created with attention to detail, quality materials, and modern aesthetics to enhance your space.</p>
        </div>
        <FooterLinkList
          title='Useful'
          list={[
            "Premium Quality Materials",
            "Modern & Timeless Design",
            "Exceptional Comfort",
            "Expert Craftsmanship",
            "Durable & Long-Lasting",
            "Sustainable Production",
            "Fast & Secure Delivery",,]}
        />
        <FooterLinkList
          title='Download'
          list={['instagram', 'Threads', 'facebook', 'Twitter', 'pinterest', 'youtube']}
        />
        <div className='footer-para'>
          <h1>Call Center</h1>
          <p>Contact us for more information and support. 24/7 At your service</p>
          <p>soroushnorozyui@gmail.com</p>
          <p>+1 333 555</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
