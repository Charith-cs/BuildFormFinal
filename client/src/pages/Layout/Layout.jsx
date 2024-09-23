import React, { useState } from 'react';

import "./layout.scss";
import LeftSidebar from '../../components/LeftSideBar/LeftSideBar';
import MainEditor from '../../components/MainEditor/MainEditor';
import EmailEditor from '../../components/EmailEditor/EmailEditor';
import RightSidebar from '../../components/RightSideBar/RightSideBar';

const Layout = () => {

  //side bars state
  const [isOpen, setOpen] = useState(false);
  const [isOpenEmail, setOpenEmail] = useState(false);

  // Email state and handlers
  const [emailTitle, setEmailTitle] = useState("");
  const [emailDescription, setEmailDescription] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isEmailRequired, setIsEmailRequired] = useState(false);

  //email verification
  const handleEmailTitleChange = (value) => {
    setEmailTitle(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (isEmailRequired || !emailRegex.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handleRequiredToggle = () => {
    setIsEmailRequired((prev) => !prev);
    if (isEmailRequired) setEmailError("");
  };


  //main edit side bar states
  const [mainTitle, setMainTitle] = useState("");
  const [mainDesc, setMainDesc] = useState("");
  const [buttonText, setButtonText] = useState("Start");

  //upload image state
  const [image, setImage] = useState(null);

  //main side changing button state
  const [isColumnLayout, setIsColumnLayout] = useState(false);



  return (
    <div className='home'>
      <div className='left'>

        <LeftSidebar
          toggleMenu={() => setOpen(!isOpen)}
          toggleMenuEmail={() => setOpenEmail(!isOpenEmail)}
        />

        <MainEditor
          isOpen={isOpen}
          toggleMenu={() => setOpen(!isOpen)}
          setMainTitle={setMainTitle}
          setMainDesc={setMainDesc}
          setButtonText={setButtonText}
          mainTitle={mainTitle}
          mainDesc={mainDesc}
          buttonText={buttonText}

          image={image}
          setImage={setImage}

          isColumnLayout={isColumnLayout}
          setIsColumnLayout={setIsColumnLayout}

        />

        <EmailEditor
          isOpenEmail={isOpenEmail}
          toggleMenuEmail={() => setOpenEmail(!isOpenEmail)}
          emailTitle={emailTitle}
          setEmailTitle={handleEmailTitleChange}
          emailDescription={emailDescription}
          setEmailDescription={setEmailDescription}
          emailError={emailError}
          isEmailRequired={isEmailRequired}
          handleRequiredToggle={handleRequiredToggle}
        />
      </div>

      <RightSidebar
        isOpenEmail={isOpenEmail}
        emailTitle={emailTitle}
        emailDescription={emailDescription}
        emailError={emailError}
        setEmailTitle={handleEmailTitleChange}
        setEmailDescription={setEmailDescription}
        setMainTitle={setMainTitle}
        setMainDesc={setMainDesc}
        setButtonText={setButtonText}
        mainTitle={mainTitle}
        mainDesc={mainDesc}
        buttonText={buttonText}
        image={image}

        isColumnLayout={isColumnLayout}
        setIsColumnLayout={setIsColumnLayout}
      />
    </div>
  );
}

export default Layout;
