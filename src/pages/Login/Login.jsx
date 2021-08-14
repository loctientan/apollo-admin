import "../Login/Login.scss";
import React from "react";
import background from "../../assets/images/background_green_gradient.jpg";
import { Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";


const Login = (props) => {
    return (
        <div className="login">
            <img className="background" alt="background" src={background} />
            <div className="form">
                <span  className="title">Login</span>
                <label className="label-username">Username</label>
                <Input className="username" type="text" size="large" placeholder="Type your username" prefix={<UserOutlined />} />
                <label className="label-password">Password</label>
                <Input.Password className="password" size="large" placeholder="Type your password" prefix={<LockOutlined />} />
                {/* <a href="" className="forgot-password"> Forgot password?</a> */}
                <Button className="btn-login" size="large" type="primary">LOGIN</Button>
            </div>
        </div>
    );
};

export default Login;
