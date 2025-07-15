import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <CircularProgress 
        sx={{
          color: "#0288d1",  // Set your desired blue color here
        }}
        size={60}  // Adjust size as needed
        thickness={5}  // Adjust thickness if needed
      />
    </div>
  );
}