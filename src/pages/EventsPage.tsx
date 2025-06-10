import { events } from "../data/event";
import { motion } from "framer-motion";

export default function EventsPage() {
  return (
    <div className="min-h-screen mt-6 py-10 bg-[#1e1e2f] text-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#cd8500]">
        Temple Events & Festivals
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {events.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: event.id * 0.1 }}
            className="bg-[#292942] rounded-2xl overflow-hidden shadow-lg border border-[#cd8500] hover:scale-105 transition-all duration-300"
          >
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#cd8500]">{event.title}</h3>
              <p className="text-sm text-gray-300">{new Date(event.date).toDateString()}</p>
              <p className="mt-2 text-sm">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
