import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import classes from './Checkbox.module.scss';
import clsx from "clsx";
import SpriteIcon from "components/icons/SpriteIcon";

const CustomCheckbox = (
    {
        id,
        name,
        label,
        onChange,
        color
    }
) => {
    const [checkboxState, setCheckboxValue] = useState(false);

    const handleChange = (event) => {
        setCheckboxValue(event.target.checked);
        onChange(event);
    };

    return (
        <div className={classes.customCheckbox}>
            <label htmlFor={id} className={classes.customLabel}>
                <input
                    type='checkbox'
                    id={id}
                    name={name}
                    className={classes.customInput}
                    checked={checkboxState}
                    onChange={handleChange}
                />

                <span className={clsx(classes.checkboxState)}>
                    {
                        checkboxState && <SpriteIcon name='check'/>
                    }
                </span>

                <span className={color}>
                    {label}
                </span>
            </label>
        </div>
    );
};

CustomCheckbox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.string,
    onChange: PropTypes.func,
};

CustomCheckbox.defaultProps = {
    color: 'text-black',
    label: '',
};

export default CustomCheckbox;
