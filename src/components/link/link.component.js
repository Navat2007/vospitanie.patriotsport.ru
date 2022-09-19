import React from 'react';
import './link.component.scss';

const MyLink = ({ text, href, target = "_blank", className = "link" }) => {


  return (

    <a className={className}
      rel="noopener noreferrer nofollow" 
      target={target} 
      href={href}>
      {text}
    </a>

  );
};

export default MyLink;