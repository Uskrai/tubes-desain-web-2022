import React, { Component } from "react";

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="/" className="flex items-center">
                            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M21 20.1q1.3 0 2.2-.9.9-.9.9-2.2 0-1.3-.9-2.2-.9-.9-2.2-.9-1.3 0-2.2.9-.9.9-.9 2.2 0 1.3.9 2.2.9.9 2.2.9Zm-4 10q1.3 0 2.2-.9.9-.9.9-2.2 0-1.3-.9-2.2-.9-.9-2.2-.9-1.3 0-2.2.9-.9.9-.9 2.2 0 1.3.9 2.2.9.9 2.2.9ZM30 32q.85 0 1.425-.575Q32 30.85 32 30q0-.85-.575-1.425Q30.85 28 30 28q-.85 0-1.425.575Q28 29.15 28 30q0 .85.575 1.425Q29.15 32 30 32Zm-6 12q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.6 1.95-8.6t5.225-6.775q3.275-2.775 7.55-4T27.6 4.3q-.3 2.25.4 4.25t2.125 3.4q1.425 1.4 3.425 2.05 2 .65 4.2.3-1 3.05 1.1 5.475t5.1 2.675q.4 4.35-1.025 8.25-1.425 3.9-4.175 6.85-2.75 2.95-6.55 4.7T24 44Zm0-3q7.1 0 11.8-4.675 4.7-4.675 5.25-11.525-2.7-1-4.375-2.975Q35 19.85 34.6 17.3q-4.05-.55-6.825-3.5Q25 10.85 24.6 6.95q-3.7-.15-6.925 1.2-3.225 1.35-5.6 3.7Q9.7 14.2 8.35 17.375 7 20.55 7 24q0 7.1 4.95 12.05Q16.9 41 24 41Zm.05-17.25Z" /></svg>
                            <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white m-1"> CookiPad </span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <form className="flex items-center" action="/search/" method="GET">
                                <label htmlFor="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" name="q" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required></input>
                                </div>
                                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </form>
                            <a href="#" className="flex items-center pl-5">
                                <svg className="flex-no-shrink fill-white h-6 w-6" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M11.3 34.7q3.1-1.95 6.125-2.9T24 30.85q3.55 0 6.65 1 3.1 1 6.1 2.85 2.1-2.75 2.95-5.275.85-2.525.85-5.425 0-7-4.775-11.775T24 7.45q-7 0-11.775 4.775T7.45 24q0 2.9.85 5.4.85 2.5 3 5.3ZM24 25.85q-3.05 0-5.1-2.05t-2.05-5.1q0-3 2.05-5.075T24 11.55q3.05 0 5.1 2.075t2.05 5.125q0 3-2.05 5.05T24 25.85Zm0 19.4q-4.4 0-8.275-1.675T8.95 39q-2.9-2.9-4.55-6.75T2.75 24q0-4.4 1.675-8.275T9 8.975Q11.9 6.1 15.75 4.4q3.85-1.7 8.3-1.7 4.4 0 8.25 1.7 3.85 1.7 6.725 4.575 2.875 2.875 4.575 6.75Q45.3 19.6 45.3 24t-1.7 8.25Q41.9 36.1 39.025 39t-6.75 4.575Q28.4 45.25 24 45.25Z" />
                                </svg>
                                <span className="self-center text-xl whitespace-nowrap dark:text-white">Log In</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}