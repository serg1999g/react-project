import React, {} from 'react';
import BaseLink from "components/ui/Link/Base";
import classes from './Primary.module.scss';
import slide1 from 'assets/images/1.jpg';
import slide2 from 'assets/images/2.jpg';
import slide3 from 'assets/images/turtle_bg.jpg';


const PrimarySlider = (
    {}
) => {

    return (
        <div className={classes.contentWrapper}>
            <div className={classes.blockSlide}>
                <img className={classes.image} src={slide1} alt=""/>

                <div className={classes.blockWithDescription}>
                    <h4 className={classes.title}>Save Marine Species</h4>
                </div>
                <div className={classes.wrapperBtn}>
                    <BaseLink path='species-we-protect' title='Open' spacing='px-3 py-1'/>
                </div>
            </div>
            <div className={classes.blockSlide}>
                <img className={classes.image} src={slide2} alt=""/>

                <div className={classes.blockWithDescription}>
                    <h4 className={classes.title}>Fight Climate Change</h4>
                </div>
                <div className={classes.wrapperBtn}>
                    <BaseLink path='fight-climate-change' title='Open' spacing='px-3 py-1'/>
                </div>
            </div>
            <div className={classes.blockSlide}>
                <img className={classes.image} src={slide3} alt=""/>

                <div className={classes.blockWithDescription}>
                    <h4 className={classes.title}>
                        Sea Turtle
                    </h4>
                </div>
                <div className={classes.wrapperBtn}>
                    <BaseLink path='sea-turtle' title='Open' spacing='px-3 py-1'/>
                </div>
            </div>
        </div>

    );
};


export default PrimarySlider;