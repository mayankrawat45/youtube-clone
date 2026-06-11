const categories = [
  "All",
  "React",
  "JavaScript",
  "Node",
  "MongoDB",
  "MERN",
  "CSS",
];

const FilterBar = () => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          className="whitespace-nowrap rounded-lg bg-gray-200 px-4 py-2 hover:bg-gray-300"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;