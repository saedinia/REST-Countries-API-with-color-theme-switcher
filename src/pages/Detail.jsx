import React from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { alpha3code } = useParams();
  return (
    <div className="detail-page">
      <div className="detail-container wrapper">Detail - {alpha3code}</div>
    </div>
  );
}

export default Detail;
