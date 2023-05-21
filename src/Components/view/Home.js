import "../../App";
import Atom from "../../assets/img/logo.webp";
import Marquee from "react-fast-marquee";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../style.css";
import { Autoplay, Pagination } from "swiper";

import Swift1 from "../../assets/img/swift1.webp";
import Swift2 from "../../assets/img/swift2.webp";
import Swift3 from "../../assets/img/swift3.webp";

import Box1 from "../../assets/img/box1.png";
import Box2 from "../../assets/img/box2.webp";
import Box3 from "../../assets/img/box3.webp";
import Box4 from "../../assets/img/box4.webp";
import Box5 from "../../assets/img/box5.webp";
import Box6 from "../../assets/img/box6.webp";

import {BiChevronRight} from "react-icons/bi";
import Packages1 from "../../assets/img/packages1.png";
import Packages2 from "../../assets/img/packages2.png";
import Packages3 from "../../assets/img/packages3.png";
import Packages4 from "../../assets/img/packages4.png";
import Packages5 from "../../assets/img/packages5.png";
import Packages6 from "../../assets/img/packages6.png";

import Phone from "../../assets/img/phone.webp";

import App1 from "../../assets/img/app1.webp";
import App2 from "../../assets/img/app2.webp";
import App3 from "../../assets/img/app3.webp";
import App4 from "../../assets/img/app4.webp";

import Help1 from "../../assets/img/help1.webp";
import Help2 from "../../assets/img/help2.webp";
import Help3 from "../../assets/img/help3.webp";
import Help4 from "../../assets/img/help4.webp";

import social1 from "../../assets/img/social1.webp";
import social2 from "../../assets/img/social2.png";
import social3 from "../../assets/img/social3.webp";
import social4 from "../../assets/img/social4.png";
import social5 from "../../assets/img/social5.png";
import social6 from "../../assets/img/social6.webp";


import Data1 from "../../assets/img/data1.webp"
import Data2 from "../../assets/img/data2.webp"
import Data3 from "../../assets/img/data3.webp"

import {AiOutlineRight} from "react-icons/ai"

import HomeInternet1 from "../../assets/img/homeinternet1.webp";
import HomeInternet2 from "../../assets/img/homeinternet2.webp";
import HomeInternet3 from "../../assets/img/homeinternet3.png";
import HomeInternet4 from "../../assets/img/homeinternet4.webp";


import Social1 from "../../assets/img/s-w1.svg";
import Social2 from "../../assets/img/s-w2.svg";
import Social3 from "../../assets/img/s-w3.svg";
import Social4 from "../../assets/img/s-w4.svg";
import Social5 from "../../assets/img/s-w5.svg";
import Social6 from "../../assets/img/s-w6.svg";
   
import Actom from "../../assets/img/logo.webp"

import "../swiper.css";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";


const Home = () => {
  return (
    <div>
      <div className="bg-cyan-50 ">
        <Marquee className="">
          <img src={Atom} alt="" className=" w-20 md:w-40" />
          <img src={Atom} alt="" className=" w-20 md:w-40" />
          <img src={Atom} alt="" className=" w-20 md:w-40" />
          <img src={Atom} alt="" className=" w-20 md:w-40" />
        </Marquee>
      </div>

      {/* Swiper Js */}
        <div>
        <Swiper autoplay={{
          delay: 2500,
          
        }} pagination={true} modules={[Autoplay, Pagination]} className="mySwiper">
          <SwiperSlide>
            <img src={Swift1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swift2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swift3} alt="" />
          </SwiperSlide>
        </Swiper>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-5 md:grid-cols-6 py-10 md:mx-10 mx-5">
              <div>
                <img src={Box1} className="rounded-xl" alt=""/>
                <h1 className="text-center text-slate-800 font-bold">ATOM Star</h1>
              </div>

              <div>
                <img src={Box2} className="rounded-xl" alt=""/>
                <h1 className="text-center text-slate-800 font-bold">International</h1>
              </div>

              <div>
                <img src={Box3} className="rounded-xl" alt=""/>
                <h1 className="text-center text-slate-800 font-bold">Sim</h1>
              </div>

              <div>
                <img src={Box4} className="rounded-xl" alt=""/>
                <h1 className="text-center text-slate-800 font-bold">Packages</h1>
              </div>

              <div>
                <img src={Box5} className="rounded-xl" alt=""/>
                <h1 className="text-center text-slate-800 font-bold">Top Up</h1>
              </div>

              <div>
                <img src={Box6} className="rounded-xl" alt=""/>
                <h1 className="text-center text-slate-800 font-bold">VAS</h1>
              </div>
          </div>
        </div>

        <div>

            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-lime-700 text-center mb-10">Our Packages</h1>

                    <div className="">
                        <div className="mb-10">
                            <h1 className="text-2xl text-center font-bold text-red-700 mb-5 underline underline-offset-8">Data</h1>
                            <div className="grid md:grid-cols-3 gap-5">
                                <div className="bg-green-100 px-5 rounded mx-auto">
                                    <img src={Data1} alt=""/>
                                    <div className="flex items-center space-x-40 mx-2 py-4">
                                        <div>
                                            <h1 className="text-slate-800 text-xl font-bold mt-5">589KS</h1>
                                            <p className="text-sm text-slate-500">Includ Tax</p>
                                        </div>
                                        <div>
                                            <button className="bg-blue-600 px-6 py-1 rounded text-white font-bold mt-5">Buy Now</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-green-100 px-5 rounded mx-auto">
                                    <img src={Data2} alt=""/>
                                    <div className="flex items-center space-x-40 mx-2 py-4">
                                        <div>
                                            <h1 className="text-slate-800 text-xl font-bold mt-5">990KS</h1>
                                            <p className="text-sm text-slate-500">Includ Tax</p>
                                        </div>
                                        <div>
                                            <button className="bg-blue-600 px-6 py-1 rounded text-white font-bold mt-5">Buy Now</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-green-100  px-5 rounded mx-auto">
                                    <img src={Data3} alt=""/>
                                    <div className="flex items-center space-x-40 mx-2 py-4">
                                        <div>
                                            <h1 className="text-slate-800 text-xl font-bold mt-5">3,199KS</h1>
                                            <p className="text-sm text-slate-500">Includ Tax</p>
                                        </div>
                                        <div>
                                            <button className="bg-blue-600 px-6 py-1 rounded text-white font-bold mt-5">Buy Now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    
                    </div>
            </div>

            <div>
                <div>
                    <h1 className="text-2xl font-bold underline underline-offset-4 text-emerald-600 text-center mb-5 md:mb-24">View more packs</h1>
                    <h1 className="text-3xl font-bold text-center text-purple-800 mb-10">ATOM Services</h1>

                {/* Swiper JS */}
                    <div>
                        <Swiper autoplay={{ delay: 2500, }} navigation={true} modules={[Autoplay,Navigation]} className="mySwiper">
                                <SwiperSlide>
                                    <div className="container mx-auto">
                                        <div className="md:flex">
                                            <div className="bg-green-100 rounded-xl mb-10 mx-10 hidden md:block">
                                                <img src={HomeInternet1} alt=""/>
                                            <div>
                                                    <h1 className="text-lg md:text-3xl font-bold text-slate-900 md-5 mb-4 mx-5 px-2">Home Internet</h1>
                                                    <p className="max-w-md text-blue-800 text-sm md:font-semibold mb-4 mx-5 px-2">Enjoy ATOM Home Internet Services:Power Fiber - High Speed & Unlimited Internet Wireless +...</p>
                                                    <h1 className="flex items-center space-x-3 text-blue-800 font-bold text-xl mx-5 px-2">Find Out More<AiOutlineRight/></h1>
                                            </div>
                                            </div>

                                            <div className="bg-green-100 rounded-xl mb-10 mx-10">
                                                <img src={HomeInternet2} alt=""/>
                                                <div className="">
                                                    <h1 className="text-lg md:text-3xl font-bold text-slate-900 md-5 mx-5 px-2 mb-4">Gaming & Entertainment</h1>
                                                    <p className="max-w-md text-blue-800 text-sm md:font-semibold mb-4 mx-5 px-2">Explore our partner's games, install them and PLAY with our Myanmar's Best Data Network 4G SuperLTE+....</p>
                                                    <h1 className="flex items-center space-x-3 text-blue-800 font-bold text-lg md:text-xl mx-5 px-2 mt-5">Find Out More<AiOutlineRight/></h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="container mx-auto">
                                        <div className="md:flex">
                                            <div className="bg-green-100 rounded-xl mb-10 mx-10 hidden md:block">
                                                <img src={HomeInternet3} alt=""/>
                                            <div>
                                                    <h1 className="text-lg md:text-3xl font-bold text-slate-900 md-5 mb-4 mx-5 px-2">VoLTE</h1>
                                                    <p className="max-w-md text-blue-800 text-sm md:font-semibold mb-4 mx-5 px-2">Voice over Long-term Evolution(VoLTE) means making voice calls over a 4G/LTE network, rather than 2G or 3G +...</p>
                                                    <h1 className="flex items-center space-x-3 text-blue-800 font-bold text-xl mx-5 px-2">Find Out More<AiOutlineRight/></h1>
                                            </div>
                                            </div>

                                            <div className="bg-green-100 rounded-xl mb-10 mx-10">
                                                <img src={HomeInternet4} alt=""/>
                                                <div className="">
                                                    <h1 className="text-lg md:text-3xl font-bold text-slate-900 md-5 mx-5 px-2 mb-4">Gaming & Entertainment</h1>
                                                    <p className="max-w-md text-blue-800 text-sm md:font-semibold mb-4 mx-5 px-2">Explore our partner's games, install them and PLAY with our Myanmar's Best Data Network 4G SuperLTE+....</p>
                                                    <h1 className="flex items-center space-x-3 text-blue-800 font-bold text-lg md:text-xl mx-5 px-2 mt-5">Find Out More<AiOutlineRight/></h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <div className="container mx-auto">
                                        <div className="md:flex">
                                            <div className="bg-green-100 rounded-xl mb-10 mx-10 hidden md:block">
                                                <img src={HomeInternet1} alt=""/>
                                            <div>
                                                    <h1 className="text-lg md:text-3xl font-bold text-slate-900 md-5 mb-4 mx-5 px-2">Home Internet</h1>
                                                    <p className="max-w-md text-blue-800 text-sm md:font-semibold mb-4 mx-5 px-2">Enjoy ATOM Home Internet Services:Power Fiber - High Speed & Unlimited Internet Wireless +...</p>
                                                    <h1 className="flex items-center space-x-3 text-blue-800 font-bold text-xl mx-5 px-2">Find Out More<AiOutlineRight/></h1>
                                            </div>
                                            </div>

                                            <div className="bg-green-100 rounded-xl mb-10 mx-10">
                                                <img src={HomeInternet2} alt=""/>
                                                <div className="">
                                                    <h1 className="text-lg md:text-3xl font-bold text-slate-900 md-5 mx-5 px-2 mb-4">Gaming & Entertainment</h1>
                                                    <p className="max-w-md text-blue-800 text-sm md:font-semibold mb-4 mx-5 px-2">Explore our partner's games, install them and PLAY with our Myanmar's Best Data Network 4G SuperLTE+....</p>
                                                    <h1 className="flex items-center space-x-3 text-blue-800 font-bold text-lg md:text-xl mx-5 px-2 mt-5">Find Out More<AiOutlineRight/></h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="container mx-auto">
                                        <div className="md:flex">
                                            <div className="bg-green-100 rounded-xl mb-10 mx-10 hidden md:block">
                                                <img src={HomeInternet3} alt=""/>
                                            <div>
                                                    <h1 className="text-lg md:text-3xl font-bold text-slate-900 md-5 mb-4 mx-5 px-2">VoLTE</h1>
                                                    <p className="max-w-md text-blue-800 text-sm md:font-semibold mb-4 mx-5 px-2">Voice over Long-term Evolution(VoLTE) means making voice calls over a 4G/LTE network, rather than 2G or 3G +...</p>
                                                    <h1 className="flex items-center space-x-3 text-blue-800 font-bold text-xl mx-5 px-2">Find Out More<AiOutlineRight/></h1>
                                            </div>
                                            </div>

                                            <div className="bg-green-100 rounded-xl mb-10 mx-10">
                                                <img src={HomeInternet4} alt=""/>
                                                <div className="">
                                                    <h1 className="text-lg md:text-3xl font-bold text-slate-900 md-5 mx-5 px-2 mb-4">Gaming & Entertainment</h1>
                                                    <p className="max-w-md text-blue-800 text-sm md:font-semibold mb-4 mx-5 px-2">Explore our partner's games, install them and PLAY with our Myanmar's Best Data Network 4G SuperLTE+....</p>
                                                    <h1 className="flex items-center space-x-3 text-blue-800 font-bold text-lg md:text-xl mx-5 px-2 mt-5">Find Out More<AiOutlineRight/></h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>
        </div>

        <div>
            <div>
                <h1 className="text-blue-900 font-bold text-2xl text-center mb-10">Need Help?</h1>
                  
                <div className="md:hidden">
                    <div className="flex space-x-5 mb-8 mx-16">
                        <div className="border rounded-md">
                            <img src={Help1} alt=""/>
                            <p className="text-xl font-bold text-blue-900 py-3">FAQ</p>
                        </div>
                        <div>
                            <img src={Help2} alt=""/>
                            <p className="text-xl font-bold text-blue-900 py-3">Store Location</p>
                        </div>

                    </div>


                    <div className="flex space-x-5 mx-16">
                       <div>
                        <img src={Help3} alt=""/>
                            <p className="text-xl font-bold text-blue-900 py-3">USSD Info</p>
                       </div>
                        <div>
                        <img src={Help4} alt=""/>
                        <p className="text-xl font-bold text-blue-900 py-3">Feedback Form</p>
                        </div>
                    </div>

                   
                    

                </div>
                {/* Image Hidden */}
                <div className="container mx-60 hidden md:block mb-10">
                    <div className="flex space-x-7">
                        <div className="bg-cyan-50 rounded-xl drop-shadow-2xl">
                            <img src={Help1} alt=""/>
                            <p className="text-xl font-bold text-center text-blue-900 py-3">FAQ</p>
                        </div>
                    <div className="bg-cyan-50 rounded-xl drop-shadow-2xl"> 
                        <img src={Help2} alt=""/>
                            <p className="text-xl font-bold text-center text-blue-900 py-3">Store Location</p>
                        </div>
                        <div className="bg-cyan-50 rounded-xl drop-shadow-2xl">
                            <img src={Help3} alt=""/>
                            <p className="text-xl font-bold text-center text-blue-900 py-3">USSD Info</p>
                        </div>
                        <div className="bg-cyan-50 rounded-xl drop-shadow-2xl">
                            <img src={Help4} alt=""/>
                            <p className="text-xl font-bold text-center text-blue-900 py-3">Feedback Form</p>
                        </div>

                    </div>
                </div>

                <div className="container mx-auto mt-20">
                <hr
                        style={{
                        background: "#6F38C5",
                        height: "2px",
                        border: "none",
                        borderRadius: "10px",
                        }}
                        />
                        
                        <hr
                        style={{
                        background: "#47B5FF",
                        height: "1px",
                        border: "none",
                        borderRadius: "10px",
                        }}
                        />
                </div>
            </div>
        </div>

        <div>
            <div className="mb-10">
                <h1 className="text-center mx-auto text-lg md:max-w-3xl max-w-sm md:text-3xl font-bold text-blue-950 mb-6">Beyond Better: Recommended Products & Services</h1>

                    <div className="grid grid-cols-2 md:grid-cols-6">
                        <div className="md:mx-6 mx-9">
                            <img src={Packages1} alt="" className="mb-3 w-96 md:w-full"/>
                            <p className="text-blue-600 text-xl font-bold underline underline-offset-4 hover:text-red-500 mb-3">See more</p>
                        </div>
                        <div className="md:mx-6 mx-9">
                            <img src={Packages2} alt="" className="mb-3 w-96 md:w-full"/>
                            <p className="text-blue-600 text-xl font-bold underline underline-offset-4 hover:text-red-500 mb-3">See more</p>
                        </div>
                        <div className="md:mx-6 mx-9">
                            <img src={Packages3} alt="" className="mb-3 w-96 md:w-full"/>
                            <p className="text-blue-600 text-xl font-bold underline underline-offset-4 hover:text-red-500 mb-3">See more</p>
                        </div>
                        <div className="md:mx-6 mx-9">
                            <img src={Packages4} alt="" className="mb-3 w-96 md:w-full"/>
                            <p className="text-blue-600 text-xl font-bold underline underline-offset-4 hover:text-red-500 mb-3">See more</p>
                        </div>
                        <div className="md:mx-6 mx-9">
                            <img src={Packages5} alt="" className="mb-3 w-96 md:w-full"/>
                            <p className="text-blue-600 text-xl font-bold underline underline-offset-4 hover:text-red-500 mb-3">See more</p>
                        </div>
                        <div className="md:mx-6 mx-9">
                            <img src={Packages6} alt="" className="mb-3 w-96 md:w-full"/>
                            <p className="text-blue-600 text-xl font-bold underline underline-offset-4 hover:text-red-500 mb-3">See more</p>
                        </div>
                    </div>
        
            </div>

            <div className="bg-cyan-50 py-10 shadow-2xl">
                <h1 className="text-xl md:text-2xl  font-bold text-blue-900 mx-auto text-center max-w-sm md:max-w-2xl mb-5">Download ATOM Store App and enjoy the offers</h1>
               <div className="container mx-6 md:mx-24 ">
                    <div className="md:flex items-center">
                    
                    <div>
                        <img src={Phone} alt="" className="mx-24 mb-5"/>
                    </div>
                       
                    <div className="mx-6">
                            <h1 className="text-blue-900 md:max-w-lg font-medium text-lg">Manage your ATOM account, subscribe to plans and services, experience rich features all with easy access from this application.</h1>
                            <h1 className="flex items-center space-x-5 text-xl font-bold text-blue-900 mb-5">Find Out More <BiChevronRight/> </h1>
                            <h1 className="text-lg font-bold text-purple-800  mb-5">Download ATOM Store App</h1>
                            <div className="flex space-x-5 mb-5">
                                    <img src={App1} alt="" className="w-36"/>
                                    <img src={App2} alt="" className="w-36"/>
                            </div>
                            <div className="flex space-x-5">
                                    <img src={App3} alt="" className="w-36"/>
                                    <img src={App4} alt="" className="w-36"/>
                            </div>
                    </div>
                 
                    </div>
               </div>
            </div>
        </div>

        <div className="mt-10">
            <h1 className="text-3xl text-center text-blue-900 font-bold mb-10">Share</h1>
            <div className="flex items-center justify-center space-x-5 md:space-x-14">
                <img src={social1} alt="" className="md:w-12 w-8"/>
                <img src={social2} alt="" className="md:w-12 w-8"/>
                <img src={social3} alt="" className="md:w-12 w-8"/>
                <img src={social4} alt="" className="md:w-12 w-8"/>
                <img src={social5} alt="" className="md:w-12 w-8"/>
                <img src={social6} alt="" className="md:w-12 w-8"/>
            </div>
        </div>

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
  );
};

export default Home;
