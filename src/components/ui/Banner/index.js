import React, {} from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import classes from './Banner.module.scss';
import background from 'assets/images/bg1.jpg';


const Banner = (
    {}
) => {

    return (
        <div className={clsx(classes.wrapperBanner,'d-flex justify-content-center flex-column align-items-center')}
             style={{backgroundImage: `url(${background})`}}>
            <div className={clsx(classes.banner, "text-center")}>
                <h3>

                </h3>

            </div>
        </div>
    );
};

Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;

