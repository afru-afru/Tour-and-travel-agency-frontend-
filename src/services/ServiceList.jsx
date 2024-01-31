import React from 'react'
import './ServiceCard'
import {Col} from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import ServiceCard from './ServiceCard'

const servicesData =[
  {
    imgUrl:weatherImg,
    title:'calculate the weather',
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

  },

  {
    imgUrl:guideImg,
    title:'Best tour guide',
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

  },
  {
    imgUrl:customizationImg,
    title:'Customization',
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit"

  }
]

const ServiceList = () => {
  return (
  <>
  {
  servicesData.map((item,index)=>
  (<Col lg='3' key={index}>
    <ServiceCard item={item}/>
    </Col>
  ))}

  </>

)
}

export default ServiceList