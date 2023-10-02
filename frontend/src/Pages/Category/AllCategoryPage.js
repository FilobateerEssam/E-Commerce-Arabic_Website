import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";

const AllCategoryPage = () => {
  return (
    <div style={{ minHeight: "550px" }}>

      <CategoryContainer />

      <Pagination />

    </div>
  );
};

export default AllCategoryPage;
