import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import Slider from 'react-slick';
import SpriteIcon from "components/icons/SpriteIcon";
import BaseLink from "../../Link/Base";
import classes from './Primary.module.scss';
import slide1 from 'assets/images/1.jpg';
import slide2 from 'assets/images/2.jpg';


const PrimarySlider = (
    {
        items
    }
) => {
    const PrevArrow = (props) => {
        const {className, onClick} = props;

        return (
            <div onClick={onClick} className={className}>
                <SpriteIcon name={'prev-icon'}/>
            </div>
        )
    };

    const NextArrow = (props) => {
        const {className, onClick} = props;

        return (
            <div onClick={onClick} className={className}>
                <SpriteIcon name={'next-icon'}/>
            </div>
        )
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>,
    };

    // const renderSliderItems = useMemo(() => items.map(({...props}) => (
    //     // <Mission
    //     //     key={`simpleSlide-${props.id}`}
    //     //     {...props}
    //     // />
    // )), [items]);

    return (
        <div className='d-flex flex-wrap justify-content-between'>
            <div className={classes.blockSlide}>
                <img className={classes.image} src={slide1} alt=""/>

                <div className={classes.blockWithDescription}>
                    <h4 className={classes.title}>
                        Save Marine Species
                    </h4>
                </div>
                <div className={classes.wrapperBtn}>
                    <BaseLink path={'species-we-protect'} title={'test'} spacing='px-3 py-1'/>
                </div>
            </div>
            <div className={classes.blockSlide}>
                <img className={classes.image} src={slide2} alt=""/>

                <div className={classes.blockWithDescription}>
                    <h4 className={classes.title}>
                        Save Marine Species
                    </h4>
                </div>
            </div>
            <div className={classes.blockSlide}>
                <img className={classes.image} src={slide1} alt=""/>

                <div className={classes.blockWithDescription}>
                    <h4 className={classes.title}>
                        Save Marine Species
                    </h4>
                </div>
            </div>
        </div>


        // <Slider {...settings}>
        //
        //     <div>
        //         test
        //     </div>
        //     <div>
        //         test
        //     </div>
        //     <div>
        //         test
        //     </div>
        //     <div>
        //         test
        //     </div>
        // </Slider>
    );
};

PrimarySlider.propTypes = {};

PrimarySlider.defaultProps = {};

export default PrimarySlider;