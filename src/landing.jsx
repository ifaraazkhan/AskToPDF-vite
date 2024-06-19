import { useState } from 'react'
import { ModeToggle } from './components/mode-toggle'
import HeroSection from './components/mycomponents/herosection'
import { SignInButton, SignedIn, SignUpButton } from "@clerk/clerk-react"
import { Button } from './components/ui/button';
import Header from './components/mycomponents/header';
import SectionOne from './components/mycomponents/sectionone';
import SectionTwo from './components/mycomponents/section-two';
import SectionThree from './components/mycomponents/section-three';



function Landing() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="bg-white dark:bg-gray-900 dark:before:fixed dark:before:-z-50 dark:before:inset-0 dark:before:bg-gray-950/50">
        <Header />
        <main class="overflow-hidden">
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <footer class="rounded-xl border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
            <div class="max-w-6xl mx-auto space-y-16 px-6 py-16 text-gray-600 2xl:px-0">
              <div class="flex flex-wrap items-center justify-between gap-4 border-b pb-8 border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                <div class="flex justify-start">
                  <div>
                    <p className="mt-2 dark:text-slate-200">Developed with</p>
                  </div>
                  <div>
                    <img
                      className="ml-2"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACtklEQVR4nO1Zv4sTQRQeBUGwEBsVf6GCnVqYfW/jEYh5b2MjynWnqJ2IoHcnFlpqLTaW4o9OiwMbRbSx8x8QFA6uFMVGudybvShebmWSeHfebpLJZpPdg/3ga5blzfe9eTM781apHDly5Mg8Fr3CAWGYFMJ3mnFWCLUw1IXgqxC+1YS362X3oG28ehUPaYI7Jp4QfmvFQt2ObZ7dWDzt7B9YuF/GfULwVAiWNGPQjc13CJ93G9gkQjO8sI0nDE98Ku6NJ55wXDNIr4HChAVhZ2J9PKnghbjx/Ip7ri/xQu60EDb6H6ydPcZlIby5Eo/hlnkWOx5hQximrDM/iPj/TLAzIeSeH0S8XmOi50yYmo83zZ2nv8Xk4vne2J7OpcPwLLnBhkNhfNx5q7TYHdKmECyZSonK/lTa4rS1CbweNmA+SBkQp63KCN6EDGiGubSFaXvORhlIcPcZNkHCBghq6QtDOxLOR83A59SFsTU/RRjAmQwICyw5E7WNXsyAsMCGRmvIwE+vsH0jLGQh9OdLpR0hA61vAdxPW6DuzQeR4psGqid3Jnv4Sjz7Wpdht+oGn+BaZg0wTKpeCJTapBnepy1Wryfhh+Cu2tzTQGstuLuE4Uvqovkf4Xvfl3yfCmi6BWmLF8LfC55b6kv8qgnnrDD8SVF8w1xJ1SAQci4lcUfuWzzjss/u1YHEr84Ejo+ynKTZY4IrKkkIu6fMKXAEZaO1h2cSFb9iouocHeruRPCjVnHG1DBheqCa4eMQDMzWPPeIGgWCcnmrJnyYXObxpTlMqlFDV/Byu6sct95/mTamShPiFY+ZG1KcktFUPKGygKBQ2CIM96za5s3GLzwKqse3qazB97DYzGxHAzAX+1gw0tkgd3rt7c6cZ8yiz2TWu/1GEsZXQvi6zs7hji/myJEjh9rI+Av6K/Bt8zMD1QAAAABJRU5ErkJggg=="
                    ></img>
                  </div>
                </div>

                <div class="flex gap-3">
                  <a
                    href="https://github.com/ifaraazkhan"
                    target="_blank"
                    aria-label="github"
                    class="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 30 30"
                      className="dark:fill-white"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/faraazmohdkhan/"
                    target="_blank"
                    aria-label="twitter"
                    class="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      className="dark:fill-white"
                    >
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://faraazmohdkhan.medium.com"
                    target="_blank"
                    aria-label="medium"
                    class="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      className="dark:fill-white"
                    >
                      <path d="M 3 6 L 7 11.091797 L 7 35.285156 L 1 43 L 15 43 L 9 35.285156 L 9 13.75 L 22 43 L 21.998047 43.013672 L 34 13.544922 L 34 39 L 30 43 L 47 43 L 43 39 L 42.972656 10.503906 L 46.863281 6.0136719 L 34.845703 6.0136719 L 25.605469 28.744141 L 15.496094 6 L 3 6 z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

export default Landing
