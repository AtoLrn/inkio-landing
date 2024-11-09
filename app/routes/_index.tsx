import { MetaFunction } from '@remix-run/node'



export const meta: MetaFunction = () => {
	return [{
		title: 'Inkio | Presentation'
	}]
}




export default function Home() {
	return <main className="w-full flex flex-col relative">
 <header className="fixed w-full">
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="#" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white font-important">Inkio</span>
                </a>
                <div className="flex items-center lg:order-2">
                    
                    <a href="https://app.inkio.co/login" className="text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 focus:outline-none dark:focus:ring-fuchsia-800">Login</a>
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-fuchsia-700 rounded lg:bg-transparent lg:text-fuchsia-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        {/* <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-fuchsia-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-fuchsia-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                        </li> */}

                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <section className="bg-white dark:bg-gray-900 min-h-96">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"><span className='font-important text-4xl md:text-5xl'>Inkio</span> ease<br/>your booking and more</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
					This platform is made for tattoo artist that want to have a better structure in their work. From booking with flash to studio management, this platform cover all the needs.
					</p>
                <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    
                    <a href="https://app.inkio.co/onboarding/" className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
						Get Started
					</a>
                </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg overflow-hidden shadow-xl border border-zinc-100">
                <img src="/assets/homepage.png" alt="hero image"/>
            </div>                
        </div>
    </section>
    
    

    
    
    <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Features that matters the most</h2>
                    <p className="mb-8 font-light lg:text-xl">
						Deliver your customer a great experience, from project request to D-Day. Increase the trust your customer have in you.
					</p>
                    
                    <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li className="flex space-x-3">
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-fuchsia-500 dark:text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Flash Regisy</span>
                        </li>
                        <li className="flex space-x-3">
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-fuchsia-500 dark:text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Studio management and availabilities</span>
                        </li>
                        <li className="flex space-x-3">
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-fuchsia-500 dark:text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Booking Management</span>
                        </li>
						<li className="flex space-x-3">
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-fuchsia-500 dark:text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Project Management</span>
                        </li>
						<li className="flex space-x-3">
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-fuchsia-500 dark:text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">E Consent Form</span>
                        </li>
                    </ul>
                    <p className="mb-8 font-light lg:text-xl">Deliver great customer experience - and save time to rest.</p>
                </div>
                <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex rounded-lg overflow-hidden shadow-xl border border-zinc-100" src="/assets/designs.png" alt="Dashboard picture of design registry"/>
            </div>
            
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex rounded-lg overflow-hidden shadow-xl border border-zinc-100" src="/assets/studios.png" alt="feature image 2"/>
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">You travel? No worries!</h2>
                    <p className="mb-8 font-light lg:text-xl">
						The life of a tattoo artist is complexe and move alot. You travel? We do with you and enable you to take appointement in the world
					</p>
                    
                    <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li className="flex space-x-3">
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-fuchsia-500 dark:text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Multiples studios</span>
                        </li>
                        <li className="flex space-x-3">
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-fuchsia-500 dark:text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Studio specific availabilities</span>
                        </li>
                        <li className="flex space-x-3">
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-fuchsia-500 dark:text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Schedules</span>
                        </li>
                        <li className="flex space-x-3">
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-fuchsia-500 dark:text-fuchsia-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Availability notification</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
      </section>
    
    
    {/* <section className="bg-white dark:bg-gray-900">
        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
            <div className="col-span-2 mb-8">
                <p className="text-lg font-medium text-fuchsia-600 dark:text-fuchsia-500">Trusted Worldwide</p>
                <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">Trusted by over 600 million users and 10,000 teams</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</p>
                <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <a href="#" className="inline-flex items-center text-base font-medium text-fuchsia-600 hover:text-fuchsia-800 dark:text-fuchsia-500 dark:hover:text-fuchsia-700">
                        Explore Legality Guide
                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </a>
                    </div>
                    <div>
                      <a href="#" className="inline-flex items-center text-base font-medium text-fuchsia-600 hover:text-fuchsia-800 dark:text-fuchsia-500 dark:hover:text-fuchsia-700">
                          Visit the Trust Center
                          <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </a>
                      </div>
                </div>
            </div>
            <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                <div>
                    <svg className="w-10 h-10 mb-2 text-fuchsia-600 md:w-12 md:h-12 dark:text-fuchsia-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">99.99% uptime</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">For Landwind, with zero maintenance downtime</p>
                </div>
                <div>
                    <svg className="w-10 h-10 mb-2 text-fuchsia-600 md:w-12 md:h-12 dark:text-fuchsia-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">600M+ Users</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">Trusted by over 600 milion users around the world</p>
                </div>
                <div>
                    <svg className="w-10 h-10 mb-2 text-fuchsia-600 md:w-12 md:h-12 dark:text-fuchsia-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">100+ countries</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">Have used Landwind to create functional websites</p>
                </div>
                <div>
                    <svg className="w-10 h-10 mb-2 text-fuchsia-600 md:w-12 md:h-12 dark:text-fuchsia-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                    <h3 className="mb-2 text-2xl font-bold dark:text-white">5+ Million</h3>
                    <p className="font-light text-gray-500 dark:text-gray-400">Transactions per day</p>
                </div>
            </div>
        </div>
      </section> */}
    
    
    {/* <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
                <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                </svg> 
                <blockquote>
                    <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">"Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                    </div>
                </figcaption>
            </figure>
        </div>
      </section> */}
    
    
    <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
            <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">A single subscription to unlock everything</h2>
                <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-1 sm:gap-6 xl:gap-10 lg:space-y-0">
                
                <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold">Essentials</h3>
                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Subscription for the small ang big tattoo artist</p>
                    <div className="flex items-baseline justify-center my-8">
                        <span className="mr-2 text-5xl font-extrabold">29€</span>
                        <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    
                    <ul  className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            <span><span className="font-semibold">All</span> the features we propose</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            <span>No setup, or hidden fees</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            <span>Support <span className="font-semibold">FR | EN | DE</span></span>
                        </li>

                    </ul>
                    <a href="https://app.inkio.co/onboarding/" target='_blank' className="text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-4 focus:ring-fuchsia-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-fuchsia-900" rel="noreferrer">Get started</a>
                </div>
                

                

            </div>
        </div>
      </section>
    
    
    {/* <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">Frequently asked questions</h2>
            <div className="max-w-screen-md mx-auto">
                <div id="accordion-flush" data-accordion="collapse" data-active-classNamees="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classNamees="text-gray-500 dark:text-gray-400">
                    <h3 id="accordion-flush-heading-1">
                        <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                            <span>Can I use Landwind in open-source projects?</span>
                            <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h3>
                    <div id="accordion-flush-body-1" className="" aria-labelledby="accordion-flush-heading-1">
                        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                            <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="#" className="text-fuchsia-600 dark:text-fuchsia-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                        </div>
                    </div>
                    <h3 id="accordion-flush-heading-2">
                        <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                            <span>Is there a Figma file available?</span>
                            <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h3>
                    <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                            <p className="text-gray-500 dark:text-gray-400">Check out the <a href="#" className="text-fuchsia-600 dark:text-fuchsia-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Landwind.</p>
                        </div>
                    </div>
                    <h3 id="accordion-flush-heading-3">
                        <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                            <span>What are the differences between Landwind and Tailwind UI?</span>
                            <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h3>
                    <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                <li><a href="#" className="text-fuchsia-600 dark:text-fuchsia-500 hover:underline">Landwind Pro</a></li>
                                <li><a href="#" className="text-fuchsia-600 dark:text-fuchsia-500 hover:underline">Tailwind UI</a></li>
                            </ul>
                        </div>
                    </div>
                    <h3 id="accordion-flush-heading-4">
                        <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
                            <span>What about browser support?</span>
                            <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </h3>
                    <div id="accordion-flush-body-4" className="hidden" aria-labelledby="accordion-flush-heading-4">
                        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                <li><a href="#" className="text-fuchsia-600 dark:text-fuchsia-500 hover:underline">Landwind Pro</a></li>
                                <li><a href="#" className="text-fuchsia-600 dark:text-fuchsia-500 hover:underline">Tailwind UI</a></li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>               
        </div>
    </section> */}

    <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
            <div className="max-w-screen-sm mx-auto text-center">
                <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Start your free trial today</h2>
                <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Try Inkio for 31 days. You can stop your subscription when you want.</p>
                <a href="https://app.inkio.co/onboarding/" target='_blank' className="text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 focus:outline-none dark:focus:ring-fuchsia-800" rel="noreferrer">Free trial for 31 days</a>
            </div>
        </div>
    </section>
    
    <footer className="bg-white dark:bg-gray-800">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3">
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="https://www.instagram.com/inkio.co/" className=" hover:underline">About</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        {/* <li className="mb-4">
                            <a href="#" className="hover:underline">Discord Server</a>
                        </li> */}
 
                        <li className="mb-4">
                            <a href="mailto:me@antoinelorin.fr" className="hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h3>
                    <ul className="text-gray-500 dark:text-gray-400">
                        {/* <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Terms</a>
                        </li> */}
                    </ul>
                </div>
          
               
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="text-center">
                <span   className="flex font-important items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                    Inkio    
                </span>
                <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024 Inkio. All Rights Reserved.
                </span>
                <ul className="flex justify-center mt-5 space-x-5">

                    <li>
                        <a href="https://www.instagram.com/inkio.co/" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400" rel="noreferrer">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                        </a>
                    </li>
                    
                   
                </ul>
            </div>
        </div>
    </footer>
	</main>
}


// export default function () {
// 	const [ selectedImage, setSelectedImage ] = useState(0)

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			setSelectedImage((current) => {
// 				return current === (matches.length - 1) ? 0 : current + 1
// 			})
// 		}, 8_000)

// 		return () => {
// 			clearInterval(interval)
// 		}
// 	}, [  ])

// 	return <main classNameName="w-full bg-neutral-900 text-white flex flex-col gap-4 lg:gap-0">
// 		<div classNameName='lg:h-screen w-full lg:max-h-screen flex flex-col'>
// 			<span classNameName="py-4 lg:py-6 w-full flex justify-center items-center">
// 				<h1 classNameName="uppercase font-bold text-3xl font-title flex flex-col items-center gap-2">
// 					<div classNameName='w-8 h-8'>
// 						<img src="/assets/logo-01.png" alt="" />
// 					</div>
// 					<span>
// 						holzbau - klug.
// 					</span>
// 				</h1>
// 			</span>
// 			<div classNameName="flex gap-12 flex-col flex-1 lg:flex-row bg-neutral-900 min-h-0">
// 				<section classNameName="max-h-full p-4 lg:pl-12 lg:pb-12 w-full lg:w-5/12 flex flex-col justify-between gap-8">
// 					<div classNameName='flex flex-col gap-4'>
// 						<h1 classNameName="uppercase text-2xl lg:text-6xl tracking-wider leading-snug font-semibold font-title text-blue-500" >
//                     // Holzbau ist KLUG! //
// 						</h1>
// 						<h2 classNameName="uppercase text-1xl lg:text-4xl tracking-wider leading-snug font-title text-gray-300" >
//                     Tradition / Innovation / Hochwertigkeit
// 						</h2>
// 						<h2 classNameName="uppercase text-xl lg:text-3xl tracking-wider leading-snug font-title text-gray-500" >
// 						Massivholzbau / Holzriegelbau / Dachstühle /
// Dachsanierungen / Terrassendächer / Carports /
// Wintergärten / Hallenbau
// 						</h2>
// 					</div>
					
// 					<div classNameName="hidden text-xl  lg:flex flex-col gap-4 items-start">
// 						<Link to={'mailto:office@holzbau-klug.at'} classNameName='underline underline-offset-4'>
//                         Reach us
// 						</Link>
// 						<section classNameName='flex gap-4 items-center'>
// 							<Link  to='https://www.facebook.com/p/Zimmerei-Holzbau-Josef-Klug-100023497607487/'><FaFacebookSquare size={42} /></Link>
// 							<Link to='https://www.instagram.com/holzbau_klug/'><FaInstagram size={42} /></Link>
// 						</section>
// 						<span classNameName='no-underline'>
// 							Bald wieder in vollem Format für Sie da!
// 						</span>
// 					</div>
// 					<div classNameName='lg:block aspect-video rounded-sm w-full overflow-hidden relative'>
// 						<m.img 
// 							initial={{ x: '-100%'}}
// 							animate={{ x: '0' }}
// 							exit={{ x: '-100%' }}
// 							transition={{ ease: 'easeInOut' }}
// 							src='assets/hp.jpg' classNameName="w-full h-full object-cover" alt="" />
// 						<span classNameName='absolute bottom-2 left-2 opacity-70'>sedomini[zt] Dominik Sellitsch</span>
// 					</div>
					
// 				</section>
// 				<section classNameName="p-4 lg:p-0 w-full lg:w-7/12 flex flex-col gap-8 h-full max-h-full min-h-0">
// 					<h3 classNameName="text-xl lg:text-2xl tracking-wider leading-snug font-title " >
// 						KLUGer Holzbau
// 					</h3>
// 					<span classNameName="text-gray-400 lg:pr-12 text-justify">
// 					Aktiver Klimaschutz / Nachhaltigkeit / Wohlfühlraumklima /  Rohstoff Holz - wunderschöne und angenehme Optik und Haptik / innovativ einsetzbar für anspruchsvolle Architektur / Holzbau ist zukunftsweisend 
// 					</span>
// 					<hr classNameName="w-full border-gray-400" />
// 					<div classNameName='w-full flex-1 flex items-stretch min-h-0 overflow-hidden relative'>
						
// 						<AnimatePresence mode='wait'>
// 							<m.div 
// 								initial={{ x: '100%', opacity: 0 }}
// 								animate={{ x: '0', opacity: 1 }}
// 								exit={{ x: '100%', opacity: 0, transition: {
// 									ease: 'easeIn',
// 									delay: 0.3
// 								} }}
// 								transition={{ ease: 'easeIn' }}

// 								key={`${selectedImage}-2`}
// 								classNameName='h-96 lg:h-full w-full object-cover z-10 relative'>
// 								<img  

// 									src={`assets/${matches[selectedImage]?.url}`} classNameName="h-full w-full object-cover z-10" alt="" />
// 								<div 
// 									style={{
// 										boxShadow: 'inset 0px -100px 50px 0px rgba(0,0,0,0.7)'
// 									}}
// 									classNameName='absolute top-0 left-0 w-full h-full'>

// 								</div>
// 							</m.div>
					
// 							<m.div 
// 								initial={{ x: '100%' }}
// 								animate={{ x: '0', transition: {
// 									ease: 'easeIn',
// 									delay: 0.3
// 								} }}
// 								exit={{ x: '100%' }} 

// 								transition={{ ease: 'easeIn' }}

// 								key={`${selectedImage}`} classNameName='absolute bottom-0 left-0 p-4 lg:text-xl font-bold w-full z-30 uppercase font-title'> 
// 								{ matches[selectedImage]?.credits }
// 							</m.div>
// 						</AnimatePresence>
						
// 					</div>
// 					<div classNameName="flex text-xl underline underline-offset-4 lg:hidden flex-col gap-4 items-start">
// 						<Link to={'mailto:office@holzbau-klug.at'}>
//                         Reach us
// 						</Link>
// 						<section classNameName='flex gap-4 items-center'>
// 							<Link  to='https://www.facebook.com/p/Zimmerei-Holzbau-Josef-Klug-100023497607487/'><FaFacebookSquare size={42} /></Link>
// 							<Link to='https://www.instagram.com/holzbau_klug/'><FaInstagram size={42} /></Link>
// 						</section>
// 					</div>
// 				</section>
// 			</div>
// 		</div>
		
// 		<footer classNameName='w-full p-4 lg:p-12 flex flex-col lg:flex-row items-center gap-8'>
// 			<div classNameName='flex-1 flex-grow w-full gap-2 flex flex-col'>
// 				<span classNameName='font-title'>Individueller Holzbaumeister / Zimmermeisterbetrieb seit 1927</span>
// 				<span classNameName='text-gray-400'>Familienbetrieb in <b>4.</b> Generation</span>
// 				<hr classNameName='w-full border-gray-400' />
// 				<span classNameName='font-bold font-title'>Josef Klug GmbH</span>
// 				<span>Pframastrasse 11, A - 2286 Haringsee, Eigentümer und Geschäftsführer Mst. Josef Klug</span>
// 				<span classNameName='text-gray-600'>FN 36019w, UID Nr. ATU 17901000</span>
// 				<hr classNameName='w-full border-gray-400' />
// 				<h1 classNameName='font-semibold font-title'>
// 					Kontakt
// 				</h1>
// 				<span>T: (+43) 02214 84 140</span>
// 				<span>E: office@holzbau-klug.at</span>
// 			</div>

// 			<div classNameName='lg:w-2/12 flex flex-col justify-between items-center gap-4 w-full'>
// 				<img src="/assets/logo-02.png" classNameName='w-full' alt="" />
// 				<Link to={'https://dev.antoinelorin.fr'} target='_blank' classNameName='text-gray-500'>Made with ❤️ by AtoLrn</Link>
// 			</div>
// 		</footer>
// 	</main>
// }
