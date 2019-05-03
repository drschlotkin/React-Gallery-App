import React from 'react';
import GalleryItem from './GalleryItem';
import NoGifs from './noGIFs';

/* Array containing picture data is passed in here, along with the loading state of the API call

A conditional statement is used to check one of three conditions:
(1) If array contains data, each picture is passed to <GalleryItem /> which is returned and displayed to the DOM
(2) "Searching ..." is temporarily displayed until picture data is returned from the API server
(3) "No gif found" is displayed if search is unsuccessful */ 


const Gallery = ({pictures, title, loading}) => {   
  
  const length = pictures.length;

  let gifs;
  
  if (length > 0){
    gifs = pictures.map(gif => <GalleryItem url={gif} key={gif.id}/>)
  }else if(loading){
    gifs = <h1>Searching...</h1>
  }else{
    gifs = <NoGifs />
  }
  
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

 