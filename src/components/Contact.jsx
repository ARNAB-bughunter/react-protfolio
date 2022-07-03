import React from 'react'

const Contact = () => {
    return (
        <div id="contact">
            <div className="text-white mb-3 ">
                <div className="card-header text-center  text-5xl"><span class="material-icons bg-transparent" style={{fontSize:"48px"}}>contact_support</span><br/>Contact Me</div>
                <div className="flex justify-center">

                    <div className="md:w-11/12  flex justify-center" >
                        <div className=" mt-2 flex justify-center">
                            <form >
                                <input type="text" placeholder='Your Name' className="bg-gray-700 p-2 rounded m-2 w-96" /><br />
                                <input type="text" placeholder='Phone Number' className="bg-gray-700 p-2 rounded m-2 w-96" /><br />
                                <input type="email" placeholder='Email Address' className="bg-gray-700 p-2 rounded m-2 w-96" /><br />
                                <input type="text" placeholder='Subject' className="bg-gray-700 p-2 rounded m-2 w-96" /><br />
                                <textarea type="text" placeholder='Message' className="bg-gray-700 p-2 rounded m-2 w-96 m-h-20" /><br />
                                <div class="flex justify-left">
                                    <button type="button" class="btn btn-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                                        Send
                                    </button>
                                </div>
                            </form>

                        </div>


                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact