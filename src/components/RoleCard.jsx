export const RoleCard = ({ title, description, features, variant }) => {
  const styles = {
    admin: "bg-cyan-50 border-cyan-100",
    warehouse: "bg-orange-50 border-orange-100",
    dealer: "bg-blue-50 border-blue-100",
    citizen: "bg-emerald-50 border-emerald-100",
  };

  return (
    <div className={`p-8 rounded-2xl border ${styles[variant]} flex flex-col transition-transform hover:scale-[1.02] cursor-pointer`}>
      <div className="w-10 h-10 mb-4 rounded-lg bg-white shadow-sm flex items-center justify-center">
        {/* Icon placeholder based on variant */}
        <span className="text-xl">
          {variant === 'admin' && '🛡️'}
          {variant === 'warehouse' && '📦'}
          {variant === 'dealer' && '🏪'}
          {variant === 'citizen' && '👥'}
        </span>
      </div>
      <h3 className="font-bold text-slate-800 text-lg mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((item, idx) => (
          <li key={idx} className="flex items-start text-sm text-slate-600">
            <span className="mr-2 mt-1 w-1.5 h-1.5 rounded-full border border-slate-400 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <button className="text-sm font-bold text-teal-600 flex items-center group">
        Enter Dashboard 
        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>
  );
};