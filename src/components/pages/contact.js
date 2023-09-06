import React, { Component } from 'react';
import contactPicture from '../../../static/assets/images/auth/login.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function () {
  return (
    <div className='content-page-wrapper'>
      <div 
      className='left-column'
      style={{
        background: "url(" + contactPicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"

      }}

      />
      <div className='right-column'>
        <div className='contact-bullet-points'>
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon="phone"/>
            </div>
            <div className='text'>55555555</div>
          </div>
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon="envelope"/>
            </div>
            <div className='text'>dingle@dongle.com</div>
          </div>
          <div className='bullet-point-group'>
            <div className='icon'>
              <FontAwesomeIcon icon="map-marked-alt"/>
            </div>
            <div className='text'>bikini bottom</div>
          </div>
        </div>

      </div>
    
    </div>
  );
}
