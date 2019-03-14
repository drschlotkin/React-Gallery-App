import React from 'react';

// Picture data from <Gallery /> is passed in here and inserted into the <img> tag.

const GalleryItem = props => ( 
  <li>
    <img 
      src={`https://farm${props.url.farm}.staticflickr.com/${props.url.server}/${props.url.id}_${props.url.secret}.jpg}`} 
      alt={props.title}
    />
  </li>
);

export default GalleryItem;