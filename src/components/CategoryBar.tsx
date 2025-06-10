import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: "burgers", name: "Бургеры", icon: "🍔" },
  { id: "chicken", name: "Курица", icon: "🍗" },
  { id: "sides", name: "Гарниры", icon: "🍟" },
  { id: "drinks", name: "Напитки", icon: "🥤" },
  { id: "desserts", name: "Десерты", icon: "🍰" },
  { id: "breakfast", name: "Завтраки", icon: "🥞" },
];

interface CategoryBarProps {
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

const CategoryBar = ({
  selectedCategory,
  onCategorySelect,
}: CategoryBarProps) => {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "ghost"}
          className={`flex-shrink-0 h-12 px-6 transition-all duration-200 ${
            selectedCategory === category.id
              ? "bg-blue-500 hover:bg-blue-600 text-white shadow-md scale-105"
              : "hover:bg-slate-100 text-slate-700 border border-slate-200"
          }`}
          onClick={() => onCategorySelect(category.id)}
        >
          <span className="text-lg mr-2">{category.icon}</span>
          <span className="font-medium">{category.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default CategoryBar;
