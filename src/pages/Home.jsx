import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../sharerd/Subtitle'
import worldImg from '../assets/images/world.png'
import SearchBar from '../sharerd/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/featured-tours/FeaturedTourList'
import experienceImg from '../assets/images/experience.png'
import MasonryImagesGallery2 from '../components/image-gallery/MasonryImagesGallery2'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../sharerd/Newsletter'

const Home = () => {
  return <>
  {/* {======hero section start====} */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
             <div className="hero__subtitle d-flex align-items-center">

             <Subtitle   subtitle={"know before you go"}/>
             <img src={worldImg} alt=''/>
             </div>
             <h1>Travling opens the door to creating <span className="highlight">memories</span></h1>
             <p>Lorem ipsum doler sit amet connjf afrah muhammed adem muhammed amn selhadin hadiya meryem hubi abdurezak zeyneba nejat amar abdurehim jdfsidlsd</p>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt=''/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt='' controls/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt=''/>
          </div>
        </Col>


        <SearchBar/>
      </Row>
    </Container>
  </section>
  {/* {======hero section ends=====} */}

   <section>
    <Container>
      <Row>
        <Col lg='3'>

          <h5 className="services__subtitle">
            What We Serve?
          </h5>
          <h2 className="services__title">we Offer Our Best Services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
   </section>

   {/* {====featured tours start====} */}
  <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <Subtitle subtitle={'explore'}/>
          <h2 className="featured__tour-title">Our Featured Tours</h2>
        </Col>
        <FeaturedTourList/>
      </Row>
    </Container>
  </section>
   {/* {====featured tours end====} */}


   {/* {=====experiance section start===} */}
 <section>
  <Container>
    <Row>
      <Col lg='6'>
      <div className="experience__content">
    <Subtitle  subtitle={'Experience'}/>
    <h2>With Our all experiance <br/>We will serve you </h2>
    <p>Lorem ipsum dolor sit amet ,consectetur adipisicing elit
      <br/>Quas aliquam, hic tempora inventore suscipit unde.
    </p>
      </div>
      <div className="counter__wrapper d-flex align-items-enter gap-5">
        <div className="counter__box">
               <span>12k+</span>
               <h6>Successfull Trip</h6>
        </div>
        <div className="counter__box">
               <span>2k+</span>
               <h6>Regular clients</h6>
        </div>
        <div className="counter__box">
               <span>15</span>
               <h6>Years Experiance</h6>
        </div>


      </div>
      </Col>
      <Col lg='6'>
        <div className="experience__img">
          <img src={experienceImg} alt=''/>
        </div>
      </Col>
    </Row>
  </Container>
 </section>





   {/* {=====experiance section end===} */}

   {/* {===gallery section start=====} */}

   <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle  subtitle={'Gallery'}/>
          <h2 className="gallery_title">Visit our customers tour gallery</h2>
        </Col>
        <Col lg='12'>

            <MasonryImagesGallery2/>
        </Col>
      </Row>
    </Container>
   </section>
   {/* {===gallery section end=====} */}

   {/* {=====testimonal section start=====} */}

   <section>
    <Container>
      <Row>
        <Col lg='12'>
        <Subtitle subtitle={'fans love'}/>
  <h2 className="testimonial__title">What Our fans say about us</h2>
        </Col>
        <Col lg='12'>
         <Testimonials/>
        </Col>
      </Row>
    </Container>
   </section>
   {/* {=====testimonal section end=====} */}
     <Newsletter/>
  </>
}

export default Home