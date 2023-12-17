import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';

const ImageCard = ({ imageUrl }) => {
  return (
    <div style={{ position: 'relative', marginBottom: '20px', borderRadius: '8px', overflow: 'hidden' }}>
      <img
        src={imageUrl}
        alt="Uploaded Image"
        style={{ width: '100%', height: 'auto', boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '50%',
          padding: '5px',
        }}
      >
        <DeleteIcon style={{ fontSize: '20px', color: '#333' }} />
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ImageCard;
