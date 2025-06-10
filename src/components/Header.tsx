import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
          <Icon name="Utensils" size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold">IIKO POS 2025</h1>
          <p className="text-sm text-slate-400">Кассовая система</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="text-right">
          <p className="text-sm text-slate-400">Смена №247</p>
          <p className="text-sm font-medium">Кассир: Анна С.</p>
        </div>
        <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
          <Icon name="User" size={20} className="text-slate-300" />
        </div>
      </div>
    </header>
  );
};

export default Header;
