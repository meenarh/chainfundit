import { motion } from "framer-motion";

const currencies = [
  { name: "NGN", value: 1.05, color: "#16A34A" }, 
  { name: "USD", value: 0, color: "#FF0000" },
  { name: "GBP", value: 0.25, color: "#0000FF" }, 
];

const Progress = () => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden flex">
      {currencies.map((currency, index) => (
        <motion.div
          key={index}
          initial={{ width: 0 }}
          animate={{ width: `${currency.value}%` }}
          transition={{ duration: 1 }}
          className="h-full"
          style={{ backgroundColor: currency.color }}
        />
      ))}
    </div>
  );
};

export default Progress;