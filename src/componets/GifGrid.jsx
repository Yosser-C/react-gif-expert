import { Gifitem } from "./Gifitem";
import { useFetchGifs } from "../Hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  //console.log({ isLoading });
  // dasjkdhj
  //.then(newImages => setImages(newImages))

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {/* images.map...      title={image.title} url={image.url}*/}
        {images.map((image) => (
          <Gifitem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.PropTypes = {
  category: PropTypes.string.isRequired,
};
