import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import { API_KEY, BASE_URL } from "../../apis";

const CitySelector = () => {
  const [city, setCity] = useState("");
  // const [results, setResults] = useState(null);

  const onSearch = () => {
    fetch(
      `${BASE_URL}data/2.5/find?q=${city}&appid=${API_KEY}`
    ).then((response) =>
      console.log(response)
    )
     .then((results) => console.log(results));
  };
  return (
    <container>
      <Row class="text-center">
        <Col className="text-center">
          <h1>Search Your City</h1>
        </Col>
      </Row>
      <Row>
        <Col style={{display:"flex",justifyContent:"center"}}>
          <FormControl
            style={{width:"50%"}}
            onChange={(event) => setCity(event.target.value)}
            value={city}
            placeholder="Enter Your City"
          ></FormControl>
        </Col>
      </Row>
      <Row style={{marginTop:"10px"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
          <Button color="primary" onClick={onSearch()}>Search City</Button>
        </Col>
      </Row>
    </container>
  );
};

export default CitySelector;
