import React, { useContext } from 'react';
import { LoadingContext } from '../context/LoadingContext';
import './Spinner.css';

const Spinner = () => {
  const { loading } = useContext(LoadingContext);

  if (!loading) return null;

  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;