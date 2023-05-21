import HomeInternet from "../../assets/img/home-internet.webp";
import { GrFormNext } from "react-icons/gr";

import InternetTower from "../../assets/img/homeinternet1.png";

import Game1 from "../../assets/img/game1.png";
import Game2 from "../../assets/img/game2.jpg";
import Game3 from "../../assets/img/game3.png";
import Game4 from "../../assets/img/game4.png";


import So1 from "../../assets/img/social1.webp";
import So2 from "../../assets/img/social2.png";
import So3 from "../../assets/img/social3.webp";
import So4 from "../../assets/img/social4.png";
import So5 from "../../assets/img/social5.png";
import So6 from "../../assets/img/social6.webp";

import Social1 from "../../assets/img/s-w1.svg";
import Social2 from "../../assets/img/s-w2.svg";
import Social3 from "../../assets/img/s-w3.svg";
import Social4 from "../../assets/img/s-w4.svg";
import Social5 from "../../assets/img/s-w5.svg";
import Social6 from "../../assets/img/s-w6.svg";

import App1 from "../../assets/img/app1.webp";
import App2 from "../../assets/img/app2.webp";
import App3 from "../../assets/img/app3.webp";
import App4 from "../../assets/img/app4.webp";

import Actom from "../../assets/img/logo.webp"
 

const Business = () => {
    return(
        <div>
            <div>
                <img src={HomeInternet} alt=""/>
            </div>

            <div className="mb-10">
                    <div className="flex item-center space-x-2 mt-3 mx-12">
                        <h1 className="text-blue-800 font-normal">Home</h1>
                        <GrFormNext/>
                        <h1 className="text-blue-800 font-normal">Consumer</h1>
                        <GrFormNext/>
                        <h1>Home Internet</h1>
                    </div>
            </div>

            <div>
                <h1 className="text-3xl font-bold text-slate-950 text-center mb-10">Home Internet</h1>
                <div className="grid md:grid-cols-2 md:mx-20">
                    <div className="border bg-lime-100 rounded-2xl mx-6 px-10 py-6 mb-10 shadow-2xl">
                            <div className="flex items-center space-x-10">
                                <h1 className="md:text-xl text-sm font-bold text-blue-950 max-w-sm">Enjoy High Speed & Unlimited Internet with ATOM Power Fiber.</h1>
                                <img src={InternetTower} alt=""/>
                            </div>
                           <div className="flex items-center space-x-2"> 
                                <h1 className="text-blue-950 font-bold md:text-xl">Find out more</h1>
                                <GrFormNext/>
                           </div>
                    </div>


                    <div className="border bg-lime-100 rounded-2xl mx-6 px-10 py-6 mb-10 shadow-inner">
                            <div className="flex items-center space-x-10">
                                <h1 className="md:text-xl text-sm font-bold text-blue-950 max-w-sm">Enjoy affordable and reliable internet with ATOM Wireless.</h1>
                                <img src={InternetTower} alt=""/>
                            </div>
                           <div className="flex items-center space-x-2"> 
                                <h1 className="text-blue-950 font-bold md:text-xl">Find out more</h1>
                                <GrFormNext/>
                           </div>
                    </div>

                </div>
            </div>

            <div className="mb-32 grid md:grid-cols-4 gap-0 md:mx-10">
                    <div className="border bg-yellow-40 m-11 rounded-xl shadow-2xl">
                        <img src={Game1} alt=""/>
                        <h1 className="text-slate-950 font-bold text-center mt-10 mb-10">FastLane Optimized </h1>
                        <h1 className="text-slate-950 font-bold text-center mb-16 mx-6">Buy “Enjoy unlimited download of premium</h1>
                        <p className="text-blue-900 font-bold text-center mb-10">Find Out More</p>
                    </div>

                    <div className="border bg-yellow-40 m-11 rounded-xl shadow-2xl">
                        <img src={Game2} alt=""/>
                        <h1 className="text-slate-950 font-bold text-center mt-10 mb-10">Sate Kyite Shal Sot</h1>
                        <h1 className="text-slate-950 font-bold text-center mb-16 mx-6">Enjoy MLBB, PUBG MOBILE and FREE FIRE</h1>
                        <p className="text-blue-900 font-bold text-center mb-10">Find Out More</p>
                    </div>

                    <div className="border bg-yellow-40 m-11 rounded-xl shadow-2xl">
                        <img src={Game3} alt=""/>
                        <h1 className="text-slate-950 font-bold text-center mt-10 mb-10">Sate Kyite Sot PUBG Mobile</h1>
                        <h1 className="text-slate-950 font-bold text-center mb-16 mx-6">400MB Data can be used for any usage</h1>
                        <p className="text-blue-900 font-bold text-center mb-10">Find Out More</p>
                    </div>

                    <div className="border bg-yellow-40 m-11 rounded-xl shadow-2xl">
                        <img src={Game4} alt=""/>
                        <h1 className="text-slate-950 font-bold text-center mt-10 mb-10">Sate Kyite Sot</h1>
                        <h1 className="text-slate-950 font-bold text-center mb-16 mx-6">Buy Daily or 7Day Sate Kyite Sot Gaming Pack</h1>
                        <p className="text-blue-900 font-bold text-center mb-10">Find Out More</p>
                    </div>
            </div>

             {/* Social  */}

             <div>
                    <div className="mt-10">
                    <h1 className="text-3xl text-center text-blue-900 font-bold mb-10">Share</h1>
                        <div className="flex items-center justify-center space-x-5 md:space-x-14">
                            <img src={So1} alt="" className="md:w-12 w-8"/>
                            <img src={So2} alt="" className="md:w-12 w-8"/>
                            <img src={So3} alt="" className="md:w-12 w-8"/>
                            <img src={So4} alt="" className="md:w-12 w-8"/>
                            <img src={So5} alt="" className="md:w-12 w-8"/>
                            <img src={So6} alt="" className="md:w-12 w-8"/>
                            
                        </div>
                </div>
            </div>

            {/* ============================================Footer=================================== */}

            <div>
            <div className="bg-black hidden md:block">
            <div className="mt-40 py-10">
                <img src={Actom} alt="" className="w-24 mx-20 mb-4"/>
                <div className="flex space-x-16 mx-20">
                    <div className="">
                        <h1 className="text-2xl font-bold text-white mb-4">Music & Video</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">MyTune</h1>
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold text-white mb-4">Packages</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">Data</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">Voice</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">IDD & Roaming</h1>
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold text-white mb-4">SIM</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">Sim Registration &</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">Ownership</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">Sim Lifecycle</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">Tourist Sim</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">B2B Sim</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">Super Number</h1>
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold text-white mb-4">Service</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">Music & Video</h1>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white mb-4">Home Internet</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">Power Fiber</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">Wireless</h1>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white mb-4">Help</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">FAQs</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">Store Location</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">USSD Code & Info</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">4G Network Coverage</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">Feedback Form</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">App</h1>
                        <h1 className="text-md font-bold text-blue-800 mb-2">Contact</h1>
                    </div>
                </div>
            </div>

            <div className="mx-20 mb-10">
                <h1 className="text-white font-bold text-xl mb-5">How to get ATOM Store App</h1>
                <div className="flex items-center justify-between">
                    <div className="flex space-x-5">
                        <img src={App1} alt="" className="w-24"/>
                        <img src={App2} alt="" className="w-24"/>
                        <img src={App3} alt="" className="w-24"/>
                        <img src={App4} alt="" className="w-24"/>
                    </div>
                    <div className="flex space-x-5">
                        <img src={Social1} alt=""/>
                        <img src={Social2} alt=""/>
                        <img src={Social3} alt=""/>
                        <img src={Social4} alt=""/>
                        <img src={Social5} alt=""/>
                        <img src={Social6} alt=""/>
                    </div>
                </div>
            </div>

            <div className="mb-10 mx-20" style={
                    {
                    border: '1px solid red'
                    }
                }
                >
                <hr/>
            </div>

            <div className="flex items-center justify-between mx-20 py-10">
                <h1 className="text-lg text-white font-bold">© Copyright 2023 All rights reserved by ATOM Myanmar.</h1>

                <div className="flex items-center space-x-5 justify-between">
                    <h1 className="text-sm text-white font-bold">Terms of Use </h1>
                    <h1 className="text-sm text-white font-bold">Privacy Policy</h1>
                </div>
            </div>
            </div>

            <div className="bg-black mt-16 md:hidden">
               <div className="mx-6">
                    <div className="mb-6">
                        <img src={Actom} alt="" className="w-24 mb-5 py-2"/>
                        <div style={{ border: '1px solid white'}}></div>
                    </div>

                    <div className="mb-6">
                        <h1 className="text-xl text-white mb-3">Music & Video</h1>
                        <div style={{ border: '1px solid white'}}></div>
                    </div>

                    <div className="mb-6">
                        <h1 className="text-xl text-white mb-3">Packages</h1>
                        <div style={{ border: '1px solid white'}}></div>
                    </div>

                    <div className="mb-6">
                        <h1 className="text-xl text-white mb-3">SIM</h1>
                        <div style={{ border: '1px solid white'}}></div>
                    </div>

                    <div className="mb-6">
                        <h1 className="text-xl text-white mb-3">Service</h1>
                        <div style={{ border: '1px solid white'}}></div>
                    </div>

                    <div className="mb-6">
                        <h1 className="text-xl text-white mb-3">Home Internet</h1>
                        <div style={{ border: '1px solid white'}}></div>
                    </div>

                    <div className="mb-6">
                        <h1 className="text-xl text-white mb-3">Help</h1>
                        <div style={{ border: '1px solid white'}}></div>
                    </div>

               </div>
               <div>
                    <h1 className="text-xl text-white mx-6 mb-5">How to Get ATOM Store App</h1>
                    <div className="mx-6 mb-8">
                        <div className="flex item space-x-5 mb-5">
                            <img src={App1} alt="" className="w-26 h-16"/>
                            <img src={App2} alt="" className="w-26 h-16"/>
                        </div>
                        <div className="flex item space-x-5">
                            <img src={App3} alt="" className="w-26 h-16"/>
                            <img src={App4} alt="" className="w-26 h-16"/>
                        </div>
                    </div>
                    <div className="flex space-x-3 items-center justify-end mx-6 mb-5">
                        <img src={Social1} alt=""/>
                        <img src={Social2} alt=""/>
                        <img src={Social3} alt=""/>
                        <img src={Social4} alt=""/>
                        <img src={Social5} alt=""/>
                        <img src={Social6} alt=""/>
                    </div>

                   <div className="py-6">
                        <div className="mx-6" style={{ border: '1px solid white'}}></div>
                   </div>

                    <div>
                        <h1 className="text-white text-sm mx-6 mb-2">© Copyright 2023 All rights reserved by ATOM Myanmar.</h1>
                        <div className="flex items-center space-x-5 py-6">
                            <h1 className="text-white text-sm mx-6">Terms of USE</h1>
                            <h1 className="text-white text-sm mx-6">Priacy Policy</h1>
                        </div>
                    </div>
                </div> 

            </div>
           </div>


        </div>
    )
}
export default Business;

