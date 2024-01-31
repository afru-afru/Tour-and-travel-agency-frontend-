import React from 'react'
import TourCard from '../../sharerd/TourCard'
// import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
import useFetch from './../../hooks/useFetch'
import { BASE_URL } from './../../utils/config'
// import { useState,useEffect } from 'react'

const FeaturedTourList = () => {

  const {data:featuredTours,loading,error}=useFetch(`${BASE_URL}/tours/search/getFeaturedTours`)

  console.log(featuredTours)

  // const [featuredTours, setFeaturedTours] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/tours/search/getFeaturedTours`);
  //       const data = await response.json();
  //       setFeaturedTours(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   console.log(featuredTours);
  // }, [featuredTours]);

  return(
     <>
 { loading && <h4>loading.........</h4>}
  {error &&<h4>{error}</h4>}

  {
  !loading && !error &&
  featuredTours?.map(tour=>(
        <Col lg='3' className='mb-4' key={tour._id}>
            <TourCard tour={tour}/>

        </Col>
    ))
  }


  </>)
}

export default FeaturedTourList