import React,{useState,useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import axiosInstance from '../../axios';
import jwt from 'jwt-decode';
import "./SignUp.css";
import counterpart  from "counterpart";
import Translate from "react-translate-component";
import en from "../languages/english";
import ua from "../languages/ukrainian";
counterpart.registerTranslations("en",en)
counterpart.registerTranslations("ua",ua)

const SignIn=()=>{
    const initialFieldValues={
        login:'',
        first_name: '',
        last_name: '',
        email: '',
        password:'',
    }

    const [UserData, setUserData] = useState(initialFieldValues)

    const handleChangeLogin = (event) => {
      setUserData({
        ...UserData,
        login:event.target.value,
      });
    };

    const handleChangeFirstName = (event) => {
      setUserData({
        ...UserData,
        first_name:event.target.value,
      });
    };

    const handleChangeLastName = (event) => {
      setUserData({
        ...UserData,
        last_name:event.target.value,
      });
    };

    const handleChangeEmail = (event) => {
      setUserData({
        ...UserData,
        email:event.target.value,
      });
    };

    const handleChangePassword = (event) => {
      setUserData({
        ...UserData,
        password:event.target.value,
      });
    };

    const handleSubmit = () => {
     axiosInstance
     .post('http://127.0.0.1:8080/api/v1/user/', {"username": UserData.login, "first_name": UserData.first_name,
      "last_name": UserData.last_name, "email": UserData.email, "password": UserData.password}).then(response => {
		console.log(response);
		window.location.href = '/SignIn';
        })}

    return(<div class="card">
    <form noValidate autoComplete="off">
    <h1><Translate content="signUp"/></h1>
    <p><Translate content="registration"/></p>
    <hr />
    <label for="username"><b><Translate content="username"/></b></label>
    <TextField id="standard-basic" name="username" value={UserData.login} onChange={handleChangeLogin}/>
    <hr />
    <label for="first_name"><b><Translate content="first_name"/></b></label>
    <TextField id="standard-basic" name="first_name" value={UserData.first_name} onChange={handleChangeFirstName}/>
    <hr />
    <label for="last_name"><b><Translate content="last_name"/></b></label>
    <TextField id="standard-basic" name="last_name" value={UserData.last_name} onChange={handleChangeLastName}/>
    <hr />
    <label for="email"><b><Translate content="email"/></b></label>
    <TextField id="standard-basic" name="email" value={UserData.email} onChange={handleChangeEmail}/>
    <hr />
    <label for="psw"><b><Translate content="password"/></b></label>
    <TextField id="standard-basic" name="psw" value={UserData.password} onChange={handleChangePassword}/>
    <hr />
    <Button variant="contained" color="primary" onClick={handleSubmit}><Translate content="signUp"/></Button>
    </form>
    </div>
    )
};

export default SignIn;