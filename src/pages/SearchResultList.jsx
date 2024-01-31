import React, { useState } from "react";
import CommonSection from "../sharerd/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { useLocation } from "react-router-dom";
import TourCard from "../sharerd/TourCard";

const SearchResultList = () => {
  const location = useLocation();
  const data = useState(location.state);
  console.log(data);
  return (
    <>
      <CommonSection title={"tour search result"} />
      <section>
        <Container>

          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No Tour Found</h4>
            ) : (
              data.map(tour=> (
                <Col lg="3" key={tour.id} className="mb-4"  >
                  <TourCard  tour={tour} />


                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchResultList;
