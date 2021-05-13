import React from "react";
import { BrowserRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Redirect } from "react-router-dom"
import counterpart  from "counterpart";
import Translate from "react-translate-component";
import en from "../languages/english";
import ua from "../languages/ukrainian";
import SwitchLang from "./SwitchLang.js";
counterpart.registerTranslations("en",en)
counterpart.registerTranslations("ua",ua)

const Navbar = () => {
    const SignOut=()=> {
        localStorage.removeItem("user_id");
        window.location.reload();
        window.location.href = '/home';
    }
if (localStorage.getItem('user_id')){
return(<>
  <div class="topnav">
  <Link to='/home'><a class="active">DeliGOODwin</a></Link>
  <Link to='/Parcel'><a><Translate content="parcel_reg"/></a></Link>
  <Link to='/Profile'><a><Translate content="profile"/></a></Link>
  <Link to='/home'><a onClick={SignOut}><Translate content="signOut"/></a></Link>
</div>
<SwitchLang />
</>
  )
} else{
return(<>
  <div class="topnav">
  <Link to='/home'><a class="active">DeliGOODwin</a></Link>
  <Link to='/signIn'><a><Translate content="signIn"/></a></Link>
  <Link to='/SignUp'><a><Translate content="signUp"/></a></Link>
  </div>
  <SwitchLang />
</>
  )
}
};

export default Navbar;