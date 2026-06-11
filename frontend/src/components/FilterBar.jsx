const categories = [
  "All",
  "React",
  "JavaScript",
  "Node",
  "MongoDB",
  "MERN",
  "CSS",
];

const FilterBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`whitespace-nowrap rounded-lg px-4 py-2 ${
            selectedCategory === category
              ? "bg-black text-white"
              : "bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;