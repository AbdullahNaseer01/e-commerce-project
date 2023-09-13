import CategoryCard from "./CategoryCard";
import Link from "next/link";

const data = [
  {
    id: 0,
    name: "fruits",
    count: "9 Products",
    img: "../images/category__1.webp",
  },
  {
    id: 1,
    name: "Fresh Vegs",
    count: "8 Products",
    img: "../images/category__2.webp",
  },
  {
    id: 2,
    name: "Canned Goods",
    count: "10 Products",
    img: "../images/category__3.webp",
  },
  {
    id: 3,
    name: "Bread & Bakery",
    count: "12 Products",
    img: "../images/category__4.webp",
  },
  {
    id: 4,
    name: "Fishes",
    count: "10 Products",
    img: "../images/category__5.webp",
  },
  {
    id: 5,
    name: "Eggs & Dairy",
    count: "7 Products",
    img: "../images/category__6.webp",
  },
  {
    id: 6,
    name: "Soft Drinks",
    count: "5 Products",
    img: "../images/category__7.webp",
  },
  {
    id: 7,
    name: "Fresh Fruits",
    count: "9 Products",
    img: "../images/category__1.webp",
  },
];

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => (
        <Link href={`/${el.name}`}  >
          <CategoryCard
            key={el.id}
            img={el.img}
            name={el.name}
            count={el.count}
          />
        </Link>
        ))}
       
      </div>
    </div>
  );
};

export default Category;
