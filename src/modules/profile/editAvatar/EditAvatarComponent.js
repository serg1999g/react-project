import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {deleteAvatar} from "../store/actions";
import UploadImage from "components/ui/UploadImage";


const EditAvatarComponent = (
    {
        image,
        setFieldValue,
        handleSubmit
    }
) => {
    const dispatch = useDispatch();
    console.log(image)
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
                <div>
                    <button onClick={handleClick}>
                        delete
                    </button>
                    <img src={url} alt="avatar"/>
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
        // <UploadImage setFieldValue='' UserImage={image}/>
    );
};

EditAvatarComponent.propTypes = {
    image: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageable_id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    })
};

EditAvatarComponent.defaultProps = {};

export default EditAvatarComponent;
