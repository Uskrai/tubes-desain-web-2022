import React, { Component, useEffect, useState } from "react";

export default class LoginScreen extends Component<any, any> {
    constructor(props: any) {
        super(props);

        document.title = "Login"
        this.state = { username: "", password: "" };
    }

    login = () => {
        const data = fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    alert("Login Failed");
                }
            })
            .then((res) => {
                localStorage.setItem('user', this.state.username);
                window.location.href = "/";
            });
            
    }

    render() {
        return (
            <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 border border-gray-300 p-10 rounded-xl">
                    <div>
                        <a href="/" className="flex items-center">
                            <svg className="fill-gray-800" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M21 20.1q1.3 0 2.2-.9.9-.9.9-2.2 0-1.3-.9-2.2-.9-.9-2.2-.9-1.3 0-2.2.9-.9.9-.9 2.2 0 1.3.9 2.2.9.9 2.2.9Zm-4 10q1.3 0 2.2-.9.9-.9.9-2.2 0-1.3-.9-2.2-.9-.9-2.2-.9-1.3 0-2.2.9-.9.9-.9 2.2 0 1.3.9 2.2.9.9 2.2.9ZM30 32q.85 0 1.425-.575Q32 30.85 32 30q0-.85-.575-1.425Q30.85 28 30 28q-.85 0-1.425.575Q28 29.15 28 30q0 .85.575 1.425Q29.15 32 30 32Zm-6 12q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.6 1.95-8.6t5.225-6.775q3.275-2.775 7.55-4T27.6 4.3q-.3 2.25.4 4.25t2.125 3.4q1.425 1.4 3.425 2.05 2 .65 4.2.3-1 3.05 1.1 5.475t5.1 2.675q.4 4.35-1.025 8.25-1.425 3.9-4.175 6.85-2.75 2.95-6.55 4.7T24 44Zm0-3q7.1 0 11.8-4.675 4.7-4.675 5.25-11.525-2.7-1-4.375-2.975Q35 19.85 34.6 17.3q-4.05-.55-6.825-3.5Q25 10.85 24.6 6.95q-3.7-.15-6.925 1.2-3.225 1.35-5.6 3.7Q9.7 14.2 8.35 17.375 7 20.55 7 24q0 7.1 4.95 12.05Q16.9 41 24 41Zm.05-17.25Z" /></svg>
                            <span className="self-center text-3xl text-gray-800 font-bold whitespace-nowrap m-1"> CookiPad </span>
                        </a>
                    </div>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="username" className="sr-only">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-800 focus:outline-none focus:ring-gray-800 sm:text-sm"
                                placeholder="Username"
                                onChange={(event) => this.setState({ username: event.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-800 focus:outline-none focus:ring-gray-800 sm:text-sm"
                                placeholder="Password"
                                onChange={(event) => this.setState({ password: event.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            onClick={this.login}
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}