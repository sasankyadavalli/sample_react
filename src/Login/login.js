import React from 'react';
import './login.css';
import { Col, Row , Container} from 'reactstrap';

var contStyle = {
  boxShadow: "0 6px 30px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)",
  borderRadius: "15px",
  marginTop: "10%",
  textAlign: "center",
  height: "600px",
  maxWidth: "530px",
  backgroundColor: "white"
  // paddingTop: "20%",
  // paddingBottom: "20%"
}


class Login extends React.Component{
  render(){
    return(
      <div>
      <Container style={contStyle} >
      <Row>
      <Col sm={{size: 3, offset: 1}} className="mt-5">
      <img className = "image-class" src={require("./logo.png")} alt= "scale labs" />
      </Col>
      </Row>
        <Row>
        <Col sm={{size: 5, offset: 1}} className="mt-5">
            <input className= "inputEmail" type= "email" placeholder="Username" />
            <input className= "inputEmail" type= "password" placeholder="Password" />
            <button className="inputEmail buttonPrimary" size="lg" color="primary" type="submit">Sign in</button>
        </Col>
      </Row>
      </Container>
    </div>
    )
  }
}

export default Login;