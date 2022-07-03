import React from 'react'

const Education = () => {

    return (
        <div  id="education">
            <div className="text-white mb-3 ">
                <div className="card-header text-center text-5xl"><span class="material-icons bg-transparent" style={{fontSize:"48px"}}>school</span><br/>Education</div>
                <div className="flex justify-center">

                    <div className="md:w-3/5 " >
                        <div className="inline-block float-right clear-left p-2 m-2  w-2/5 hover:" style={{ boxShadow: "10px 5px 5px #22c55e", border: "1px solid #22c55e", hower: "scale(2)" }}>
                            <p className="font-bold" >High School Diploma from <span className="text-green-500">Dakshin Chatra High School,Chatra</span></p>2011-2019
                            <ul>
                                <li><span className="font-semibold text-green-500">Secondary Exam:</span> <span className="font-extrabold"> 86.85%</span></li>
                                <li><span className="font-semibold text-green-500">Higher Secondary Exam:</span> <span className="font-extrabold"> 80%</span></li>
                            </ul>

                        </div>

                        <div className="inline-block float-left clear-right p-2 m-2  w-2/5" style={{ boxShadow: "-10px 5px 5px #22c55e", border: "1px solid #22c55e" }}>
                            <p className="font-bold" >Bachelaor of Computer Scienece( Hons. ) from <span className="text-green-500">Acharya Prafulla Chandra College, Madhyamgram</span></p>2019-2022
                            <ul>
                                <li><span className="font-semibold text-green-500">First Semester SGPA:</span>  <span className="font-extrabold"> 7.90</span></li>
                                <li><span className="font-semibold text-green-500">Second Semester SGPA:</span> <span className="font-extrabold"> 9.20</span> </li>
                                <li><span className="font-semibold text-green-500">Third Semester SGPA:</span>  <span className="font-extrabold"> 9.54</span></li>
                                <li><span className="font-semibold text-green-500">Fourt Semester SGPA:</span>  <span className="font-extrabold"> 10.00</span></li>
                                <li><span className="font-semibold text-green-500">Fifth Semester SGPA:</span>  <span className="font-extrabold"> 9.25</span></li>
                                <li><span className="font-semibold text-green-500">Sixth Semester SGPA:</span>  <span className="font-extrabold"> 10.00</span></li>
                            </ul>



                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Education

// box-shadow: 3px 3px red, -1em 0 .4em olive;