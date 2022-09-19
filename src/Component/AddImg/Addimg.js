import React, {useState} from 'react';

const Addimg = () => {
    const defaultData = {date: "10:05"}
    const [storeData, setStoreData] = useState(defaultData);

    const collectData = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        let allStoreData = {...storeData};
        allStoreData[field] = value; 
        setStoreData(allStoreData);
        console.log(storeData.image);
    }
    const handleData = () => {
        
    }
    return (
        <div>
            <h1>Add img section</h1>
            <form onClick={() => handleData()}>
                <div>
                    <input type="file" name="image" required onBlur={collectData}/>
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
                <div>
                    <button type="submit">Upload</button>
                </div>
            </form>
        </div>
    );
};

export default Addimg;