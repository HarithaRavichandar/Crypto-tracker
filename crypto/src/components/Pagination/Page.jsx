import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';

export default function Page({page,handlePageChange}) {
  
  return (
    <div className='max-w-full flex justify-center'>
      <Pagination   sx={{
          "& .MuiPaginationItem-root": {
            color: "#fff !important",
            border: "1px solid #565656",
          },
          "& .MuiPaginationItem-root:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected": {
            backgroundColor: "#0288d1 !important",
            color: "#fff !important",
            borderColor: "#0288d1 !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }} count={10} page={page} onChange={(event,value)=>handlePageChange(event,value)} />
    </div>
  );
}