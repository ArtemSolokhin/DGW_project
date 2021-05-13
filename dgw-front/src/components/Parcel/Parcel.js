import React,{useState,useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import axios from "axios";
import axiosInstance from '../../axios';
import jwt from 'jwt-decode';
import counterpart  from "counterpart";
import Translate from "react-translate-component";
import en from "../languages/english";
import ua from "../languages/ukrainian";
counterpart.registerTranslations("en",en)
counterpart.registerTranslations("ua",ua)

const SignIn=()=>{

    const [ReceiverData, setReceiverData] = useState([{}]);

    const fetchData = () => {
      axios
      .get(`http://127.0.0.1:8080/api/v1/user/`)
      .then(response => {
          setReceiverData(response.data);
          console.log(ReceiverData)
         })};

      useEffect(() => {
        fetchData()
      },[]);

    const [BranchData, setBranchData] = useState([{}]);

    const fetchBranchData = () => {
      axios
      .get(`http://127.0.0.1:8080/api/v1/branch/`)
      .then(response => {
          setBranchData(response.data);
         })};

      useEffect(() => {
        fetchBranchData()
      },[]);

    const initialFieldValues={
        status: 0,
        date_of_create: new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
        receiver: '',
        sender: localStorage.getItem("user_id"),
        box:'',
        branch: '',
    }

    const [UserData, setUserData] = useState(initialFieldValues)

    const handleChangeReceiver = (event) => {
      setUserData({
        ...UserData,
        receiver:event.target.value,
      });
    };

    const handleChangeBox = (event) => {
      setUserData({
        ...UserData,
        box:event.target.value,
      });
    };

    const handleChangeBranch = (event) => {
      setUserData({
        ...UserData,
        branch:event.target.value,
      });
    };

    const handleSubmit = () => {
     axiosInstance
     .post('http://127.0.0.1:8080/api/v1/parcel/', {"status": UserData.status, "date_of_create": UserData.date_of_create,
      "receiver": UserData.receiver, "sender": UserData.sender, "box": UserData.box, 'branch': UserData.branch}).then(response => {
		console.log(response);
        })}

    return(<div class="card">
    <form noValidate autoComplete="off">
    <h1><Translate content="parcel_reg"/></h1>
    <p><Translate content="parcel_registration"/></p>
    <hr />
    <label for="receiver"><b><Translate content="receiver"/></b></label>
    <TextField id="select" name="receiver" value={UserData.receiver} onChange={handleChangeReceiver} select>
    {ReceiverData.map((data, key)=>{return(
        <MenuItem value={data.id}>{data.username}</MenuItem>);
       })}
    </TextField>
    <hr />
    <label for="box"><b><Translate content="box"/></b></label>
    <TextField id="standard-number" type="number" name="box" value={UserData.box} onChange={handleChangeBox} />
    <hr />
    <label for="branch"><b><Translate content="branch"/></b></label>
    <TextField id="select" name="branch" value={UserData.branch} onChange={handleChangeBranch} select>
    {BranchData.map((data, key)=>{return(
        <MenuItem value={data.id}>{data.address}</MenuItem>);
       })}
    </TextField>
    <hr />
    <Button variant="contained" color="primary" onClick={handleSubmit}><Translate content="register"/></Button>
    </form>
    </div>
    )
};

export default SignIn;