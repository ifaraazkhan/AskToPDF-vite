import { SignInButton, SignUpButton,SignedOut,SignedIn } from '@clerk/clerk-react';
import React,{useEffect, useState} from 'react';
import { ModeToggle } from '../mode-toggle';
import logoLite from '../../assets/asktopdf-lite.png';
import logoDark from '../../assets/asktopdf-dark.png';

const Header = () => {
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
                        <div class="flex lg:hidden">
                            <button aria-label="humburger" id="menu" class="relative border bordeer-gray-950/30 dark:border-white/20 size-9 rounded-full transition duration-300 active:scale-95">
                                <div aria-hidden="true" id="line1" class="m-auto h-[1.5px] w-4 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"></div>
                                <div aria-hidden="true" id="line2" class="m-auto mt-1.5 h-[1.5px] w-4 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"></div>
                            </button>
                        </div>
                    </div>
                    <div class="w-full h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap">
                        <div class="mt-6 text-gray-600 dark:text-gray-300 md:-ml-4 lg:pr-4 lg:mt-0">
                          
                        </div>

                        <div class="w-full space-y-2 gap-2 pt-6 pb-4 lg:pb-0 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] items-center flex flex-col lg:flex-row lg:space-y-0 lg:w-fit lg:border-l lg:border-t-0 lg:pt-0 lg:pl-2">
                        <SignedOut>
                        <button class="w-full h-9 lg:w-fit group flex items-center rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 *:disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border dark:disabled:border-gray-800 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-800 hover:bg-gray-100 active:bg-gray-200/75 dark:text-gray-300 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15 lg:text-sm lg:h-8 px-3.5 justify-center">
                                <span><SignInButton mode='modal' redirectUrl='/app'/></span>
                            </button>
                            <button class="w-full h-9 lg:w-fit group flex items-center relative border rounded-[--btn-border-radius] *:select-none [&>*:not(.sr-only)]:relative before:rounded-[calc(var(--btn-border-radius)-1px)] before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:before:border-0 dark:before:border-t dark:before:shadow-inner dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 disabled:dark:*:text-gray-700 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none dark:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-200 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200 lg:text-sm lg:h-8 px-3 justify-center">
                                <span><SignUpButton mode='modal' redirectUrl='/app'/></span>
                            </button>
                        </SignedOut>
                        <SignedIn>
                             <div>
                             <a href="/app" class="bg-blue-500 hover:bg-blue-700 text-white w-full h-9 lg:w-fit group flex items-center rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 *:disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border dark:disabled:border-gray-800 lg:text-sm lg:h-8 px-3.5 justify-center">
                                <span>Goto App</span>
                            </a>
                            
                                 </div>
                            </SignedIn>

                            
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

export default Header;