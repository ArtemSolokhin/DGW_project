import React from "react";
import {Route} from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import Profile from '../Profile/Profile';
import History from '../History/History';
import SignUp from '../SignUp/SignUp';
import Confirmation from '../Confirmation/Confirmation';
import Parcel from '../Parcel/Parcel';
import Index from '../Index/Index';
import axios from 'axios';

const Changes=()=>{

    return (
        <section>
            <Route exact path="/home" render={()=><Index />} />
            <Route path="/signIn"  render={()=><SignIn  />}/>
            <Route path="/Profile" render={()=><Profile />} />
            <Route path="/history" render={()=><History />} />
            <Route path="/SignUp" render={()=><SignUp />} />
            <Route path="/Confirmation" render={()=><Confirmation />} />
            <Route path="/Parcel" render={()=><Parcel />} />
        </section>
    )
}

export default Changes;