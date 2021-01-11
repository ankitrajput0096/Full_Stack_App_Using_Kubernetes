import React, { Component } from "react";
import logo from '../assets/saitama.jpg';
import { NavLink } from 'react-router-dom';

class MyComponent extends Component {
  render() {
    return (
    <div>
      <div className={"intro"}>Hello World</div>
      <img src={logo} alt="Logo" />
      <div>Awesome!!!</div>
      {/*This is an navigation link to 'aboutUs' component*/}
      <NavLink to='/about'>Click here to go About us </NavLink>
      <br/>
      <NavLink to='/dashboard'> Click here to go to Dashboard </NavLink>
      <br/>
      <NavLink to='/album'> Click here to go album </NavLink>
      <br/>
      <NavLink to='/checkOutForm'> Click here to go checkoutForm </NavLink>
      <br/>
      <NavLink to='/pricing'>Click here to go pricing</NavLink>
      <br/>
      <NavLink to='/signUp'>Click here to go sign Up page</NavLink>
      <br/>
      <NavLink to='/onePirateWebsite'> Click here to go to one priate website</NavLink>
      <br/>
      <NavLink to='/paperBase'> click here to go to paperbase </NavLink>
      <br/>
      <NavLink to='/intaPaper'> click here to go to instaPaper</NavLink>
      <br/>
      <NavLink to='/tweeper'> click here to go to tweeper</NavLink>
    </div>
    );
  }
}
export default MyComponent;