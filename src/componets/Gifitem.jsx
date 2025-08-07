import propTypes from "prop-types";

export const Gifitem = ({ title, url, id }) => {
  console.log({ url, title, id });

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

Gifitem.prototype = {
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};
