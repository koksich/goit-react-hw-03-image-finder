export const ImageGalleryItem = ({src, alt, largeImageURL, openModal}) => { 
    return (
      <li onClick ={()=> openModal(largeImageURL)}>
            <img src={src} alt={alt } />
      </li>
    );
}