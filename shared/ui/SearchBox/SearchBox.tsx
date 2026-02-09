import { Icons } from "@/shared/ui/Icons";
import type { ChangeEvent, FormEvent } from "react";
import { searchBoxStyles } from "./SearchBox.styles";

interface SearchBoxProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  id?: string;
  placeholder?: string;
  className?: string;
}

export function SearchBox({
  value,
  onChange,
  onSubmit,
  id = "search",
  placeholder = "검색...",
  className,
}: SearchBoxProps) {
  const { base, input, icon } = searchBoxStyles();

  return (
    <form onSubmit={onSubmit} role="search" className={base({ className })}>
      <label htmlFor={id} className="sr-only">
        검색
      </label>
      <Icons.search className={icon()} size={18} aria-hidden="true" />
      <input
        id={id}
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={input()}
      />
    </form>
  );
}
