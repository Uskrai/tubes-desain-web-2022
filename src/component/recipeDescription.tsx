import React, { Component } from "react";

interface Props {
  title: string;
  description: string;
  author: string;
  gambar: string;
}

export default class RecipeDescription extends Component<Props> {
  render() {
    return (
      <div className="flex flex-row-reverse bg-gray-700 m-3 rounded-lg">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex items-center">
            <button type="button" className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <figure className="relative">
              <img
                src={(this.props.gambar) ? this.props.gambar : "https://via.placeholder.com/780x440.png?text=No+Image"}
                alt=""
                className="object-cover rounded-2xl"
              />
            </figure>
            <button
              type="button"
              className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-4 justify-center items-start text-left p-8">
            <div className="flex  justify-between w-full">
              <h1 className="text-3xl font-bold text-white">{this.props.title}</h1>
              {/* <div className="flex justify-center flex-col items-center gap-4">
                    <button type="button">
                        <svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 16.08L16 0L32 16.08H0Z" fill="black"/>
                        </svg>
                    </button>
                    <button type="button" className="opacity-50">
                        <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 15.92L0 0H32L16 15.92Z" fill="#D9D9D9"/>
                        </svg>
                    </button>
                </div> */}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white">Dibuat oleh</p>
              <a href="" className="flex items-center gap-3">
                <figure className="radius-100 max-w-[48px]">
                  <img src={this.props.gambar} alt="" className="object-cover rounded-full" />
                </figure>
                <h2 className="font-medium text-xl text-white">{this.props.author}s</h2>
              </a>
            </div>
            <div className="border-2 border-gray-800 p-4 rounded-xl bg-gray-300">
              <p>
                {this.props.description}
              </p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
