import React from 'react';
import "../../pages/Layout/layout.scss";

const MainEditor = ({
    isOpen,
    toggleMenu,
    setMainTitle,
    setMainDesc,
    setButtonText,
    mainTitle,
    mainDesc,
    buttonText,
    handleFileChange,
    image,
    setImage,
    setIsColumnLayout
}) => {

    //control upload functions
    const handleUpload = async () => {
        if (!image) return;

        const formData = new FormData();
        formData.append('file', image);

        try {
            const response = await fetch('https://build-form-final.vercel.app/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const data = await response.json();
            console.log('File uploaded successfully:', data.filePath);
            toggleMenu();
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    //  reset the image to null
    const handleImageRemove = () => {
        setImage(null);
    };

    const previewImage = image ? URL.createObjectURL(image) : "./images/download.png";

    return (
        <div className={`leftContainerEdit ${isOpen ? 'open' : ''}`}>
            <div className='container'>
                <div className='top'>
                    <div className='sec1'><img src="./images/settings.png" alt="setting" /><p>Settings</p></div>
                    <div onClick={toggleMenu} className='sec2'><img src="./images/delete (2).png" alt="delete" /></div>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="Title">Title</label>
                    <input
                        type="text"
                        name='Title'
                        value={mainTitle}
                        onChange={(e) => setMainTitle(e.target.value)}
                    />

                    <label htmlFor="Description">Description</label>
                    <input
                        type="text"
                        name='Description'
                        value={mainDesc}
                        onChange={(e) => setMainDesc(e.target.value)}
                    />

                    <label htmlFor="ButtonText">Button Text</label>
                    <input
                        type="text"
                        name='ButtonText'
                        value={buttonText}
                        onChange={(e) => setButtonText(e.target.value)}
                    />

                    <input
                        type="file"
                        id="fileInput"
                        name='upload'
                        style={{ display: "none" }}
                        accept="image/*"
                        onChange={handleFileChange}
                    />

                    <label htmlFor='file' className="upload">
                        <span><img src="./images/upload.png" alt="upload" />Upload</span>
                        <input style={{ display: "none" }} type='file' id='file' accept='.png , .jpeg , .jpg' onChange={(e) => setImage(e.target.files[0])} />
                    </label>

                    <div className='uploadimagepreview'>
                        {image && <img src={previewImage} alt="" />}
                    </div>

                    <button className='remove' onClick={handleImageRemove}>Remove Image</button>

                    <div className='placement'>
                        <p>Placement</p>
                        <button type="button" onClick={() => setIsColumnLayout(false)}>
                            <img src="./images/imager.png" alt="Row Layout" />
                        </button>
                        <button type="button" onClick={() => setIsColumnLayout(true)}>
                            <img src="./images/imagel.png" alt="Column Layout" />
                        </button>
                    </div>

                    <div className='endButtons'>
                        <button className='b1' onClick={handleUpload}>Save</button>
                        <button className='b2' onClick={toggleMenu}>Discard</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MainEditor;
