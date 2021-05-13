import React, {useState,useEffect} from "react";
import './History.css'
import axios from 'axios';
import counterpart  from "counterpart";
import Translate from "react-translate-component";
import en from "../languages/english";
import ua from "../languages/ukrainian";
counterpart.registerTranslations("en",en)
counterpart.registerTranslations("ua",ua)

const History=()=>{
const [UserData, setUserData] = useState([{}]);
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
    <th><Translate content="role"/></th>
    <th><Translate content="date_create"/></th>
    <th><Translate content="statuse"/></th>
  </tr>
  {UserData.map((data, key)=>{
  return(
  <tr key={key}>
    <td>{data.id}</td>
    <td>{data.receiver==localStorage.getItem("user_id")?<Translate content="receiver"/>:<Translate content="sender"/>}</td>
    <td>{data.date_of_create}</td>
    <td>{data.status}</td>
   </tr>
  );})
  }

</table>

</div>);
}

export default History;