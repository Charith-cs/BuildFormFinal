import React from 'react';
import Switch from '@mui/material/Switch';
import "../../pages/Layout/layout.scss";

const EmailEditor = ({ isOpenEmail, toggleMenuEmail, emailTitle, setEmailTitle, emailDescription, setEmailDescription, emailError, isEmailRequired, handleRequiredToggle }) => (
    
    <div className={`leftContainerEmail ${isOpenEmail ? 'open' : ''}`}>
      <div className='container'>
        <div className='top'>
          <div className='sec1'>
            <div className='sectop'>
              <img src="./images/settings.png" alt="setting" /><p>Settings</p>
            </div>
            <div className='secbot'>
              <p>Email</p>
            </div>
          </div>
          <div onClick={toggleMenuEmail} className='sec2'><img src="./images/delete (2).png" alt="delete" /></div>
        </div>
  
        <form>
          <label htmlFor="Title">Title</label>
          <input 
            type="text" 
            name='Title' 
            value={emailTitle} 
            onChange={(e) => setEmailTitle(e.target.value)}
          />
          
  
          <label htmlFor="Description">Description</label>
          <input 
            type="text" 
            name='Description' 
            value={emailDescription} 
            onChange={(e) => setEmailDescription(e.target.value)}
          />
  
          <div className='required'>
            <div className='req'>Required</div>
            <Switch checked={isEmailRequired} onChange={handleRequiredToggle} />
          </div>
  
          <div className='endButtons'>
            <button className='b1'>Save</button>
            <button className='b2'>Discard</button>
          </div>
        </form>
      </div>
    </div>
  );
  
  export default EmailEditor;
