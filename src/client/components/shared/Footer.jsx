import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail,  } from "react-icons/io";
import logo from "/logo.svg"
import ScrollToTop from 'react-scroll-to-top';
import MyIcon from './MyIcon';

const Footer = () => {
    return (

      <footer  className="relative mt-[140px] z-10 shadow-inner pt-20 pb-10 lg:pt-[120px]  lg:pb-20 px-3 ">
        <div className="container mx-auto">
          <div className="-mx-4 grid md:grid-cols-4">
            <div className="w-full px-4">
              <div className="mb-10 w-full">
              <Link className="flex items-center gap-1">
                <img className="h-[35px]" src={logo} alt="" /> <h3 className="text-2xl font-bold">InstroLearnCamp</h3>
              </Link>
                
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold">Pages</h4>
                <ul>
                  <li>
                    <Link
                      to="/"
                      className="text-body-color hover:text-main mb-2 inline-block text-base leading-loose"
                    >
                      
                    Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="text-body-color hover:text-main mb-2 inline-block text-base leading-loose"
                    >
                       Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="text-body-color hover:text-main mb-2 inline-block text-base leading-loose"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="text-body-color hover:text-main mb-2 inline-block text-base leading-loose"
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4">
            <div>
                  <h4 className="text-dark mb-9 text-lg font-semibold">
                      Follow Us
                  </h4>
                  <ul className="mt-4">
                      <li>
                          <Link
                              to="#"
                              className="text-base leading-6  "
                          >
                              Facebook
                          </Link>
                      </li>
                      <li className="mt-4">
                          <Link
                              to="#"
                              className="text-base leading-6  "
                          >
                              Instagram
                          </Link>
                      </li>
                      <li className="mt-4">
                          <Link
                              to="#"
                              className="text-base leading-6  "
                          >
                              Twitter
                          </Link>
                      </li>
                  </ul>
              </div>
            </div>
            <div className="w-full px-4 ">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-9 text-lg font-semibold">Contact us</h4>
                <ul>
                  <li className='flex items-center gap-3'>                  
                    <BsFillTelephoneFill/>                  
                    <span>+012 (345) 678 99</span>               
                  </li>
                  <li className='flex items-center gap-3 mt-3'>  
                    <IoIosMail/>                   
                    contact@upar-edu-toy.com                    
                  </li>
                  
                 
                </ul>
              </div>
            </div>
            
          </div>
        </div>
        <div className='container text-center'>
        <hr className='w-full h-[2px] bg-[#4a4a4a]' />
          <p className='mt-4 text-[#4a4a4a]'> © 2023 InstroLearnCamp.com Website. All rights reserved. </p>
         
        </div>
        <ScrollToTop smooth top={1000} component={<MyIcon />} />
      </footer>
   
      


    );
};

export default Footer;