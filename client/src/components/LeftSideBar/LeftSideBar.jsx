import React from 'react';
import "../../pages/Layout/layout.scss";

const LeftSidebar = ({ toggleMenu, toggleMenuEmail }) => (
  <div className='leftContainer'>
    <div className='links'>
      <div className='name'><img src="./images/box.png" alt="b" />Dashboard</div>
      <div><img className='setting' src="./images/settings.png" alt="setting" /></div>
    </div>
    <div className='buttonGroup'>
      <button className='select'>Content</button>
      <button className='un'>Design</button>
      <button className='un'>Share</button>
      <button className='un'>Replies</button>
    </div>
    <div className='contentGroup'>
      <div className='topic'><img src="./images/menu-bar.png" alt="menu" />Steps</div>
      <p>The steps users will take to complete the form</p>
      <div className='itemsGroup'>
        <div className='items' onClick={toggleMenu}>
          <img src="./images/dot.png" alt="" />
          <div>Welcome screen</div>
        </div>
        <div className='items' onClick={toggleMenuEmail}>
          <img src="./images/drag.png" alt="" />
          <div>Email</div>
        </div>
      </div>
      <div className='center'>
        <button>+ Add field</button>
        <hr />
        <div className='items'>
          <img src="./images/dot.png" alt="" />
          <div>End screen</div>
        </div>
      </div>
    </div>
    <div className='endButtons'>
      <button className='b1'><img src="./images/cloud.png" alt="cloud" />Save and publish</button>
      <button className='b2'><img src="./images/delete (1).png" alt="cloud" />Delete</button>
    </div>
  </div>
);

export default LeftSidebar;
