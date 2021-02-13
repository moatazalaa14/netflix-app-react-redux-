import React,{useState} from 'react'
import { connect } from 'react-redux';
import {userLogin} from "../../actions/usersAction"
function Login(props) {
    const [userInfo,setUserInfo]=useState({
        username:"",
        password:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(userInfo)
        console.log(props)
        props.userLogin(userInfo)
    }
    return (
        <div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
				<div className="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div className="card-body">
				<form>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="text" className="form-control" placeholder="username" onChange={(e)=>setUserInfo({...userInfo,username:e.target.value})}/>
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="password" onChange={(e)=>setUserInfo({...userInfo,password:e.target.value})}/>
					</div>
					<div className="row align-items-center remember">
						<input type="checkbox" />Remember Me
					</div>
					<div className="form-group">
						<input type="submit" value="Login" className="btn float-right login_btn" onClick={handleSubmit}/>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
    )
}
const mapStateToProps = state => ({
    users: state.users
  });
  

export default connect(mapStateToProps,{userLogin})(Login)