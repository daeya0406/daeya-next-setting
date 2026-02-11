import { Search } from "lucide-react";
import { searchBoxStyles } from "./SearchBox.styles";

interface SearchBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSubmit?: (e: React.FormEvent) => void;
  hasButton?: boolean;
  buttonText?: string;
}

export function SearchBox({
  onSubmit,
  hasButton = false,
  buttonText = "",
  className,
  ...props
}: SearchBoxProps) {
  const { base, input, icon, button } = searchBoxStyles({ hasButton });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form onSubmit={handleFormSubmit} className={base({ className })}>
      {/* 버튼이 없을 때 */}
      {!hasButton && <Search className={icon()} size={18} />}

      <input type="text" className={input()} {...props} />

      {/* 버튼이 있을 때 */}
      {hasButton && (
        <button type="submit" className={button()}>
          <Search size={16} strokeWidth={2.5} />
          {buttonText}
        </button>
      )}
    </form>
  );
}
