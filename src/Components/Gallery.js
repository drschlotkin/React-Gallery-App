import React from 'react';
import GalleryItem from './GalleryItem';
import NoGifs from './noGIFs';

/* Array containing picture data is passed in here. Map() is called on the array and each picture is passed 
to <GalleryItem /> which is retured and displayed to the DOM. If array contains no data, then an error message 
is displayed*/

const Gallery = ({pictures, title}) => {   

  const length = pictures.length;
  let gifs;
  length > 0 ? gifs = pictures.map(gif => <GalleryItem url={gif} key={gif.id}/>) : gifs=<NoGifs />;
  
  return (
    
    <div className={length > 0 ? "photo-container" : "no-gifs"}>
    <h2><span>{length > 0 ? title: ''}</span></h2>
      <ul>
        {gifs}
      </ul>
    </div>
  );
};

export default Gallery;

 