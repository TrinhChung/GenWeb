import { Link } from "react-router-dom";

const CategoryItem = ({ categoryTitle, image, link } : { categoryTitle: string; image: string; link: string; }) => {
  return (
    <div
      className="relative w-full sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] xl:w-[600px]"
    >
      <Link to={`/shop/${link}`}>
      <img
        src={`/src/assets/${image}`}
        className="h-full w-full object-cover"
      />
      <div className="bg-secondaryBrown text-white absolute bottom-0 w-full h-16 flex justify-center items-center max-sm:h-12">
        <h3 className="text-2xl max-sm:text-xl">{ categoryTitle }</h3>
      </div>
      </Link>
    </div>
  );
};
export default CategoryItem;
