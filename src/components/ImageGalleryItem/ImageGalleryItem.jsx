import { GalleryItem, Img } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ src, alt, largeImageURL, openModal }) => { 
    return (
      <GalleryItem onClick ={()=> openModal(largeImageURL)}>
            <Img src={src} alt={alt } />
      </GalleryItem>
    );
}