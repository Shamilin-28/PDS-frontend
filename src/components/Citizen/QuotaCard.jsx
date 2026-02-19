import React from 'react';
import { Package } from 'lucide-react';

const QuotaCard = ({ item, amount, color }) => {
  const styles = {
    orange: "border-orange-100 bg-orange-50/50 text-orange-700",
    green: "border-emerald-100 bg-emerald-50/50 text-emerald-700"
  };

  return (
    <div className={`p-6 rounded-[24px] border-2 ${styles[color]} flex items-center justify-between transition-all hover:shadow-lg hover:-translate-y-1`}>
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-2xl bg-white shadow-sm`}>
          <Package size={24} />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest opacity-70">{item} Available</p>
          <h3 className="text-3xl font-black">{amount}</h3>
        </div>
      </div>
      <button className="text-xs font-bold underline underline-offset-4 decoration-2 hover:opacity-70">View Details</button>
    </div>
  );
};

export default QuotaCard;