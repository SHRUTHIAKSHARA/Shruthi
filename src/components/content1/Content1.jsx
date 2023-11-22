import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Content1() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/human-hand-holding-mobile-phone-medicine-online-payment-home-delivery-pharmacy-service-paper-bag-with-pills-bottle-medicines-drugs-thermometer-inside-medical-assistance-health-care-concept_458444-146.jpg?w=1800"
          alt="First slide"
          style={{ height: '550px' }}
        />
        <Carousel.Caption>
          
          <p style={{width:'100%' , backgroundColor:'black'}}> Delivering Wellness to Your Doorstep: Your Trusted Online Pharmacy </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/fast-free-delivery-logo-with-bike-man-courier_1308-46291.jpg?w=2000&t=st=1700494698~exp=1700495298~hmac=46b240f0e52088937f400e02895428cdb5159aa0c404eab17489956f97cc1582"
          alt="Second slide"
          style={{ height: '550px' }}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s3-alpha.figma.com/hub/file/4512815859/a132fd44-da8f-45b6-be35-f7d559d7faa4-cover.png"
          alt="Third slide"
          style={{ height: '550px' }}
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Content1;
