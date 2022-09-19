import React from 'react';
import './link.component.scss';

const MyLink = ({text, href, target = "_blank", className = "link", rel = "noopener noreferrer nofollow"}) => {

    return (

        <a className={className}
           rel={rel}
           target={target}
           href={href}>
            {text}
        </a>

    );
};

export default MyLink;