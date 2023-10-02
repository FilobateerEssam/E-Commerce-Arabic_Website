import { Container, Row } from "react-bootstrap";
import SubTitle from "../Utility/SubTitle";
import CategoryCards from "../Category/CategoryCards";
import clothe from "../../Images/clothe.png";
import cat2 from "../../Images/cat2.png";
import labtop from "../../Images/labtop.png";
import sale from "../../Images/sale.png";


const HomeCategory = () => {
  return (
    <Container>
    
      <SubTitle title="التصنيفات" btntitle="المزيد" pathText='/allcategory' />
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCards title={"الملابس"} background={"#f4dbA5"} img={clothe} />
        <CategoryCards title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
        <CategoryCards title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
        <CategoryCards title="اجهزة منزلية" img={labtop} background="#0034FF" />
        <CategoryCards title="اجهزة منزلية" img={sale} background="#F4DBA4" />
        <CategoryCards title="اجهزة منزلية" img={clothe} background="#FF6262" />
      </Row>

    </Container>
  );
};

export default HomeCategory;
