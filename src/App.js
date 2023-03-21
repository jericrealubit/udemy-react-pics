import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImagesList from './components/ImageList';
import searchImages from './api';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  }

  return <div>
    <SearchBar onSubmit={handleSubmit} />
    <ImagesList images={images} />
  </div>;
}

export default App;