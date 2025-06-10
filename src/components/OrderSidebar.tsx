import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderSidebarProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const OrderSidebar = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: OrderSidebarProps) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-96 bg-white border-l border-slate-200 flex flex-col shadow-lg">
      <div className="p-6 border-b border-slate-200 bg-slate-900 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Заказ</h2>
          {itemCount > 0 && (
            <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full font-medium">
              {itemCount}
            </span>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {items.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="ShoppingCart" size={32} className="text-slate-400" />
            </div>
            <h3 className="font-semibold text-lg text-slate-600 mb-2">
              Корзина пуста
            </h3>
            <p className="text-slate-500 text-sm">
              Добавьте товары для оформления заказа
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <Card key={item.id} className="border border-slate-200 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover bg-slate-100"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-slate-800 truncate">
                          {item.name}
                        </h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-slate-400 hover:text-red-500 hover:bg-red-50"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          <Icon name="X" size={14} />
                        </Button>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 border-slate-300"
                            onClick={() =>
                              onUpdateQuantity(
                                item.id,
                                Math.max(0, item.quantity - 1),
                              )
                            }
                          >
                            <Icon name="Minus" size={14} />
                          </Button>
                          <span className="font-semibold min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 border-slate-300"
                            onClick={() =>
                              onUpdateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Icon name="Plus" size={14} />
                          </Button>
                        </div>
                        <span className="font-bold text-slate-900">
                          {item.price * item.quantity} ₽
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div className="p-6 border-t border-slate-200 bg-slate-50">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-slate-600">
                <span>Подытог:</span>
                <span className="font-medium">{total} ₽</span>
              </div>
              <div className="flex justify-between items-center text-slate-600">
                <span>НДС (20%):</span>
                <span className="font-medium">{Math.round(total * 0.2)} ₽</span>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-slate-900">Итого:</span>
              <span className="text-2xl font-bold text-blue-600">
                {Math.round(total * 1.2)} ₽
              </span>
            </div>

            <Button
              onClick={onCheckout}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Оформить заказ
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSidebar;
