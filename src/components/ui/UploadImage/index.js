import React, {useState} from 'react';
import * as PropTypes from 'prop-types';


const UploadImage = (
    {
        setFieldValue
    }
) => {
    const [image, setImage] = useState([])

    const handleChange = (event) => {
        const file = event.currentTarget.files[0]
        setFieldValue('image', file)
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file)
    }


    return (
        <div><img src={image} alt=""/>
            <div>
                <input accept="image/*" type="file" onChange={handleChange}/>
            </div>
        </div>

    );
};

UploadImage.propTypes = {};

UploadImage.defaultProps = {};

export default UploadImage;
