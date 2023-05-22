import React from "react";

function Landing() {
    return (
        <div>
            
            <h1 style={{ textAlign: "center", paddingTop: "70px" }}>Welcome to Walchand  College of Engineering</h1>
            <div className="homeImg">
            <div style={{ marginLeft:"30%" , padding: "5px" }}>
                <button style={{ margin: "7px", backgroundColor: "grey", color: "white", borderRadius: "5px", width:"115px", height:"35px"  }}><a href="/studentLogin"> student login</a></button>
                <button style={{ margin: "7px", backgroundColor: "grey", color: "white", borderRadius: "5px", width:"115px", height:"35px" }}><a href="/facultyLogin"> Faculty login</a></button>

            </div>
                
                <br /><br /><br />
                <p>Walchand College of Engineering is situated midway between Sangli and Miraj cities at Vishrambag, Sangli. The WCE campus is located on about 90 acres of land on southern side of Sangli – Miraj road.

                    In 1947, the college made a modest beginning as New Engineering College, with a single program leading to B.E. (Civil) degree. In the year 1955, the College was renamed as Walchand College of Engineering as part of the new arrangements and pursuant to the Rehabilitation and Development Program mainly funded by Seth Walchand Hirachand Memorial Trust and the Government. The Government appointed an Ad Hoc Committee for conducting the college from May 1955, later replaced by the Administrative Council in 1956. The Ad Hoc Committee added two more degree programs in B.E. (Mechanical) and B.E. (Electrical) in 1955 with the intake of 20 each. Three Diploma programs also started in 1955 – Civil (40 intake), Mechanical (20) and Electrical (20).</p>
            </div>
        </div>
    );
}

export default Landing;