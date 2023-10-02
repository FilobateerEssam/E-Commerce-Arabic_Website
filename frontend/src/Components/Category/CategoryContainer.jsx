import { Container, Row } from "react-bootstrap";
import CategoryCards from "./CategoryCards";
import clothe from "../../Images/clothe.png";
import cat2 from "../../Images/cat2.png";
import labtop from "../../Images/labtop.png";
import sale from "../../Images/sale.png";
import pic from "../../Images/pic.png";

const CategoryContainer = () => {
    return ( 
        <Container >
        <div className="admin-content-text mt-2 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCards title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
                <CategoryCards title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
                <CategoryCards title="اجهزة منزلية" img={labtop} background="#0034FF" />
                <CategoryCards title="اجهزة منزلية" img={sale} background="#F4DBA4" />
                <CategoryCards title="اجهزة منزلية" img={clothe} background="#FF6262" />
                <CategoryCards title="اجهزة منزلية" img={pic} background="#F4DBA4" />
                <CategoryCards title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
                <CategoryCards title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
                <CategoryCards title="اجهزة منزلية" img={labtop} background="#0034FF" />
                <CategoryCards title="اجهزة منزلية" img={sale} background="#F4DBA4" />
                <CategoryCards title="اجهزة منزلية" img={clothe} background="#FF6262" />
                <CategoryCards title="اجهزة منزلية" img={pic} background="#F4DBA4" />
                <CategoryCards title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
                <CategoryCards title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
                <CategoryCards title="اجهزة منزلية" img={labtop} background="#0034FF" />
                <CategoryCards title="اجهزة منزلية" img={sale} background="#F4DBA4" />
                <CategoryCards title="اجهزة منزلية" img={clothe} background="#FF6262" />
                <CategoryCards title="اجهزة منزلية" img={pic} background="#F4DBA4" />
            </Row>
        </Container>
     );
}
 
export default CategoryContainer;