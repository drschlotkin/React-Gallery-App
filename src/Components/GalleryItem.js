import React from 'react';

const GalleryItem = props => ( 
  <li>
    <img 
      src={`https://farm${props.url.farm}.staticflickr.com/${props.url.server}/${props.url.id}_${props.url.secret}.jpg}`} 
      alt={props.title}
    />
  </li>
);

export default GalleryItem;