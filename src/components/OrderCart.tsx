import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderCartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const OrderCart = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: OrderCartProps) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-montserrat font-bold text-xl text-gray-800">
          Заказ ({itemCount})
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {items.length === 0 ? (
          <div className="text-center py-8">
            <Icon
              name="ShoppingCart"
              size={48}
              className="mx-auto text-gray-400 mb-4"
            />
            <p className="font-roboto text-gray-500">Корзина пуста</p>
            <p className="font-roboto text-sm text-gray-400 mt-2">
              Добавьте товары для оформления заказа
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="p-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-roboto font-medium text-gray-800 flex-1">
                    {item.name}
                  </h4>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-gray-400 hover:text-red-500"
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
                      className="h-8 w-8"
                      onClick={() =>
                        onUpdateQuantity(
                          item.id,
                          Math.max(0, item.quantity - 1),
                        )
                      }
                    >
                      <Icon name="Minus" size={14} />
                    </Button>
                    <span className="font-roboto font-medium min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      <Icon name="Plus" size={14} />
                    </Button>
                  </div>
                  <span className="font-montserrat font-semibold text-red-500">
                    {item.price * item.quantity} ₽
                  </span>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-roboto text-gray-600">Подытог:</span>
              <span className="font-roboto font-medium">{total} ₽</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-roboto text-gray-600">НДС (20%):</span>
              <span className="font-roboto font-medium">
                {Math.round(total * 0.2)} ₽
              </span>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="font-montserrat font-bold text-lg">Итого:</span>
              <span className="font-montserrat font-bold text-xl text-red-500">
                {Math.round(total * 1.2)} ₽
              </span>
            </div>
            <Button
              onClick={onCheckout}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-6 text-lg font-montserrat"
            >
              Оформить заказ
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCart;
