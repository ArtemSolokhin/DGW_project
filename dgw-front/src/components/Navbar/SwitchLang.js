import counterpart  from "counterpart";
import React from "react";
import Button from '@material-ui/core/Button';
import english from "../languages/english"
import ukrainian from "../languages/ukrainian"
import "./SwitchLang.css"

counterpart.registerTranslations("en", english)
counterpart.registerTranslations("ua", ukrainian)
counterpart.setLocale("en");

const SwitchLang=()=>{
const LangEn=()=>{
        counterpart.setLocale("en")

   }
const LangUa=()=>{
    counterpart.setLocale("ua")

}
return(
<div class="lang">
<Button variant="contained" color="primary" onClick={LangUa}>Укр</Button>
<Button variant="contained" color="primary" onClick={LangEn}>Eng</Button>
</div>
);
}

export default SwitchLang;