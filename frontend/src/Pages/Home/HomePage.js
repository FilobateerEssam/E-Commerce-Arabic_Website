import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import DiscoundSection from "../../Components/Home/DiscoundSection";
import BrandFeatured from "../../Components/Brand/BrandFeatured";

const HomePage = () => {
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <HomeCategory />
      <CardProductsContainer title={"الاكثر مبيعا"} btntitle={"المزيد"} pathText='/products' />

      <DiscoundSection />

      <CardProductsContainer title={"احدث الازياء"} btntitle={"المزيد"} pathText='/products' />
      <BrandFeatured title={" اشهر الماركات"} btntitle={"المزيد"} />
    </div>
  );
};

export default HomePage;
