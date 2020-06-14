import React, {} from 'react';
import * as PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {deleteImage} from "../store/actions";
import UploadImage from "components/ui/UploadImage";
import classes from './EditImages.module.scss';

import SpriteIcon from "components/icons/SpriteIcon";


const EditImagesComponent = (
    {
        image,
        setFieldValue,
        handleSubmit
    }
) => {
    const dispatch = useDispatch();

    const handleClick = ((event) => {
        event.preventDefault();
        dispatch(deleteImage(event.currentTarget.id))
    })

    const newImages = image.map(items => {
        return (
            <div>
                {items
                    ?
                    <div className={classes.wrapperImage}>
                        <button onClick={handleClick} className={classes.btn} id={items.id}>
                            <SpriteIcon name='remove-icon'/>
                        </button>
                        <img src={items.image} alt="avatar" className={classes.image}/>
                    </div>
                    :
                    <div>
                        <form onSubmit={handleSubmit}>
                            <UploadImage setFieldValue={setFieldValue}/>
                            <button>
                                update
                            </button>
                        </form>
                    </div>
                }
            </div>
        )
    })

    return (
        <div>
            {newImages}
        </div>
    );
};

EditImagesComponent.propTypes = {
    handleSubmit:PropTypes.func,
};

EditImagesComponent.defaultProps = {};

export default EditImagesComponent;