import { Col } from "react-bootstrap";

const CategoryCards = ({ img, background, title }) => {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-4 d-flex justify-content-around "
    >
      <div className="allCard mb-3 ">
        <div

          // الخلفيه و الصورة و التصنيف
          className="categoty-card "
          style={{ backgroundColor: `${background}` }}
        ></div>{" "}
        <img alt="zcv" src={img} className="categoty-card-img" />
        <p className="categoty-card-text my-2">{title}</p>
        
      </div>
    </Col>
  );
};

export default CategoryCards;
