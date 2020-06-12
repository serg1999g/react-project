import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import classes from './UploadImage.module.scss';
import SpriteIcon from "components/icons/SpriteIcon";


const UploadImage = (
    {
        setFieldValue,
    }
) => {
    const [image, setImage] = useState('')

    const handleChange = (event) => {
        const file = event.currentTarget.files[0]
        setFieldValue('image', file)
        const reader = new FileReader();
        reader.onloadend = () => {

            setImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file)
        }
    }


    return (
        <div className='d-flex justify-content-center'>
            <label htmlFor="photo-upload" className={classes.customFileUpload}>
                <div className={classes.imgWrap}>
                    <img className={classes.image} htmlFor="photo-upload" src={image}/>
                </div>
                <SpriteIcon name='upload' className={classes.icon}/>
                {!image ? <SpriteIcon className={classes.defaultIcon} name='user'/> : null}

                <input className={classes.inputFile} id="photo-upload" accept="image/*" type="file" onChange={handleChange}/>
            </label>
        </div>

    );
};

UploadImage.propTypes = {};

UploadImage.defaultProps = {};

export default UploadImage;
