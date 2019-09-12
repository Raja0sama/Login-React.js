import React from 'react';
import LoginPage from './Theme/LoginPage'
import firebase from '../../Firebase/';
import SimpleSnackbar from './Theme/Snackbar'
import {  } from 'react-router-dom';


export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text : "",
      open : false
    }
  
  }
  isuser(){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

        } else {
          
        }
      });
  }
  LoginNow = (email,password)=>{
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    
      return this.showerror(error.message)
      // ...
    }).then((res)=>{
      if(typeof(res)== "undefined"){

      }else{
        console.log(res.user.uid)
      }
    });
  }
  showerror= (text)=>{
    console.log(text)
    this.setState({text:text,open:true})
  }
  hideerror = () =>{
    this.setState({ text : "",
    open : false})
  }
render(){
  const {open , text } = this.state

  return (
    <div>
      <LoginPage Login={this.LoginNow} />
      {this.state.open ? (<SimpleSnackbar hideerror={this.hideerror} text={text} open={open}/>): (<br/>)}
          </div>
  );
}}