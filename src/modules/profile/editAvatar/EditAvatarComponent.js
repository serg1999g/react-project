import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {deleteAvatar} from "../store/actions";
import UploadImage from "components/ui/UploadImage";
import classes from './EditAvatar.module.scss';
import SpriteIcon from "components/icons/SpriteIcon";


const EditAvatarComponent = (
    {
        image,
        setFieldValue,
        handleSubmit
    }
) => {
    const dispatch = useDispatch();

    const url = useMemo(() => {
        return image
            ? image.image
            : null
    })
    const id = useMemo(() => {
        return image
            ? image.id
            : null
    })
    const handleClick = ((event) => {
        event.preventDefault();
        dispatch(deleteAvatar(id))
    })

    return (
        <div>
            {image
                ?
                <div className={classes.wrapperImage}>
                    <button onClick={handleClick} className={classes.btn}>
                        <SpriteIcon name='remove-icon'/>
                    </button>
                    <img src={url} alt="avatar" className={classes.image}/>
                </div>
                :
                <div>
                    <form onSubmit={handleSubmit}>
                        <UploadImage setFieldValue={setFieldValue}/>
                        <div className='d-flex'>
                            <button className={classes.updateAvatarBtn}>
                                Update Avatar
                            </button>
                        </div>
                    </form>
                </div>
            }
        </div>
    );
};

EditAvatarComponent.propTypes = {};

EditAvatarComponent.defaultProps = {};

export default EditAvatarComponent;
