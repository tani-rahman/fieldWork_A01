import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#0f172a] text-white px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
            Elevate
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
           <a href = "/"> Home</a></li>
          <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            <a href = "/about"> About</a></li>
          <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            <a href = "/features"> Features</a></li>
          <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            <a href = "/services"> Services</a></li>
          <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            <a href = "/portfolio"> Portfolio</a></li>
          <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            <a href = "/pricing"> Pricing</a></li>

          
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:hover:border-b-2 border-blue-500 pb-1  translateX(-50%) cursor-pointer"
            >
             <a href='/'>Dropdown</a>  <ChevronDown size={16} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-10 left-0 bg-white text-black rounded-md shadow-lg w-44 py-2">
                <ul className="text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100  cursor-pointer">Option 1</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                </ul>
              </div>
            )}
          </li>

          <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            <a href = "/contact"> Contact</a></li>
        </ul>

        
        <div className="hidden md:flex items-center gap-4 text-sm">
          <BsTwitterX  className="cursor-pointer hover:text-blue-400" />
          <FaFacebookF className="cursor-pointer hover:text-blue-400" />
          <FaInstagram className="cursor-pointer hover:text-blue-400" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-400" />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-sm font-medium">
          <ul className="space-y-3">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Pricing</li>

            {/* Mobile Dropdown */}
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1"
              >
                Dropdown <ChevronDown size={16} />
              </button>

              {dropdownOpen && (
                <ul className="ml-4 mt-2 space-y-2 text-gray-300">
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                </ul>
              )}
            </li>

            <li>Contact</li>
          </ul>

          <div className="flex gap-4 pt-3">
            <BsTwitterX />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;