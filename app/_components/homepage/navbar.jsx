"use client"
import React, { useState } from 'react';

export default function NavBar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const bell = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
    );
    const heart = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
    );
    const shope = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
    );
    const person = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
    );
    const arrow = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className={`size-5 ${dropdownVisible ? 'rotate-180' : 'rotate-0'}`}>
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
    );

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <>
            <nav className="flex items-center justify-between text-white">
                <h1 className="text-4xl font-serif font-bold ">AISHA</h1> {/* here must be the logo*/}

                {/*search bar*/}
                <div>
                    <div className="bg-darkGray rounded-3xl relative flex gap-10 px-4 py-2">
                        <button className="rounded-3xl bg-lightGray px-4 flex items-center gap-2 relative" onClick={toggleDropdown}>
                            <span>All categories</span>
                            <span>{arrow}</span>
                            {dropdownVisible && (
                                <div className="absolute top-full left-0 mt-2 w-full bg-white text-black rounded-md shadow-lg font-semibold">
                                    <ul className="py-2">
                                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">All categories</li>
                                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Man</li>
                                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Woman</li>
                                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Kids</li>
                                    </ul>
                                </div>
                            )}
                        </button>

                        <input
                            type="text"
                            placeholder="Search"
                            className="py-2 px-4 outline-none w-[450px] rounded-2xl  bg-darkGray"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="white"
                            className="size-6 absolute right-3 top-4  "
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </div>
                </div>

                <div className="flex gap-10 justify-between">
                    <button className="hover:bg-darkGray rounded-full p-2 " >
                        {bell}
                    </button>
                    <button className="hover:bg-darkGray rounded-full p-2 " >
                        {heart}
                    </button>
                    <button className="hover:bg-darkGray rounded-full p-2 ">
                        {shope}
                    </button>
                    <button className="hover:bg-darkGray rounded-full p-2 ">
                        {person}
                    </button>
                </div>
            </nav>
        </>
    );
}
