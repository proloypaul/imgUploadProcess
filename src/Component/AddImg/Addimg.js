import React, {useState} from 'react';
import {CgProfile} from 'react-icons/cg';
import "./Addimg.css";
const Addimg = () => {
    const defaultData = {date: "10:05"}
    const [storeData, setStoreData] = useState(defaultData);
    const [imageUpload, setImageUpload] = useState(false);

    const handleImage = async (e) => {
        // const imageFile = e.target.files[0];
        // console.log(imageFile);
        setImageUpload(false);
        let imageData = new FormData();
        imageData.set("key", "06a916692ea087d185221539196ef3a5");
        imageData.append("image", e.target.files[0]);
        const res = await window.fetch("https://api.imgbb.com/1/upload", {
            method: "POST",
            body: imageData,
        })
        const data = await res.json();
        // console.log(data);
        console.log(data.data.url_viewer)
        setStoreData({image: data.data.url_viewer});
        setImageUpload(true);
    }
    const collectData = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        let allStoreData = {...storeData};
        allStoreData[field] = value; 
        setStoreData(allStoreData);
        // console.log(storeData.image);
    }
    const handleData = (e) => {
        e.preventDefault();

        fetch(``, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(storeData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        console.log(storeData);
    }
    return (
        <div className='fromPage'>
            <div className='fromContainer'>
                <h1>Hey, Img Uploader</h1>
                <form onClick={() => handleData()} className="from">
                    <label className='fileUpload'>
                        <input type="file" name="image" required onChange={handleImage}/>
                        <span><CgProfile/></span>
                    </label>
                    <div>
                        {imageUpload?<h4 className='successfulMsg'>Image Uploaded successfully!</h4> :<h4>Image upload here</h4>}
                    </div>
                    <div>
                        <input type="text" name="name" placeholder="Enter your Name" required onBlur={collectData} />
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="email@gmail.com" onBlur={collectData} required/>
                    </div>
                    <div>
                        <input placeholder="Enter 8 charecter" type="password" name="password" onBlur={collectData} required/>
                    </div>
                    <div className='submitBtn'>
                        <button type="submit">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addimg;