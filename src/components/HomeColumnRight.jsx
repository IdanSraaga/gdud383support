// HomeColumn3.js
import React from 'react';
import Box from './Box';
import BadReview from "../imgs/bad-review.png"
import Handshake from "../imgs/handshake.png"
import Chat from "../imgs/chat.png"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; // Import the default styles
import ContactUs from './ContactUs';
import SLA from '../components/SLA'
import ContactImg from "../imgs/contact.png"
import Swal from 'sweetalert2';
import ReactDOM from 'react-dom';
const openModal = (buttonNumber) => {
  let title, content;

  // Customize based on the button number
  if (buttonNumber === 1) {
    title = 'אמנת השירות';
    content = <SLA />;
  } else if (buttonNumber === 2) {
    title = 'דרכי יצירת קשר';
    content = <ContactUs />;
  }

  // Open SweetAlert modal
  Swal.fire({
    title: title,
    html: '<div id="swal-content"></div>',
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false,
    
    width: '500px',
    didOpen: () => {
      // Render your component inside the SweetAlert2 modal
      const swalContent = document.getElementById('swal-content');
      const component = content;
      ReactDOM.render(component, swalContent);
    },
  });
};


const HomeColumnRight = () => {
  return (
    
    <div className="home-column1">
      
        <div className="home-right-buttons">
        <Box imageSrc={BadReview}  alt="תלונת לקוח" title="תלונת לקוח"/>
        <div onClick={() => openModal(1)}>
          <Box imageSrc={Handshake} alt="אמנת השירות" title="אמנת השירות" />
        </div>

        <div onClick={() => openModal(2)}>
          <Box imageSrc={Chat} alt="צור קשר" title="צור קשר" />
        </div>


        {/* Add another Box component for the fourth box if needed */}
        </div>  
    </div>
  );
};

export default HomeColumnRight;