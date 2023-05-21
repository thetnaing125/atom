import Atom from "../../assets/img/logo.webp";
import AboutOne from "../../assets/img/about-img-1.webp";


import AboutPostpaid from "../../assets/img/About-Postpaid2.png";
import AboutPrivate from "../../assets/img/About-Private3.png";
import AboutPagodas from "../../assets/img/About-Pagodas4.png";
import {AiOutlineRight} from "react-icons/ai";

import Email from "../../assets/img/business_email_icon.png";
import Appointment from "../../assets/img/business_appointment_icon.png";
import Dial from "../../assets/img/business_phone_icon.png";

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




const About = () =>{
    return(
        <div>
                <div className="bg-indigo-100 flex items-center justify-center">
                    <img src={Atom} alt="" className="w-24 "/>
                </div>

                <div>
                    <img src={AboutOne} alt=""/>
                </div>

                <div className="flex items-center space-x-4 mx-5 mt-6">
                    <h1 className="text-sm font-bold text-slate-800">ATOM</h1>
                    <AiOutlineRight className="text-red-900 font-extrabold"/>
                    <h1 className="text-sm font-bold text-slate-800">Business</h1>
                </div>

                <div className="mt-10">
                    <h1 className="text-3xl font-bold text-slate-950 text-center mb-3">GROW BEYOND BETTER WITH US</h1>
                    <div className="flex item-center justify-center">
                    <p className="text-lg text-slate-900 font-medium max-w-xl text-center md:max-w-2xl mx-3">
                        With more than 8300 network sites nationwide covering over 300 townships, ATOM serves more than 18 million customers in Myanmar through its award-winning network supported by 2G-3G-4G technology. We are committed to responsible business conduct and driven by the ambition empowering societies. ATOM Business provides innovative solutions that will help your business to grow and take your business to a new height. Make your workday more productive, cost-efficient, and stay ahead in the technology game by partnering with ATOM, as your trusted business partner.
                    </p>
                    </div>
                </div>

                <div className="mt-10">
                    <h1 className="text-3xl font-bold text-slate-950 text-center mb-3">BUSINESS SOLUTIONS</h1>
                    <div className="flex item-center justify-center">
                    <p className="text-lg text-slate-950 font-medium text-center mx-3">
                    Whatever your business needs, it’s our business to provide you with the right product and service.
                    </p>
                    </div>
                </div>

                <div className="mb-20">
                    <h1 className="text-slate-900 font-bold text-2xl mb-10 mt-10 text-center underline">Mobile Services</h1>
                                    
                            <div className="grid md:grid-cols-3">
                                <div className="w-80 border bg-black mb-5 mx-20">
                                        <img src={AboutPagodas} alt="" className="w-96"/>
                                        <h1 className="text-white text-2xl mx-2 mb-2 mt-4">Prepaid</h1> 
                                        <p className="text-md max-w-sm text-white mx-2 mb-6">ATOM's “Special Biz” business mobile plan is the best suited plan for small and medium businesses</p> 
                                        <div className="flex items-center space-x-2 mx-2 mb-4">
                                        <p className="text-white text-xl">Find out more</p>
                                        <AiOutlineRight className="text-white"/>
                                        </div> 
                                </div>

                                <div className="w-80 border bg-black mb-5 mx-20">
                                        <img src={AboutPostpaid} alt="" className="w-96"/>
                                        <h1 className="text-white text-2xl mx-2 mb-2 mt-4">Postpaid</h1> 
                                        <p className="text-md max-w-sm text-white mx-2 mb-6">Business mobile plan for large enterprises which gives you control and great value for money</p> 
                                        <div className="flex items-center space-x-2 mx-2 mb-4">
                                        <p className="text-white text-xl">Find out more</p>
                                        <AiOutlineRight className="text-white"/>
                                        </div> 
                                </div>
                            
                                <div className="w-80 border bg-black mb-5 mx-20">
                                        <img src={AboutPrivate} alt="" className="w-96"/>
                                        <h1 className="text-white text-2xl mx-2 mb-2 mt-4">Bulk Data</h1> 
                                        <p className="text-md max-w-sm text-white mx-2 mb-6">Data with a private network with the Telecom which has the widest coverage in Myanmar</p> 
                                        <div className="flex items-center space-x-2 mx-2 mb-4">
                                        <p className="text-white text-xl">Find out more</p>
                                        <AiOutlineRight className="text-white"/>
                                        </div> 
                                </div>

                            </div>
                            <h1 className="text-slate-800 font-medium text-center">* Please note that new B2B SIM cards issued will be subject to 20,000 Ks tax upon activation and all internet services will be subject to Commercial Tax of 15%.</h1>
                        

                </div>

                <div className="mb-20">
                    <h1 className="text-3xl font-bold text-center mb-3">CONTACT US</h1>
                    <div className="md:hidden">
                        <div className="flex md:block md:space-x-0 space-x-3 md:mx-0 mx-16 rounded-xl">
                            <div className="w-40 border shadow-2xl">
                                <img className="mb-2 mx-14 mt-5" src={Email} alt=""/>
                                <h1 className="mb-5 mx-14 text-blue-900 font-medium">Email US</h1>
                            </div>

                            <div className="w-40 border rounded-xl shadow-2xl">
                                <img className="mb-2 mx-14 mt-5" src={Appointment} alt=""/>
                                <h1 className="mb-5 text-center text-blue-900 font-medium">Make An Appointment</h1>
                            </div>
                        </div>

                        <div className="w-40 border mt-3 md:mx-0 mx-36 rounded-xl shadow-2xl">
                            <img className="mb-2 mx-14 mt-5" src={Dial} alt=""/>
                            <h1 className="mb-5 mx-14  text-blue-900 font-medium">Dial 8080</h1>
                        </div>
                    </div>

                    <div className="mx-96">
                        <div className="hidden md:flex space-x-7">

                                <div className="w-40 border rounded-xl mb-3 shadow-2xl">
                                            <img className="mb-6 mx-14 mt-5" src={Email} alt=""/>
                                            <h1 className="mb-5 text-center text-blue-900 font-medium">Email US</h1>
                                </div>

                                <div className="w-40 border rounded-xl mb-3 shadow-2xl">
                                    <img className="mb-6 mx-14 mt-5" src={Appointment} alt=""/>
                                    <h1 className="mb-5 text-center text-blue-900 font-medium">Make An Appointment</h1>
                                </div>

                                <div className="w-40 border rounded-xl mb-3 shadow-2xl">
                                        <img className="mb-6 mx-14 mt-5" src={Dial} alt=""/>
                                        <h1 className="mb-5 text-center text-blue-900 font-medium">Dial 8080</h1>
                                </div>

                                

                            
                        </div>
                    </div>

                </div>

                <div className="mb-36">
                    <div>
                            <section className="rounded-xl mx-6 md:mx-96 bg-slate-50 shadow-2xl">
                                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                    <p className="mb-8 lg:mb-16 font-bold text-center text-slate-950 uppercase sm:text-xl">Connect with us anytime for queries!</p>
                                    <form action="#" className="space-y-8">
                                        <div>
                                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-900">Name</label>
                                            <input type="email" id="email" className="shadow-sm bg-lime-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-cyan-50 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required></input>
                                        </div>

                                        <div>
                                            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-900">Email</label>
                                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-lime-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-cyan-50 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required></input>
                                        </div>

                                        <div>
                                            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-900">Phone</label>
                                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-cyan-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required></input>
                                        </div>
                                        <div class="sm:col-span-2">
                                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-900">Your message</label>
                                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-cyan-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                        </div>
                                        <button type="submit" className="block p-3 text-sm w-full hover:bg-slate-950 font-medium text-center text-white bg-blue-700 rounded-lg bg-primary-700 sm:w-full hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">SUBMIT</button>
                                        
                                    </form>
                                </div>
                            </section>
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
export default About;