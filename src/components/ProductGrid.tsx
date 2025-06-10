import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  isPopular?: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "Биг Хит",
    price: 259,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    description: "Сочная котлета из говядины, свежие овощи, специальный соус",
    category: "burgers",
    isPopular: true,
  },
  {
    id: "2",
    name: "Чикен Бургер",
    price: 199,
    image: "https://images.unsplash.com/photo-1606755962773-d324e2daefd4?w=500",
    description: "Хрустящая куриная котлета, салат, томаты, майонез",
    category: "burgers",
  },
  {
    id: "3",
    name: "Картофель фри",
    price: 89,
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500",
    description: "Золотистый картофель фри с морской солью",
    category: "sides",
    isPopular: true,
  },
  {
    id: "4",
    name: "Кока-Кола",
    price: 69,
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500",
    description: "Освежающий напиток 0.5л",
    category: "drinks",
  },
  {
    id: "5",
    name: "Наггетсы",
    price: 159,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500",
    description: "Хрустящие куриные наггетсы 6 шт с соусом",
    category: "chicken",
  },
  {
    id: "6",
    name: "Мороженое",
    price: 45,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
    description: "Ванильное мороженое в стаканчике",
    category: "desserts",
  },
];

interface ProductGridProps {
  selectedCategory: string;
  searchQuery: string;
  onAddToCart: (product: any) => void;
}

const ProductGrid = ({
  selectedCategory,
  searchQuery,
  onAddToCart,
}: ProductGridProps) => {
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryName = {
    burgers: "Бургеры",
    chicken: "Курица",
    sides: "Гарниры",
    drinks: "Напитки",
    desserts: "Десерты",
    breakfast: "Завтраки",
    all: "Все товары",
  }[selectedCategory];

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          {searchQuery ? `Результаты поиска: "${searchQuery}"` : categoryName}
        </h2>
        <p className="text-slate-600 mt-1">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "товар" : "товаров"}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-slate-600 mb-2">
            Ничего не найдено
          </h3>
          <p className="text-slate-500">
            Попробуйте изменить поисковый запрос или выбрать другую категорию
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
