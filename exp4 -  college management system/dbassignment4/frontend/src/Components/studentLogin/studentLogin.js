import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./studentLogin.css";

function StudentLogin() {
    const navigate = useNavigate();
    return (
        <div style={{ textAlign: "center", fontFamily: "times new roman" }}>
            <h1 style={{ fontFamily: "times new roman" }}>Login As Student</h1>
            <div className="studentLogin" style={{ backgroundColor: "black", color:"white"}}>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        console.log(event.target.studentId.value);
                        axios
                            .post("http://localhost:5000/login/student", {
                                user_id: event.target.studentId.value,
                                password: event.target.password.value,
                            })
                            .then((res) => {
                                console.log("Res", res);
                                navigate("/AllQuizPage");
                            })
                            .catch((err) => {
                                alert("Invalid Credentials");
                                console.log("Err", err);
                            });
                    }}
                >
                    <h3 className="studentLoginH3">Student ID :</h3>
                    <input type="text" name="studentId" />
                    <br />
                    <h3 className="studentLoginH3">Password</h3>
                    <input type="password" name="password" />
                    <br />
                    <button className="studentLoginButton" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default StudentLogin;