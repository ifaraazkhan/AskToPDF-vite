import { SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import React,{useEffect, useState} from 'react';
import { ModeToggle } from '../mode-toggle';
import logoLite from '../../assets/asktopdf-lite.png';
import logoDark from '../../assets/asktopdf-dark.png';

const AuthHeader = () => {
    return ( 
        <>
    <header>
        <nav class="fixed overflow-hidden z-20 w-full bg-white/80 dark:bg-gray-950/0 dark:shadow-md rounded-b-lg dark:shadow-gray-950/10 border-b border-[--ui-light-border-color] border-x dark:border-[--ui-dark-border-color] backdrop-blur-2xl">
            <div class="px-6 m-auto max-w-6xl 2xl:px-0">
                <div class="flex flex-wrap items-center justify-between py-2 sm:py-4">
                    <div class="w-full items-center flex justify-between lg:w-auto">
                        <a href="/" aria-label="asktopdf logo">
                        <span class="flex justify-start">
                            <div> <span style={{fontWeight:"800", fontSize:"25px"}}>AskTo</span></div>
                            <div className='hidden dark:block ml-1'> <img src={logoLite} style={{width:"45px"}}/></div>
                            <div className='block dark:hidden ml-1'> <img src={logoDark} style={{width:"45px"}}/></div>
                            
                        </span>
                       
                        <div class="flex lg:hidden">
                            <button aria-label="humburger" id="menu" class="relative border bordeer-gray-950/30 dark:border-white/20 size-9 rounded-full transition duration-300 active:scale-95">
                                <div aria-hidden="true" id="line1" class="m-auto h-[1.5px] w-4 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"></div>
                                <div aria-hidden="true" id="line2" class="m-auto mt-1.5 h-[1.5px] w-4 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"></div>
                            </button>
                        </div>
                        </a>
                    </div>
                    <div class="w-full h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap">
                        <div class="mt-6 text-gray-600 dark:text-gray-300 md:-ml-4 lg:pr-4 lg:mt-0">
                          
                        </div>

                        <div class="w-full space-y-2 gap-2 pt-6 pb-4 lg:pb-0 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] items-center flex flex-col lg:flex-row lg:space-y-0 lg:w-fit lg:border-l lg:border-t-0 lg:pt-0 lg:pl-2">
                        <UserButton afterSignOutUrl='/'/>
                       
                            <ModeToggle/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
        </>
     );
}

export default AuthHeader;