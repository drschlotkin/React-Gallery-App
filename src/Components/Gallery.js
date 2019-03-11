import React from 'react';
import GalleryItem from './GalleryItem';
import NoGifs from './noGIFs';

const Gallery = props => {   
  
  const results = props.data;
  const length = results.length;
  let gifs;

  length > 0 ? gifs = results.map(gif => <GalleryItem url={gif} key={gif.id}/>) : gifs=<NoGifs />
  
  return (
    <div className={length > 0 ? "photo-container" : "no-gifs"}>
    <h2>Search Results: <span>{length > 0 ? props.title: 'none'}</span></h2>
      <ul>
        {gifs}
      </ul>
    </div>
  );
};

export default Gallery;

 