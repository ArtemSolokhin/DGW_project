import React, {useState,useEffect} from "react";
import { BrowserRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Profile.css';
import axios from 'axios';
import counterpart  from "counterpart";
import Translate from "react-translate-component";
import en from "../languages/english";
import ua from "../languages/ukrainian";
counterpart.registerTranslations("en",en)
counterpart.registerTranslations("ua",ua)

const Profile=()=>{
    const fetchData = () => {
      axios
      .get(
         `http://127.0.0.1:8080/api/v1/user/${localStorage.getItem("user_id")}/`).then(response => {
          console.log(response)
          setUserData(response.data)
         })}

    const [UserData, setUserData] = useState({})

    useEffect(() => {
      fetchData()
     },[]);


    return(
    <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="d-flex justify-content-center card-width">
            <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                                <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" /> </div>
                                <h3 class="f-w-600">{UserData.username}</h3>
                                <p class="name text-center">{UserData.first_name} {UserData.last_name}</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600"><Translate content="info"/></h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600"><Translate content="email"/></p>
                                        <h6 class="text-muted f-w-400">{UserData.email}</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600"><Translate content="view_history"/></p>
                                        <Link to='/history'><Button variant="contained" color="primary"><Translate content="history"/></Button></Link>
                                    </div>
                                </div>
                                <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"><Translate content="confirmation"/></h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600"><Translate content="parcel_await"/></p>
                                        <h6 class="text-muted f-w-400 text-center">1</h6>
                                    </div>
                                    <div class="col-sm-6">
                                    <p class="m-b-10 f-w-600"><Translate content="confirm"/></p>
                                        <Link to='/Confirmation'><Button variant="contained" color="primary"><Translate content="confirmation"/></Button></Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Profile;