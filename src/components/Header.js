import React from 'react';
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import Image from 'next/image';

function Header() {

    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow-0 ">
                    <Image
                        src="https://links.papareact.com/f90"
                        alt="Picture of the author"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                {/* custom search bar */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 " type="text" />
                    <SearchIcon className="h-12 p-4" />
                </div>
                {/* Right part */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-normal">
                    <div className="link">
                        <p>Hello Aanchal Gaurh</p>
                        <p className="font-extrabold md:text-sm
                        ">Account & Lists</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm
                        "> & Orders</p>
                    </div>
                    <div className="relative link flex items-center ">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2
                        ">Basket</p>
                    </div>
                </div>
            </div>
            {/* Bottom bar */}
            <div className="flex items-center space-x-4 p-2 pl-4 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 m-1"/>
                     All
                </p>
                <p className="link ">
                    Prime Video
                </p>
                <p className="link ">
                    Amazon Business
                </p>
                <p className="link ">
                    Today's Deals
                </p>
                <p className="link hidden lg:inline-flex">
                    Electronics
                </p>
                <p className="link hidden lg:inline-flex">
                    Food & Glrocery
                </p>
                <p className="link hidden lg:inline-flex">
                    Prime
                </p>
                <p className="link hidden lg:inline-flex">
                    Buy Apple
                </p>
                <p className="link hidden lg:inline-flex">
                    Shopper Toolkit
                </p>
                <p className="link hidden lg:inline-flex">
                    Healts & Personal Care
                </p>
            </div>
        </header>
    )
}

export default Header
