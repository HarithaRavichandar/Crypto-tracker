import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
         <div className="min-h-screen bg-gray-950 text-white">
          <main className="container mx-auto px-4 py-16">
              <div className="flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 space-y-8 pl-4">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                          Track Crypto
                          <span className="block text-blue-500">Real Time.</span>
                      </h2>
                      <p className="text-lg md:text-xl text-gray-400">
                          Track crypto through a public api in real time. Visit the dashboard to do so!
                      </p>
                      <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                       <Link to="/dashboard"><button className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">Dashboard</button></Link>   
                          <button className="w-full sm:w-auto px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded">
                              Share App
                          </button>
                      </div>
                  </div>
                  <div className="lg:w-1/2 mt-12 lg:mt-0">
                      <div className="relative w-full max-w-[300px] mx-auto">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-[3rem] transform rotate-6 animate-pulse"></div>
                          <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl overflow-hidden device-frame">
                              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-10"></div>
                              <div className="relative rounded-[2.5rem] overflow-hidden shadow-inner">
                                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-500/20 z-10 glare-effect"></div>
                                  <img
                                      src="src\assets\exchange-bitcoin-svgrepo-com.svg"
                                      width={300}
                                      height={600}
                                      alt="CryptoTracker App"
                                      className="rounded-[2.5rem] shadow-inner animate-float"
                                  />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
          <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .device-frame {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
                      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
        }
        .device-frame::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 70%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), transparent);
          z-index: 2;
          pointer-events: none;
        }
        .glare-effect {
          background: radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3) 0%, transparent 50%);
        }
      `}</style>
       </div>
    
    
    
    
    
    
    </>
  )
}

export default Landing
