import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import {useDropzone} from 'react-dropzone'


const UploadImage = (
    {
        setFieldValue
    }
) => {
    const [image, setImage] = useState([])
    const [loading, setLoading] = useState(false)

    // const {getRootProps, getInputProps, isDragActive} = useDropzone({
    //     accept: "image/*",
    //     onDrop: acceptedFiles => {
    //         setFieldValue("image", acceptedFiles);
    //     }
    // });

    const handleChange = (event) => {
        // const file = event.currentTarget.files[0]
        // setImage(file)

        // setFieldValue("image", event.currentTarget.files[0])
        // console.log(image)
    }
    //
    // const handleFileUpload = (event) => {
    //     const file = event.target.files[0]
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setImage(reader.result);
    //     };
    //     reader.readAsDataURL(file)
    //     console.log(reader.readAsDataURL(file))
    //     console.log(image)
    // }

    return (
        <div>
            {/*{}*/}
            {/*<div {...getRootProps({ className: "dropzone" })}>*/}
            {/*    <input {...getInputProps()} />*/}
            {/*    {isDragActive ? (*/}
            {/*        <p>Drop the files here ...</p>*/}
            {/*    ) : (*/}
            {/*        <p>Drag 'n' drop some files here, or click to select files</p>*/}
            {/*    )}*/}
            {/*</div>*/}
            // <div>
            //
            //     <input accept="image/*" type="file" onChange={handleChange}/>
            // </div>
        </div>

    );
};

UploadImage.propTypes = {};

UploadImage.defaultProps = {};

export default UploadImage;
