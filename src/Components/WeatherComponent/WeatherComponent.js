import { Button } from "bootstrap";
import React,{useState} from "react";
import { Row, Col, FormControl} from "react-bootstrap";
// import rainy from "./images/rainy.png";
import beach from "./images/beach.jpg";

const Weather = (props) => {
  const city = props.city;
  const [City, setCity] = useState("");

  return (
    <div className="container">
      <div className="container text-center">
        <h1>Weather App</h1>
      </div>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="card text-center shadow"
          style={{
            height: "40rem",
            width: "30rem",
            backgroundImage: `url(${beach})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Col className="text-center">
            {/* <FormControl
            style={{marginTop:'10px'}}
              placeholder="Enter City Here?"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            ></FormControl>
            <div style={{marginTop:'10px'}}>
              <Button className='btn btn-primary'>Search</Button>
            </div> */}
            <h3>
              {city}, {props.country}
            </h3>
          </Col>
          <Col className="text-center">
            {/* <WiHorizonAlt /> */}
            <img
              style={{ height: "10rem" }}
              alt="test"
              src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            ></img>
            <h3>{props.description}</h3>
          </Col>
          <Col className="text-center">
            <h1>{props.celsius}C&deg;</h1>
          </Col>
          <Col className="text-center">
            {temp(props.min_temp, props.max_temp)}
          </Col>
        </div>
      </Row>
    </div>
  );
};

function temp(min, max) {
  const calMin = ((min - 32) / 9.0) * 5;
  console.log(calMin);
  return (
    <h3>
      <span className="px-4">{min}C&deg;</span>
      <span className="px-4">{max}C&deg;</span>
    </h3>
  );
}
export default Weather;
