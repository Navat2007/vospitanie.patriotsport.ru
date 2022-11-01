import React from 'react';
import './accordion.component.scss';

const Accordion = ({children, title, opened = false, className = 'accordion --theme-g100 --icon-caption-plus'}) => {

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
        <div className={`accordion ${className}${openState ? " --opened" : ""}`}>
            <div className="accordion__caption" onClick={toggle}>{title}</div>
            <div className="accordion__section">
                {children}
                <br/>
            </div>
        </div>
    );
};

export default Accordion;