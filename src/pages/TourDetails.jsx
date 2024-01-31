import React,{useRef,useState} from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "../sharerd/Newsletter";

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef=useRef('');
  const [tourRating,setTourRating]=useState(null)

  //this is an statiic data ,i call Api and load the data from database
  const tour = tourData.find((tour) => tour.id === id);

  //destructure properties from tour object
  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);
  //format date
  const options = { day: "numeric", month: "long", year: "numeric" };
  //submit requist to the server

  const submitHandler = e =>{
    e.preventDefault()
    const reviewText=reviewMsgRef.current.value;

    alert(`${reviewText},${tourRating}`)
  //later will call our api
  }

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />

                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating align-items-center gap-1 ">
                      <i
                        class="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not Rated"
                      ) : (
                        <span> ({reviews?.length}) </span>
                      )}
                    </span>
                    <span>
                      <i class="ri-map-pin-user-fill"></i>
                      {address}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span>
                      <i class="ri-map-pin-2-line"></i>
                      {city}
                    </span>
                    <span>
                    <i class="ri-map-pin-time-line"></i>
                      ${distance}k/m
                    </span>
                    <span>
                      <i class="ri-group-line"></i>
                      {maxGroupSize} people
                    </span>

                  </div>

                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* ====tour reviews section start ==== */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews({reviews?.length}reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 rating__group ">
                      1
                      <span onClick={()=>setTourRating(1)}>
                        <i class="ri-star-fill"></i>
                      </span>
                      2
                      <span onClick={()=>setTourRating(2)}>
                        <i class="ri-star-fill"></i>
                      </span>
                      3
                      <span onClick={()=>setTourRating(3)}>
                        <i class="ri-star-fill"></i>
                      </span>
                      4
                      <span onClick={()=>setTourRating(4)}>
                        <i class="ri-star-fill"></i>
                      </span>
                      5
                      <span onClick={()=>setTourRating(5)}>
                        <i class="ri-star-fill"></i>
                      </span>
                    </div>
                    <div className="review__input">
                      <input type="text" ref={reviewMsgRef} placeholder="Share your tought" required />
                      <button
                        className="btn primary__btn text-white"
                        type="submit"
                      >
                        submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {reviews?.map(review => (
                      <div className="review__item">
                        <img src={avatar} alt="" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between ">
                            <div>
                              <h5>muhip</h5>
                              <p>
                                {new Date("01-18-2023").toLocaleDateString(
                                  "en-us",
                                  options
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              5<i class="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>Amazing Tour</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/* ====tour reviews section end==== */}
              </div>
            </Col>
            <Col>
            <Booking tour={tour} avgRating={avgRating}/>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default TourDetails;
