import React, { useState } from "react";
import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaKey,
  FaShieldAlt,
} from "react-icons/fa";
import "./ChangePassword.css";

const ChangePassword = () => {

  const [showOld,setShowOld]=useState(false);
  const [showNew,setShowNew]=useState(false);
  const [showConfirm,setShowConfirm]=useState(false);

  const [passwords,setPasswords]=useState({
    oldPassword:"",
    newPassword:"",
    confirmPassword:"",
  });

  const handleChange=(e)=>{
    setPasswords({
      ...passwords,
      [e.target.name]:e.target.value,
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(
      !passwords.oldPassword||
      !passwords.newPassword||
      !passwords.confirmPassword
    ){
      alert("Please fill all fields");
      return;
    }

    if(passwords.newPassword!==passwords.confirmPassword){
      alert("Passwords do not match");
      return;
    }

    alert("Password Updated Successfully");

    setPasswords({
      oldPassword:"",
      newPassword:"",
      confirmPassword:"",
    });

  };

  return(

<div className="change-password">

<div className="password-header">

<div className="header-icon">
<FaKey/>
</div>

<div className="header-content">

<h2>Change Password</h2>

<p>
Update your password to keep your account secure
</p>

</div>

</div>

<form onSubmit={handleSubmit}>

<div className="input-group">

<FaLock className="input-icon"/>

<input
type={showOld?"text":"password"}
name="oldPassword"
placeholder="Old Password"
value={passwords.oldPassword}
onChange={handleChange}
/>

<span
className="eye-icon"
onClick={()=>setShowOld(!showOld)}
>
{showOld?<FaEyeSlash/>:<FaEye/>}
</span>

</div>

<div className="input-group">

<FaLock className="input-icon"/>

<input
type={showNew?"text":"password"}
name="newPassword"
placeholder="New Password"
value={passwords.newPassword}
onChange={handleChange}
/>

<span
className="eye-icon"
onClick={()=>setShowNew(!showNew)}
>
{showNew?<FaEyeSlash/>:<FaEye/>}
</span>

</div>

<div className="input-group">

<FaLock className="input-icon"/>

<input
type={showConfirm?"text":"password"}
name="confirmPassword"
placeholder="Confirm Password"
value={passwords.confirmPassword}
onChange={handleChange}
/>

<span
className="eye-icon"
onClick={()=>setShowConfirm(!showConfirm)}
>
{showConfirm?<FaEyeSlash/>:<FaEye/>}
</span>

</div>

<button
type="submit"
className="change-password-btn"
>

<FaShieldAlt/>

<span>
Update Password
</span>

</button>

</form>

</div>

  );

};

export default ChangePassword;