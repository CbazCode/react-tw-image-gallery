import { useEffect, useState } from "react";
import { ImageCard } from "./components/ImageCard";


function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}+flowers&image_type=photo`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [])



  return (
    <div className="container mx-auto">
       {isLoading ? <h1 className="text-6xl text-center max-auto mt-32" >LOADING...</h1> : 
       <div className="grid grid-cols-3 gap-4">
         {images.map( img => {
           return <ImageCard key = {img.id} image = {img}/>
         })}
       </div>}
    </div>
  );
}

export default App;
