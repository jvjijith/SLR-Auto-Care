import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center p-2">
                <Image
                  src="/images/logo.png"
                  alt="SLR Auto Care Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold">SLR Auto Care</span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Professional vehicle inspections and mechanical services with a commitment to quality and customer
              satisfaction.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.facebook.com/slrautocare/?modal=admin_todo_tour"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-900 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16" 
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-900 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-900 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-0">
            <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 sm:w-12 h-1 bg-red-900"></span>
            </h3>
            <ul className="space-y-2 sm:space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white flex items-center group text-sm sm:text-base">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white flex items-center group text-sm sm:text-base">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white flex items-center group text-sm sm:text-base">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/roadworthy-inspections" className="text-gray-300 hover:text-white flex items-center group text-sm sm:text-base">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                  Roadworthy Inspections
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white flex items-center group text-sm sm:text-base">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mt-6 lg:mt-0">
            <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-10 sm:w-12 h-1 bg-red-900"></span>
            </h3>
            <ul className="space-y-2 sm:space-y-4">
              <li>
                <Link href="/roadworthy-inspections" className="text-gray-300 hover:text-white flex items-center group text-sm sm:text-base">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                  Roadworthy Inspection
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white flex items-center group text-sm sm:text-base">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                  Mechanical Services
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white flex items-center group text-sm sm:text-base">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                  Logbook Service
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white flex items-center group text-sm sm:text-base">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                  Car AC Regas
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white flex items-center group text-sm sm:text-base">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-red-900 rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                  EV Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mt-6 lg:mt-0">
            <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-10 sm:w-12 h-1 bg-red-900"></span>
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500 mt-0.5 shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>5/32-44 Tarkin court Bell Park Vic 3215 Australia.</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500 shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:0352025884" className="hover:text-red-500 transition-colors duration-300">
                  03 5202 5884
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500 shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:61447430065" className="hover:text-red-500 transition-colors duration-300">
                  61 447 430 065
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500 shrink-0"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a
                  href="mailto: slrgroupptyltd@gmail.com"
                  className="hover:text-red-500 transition-colors duration-300 break-all"
                >
                   slrgroupptyltd@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500 shrink-0"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Mon-Sat: 9am-5pm | Sunday by Appointent</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm sm:text-base">© {new Date().getFullYear()} SLR Auto Care. All rights reserved.</p>
          {/* <div className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base">
              Terms of Service
            </Link>
          </div> */}
          <div className="mt-4 md:mt-0 md:ml-6 text-gray-500 text-sm sm:text-base flex items-center">
            Powered by&nbsp;
            <a
              href="https://Nexalogics.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-900 transition-colors duration-300 font-semibold"
            >
              Nexalogics
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}