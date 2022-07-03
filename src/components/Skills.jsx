import React from 'react'

const Skills = () => {
    return (
        <div id="skill">
            <div className="text-white mb-3 ">
                <div className="card-header text-center text-5xl"><span class="material-icons bg-transparent" style={{fontSize:"48px"}}>leaderboard</span><br/>Skills</div>

                <div className="flex justify-center ">
                    <div className="row md:w-3/5  gap-7 mt-8">
                        <div className=" col ">

                            <p className="text-2xl p-2 text-center">Technical Skills</p>
                            <span>Python</span>
                            <div className="progress mb-8 h-8">
                                <div className="progress-bar progress-bar-striped text-lg bg-success" role="progressbar" style={{ width: "95%", }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                            </div>
                            <span>Java</span>
                            <div className="progress mb-8 h-8">
                                <div className="progress-bar progress-bar-striped text-lg bg-success" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                            </div>
                            <span>JavaScript</span>
                            <div className="progress mb-8 h-8">
                                <div className="progress-bar progress-bar-striped text-lg bg-success" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                            </div>
                            <span>C & C++</span>
                            <div className="progress mb-8 h-8">
                                <div className="progress-bar progress-bar-striped text-lg bg-success" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                            </div>
                            <span>HTML & CSS</span>
                            <div className="progress mb-8 h-8">
                                <div className="progress-bar progress-bar-striped text-lg bg-success" role="progressbar" style={{ width: "88%" }} aria-valuenow="88" aria-valuemin="0" aria-valuemax="100">88%</div>
                            </div>

                        </div>
                        <div className=" col ">
                            <p className="text-2xl p-2 text-center">Professional Skills</p>
                            <span>Communication</span>
                           <div className="progress mb-8 h-8">
                                <div className="progress-bar progress-bar-striped text-lg bg-success" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                            </div>
                            <span>Teamwork</span>
                            <div className="progress mb-8 h-8">
                                <div className="progress-bar progress-bar-striped text-lg bg-success" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                            </div>
                            <span>Creativity</span>
                            <div className="progress mb-8 h-8">
                                <div className="progress-bar progress-bar-striped text-lg bg-success" role="progressbar" style={{ width: "99%" }} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">99%</div>
                            </div>
                            <span>Dedication</span>
                            <div className="progress mb-8 h-8">
                                <div className="progress-bar progress-bar-striped text-lg bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                            <span>Project Management</span>
                            <div className="progress mb-8 h-8">
                                <div className="progress-bar progress-bar-striped text-lg bg-success" role="progressbar" style={{ width: "94%" }} aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">94%</div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Skills