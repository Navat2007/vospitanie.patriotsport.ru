import React from 'react';
import './accordion.component.scss';

const AccordionMenu = ({children, title, opened = false, className = 'accordion --place-main-menu'}) => {

    const [openState, setOpenState] = React.useState(opened);

    const toggle = (e) => {

        let accordion = e.target.parentElement;
        let section = accordion.querySelector('.accordion__section');
        let transitionDuration = parseFloat(getComputedStyle(section)['transitionDuration']) * 1000;

        if (accordion.classList.contains('--opened')) {
            section.style.maxHeight = section.scrollHeight + "px";
            section.style.overflow = null;
            setTimeout(() => {
                section.style.maxHeight = null;
            }, 100);
        } else {
            section.style.maxHeight = section.scrollHeight + "px";
            setTimeout(() => {
                section.style.overflow = 'unset';
                section.style.maxHeight = 'unset';
            }, transitionDuration);
        }

        setOpenState(!openState);
    }

    return (
        <li className={`${className}${openState ? " --opened" : ""}`}>
            <p className="main-menu__link accordion__caption --no-select --no-drag" onClick={toggle}>
                {title} <span className="mdi mdi-menu-right"/>
            </p>
            <ul className="main-menu__sublist accordion__section">
                {children}
            </ul>
        </li>
    );
};

export default AccordionMenu;