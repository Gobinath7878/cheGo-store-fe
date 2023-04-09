import React from 'react'
import {Row,Col,Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import BannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
   <div>
    <Row>
    <Col lg='6' className='title'>
       <img src={BannerImg} alt="Loading" className='bannerImg' />
      </Col>
      <Col lg='6' className='d-flex title justify-content-center flex-column flex-wrap p-0'>
        <div className='order-page px-5 py-5 banner-text'>
        <h3 className='fw-bold text'>Welcome to che<span className='text-success rounded-2 py-0'>Go</span> store</h3>
        <h5>Quench Your Thirst, Elevate Your Taste.</h5>
        <Button className='bg-success text-light px-5 mt-2' color='success' outline>
         <Link to='/drinks' className='text-light'>Explore <i className="fa-solid fa-arrow-right-long"></i></Link></Button>             
        </div> 
      
      </Col>
      
    </Row>
   </div>
  )
}

export default Banner;