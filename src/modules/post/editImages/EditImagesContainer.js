import React, {} from 'react';
import * as PropTypes from 'prop-types';
import {formFields} from "../edit/constants";
import {useFormik} from 'formik';
import {createImage as createImageAction} from "modules/post/store/actions";
import {connect} from "react-redux";
import EditImagesComponent from "./EditImagesComponent";


const EditImagesContainer = (
    {
        image,
        createImageAction,
    }
) => {

    const {handleSubmit, values, setFieldValue} = useFormik({
        initialValues: {},

        onSubmit(values) {
            const data = new FormData()
            data.append('image-1', values.image)
            createImageAction(data)
        },
    });

    console.log('image',image)

    return (
        <div>
            <EditImagesComponent image={image} setFieldValue={setFieldValue} handleSubmit={handleSubmit}/>
        </div>
    );
};

EditImagesContainer.propTypes = {
    image: PropTypes.array,
    createImageAction: PropTypes.func,
};

EditImagesContainer.defaultProps = {
    image: [],
};

// const mapStateToProps = ({posts: {posts, error}}) => ({
//     posts, error
// });

const mapDispatchToProps = dispatch => ({
    createImageAction: values => {
        dispatch(createImageAction(values));
    }
});

export default connect(null, mapDispatchToProps)(EditImagesContainer);