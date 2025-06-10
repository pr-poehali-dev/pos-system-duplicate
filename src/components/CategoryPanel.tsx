import { useState } from "react";
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

interface CategoryPanelProps {
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

const CategoryPanel = ({
  selectedCategory,
  onCategorySelect,
}: CategoryPanelProps) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <h2 className="font-montserrat font-bold text-xl text-gray-800 mb-6">
        Меню
      </h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "ghost"}
            className={`w-full justify-start text-left p-4 h-auto ${
              selectedCategory === category.id
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => onCategorySelect(category.id)}
          >
            <span className="text-2xl mr-3">{category.icon}</span>
            <span className="font-roboto font-medium">{category.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryPanel;
