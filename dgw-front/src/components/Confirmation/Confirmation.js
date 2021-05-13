import React, {useState,useEffect} from "react";
import './Confiramtion.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import counterpart  from "counterpart";
import Translate from "react-translate-component";
import en from "../languages/english";
import ua from "../languages/ukrainian";
counterpart.registerTranslations("en",en)
counterpart.registerTranslations("ua",ua)

const Confirm=()=>{
const [UserData, setUserData] = useState([{}]);
const ConfirmParcel=(data)=>{
    axios
    .put(`http://127.0.0.1:8080/api/v1/parcel/${data.id}/`, {"status": 1, "date_of_create": data.date_of_create,
    "box": data.box, "sender": data.sender, "receiver": data.receiver, "branch": data.branch});
}
const DismissParcel=(data)=>{
    axios
    .put(`http://127.0.0.1:8080/api/v1/parcel/${data.id}/`, {"status": 3, "date_of_create": data.date_of_create,
    "box": data.box, "sender": data.sender, "receiver": data.receiver, "branch": data.branch});
}
const fetchData = () => {
      axios
      .get(`http://127.0.0.1:8080/api/v1/personal-info/${localStorage.getItem("user_id")}/`)
      .then(response => {
          setUserData(response.data);
          console.log(UserData)
         })};
    useEffect(() => {
      fetchData()
     },[]);
    return(<div class='margin'>
    <table>
  <tr>
    <th><Translate content="parcel_n"/></th>
    <th><Translate content="sender"/></th>
    <th />
    <th />
  </tr>
  {UserData.map((data, key)=>{
  return(
  <tr key={key}>
  <td>{(data.receiver == localStorage.getItem("user_id") && data.status == 0)?data.id:""}</td>
  <td>{(data.receiver == localStorage.getItem("user_id") && data.status == 0)?data.sender:""}</td>
  <td>{(data.receiver == localStorage.getItem("user_id") && data.status == 0)?<Button variant="contained" color="primary" onClick={ConfirmParcel(data)}><Translate content="confirm"/></Button>:""}</td>
  <td>{(data.receiver == localStorage.getItem("user_id") && data.status == 0)?<Button variant="contained" color="primary" onClick={DismissParcel(data)}><Translate content="dismiss"/></Button>:""}</td>
  </tr>);})
  }

</table>

</div>);
}

export default Confirm;