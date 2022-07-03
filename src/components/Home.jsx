import React from 'react'
import background from '../assests/bg.jpg'
import self from '../assests/self.jpg'

const Home = () => {
    return (

        <div id="home">

            <div
                className="bg-image bg-no-repeat  p-5 flex justify-center  shadow-1-strong rounded text-white "
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="w-96  justify-center bg-transparent">
                    <div className="flex justify-center  bg-transparent" >
                        <img className="img-thumbnail m-2 rounded-full " src={self} alt="..." />
                    </div>


                    <div className="text-center my-5 p-2 rounded-md ">
                        <p className="text-center text-5xl font-extrabold mt-2 " >ARNAB NAHA</p>
                        <p className="text-center">Software Engineer & UI/UX Expert</p>
                        <a className="hover:text-green-500 " target="_blank" style={{ width: "70px", }} href="https://www.facebook.com/arnab.naha.906"><i class="fa-brands fa-2x p-2 fa-facebook"></i></a>
                        <a className="hover:text-green-500 " target="_blank" style={{ width: "70px", }} href="https://twitter.com/ArnabNaha11"><i class="fa-brands fa-2x p-2 fa-twitter"></i></a>
                        <a className="hover:text-green-500 " target="_blank" style={{ width: "70px", }} href="https://www.hackerrank.com/arnabnaha219"><i class="fa-brands fa-2x p-2 fa-hackerrank"></i></a>
                        <a className="hover:text-green-500 " target="_blank" style={{ width: "70px", }} href="https://www.linkedin.com/in/arnab-naha-543232195/"><i class="fa-brands fa-2x p-2 fa-linkedin"></i></a>
                        <a className="hover:text-green-500 " target="_blank" style={{ width: "70px", }} href="https://github.com/ARNAB-bughunter"><i class="fa-brands fa-2x p-2 fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
