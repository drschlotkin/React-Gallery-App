import React from 'react';
import GalleryItem from './GalleryItem';
import NoGifs from './noGIFs';

const Gallery = ({pictures, title}) => {   

  const length = pictures.length;
  let gifs;
  length > 0 ? gifs = pictures.map(gif => <GalleryItem url={gif} key={gif.id}/>) : gifs=<NoGifs />
  
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

 