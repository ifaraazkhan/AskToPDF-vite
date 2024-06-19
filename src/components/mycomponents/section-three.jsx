import React,{useEffect, useState} from 'react';

const SectionThree = () => {
    return ( 
        <>

<section>
            <div class="pt-36">
                <div class="mx-auto px-6 max-w-6xl text-gray-500">
                    <div class="grid gap-12 md:gap-0 md:grid-cols-2 lg:grid-cols-5 items-center lg:gap-24">
                        <div class="lg:col-span-2">
                            <div class="md:pr-6 lg:pr-0">
                                <h2 class="text-3xl text-gray-950 dark:text-white font-semibold">Get Ready for more AI tools in future</h2>
                                <p class="mt-6 text-gray-700 dark:text-gray-300">I will be developing more AI tools in future, Follow me for exclusive AI updates, tech insights, and behind-the-scenes stories: </p>
                            </div>
                            <ul class="mt-8 divide-y border-y border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] divide-[--ui-light-border-color] dark:divide-[--ui-dark-border-color] *:py-3 *:flex *:items-center *:gap-3 text-gray-700 dark:text-gray-300">
                                <li>
                                    <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g fill="none" stroke="currentColor" stroke-width="1.5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m7 9l5 3.5L17 9"/>
                                            <path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/>
                                        </g>
                                    </svg>
                                    Connect on Linkedin
                                </li>
                                <li>
                                    <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"/>
                                        <path fill="currentColor" fill-rule="evenodd" d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252zM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42z" clip-rule="evenodd"/>
                                    </svg>
                                   Follow on Medium
                                </li>
                                <li>
                                    <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.08h2.19a.52.52 0 0 0 .45-.27l1.8-3.6a.49.49 0 0 1 .49-.27a.48.48 0 0 1 .43.35l2.23 7.42a.5.5 0 0 0 .46.36a.5.5 0 0 0 .45-.32l1.37-3.35a.51.51 0 0 1 .47-.32h2.66"/>
                                    </svg>
                                    Subscribe Email
                                </li>
                                <li >
                                    <svg class="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="m6.75 21l-.25-2.2l2.85-7.85q.375.35.813.588t.937.362l-2.75 7.55zm10.5 0l-1.6-1.55l-2.75-7.55q.5-.125.938-.363t.812-.587l2.85 7.85zM12 11q-1.25 0-2.125-.875T9 8q0-.975.563-1.737T11 5.2V3h2v2.2q.875.3 1.438 1.063T15 8q0 1.25-.875 2.125T12 11m0-2q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9"/>
                                    </svg>
                                    Fill pre-launch forms on Landing page
                                </li>
                            </ul>
                        </div>
                        <div class=" lg:col-span-3 border bg-white dark:bg-[--card-dark-bg] rounded-[--card-border-radius] border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                            <div class="flex gap-2 py-6 *:size-2.5 *:rounded-full px-[--card-padding]">
                                <div class="bg-[#f87171]"></div>
                                <div class="bg-[#fbbf24]"></div>
                                <div class="bg-[#a3e635]"></div>
                            </div>
                            <div class="flex gap-3 px-[--card-padding] text-gray-600 dark:text-gray-400 *:aspect-square *:border *:p-4 *:rounded-[calc(var(--card-border-radius)/2)] *:border-[--ui-light-border-color] dark:*:border-[--ui-dark-border-color]">
                               
                               
                               
                               <a  href="https://www.linkedin.com/in/faraazmohdkhan/" target="_blank">
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="144" height="144" viewBox="0 0 48 48">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>
                                </div>
                                </a>

                                <a href="https://faraazmohdkhan.medium.com" target="_blank">
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="128" height="128" viewBox="0 0 72 72" className="dark:fill-white">
<path d="M45.049,14C57.06,14,58,14.94,58,26.951v18.098C58,57.06,57.06,58,45.049,58H26.951C14.94,58,14,57.06,14,45.049V26.951	C14,14.94,14.94,14,26.951,14H45.049z M29.713,44.151c4.502,0,8.151-3.649,8.151-8.151c0-4.502-3.649-8.151-8.151-8.151	c-4.502,0-8.151,3.649-8.151,8.151C21.562,40.502,25.212,44.151,29.713,44.151z M42.713,43.757c2.228,0,4.034-3.473,4.034-7.757	c0-4.284-1.806-7.757-4.034-7.757c-2.228,0-4.034,3.473-4.034,7.757C38.679,40.284,40.485,43.757,42.713,43.757z M48.98,42.928	c0.775,0,1.403-3.102,1.403-6.928s-0.628-6.928-1.403-6.928c-0.775,0-1.403,3.102-1.403,6.928S48.205,42.928,48.98,42.928z"></path>
</svg>
                                </div>
                                </a>

                                <a href="mailto:faraazmohdkhan@gmail.com" target="_blank">
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="144" height="144" viewBox="0 0 48 48">
<path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
</svg>
                                </div>
                                </a>
                               
                               
                            </div>
                            <div>
                                <div>
                                    <pre class="px-[--card-padding]">
                                        <code class="text-sm font-mono">
                                            <pre> </pre>
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</section>




        </>
     );
}

export default SectionThree;