import ImageGallery from "react-image-gallery";
import mobile from "../../Images/mobile.png";
import "react-image-gallery/styles/css/image-gallery.css";
import RightButton from "./RightButton";
import LeftButton from "./LeftButton";

const ProductGallery = () => {
  const images = [
    {
      // this is the original image url will shom Up
      original: `${mobile}`,
      // this is the image url will shom down
      thumbnail: `${mobile}`,

      thumbnailWidth: 50,
      thumbnailHeight: 50,
    },
    {
      original:
        "https://cdn.pixabay.com/photo/2012/04/18/20/54/iphone-37856_640.png",
      thumbnail:
        "https://cdn.pixabay.com/photo/2012/04/18/20/54/iphone-37856_640.png",

      thumbnailWidth: 50,
      thumbnailHeight: 50,
    },
    {
      original:
        "https://cdn.pixabay.com/photo/2013/07/12/13/57/smartphone-147656_640.png",
      thumbnail:
        "https://cdn.pixabay.com/photo/2013/07/12/13/57/smartphone-147656_640.png",
      thumbnailWidth: 50,
      thumbnailHeight: 50,
    },
    {
      original:
        "https://cdn.pixabay.com/photo/2019/03/23/19/57/smartphone-4076145_640.png",
      thumbnail:
        "https://cdn.pixabay.com/photo/2019/03/23/19/57/smartphone-4076145_640.png",
      thumbnailWidth: 50,
      thumbnailHeight: 50,
    },
  ];

  return (
    <div
      className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2 my-5"
    >
      <ImageGallery
        items={images}
        defaultImage={mobile}
        showFullscreenButton={false}
        isRTL={true}
        showPlayButton={false}
        showThumbnails={true} 
        thumbnailPosition="bottom" 
        showBullets={true} 
        showIndex={true} 
        autoPlay={true} 
        slideInterval={3000} 
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
      />
    </div>
  );
};

export default ProductGallery;
