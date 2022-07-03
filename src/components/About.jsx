import React from 'react'
import cv from '../assests/cv.pdf'


const About = () => {
    return (
        <div id="about">
            <div className=" text-white  mb-3  ">
           
                <div className="card-header text-center text-5xl"> <span class="material-icons bg-transparent" style={{fontSize:"48px"}}>info</span><br/>About Me</div>
                <div className="card-body flex justify-center">
                    <p className="card-text md:w-3/5 font-semibold "> <span className="text-green-500">Hello! I’m Arnab.</span>Hardworking College Student seeking employment. A creative thinker,
                        adept in software development and working with various data structures.
                        Passionate about elevating the user experience through thoughtful and
                        innovative work processes. </p>
                </div>
                <div className="flex justify-center">
                    <div className="row md:w-3/5  gap-7">
                        <div className=" col">
                            
                            <p className="text-2xl pb-2">Personal Details</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="text-green-500">Birthdate</td>
                                        <td className="pl-12">28-9-2001</td>
                                    </tr>
                                    <tr>
                                        <td className="text-green-500">Phone</td>
                                        <td className="pl-12">+91 8972416637</td>
                                    </tr>
                                    <tr>
                                        <td className="text-green-500">Email</td>
                                        <td className="pl-12">arnabnaha219@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className="text-green-500">Address</td>
                                        <td className="pl-12">Kolkata,India</td>
                                    </tr>
                                    <tr>
                                        <td className="text-green-500">Job Status</td>
                                        <td className="pl-12">Student</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <div className=" col ">
                            <p className="text-2xl p-2">My Interests</p>
                            <span className="p-2 material-icons cursor-pointer hover:bg-green-500 rounded" style={{ fontSize: "48px", width: "70px", }}>sports_esports</span>
                            <span className="p-2 material-icons cursor-pointer hover:bg-green-500 rounded" style={{ fontSize: "48px", width: "70px", }}>headset</span>
                            <span className="p-2 material-icons cursor-pointer hover:bg-green-500 rounded" style={{ fontSize: "48px", width: "70px", }}>map</span>
                            <span className="p-2 material-icons cursor-pointer hover:bg-green-500 rounded" style={{ fontSize: "48px", width: "70px", }}>android</span>
                            <span className="p-2 material-icons cursor-pointer hover:bg-green-500 rounded" style={{ fontSize: "48px", width: "70px", }}>camera_alt</span>
                            <span className="p-2 material-icons cursor-pointer hover:bg-green-500 rounded" style={{ fontSize: "48px", width: "70px", }}>two_wheeler</span>
                            <span className="p-2 material-icons cursor-pointer hover:bg-green-500 rounded" style={{ fontSize: "48px", width: "70px", }}>paid</span>
                            <span className="p-2 material-icons cursor-pointer hover:bg-green-500 rounded" style={{ fontSize: "48px", width: "70px", }}>emoji_food_beverage</span>
                        </div>
                        <div class="my-8 flex justify-center">
                            <a href={cv} class="btn btn-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" download>
                                Download CV
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About