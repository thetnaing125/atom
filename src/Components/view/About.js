import { Swiper, SwiperSlide } from "swiper/react";
import { GrFormNext } from "react-icons/gr";

import "swiper/css";
import "swiper/css/pagination";

import "../style.css";
import { Autoplay, Pagination } from "swiper";

import TalkieSuboo from "../../assets/img/TalkieSuboo1.webp";
import ShalSuboo from "../../assets/img/ShalSuboo2.webp";

import M1 from "../../assets/img/M1.png";
import M2 from "../../assets/img/M2.png";
import M3 from "../../assets/img/M3.png";
import M4 from "../../assets/img/M4.png";
import M5 from "../../assets/img/M5.png";
import M6 from "../../assets/img/M6.png";

import Ceo1 from "../../assets/img/ceo1.jpg";
import Ceo2 from "../../assets/img/ceo2.jpg";

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


const Services = () =>{
    return(
        <div>
             {/* Swiper Js */}
            <div>
                <Swiper autoplay={{
                delay: 2500,
                
                }} pagination={true} modules={[Autoplay, Pagination]} className="mySwiper">
                <SwiperSlide>
                    <img src={TalkieSuboo} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ShalSuboo} alt="" />
                </SwiperSlide>
                
                </Swiper>
            </div>

            <div>
                <div>
                    <h1 className="text-3xl font-bold text-blue-900 text-center mb-3 mt-3">This is ATOM Myanmar</h1>
                    <p className="text-xl font-bold text-blue-950 text-center mb-5 mx-6">ATOM bring more to life for people, business and society with the best data experience in Myanmar.</p>

                    <div className="md:hidden">
                        
                        <div className="flex items-center space-x-3 mb-3 mx-6">
                            <div>
                                <img src={M1} alt="" className="rounded-xl"/>
                                <h1 className="text-blue-900 font-bold">ATOM at a glance</h1>
                            </div>

                            <div>
                                <img src={M2} alt="" className="rounded-xl"/>
                                <h1 className="text-blue-900 font-bold">Management</h1>
                            </div>

                            <div>
                                <img src={M3} alt="" className="rounded-xl"/>
                                <h1 className="text-blue-900 font-bold">Career</h1>
                            </div>


                        </div>

                        <div className="flex items-center space-x-3 mb-3 mx-6">
                            <div>
                                <img src={M4} alt="" className="rounded-xl"/>
                                <h1 className="text-blue-900 font-bold">ATOM at a glance</h1>
                            </div>

                            <div>
                                <img src={M5} alt="" className="rounded-xl"/>
                                <h1 className="text-blue-900 font-bold">Management</h1>
                            </div>

                            <div>
                                <img src={M6} alt="" className="rounded-xl"/>
                                <h1 className="text-blue-900 font-bold">Career</h1>
                            </div>


                        </div>
                    </div>
                   
                    <div className="hidden md:flex items-center space-x-5 mx-32 mb-10">
                                    <div>
                                        <img src={M1} alt="" className="rounded-xl"/>
                                        <h1 className="text-blue-900 font-bold">ATOM at a glance</h1>
                                    </div>

                                    <div>
                                        <img src={M2} alt="" className="rounded-xl"/>
                                        <h1 className="text-blue-900 font-bold">Management</h1>
                                    </div>

                                    <div>
                                        <img src={M3} alt="" className="rounded-xl"/>
                                        <h1 className="text-blue-900 font-bold">Career</h1>
                                    </div>

                                    <div>
                                        <img src={M4} alt="" className="rounded-xl"/>
                                        <h1 className="text-blue-900 font-bold">ATOM at a glance</h1>
                                    </div>

                                    <div>
                                        <img src={M5} alt="" className="rounded-xl"/>
                                        <h1 className="text-blue-900 font-bold">Management</h1>
                                    </div>

                                    <div>
                                        <img src={M6} alt="" className="rounded-xl"/>
                                        <h1 className="text-blue-900 font-bold">Career</h1>
                                    </div>



                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-center text-2xl text-blue-950 font-bold mb-3 mt-5">To know more about ATOM...</h1>
                
                {/* MD Hidden */}
                <div className="md:hidden">
                        <div className="border bg-lime-100 shadow-2xl mx-6 mb-10">
                            <img src={Ceo1} alt=""/>
                            <h1 className="text-blue-950 text-xl font-bold mt-10 mx-6">Communication as a Tool for Effective Teamwork. . .</h1>
                            <p className="text-slate-900 text-xl mt-2 mb-3 mx-6">In today’s business world, tackling problems effectively, fostering creativity, and nurturing collaborative solutions . . .</p>

                           <div className="flex items-center">
                                <h2 className="text-xl font-bold text-blue-900 mx-6 mb-5">Read More</h2>
                                <GrFormNext className="mb-5 text-2xl font-bold"/>
                           </div>
                        </div>
                        <div className="border bg-lime-100 shadow-2xl mx-6 mb-10">
                            <img src={Ceo2} alt=""/>
                            <h1 className="text-blue-950 text-xl font-bold mt-10 mx-6">ATOM Behaviours: Be Respectful – Care, Listen, Equity</h1>
                            <p className="text-slate-900 text-xl mt-2 mb-3 mx-6">At ATOM, each and every employee plays an important role in our endeavour to operate a world-class telecom . .</p>

                           <div className="flex items-center">
                                <h2 className="text-xl font-bold text-blue-900 mx-6 mb-5">Read More</h2>
                                <GrFormNext className="mb-5 text-2xl font-bold"/>
                           </div>
                        </div>
                </div>

                {/* MD Block */}
                <div className="hidden md:block">
                        <div className="flex items-center space-x-5 mb-10 mx-60">
                                <div className="border w-96 h-auto bg-cyan-400">
                                    <h1 className="text-2xl font-bold text-slate-950 max-w-xs mb-5 mt-5 mx-6">Communication as a Tool for Effective Teamwork. . .</h1>
                                    <p className="text-lg text-slate-600 max-w-xs mb-5 mx-6">In today’s business world, tackling problems effectively, fostering creativity, and nurturing collaborative solutions . . .</p>
                                    <div className="flex items-center mb-5">
                                        <h1 className="text-xl font-bold text-blue-700 mx-6">Read more</h1>
                                        <GrFormNext className="text-blue-700 font-bold text-xl"/>
                                    </div>
                                </div>

                                <div>
                                    <img src={Ceo1} alt=""className="w-96"/>
                                </div>
                        </div>


                        <div className="flex items-center space-x-5 mb-5 mx-60">

                                <div>
                                    <img src={Ceo2} alt=""className="w-96"/>
                                </div>
                                <div className="border w-96 h-auto bg-cyan-400">
                                    <h1 className="text-2xl font-bold text-slate-950 max-w-xs mb-5 mt-5 mx-6">Communication as a Tool for Effective Teamwork. . .</h1>
                                    <p className="text-lg text-slate-600 max-w-xs mb-5 mx-6">In today’s business world, tackling problems effectively, fostering creativity, and nurturing collaborative solutions . . .</p>
                                    <div className="flex items-center mb-5">
                                        <h1 className="text-xl font-bold text-blue-700 mx-6">Read more</h1>
                                        <GrFormNext className="text-blue-700 font-bold text-xl"/>
                                    </div>
                                </div>

                                
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

        </div>
    )
}

export default Services;