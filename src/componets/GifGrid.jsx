import { Gifitem } from "./Gifitem";
import { useFetchGifs } from "../Hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  // dasjkdhj
  //.then(newImages => setImages(newImages))

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>cargando....</h2>}

      <div className="card-grid">
        {/* images.map...      title={image.title} url={image.url}*/}
        {images.map((image) => (
          <Gifitem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
