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
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    description: "Сочная котлета из говядины, свежие овощи, специальный соус",
    category: "burgers",
    isPopular: true,
  },
  {
    id: "2",
    name: "Чикен Бургер",
    price: 199,
    image: "https://images.unsplash.com/photo-1606755962773-d324e2daefd4?w=400",
    description: "Хрустящая куриная котлета, салат, томаты, майонез",
    category: "burgers",
  },
  {
    id: "3",
    name: "Картофель фри",
    price: 89,
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400",
    description: "Золотистый картофель фри с морской солью",
    category: "sides",
    isPopular: true,
  },
  {
    id: "4",
    name: "Кока-Кола",
    price: 69,
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400",
    description: "Освежающий напиток 0.5л",
    category: "drinks",
  },
  {
    id: "5",
    name: "Наггетсы",
    price: 159,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400",
    description: "Хрустящие куриные наггетсы 6 шт с соусом",
    category: "chicken",
  },
  {
    id: "6",
    name: "Мороженое",
    price: 45,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
    description: "Ванильное мороженое в стаканчике",
    category: "desserts",
  },
];

interface ProductGridProps {
  selectedCategory: string;
  onAddToCart: (product: any) => void;
}

const ProductGrid = ({ selectedCategory, onAddToCart }: ProductGridProps) => {
  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "all" || product.category === selectedCategory,
  );

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="mb-6">
        <h2 className="font-montserrat font-bold text-2xl text-gray-800">
          {selectedCategory === "burgers" && "Бургеры"}
          {selectedCategory === "chicken" && "Курица"}
          {selectedCategory === "sides" && "Гарниры"}
          {selectedCategory === "drinks" && "Напитки"}
          {selectedCategory === "desserts" && "Десерты"}
          {selectedCategory === "breakfast" && "Завтраки"}
          {selectedCategory === "all" && "Все товары"}
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
