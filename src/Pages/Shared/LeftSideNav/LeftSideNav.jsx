import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="ml-4 space-y-6">
      <h1 className="text3xl font-bold">All Categories</h1>
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          className="block"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
