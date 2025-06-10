import { useState } from "react";
import CategoryPanel from "@/components/CategoryPanel";
import ProductGrid from "@/components/ProductGrid";
import OrderCart from "@/components/OrderCart";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("burgers");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: any) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert("Заказ оформлен! Спасибо за покупку.");
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <CategoryPanel
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <ProductGrid
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      <OrderCart
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Index;
