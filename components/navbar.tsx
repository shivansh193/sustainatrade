//Create a navbar with 4 different pages lined up horizontally, for businesses, for consumers, about and home, make them cover 20% of the screen from top and use tailwind css for the same

// Path: sustainatrade/components/navbar.tsx
"use client"


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MenuIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Mobile menu button*/}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <a>
                  <Image
                    src="/logo.png"
                    alt="Sustainatrade"
                    width={50}
                    height={50}
                  />
                </a>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/">
                <a
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    router.pathname === "/" ? "border-indigo-500" : "border-transparent"
                  }`}
                >
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    router.pathname === "/about" ? "border-indigo-500" : "border-transparent"
                  }`}
                >
                  About
                </a>
              </Link>
              <Link href="/business">
                <a
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    router.pathname === "/business" ? "border-indigo-500" : "border-transparent"
                  }`}
                >
                  For Businesses
                </a>
              </Link>
              <Link href="/consumer">
                <a
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    router.pathname === "/consumer" ? "border-indigo-500" : "border-transparent"
                    }`}
                >
                    For Consumers
                </a>
                </Link>
            </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            {isOpen && (
              <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link href="/">
                    <a
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        router.pathname === "/" ? "text-white bg-gray-900" : "text-gray-300 hover:text-white hover:bg-gray-700"
                      }`}
                    >
                      Home
                    </a>
                  </Link>
                  <Link href="/about">
                    <a
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        router.pathname === "/about" ? "text-white bg-gray-900" : "text-gray-300 hover:text-white hover:bg-gray-700"
                      }`}
                    >
                      About
                    </a>
                  </Link>
                  <Link href="/business">
                    <a
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        router.pathname === "/business" ? "text-white bg-gray-900" : "text-gray-300 hover:text-white hover:bg-gray-700"
                      }`}
                    >
                      For Businesses
                    </a>
                  </Link>
                  <Link href="/consumer">
                    <a
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        router.pathname === "/consumer" ? "text-white bg-gray-900" : "text-gray-300 hover:text-white hover:bg-gray-700"
                      }`}
                    >
                      For Consumers
                    </a>
                  </Link>
                </div>
              </div>
            )}
            </nav>
    );  
}
