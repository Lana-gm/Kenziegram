import './style.css'

const PictureFrame = ({ source, alt }) => {

    return (
            <figure className="picture__frame" >
                <img className="picture" src={source} alt={alt} />
            </figure>
    )

}


export default PictureFrame