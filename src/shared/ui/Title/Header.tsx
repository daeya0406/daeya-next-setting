interface HeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export const Header = ({ title, description, className = "" }: HeaderProps) => {
  return (
    <div className={`mb-10 space-y-2 ${className}`}>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>
      {description && (
        <p className="text-gray-500 text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
};
