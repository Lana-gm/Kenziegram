import "./styles.css";

const PictureFrame = ({ post }) => {
  return (
    <figure className="picture__frame">
      <img className="picture" src={post.img_url} alt={post.description} />
    </figure>
  );
};

export default PictureFrame;
