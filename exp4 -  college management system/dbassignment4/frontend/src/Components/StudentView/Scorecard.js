import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
function Scorecard() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios
      .post("http://localhost:5000/questions/calculateAnswer", {
        question: state.answerSheet,
      })
      .then((res) => {
        console.log("Res", res);
        setScore(res.data.correct);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  });

  return (
    <>
      <Sidebar />
      <div className="mainContainer">
        <h1>Your total score is {score}</h1>
      </div>
    </>
  );
}
export default Scorecard;
