import React from 'react'
import { ImageList,ImageListItem } from '@mui/material';
const Home = () =>{
    return (
        <header className="App-header" style={{backgroundImage:"url('../../../Images/court.jpg')",backgroundSize:"100%", backgroundPosition:"center"}}>
        
        <div>
        <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8} style={{overflow:"hidden"}}>
            <ImageListItem key={1}>
              <img
                src="../../../Images/img1.jpg"
                loading="lazy"
              />
            </ImageListItem>
            
            <ImageListItem key={2}>
              <img
                src="../../../Images/img2.jpg"
                loading="lazy"
              />
            </ImageListItem>
            
            <ImageListItem key={3}>
              <img
                src="../../../Images/img3.jpg"
                loading="lazy"
              />
            </ImageListItem>
            
            <ImageListItem key={4}>
              <img
                src="../../../Images/img4.jpg"
                loading="lazy"
              />
            </ImageListItem>
            
        </ImageList>
        </div>
      </header>
    );
}
export default Home;

