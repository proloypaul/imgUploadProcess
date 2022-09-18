import React from 'react';

const Addimg = () => {
    return (
        <div>
            <h1>Add img section</h1>
            <from>
                <div>
                    <input type="file" name="img"/>
                </div>
                <div>
                    <input type="text" name="name" placeholder="Enter your Name"/>
                </div>
                <div>
                    <input type="email" name="email" placeholder="email@gmail.com"/>
                </div>
                <div>
                    <input placeholder="Enter 8 charecter" type="password" name="password" />
                </div>
                <div>
                    <button type="submit">Upload</button>
                </div>
            </from>
        </div>
    );
};

export default Addimg;