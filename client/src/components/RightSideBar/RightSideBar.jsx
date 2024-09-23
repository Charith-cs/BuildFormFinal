import React from 'react';
import "../../pages/Layout/layout.scss";


const RightSidebar = ({
    isOpenEmail,
    emailTitle,
    emailDescription,
    emailError,
    setEmailTitle,
    setEmailDescription,
    setMainTitle,
    setMainDesc,
    mainTitle,
    mainDesc,
    buttonText,
    image,
    isColumnLayout
}) => {

    const previewImage = image ? URL.createObjectURL(image) : "./images/download.png";


    return (

        <div className='right'>
            {/* First Container (rightContainer) */}
            <div className={`rightContainer ${isOpenEmail ? 'hidden' : 'visible'} ${isColumnLayout ? 'columnLayout' : ''}`}>
                <div className='textSide'>
                    <input
                        className='mainSec'
                        type='text'
                        placeholder='Welcome to our form'
                        value={mainTitle === "" ? "Welcome to our form" : mainTitle}
                        onChange={(e) => setMainTitle(e.target.value)}
                    />

                    <input
                        className='descSec'
                        type='text'
                        placeholder='This is a description of the form'
                        value={mainDesc === "" ? "This is a description of the form" : mainDesc}
                        onChange={(e) => setMainDesc(e.target.value)}
                    />

                    <div className='buttonSec'>
                        <button>{buttonText === "" ? "Start" : buttonText}</button>
                        <p>press Enter <img src="./images/left-arrow.png" alt="enter" /></p>
                    </div>
                </div>

                <div className="imageSide">
                    <img src={previewImage} alt="" />
                </div>
            </div>

            {/* Second Container (rightContainerEmail) */}
            <div className={`rightContainerEmail ${isOpenEmail ? 'visible' : 'hidden'}`}>
                <div className='leftEmail'>0 -{'>'}</div>

                <div className='rightEmail'>
                    <input
                        className='title'
                        type="email"
                        name='Title'
                        placeholder='Add question title'
                        value={emailTitle}
                        onChange={(e) => setEmailTitle(e.target.value)}
                    />

                    <input
                        className='desc'
                        type="text"
                        name='Desc'
                        placeholder='Add question description (optional)'
                        value={emailDescription}
                        onChange={(e) => setEmailDescription(e.target.value)}
                    />

                    <input
                        className='type'
                        type="text"
                        name='Type'
                        placeholder='Type here...'
                    />

                    {emailError && <span className="error">{emailError}</span>}
                </div>
                <hr />
            </div>
        </div>
    )
};

export default RightSidebar;
