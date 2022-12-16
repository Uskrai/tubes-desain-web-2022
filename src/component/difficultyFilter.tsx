import React, { Component } from "react";

export default class DifficultyFilter extends Component<{}, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            dropdownState: false
        };
    }

    render() {
        return (
            <div className="flex flex-col items-start w-1/2 bg-gray-700 m-3 rounded-lg p-4">
                <div className="flex flex-row justify-between w-full">
                    <h2 className="text-white text-xl">Filter</h2>
                    <a href="#" className="text-white text-xl">Reset</a>
                </div>
                <div className="flex flex-col items-start m-2">
                    <p className="mb-2 text-white">Tampilkan resep berdasarkan tingkat kesulitan :</p>
                    <button id="dropdownDefault" onClick={() => this.setState({ dropdownState: !this.state.dropdownState })} data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Pilih tingkat kesulitan <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                    {/* <!-- Dropdown menu --> */}
                    <div id="dropdown" className={`${this.state.dropdownState ? "block" : "hidden"} z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}>
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                            <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}