import "../Login/Login.scss";
import React from "react";
import workspace from "../../assets/images/work_space.jpg";
import { Col, Row, Input, Button } from "antd";


const Login = (props) => {
    return (
        <Row className="login">
            <img className="workspace-image" alt="background" src={workspace} />
            <div className="form">
                <Col md={12} sm={24} xs={24}>
    
                <span className="title">Login</span>
                <div>
                    <Input className="username" type="text" placeholder="Username"/>
                </div>
                <div>
                    <Input.Password className="username" type="text" placeholder="Password"/>
                </div>
                <div>
                    <Button className="btn-login">Login</Button>
                </div>
                </Col>
            </div>
        </Row>
    );
};

export default Login;
