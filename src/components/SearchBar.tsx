import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar = ({ searchQuery, onSearchChange }: SearchBarProps) => {
  return (
    <div className="relative mb-4">
      <Icon
        name="Search"
        size={20}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
      />
      <Input
        type="text"
        placeholder="Поиск по меню..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 h-12 text-base border-slate-300 focus:border-blue-400 focus:ring-blue-400"
      />
    </div>
  );
};

export default SearchBar;
