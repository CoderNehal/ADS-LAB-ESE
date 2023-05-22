import axios from "axios";
import TeacherSidebar from "./Sidebar/TeacherSidebar";
function AddNewQuiz() {
    return (
        <>
            <TeacherSidebar />
            <div className="mainContainer" style={{ backgroundColor: "black", color:"white", fontSize: "20px" }}>
                {/* quiz_id, description, password,user_id */}
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        axios
                            .post("http://localhost:5000/quiz", {
                                quiz_id: event.target.quiz_id.value,
                                quiz_description: event.target.quiz_description.value,
                                user_id: "xyz",
                                quiz_password: "1234",
                            })
                            .then((res) => {
                                console.log("Res", res);
                            })
                            .catch((err) => {
                                console.log("Err", err);
                            });
                    }}
                >
                    <label>Enter Quiz Id : </label>
                    <input type="text" name="quiz_id"></input>
                    <br />
                    <br />
                    <label>Enter Quiz description : </label>
                    <input type="text" name="quiz_description"></input>
                    <br />
                    <br />
                    <button type="submit" style={{width:"150px"}}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default AddNewQuiz;