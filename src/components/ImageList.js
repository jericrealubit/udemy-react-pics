import './ImageList.css';
import ImagesShow from './ImageShow';

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImagesShow key={image} image={image} />
  });

  return (
    <div className='image-list'>
      <div>ImageList: {images.length}</div>
      <div>{renderedImages}</div>
    </div>
  );
}

export default ImageList;