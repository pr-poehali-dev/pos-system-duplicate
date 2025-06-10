import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  isPopular?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="relative overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer">
      {product.isPopular && (
        <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600 z-10">
          Хит продаж
        </Badge>
      )}

      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>

      <CardContent className="p-4">
        <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="font-roboto text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-montserrat font-bold text-xl text-red-500">
            {product.price} ₽
          </span>
          <Button
            onClick={() => onAddToCart(product)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6"
          >
            Добавить
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
