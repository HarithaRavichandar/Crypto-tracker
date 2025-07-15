import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <div className="min-h-8 bg-gray-950 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-50 pl-10">
        <h1 className="text-3xl font-bold">CryptoTracker<span className=" text-blue-500"> .</span></h1>
        <nav className="hidden md:flex items-center space-x-4 font-semibold pr-16">
          <Link to="/home" className="text-gray-300 hover:text-white ">Home</Link>
         
          <Link to="/dashboard"><button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold">Dashboard</button></Link>
           
          <a
    href="http://localhost:8501"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold"
  >
    Predict
  </a>

        </nav>
        <button 
          className="md:hidden z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </header>

      <div 
        className={`fixed top-0 right-0 bottom-0 w-64 bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col h-full justify-center">
          <Link to="/" className="block px-4 py-2 text-gray-300 hover:bg-gray-800">Home</Link>
          <Link to="/" className="block px-4 py-2 text-gray-300 hover:bg-gray-800">Compare</Link>
          <Link to="/" className="block px-4 py-2 text-gray-300 hover:bg-gray-800">Watchlist</Link>

          <a
  href="http://localhost:8501"
  target="_blank"
  rel="noopener noreferrer"
  className="block px-4 py-2 text-gray-300 hover:bg-gray-800"
>
  Predict
</a>

          <div className="px-4 py-2">
            <Link to="/dashboard"><button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">Dashboard</button></Link>
            
          </div>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

    
    </div>
  )
}