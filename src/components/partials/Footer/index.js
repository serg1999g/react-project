import React, {} from 'react';
import SpriteIcon from "components/icons/SpriteIcon";
import classes from './Footer.module.scss';
import clsx from 'clsx';

const Footer = (
    {}
) => {

    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className='d-flex justify-content-end'>
                    <a href="https://github.com/serg1999g/laravel-project" target='_blank' className={classes.item}>
                        <SpriteIcon name='github' className={clsx(classes.icon, classes.github)}/>
                    </a>
                    <a href="https://laravel.com/" target='_blank' className={classes.item}>
                        <SpriteIcon name='laravel' className={clsx(classes.icon, classes.laravel)}/>
                    </a>
                    <a href="https://ru.reactjs.org/" target='_blank' className={classes.item}>
                        <SpriteIcon name='react' className={clsx(classes.icon, classes.react)}/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
