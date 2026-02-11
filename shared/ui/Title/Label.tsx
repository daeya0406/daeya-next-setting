interface LabelProps {
  children: React.ReactNode;
  required?: boolean;
}

export const Label = ({ children, required }: LabelProps) => (
  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
    {children}
    {required && <span className="ml-1 text-rose-500">*</span>}
  </label>
);
