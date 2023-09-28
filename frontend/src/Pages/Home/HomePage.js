import NavBarLogin from "../../Components/Utility/NavBarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscoundSection from "../../Components/Home/DiscoundSection";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <NavBarLogin />
      <Slider />
      <HomeCategory />
      <CardProductsContainer title={"الاكثر مبيعا"} btntitle={"المزيد"}/>

        <DiscoundSection />

      <CardProductsContainer title={"احدث الازياء"} btntitle={"المزيد"}/>
    </div>
  );
};

export default HomePage;
