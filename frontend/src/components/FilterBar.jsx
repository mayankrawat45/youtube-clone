const categories = [
  "All",
  "React",
  "JavaScript",
  "Node",
  "MongoDB",
  "MERN",
  "CSS",
];

const FilterBar = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="sticky top-14 z-40 mb-4 flex gap-3 overflow-x-auto bg-white py-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            setSelectedCategory(category)
          }
          className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition ${
            selectedCategory === category
              ? "bg-black text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;