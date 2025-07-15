import React, { useState } from 'react'
import Grid from '../Grid/Grid';
import List from '../List/List';

function Tabs({ coins }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className=" bg-gray-950 text-white">
        <div className="w-full mx-auto pt-10">
          {/* Tab Headers */}
          <div className="flex justify-between items-center  border-gray-700 font-medium">
            <div
              className={`cursor-pointer py-4 flex-1 text-center rounded-lg ${activeTab === 1 ? "bg-blue-700 text-white" : "bg-gray-950 text-gray-400"
                }`}
              onClick={() => setActiveTab(1)}
            >
              Grid
            </div>
            <div
              className={`cursor-pointer py-4 flex-1 text-center rounded-lg ${activeTab === 2 ? "bg-blue-700 text-white" : "bg-gray-950 text-gray-400"
                }`}
              onClick={() => setActiveTab(2)}
            >
              List
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 flex justify-center align-middle flex-wrap gap-4">
            {activeTab === 1 && coins.map((coin,i)=>{
              return (
                <Grid coin={coin} key={i} />
               
              )
            }) }
            </div>
            <div className="p-6 flex-row justify-center align-middle flex-wrap gap-4">
            {activeTab === 2 && coins.map((coin,i)=>{
              return (
                <List  coin={coin} key={i}/>
              )
            })}
            </div>
          
        </div>
      </div>
    </>

  );
}

export default Tabs
