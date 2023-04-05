import Link from "next/link";
import { useState } from "react";
import { SearchIcon } from '@heroicons/react/solid';
import Image from "next/image";
import Logo from "./img/logo-updated.png";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Handle search query submission
  };

  return (
    <nav className="bg-cambridge items-center mb-4">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-evenly">
          <nav className="flex items-center">
            <Link className="flex-shrink-0" href="/">
              <Image className="h-10 w-48" src={Logo} alt="Logo" priority />
            </Link>
          </nav>
          <nav className="flex items-start">
            <div id="men">
              <div className="ml-2 flex items-center md:ml-6">
                <Link className="px-2 py-2" href="/men">
                  <p>Men</p>
                </Link>
              </div>
            </div>
            <div id="women">
              <div className="ml-2 flex items-center md:ml-6">
                <Link className="px-2 py-2" href="/women">
                  <p>Women</p>
                </Link>
              </div>
            </div>
          </nav>
          <nav className="hidden md:block min-w-[50%]">
            <form onSubmit={handleSearchSubmit}>
              <div className="flex items-center rounded-full bg-white px-4 py-2">
                <input
                  className="flex-1 bg-white text-black focus:border-collapse focus:outline-none"
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="ml-2 flex-shrink-0 rounded-full border-gray-600 bg-gray-600 px-3 py-2 hover:border-gray-500 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
                >
                  <SearchIcon className="h-4 w-4 text-gray-300" />
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </form>
          </nav>
          <nav id="account-btn">
            <div className="ml-2 flex items-center md:ml-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </nav>
          <nav id="shopping-cart-btn">
            <div className="ml-2 flex items-center md:ml-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
          </nav>
          <nav>
            <div className="ml-2 flex items-center md:ml-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
          </nav>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Heroicon name: menu */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Heroicon name: x */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, toggle classes based on menu state */}
      <div className="md:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            href="/"
          >
            Home
          </Link>
          <Link
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
            href="/products"
          >
            Products
          </Link>
          {/* Add more links as needed */}
        </div>
        <div className="border-t border-gray-700 pb-3 pt-4">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              {/* <SearchIcon className="h-6 w-6 text-gray-400" /> */}
            </div>
            <form onSubmit={handleSearchSubmit} className="ml-3 flex-1">
              <div className="relative">
                <input
                  className="block w-full rounded-md border-gray-600 bg-gray-700 py-2 pl-10 pr-3 text-base text-white placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
                >
                  {/* <SearchIcon className="h-5 w-5 text-gray-300" /> */}
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
