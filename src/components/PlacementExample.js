import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PlacementExample() {
  useEffect(() => {
    handleToast();
  }, []); 

  const handleToast = () => {
    toast.info('Hello! FOSSEE Team.', {
      position: 'bottom-left',
      autoClose: 3000, 
      hideProgressBar: true, 
    });
  };

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default PlacementExample;
