import React,{useState,useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import axiosInstance from '../../axios';
import jwt from 'jwt-decode';
import "./SignIn.css";
import counterpart  from "counterpart";
import Translate from "react-translate-component";
import en from "../languages/english";
import ua from "../languages/ukrainian";
counterpart.registerTranslations("en",en)
counterpart.registerTranslations("ua",ua)

const SignIn=()=>{
    const initialFieldValues={
        login:'',
        password:'',
    }

    const [UserData, setUserData] = useState(initialFieldValues)

    const handleChangeLogin = (event) => {
      setUserData({
        ...UserData,
        login:event.target.value,
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
     .post('http://127.0.0.1:8080/api/token/', {"username": UserData.login, "password": UserData.password}).then(response => {
        localStorage.setItem('access_token', response.data.access);
		localStorage.setItem('refresh_token', response.data.refresh);
		axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
		localStorage.setItem('user_id', jwt(axiosInstance.defaults.headers['Authorization']).user_id);
		window.location.reload();
		window.location.href = '/Profile';
        })}

    return(<div class="card">
    <form noValidate autoComplete="off">
    <h1><Translate content="signIn"/></h1>
    <p><Translate content="login"/></p>
    <hr />
    <label for="username"><b><Translate content="username"/></b></label>
    <TextField id="standard-basic" name="username" value={UserData.login} onChange={handleChangeLogin}/>
    <hr />
    <label for="psw"><b><Translate content="password"/></b></label>
    <TextField id="standard-basic" name="psw" value={UserData.password} onChange={handleChangePassword}/>
    <hr />
    <Button variant="contained" color="primary" onClick={handleSubmit}><Translate content="signIn"/></Button>
    </form>
    </div>
    )
};

export default SignIn;