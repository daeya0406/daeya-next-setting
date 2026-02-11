interface SectionProps {
  children: React.ReactNode;
  color?: "purple" | "amber" | "green" | "blue";
}

export const Section = ({ children, color = "blue" }: SectionProps) => {
  const colorMap = {
    purple: "bg-purple-500",
    amber: "bg-amber-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
  };

  return (
    <h2 className="text-xl font-bold flex items-center gap-2 mb-6 tracking-tight text-gray-900">
      <span className={`w-1.5 h-6 ${colorMap[color]} rounded-full`} />
      {children}
    </h2>
  );
};
