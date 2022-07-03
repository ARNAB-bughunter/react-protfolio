import React from 'react'

const Work = () => {
    return (
        <div id="work">
            <div className="text-white mb-3 ">
                <div className="card-header text-center text-5xl bg-transparent"><span class="material-icons bg-transparent" style={{fontSize:"48px"}}>work_outline</span><br/>Work Experience</div>
                <div className="flex justify-center">

                    <div className="md:w-3/5 " >
                        <div className="inline-block float-right clear-left p-2 m-2  w-2/5" style={{ boxShadow: "10px 5px 5px #22c55e", border: "1px solid #22c55e" }}>
                            <p className="font-bold" >Junior Software Developer <span className="text-green-500">Dark Star Quantum Lab Inc., USA</span></p>                        
                        </div>

                        <div className="inline-block float-left clear-right p-2 m-2  w-2/5" style={{ boxShadow: "-10px 5px 5px #22c55e", border: "1px solid #22c55e" }}>
                        <p className="font-bold" >Web Developer <span className="text-green-500">Triple A Tech, Kolkata</span></p>    
                        </div>

                        
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Work