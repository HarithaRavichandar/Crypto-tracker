import React from 'react'
import { Star, TrendingDownIcon, TrendingUp, TrendingUpIcon } from "lucide-react"
function Grid({coin}) {
    return (
        <>
            <div className="flex justify-center items-center  bg-gray-900 rounded-xl">
                <div className="h-80 w-80 bg-gray-800 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-300/20 hover:border-green-300 border-2 border-transparent flex-row">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <div className="w-10 h-10 flex items-center justify-center mr-3">
                                <img src={coin.image} alt="" />
                            </div>
                            <div>
                                <h2 className="text-white text-xl font-bold">{coin.symbol}</h2>
                                <p className="text-gray-400 text-sm">{coin.name}</p>
                            </div>
                        </div>
                        <button className="text-green-500 ">
                            <Star className="w-6 h-6 hover:fill-green-500" />
                        </button>
                    </div>
                    {coin.price_change_percentage_24h >0 ?(
                        <div className="flex items-center mb-4">
                        <span className="bg-green-500/20 text-green-500 px-2 py-1 rounded-full text-base mr-4">{coin.price_change_percentage_24h.toFixed(2)}%</span>
                        <div className=" bg-green-500/20  text-green-500 p-1 rounded-full hover:shadow-green-300/20 hover:border-green-300   hover:bg-green-600/80">
                            <TrendingUpIcon className='cursor-pointer'/> 
                            
                        </div>
                        </div>
                    ):(
                        <div className="flex items-center mb-4">
                        <span className="bg-green-500/20 text-red-500 px-2 py-1 rounded-full text-base mr-4">{coin.price_change_percentage_24h.toFixed(2)}%</span>
                        <div className="bg-green-500/20 text-red-500 p-1 rounded-full  hover:shadow-red-300/20 hover:border-red-300   hover:bg-red-600/80">
                            <TrendingDownIcon className='cursor-pointer'/> 
                            
                        </div>
                        </div>
                        
                    )}
                    
                    {coin.price_change_percentage_24h >0 ? (<h3 className="text-green-500 text-3xl font-bold mb-4">${coin.current_price}</h3>):
                    (<h3 className="text-red-500 text-3xl font-bold mb-4">${coin.current_price}</h3>)}
                    
                    <div className="text-blue-00 text-lg  font-bold py-5">
                        <p className="mb-1">Total Volume: {coin.total_volume}</p>
                        <p>Market Cap: ${coin.market_cap}</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Grid
