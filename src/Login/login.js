import React from 'react';
import './login.css';
import { Col, Row , Container} from 'reactstrap';
import cookies from 'react-cookie';
import $ from 'jquery';
import PropTypes from 'prop-types';

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

  componentWillMount(){
    debugger;
    if(localStorage.getItem('user')){
      this.context.router.history.push('/orders');
    }
    else{
      $.ajax({
         type: "POST",
         url: 'http://18.217.124.196:3000/login',
         dataType: "json",
         data:{"userName": "mayank@thescalelabs.com", "password": "user@123"},
         success: (response) => {
           debugger;
          if (response.responseCode == 0){
              localStorage.setItem('user', JSON.stringify(response));
          }
         },
         error: (err) => {
          debugger;
         }
      });

      // fetch('http://18.217.124.196:3000/login', {
      //   method: 'post',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type':'application/json'
      //   },
      //   mode: 'no-cors',
      //   body: JSON.stringify({
      //     "userName": "mayank@thescalelabs.com",
      //     "password": "user@123"
      //   })
      // }).then(response => {
      //   if (response.responseCode == 0){
      //     localStorage.setItem('user', response);
      //   }
      // }).catch((err) => {
      //   debugger;
      // });

      // do ajax call
    }
  }
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

Login.contextTypes = {
  router: PropTypes.object.isRequired
}


export default Login;