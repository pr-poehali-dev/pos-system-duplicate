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
    <Card className="group relative overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm">
      {product.isPopular && (
        <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-500 text-white z-10 font-medium">
          ⭐ Хит
        </Badge>
      )}

      <div className="aspect-square overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <CardContent className="p-4">
        <h3 className="font-bold text-lg text-slate-800 mb-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-slate-900">
              {product.price} ₽
            </span>
          </div>
          <Button
            onClick={() => onAddToCart(product)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 font-medium transition-all duration-200 hover:scale-105 shadow-md"
          >
            Добавить
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
