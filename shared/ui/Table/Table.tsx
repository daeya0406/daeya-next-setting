import { ReactNode } from "react";
import { tableStyles } from "./Table.styles";

interface TableProps {
  children: ReactNode;
  className?: string;
}

export function Table({ children, className }: TableProps) {
  const { wrapper, table } = tableStyles();
  return (
    <div className={wrapper({ className })}>
      <table className={table()}>{children}</table>
    </div>
  );
}

// 간단한 사용을 위한 서브 컴포넌트들
export const THeader = ({ children }: { children: ReactNode }) => {
  const { thead } = tableStyles();
  return <thead className={thead()}>{children}</thead>;
};

export const TRow = ({ children }: { children: ReactNode }) => {
  const { tr } = tableStyles();
  return <tr className={tr()}>{children}</tr>;
};

export const TCell = ({
  children,
  isHeader = false,
  className,
}: {
  children: ReactNode;
  isHeader?: boolean;
  className?: string;
}) => {
  const { th, td } = tableStyles();
  return isHeader ? (
    <th className={th({ className })}>{children}</th>
  ) : (
    <td className={td({ className })}>{children}</td>
  );
};
