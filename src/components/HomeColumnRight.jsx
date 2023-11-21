// HomeColumn3.js
import React from 'react';
import Box from './Box';
import BadReview from "../imgs/bad-review.png"
import Handshake from "../imgs/handshake.png"
import Chat from "../imgs/chat.png"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; // Import the default styles
import SLA from '../components/SLA'
const HomeColumnRight = () => {
  return (
    <div className="home-column1">
        <div className="home-right-buttons">
        <Box imageSrc={BadReview}  alt="תלונת לקוח" title="תלונת לקוח"/>
        <div >
          <Popup 
          trigger={
          <div >
            <Box imageSrc={Handshake} alt="אמנת השירות" title="אמנת השירות" />
          </div>
          }
          modal
          nested
          overlayStyle={{ background: 'rgba(0,0,0,0.7)' }} // Set overlay style
          contentStyle={{
              // Set your content style
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: '15px',
              padding: '20px',
              border: 'none',
              width: '40%',
              maxHeight: '70vh',
              overflowY: 'auto',        

          }}
        >
          {(close) => (
            <div className="modal" >
              <button className="close" onClick={close}>
                &times;
              </button>
              
              <SLA/>
            </div>
          )}
        </Popup>
        </div>

        <Box imageSrc={Chat} alt="צור קשר" title="צור קשר" />
        {/* Add another Box component for the fourth box if needed */}
        </div>  
    </div>
  );
};

export default HomeColumnRight;