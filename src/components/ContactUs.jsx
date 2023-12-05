// Box.js
import React from 'react';
import '../styles/ContactUsCss.css'
const ContactUs = () => {
  return (
    <div>
        <h2 style={{textAlign:'center'}}>דרכי יצירת קשר</h2>
        <table class="phone-contact-ways" style={{paddingBottom:"5px"}}>
            <thead>
                <tr>
                <th style={{width:'50%',fontSize:'20px'} }>אדום - מבצעי בלבד</th>
                <th style={{width:'50%',fontSize:'20px'}}>מרכזייה</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td style={{fontSize:'18px'}}>681-2677</td>
                    <td style={{fontSize:'18px'}}>03-5698383</td>
                </tr>
                <tr>
                    <td>או</td>
                    <td>או</td>
                </tr>
                <tr>
                    <td style={{fontSize:'18px'}}>610-9712</td>
                    <td style={{fontSize:'18px'}}>0302-8383</td>
                </tr>
            </tbody>  
            
        </table>
        <hr style={{borderTop: '1px solid #000000',width:'100%'}}/>
        
    </div>
  );
};

export default ContactUs;