import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";

// Dummy data
const dikshaSteps = [
  "Kanne Swamy", "Kathi Swamy", "Ganta Swamy", "Gada Swamy", "Peru Swamy",
  "Jyoti Swamy", "Surya Swamy", "Chandra Swamy", "Trishula Swamy", "Vishnu Chakra Swamy",
  "Shankadhara Swamy", "Nagabharana Swamy", "Srihari Swamy", "Padma Swamy",
  "Sri Swamy", "Sri Sabari Swamy", "Omkaara Swamy", "Narikela Swamy"
];

const topDonors = [
  { name: "Ramesh", image: "/assets/gallery/donar1.jpg", amount: 10000, date: "2025-04-01" },
  { name: "Suresh", image: "/assets/gallery/donar1.jpg", amount: 9500, date: "2025-03-28" },
  { name: "Priya", image: "/assets/gallery/donar.jpg", amount: 9100, date: "2025-03-20" },
  { name: "Anitha", image: "/assets/gallery/donar.jpg", amount: 9000, date: "2025-02-18" },
  { name: "Anitha", image: "/assets/gallery/donar.jpg", amount: 9000, date: "2025-02-18" },
  { name: "Mohan", image: "/assets/gallery/donar1.jpg", amount: 8800, date: "2025-02-10"  },
];

const recentDonors = [
    { name: "Swathi", image: "/assets/gallery/donar.jpg", amount: 500, date: "2025-04-23" },
    { name: "Kiran", image: "/assets/gallery/donar1.jpg", amount: 700, date: "2025-04-22" },
    { name: "Meena", image: "/assets/gallery/donar.jpg", amount: 450, date: "2025-04-22" },
    { name: "Vivek", image: "/assets/gallery/donar1.jpg", amount: 650, date: "2025-04-21" },
    { name: "Devi", image: "/assets/gallery/donar.jpg", amount: 800, date: "2025-04-20"  },
    { name: "Devi", image: "/assets/gallery/donar.jpg", amount: 800, date: "2025-04-20"  },
];
const committeeMembers = [
    {
      name: "Ravi Kumar",
      role: "President",
      image: "/assets/committee/john.png",
    },
    {
      name: "Suresh Naidu",
      role: "Vice President",
      image: "/assets/committee/john.png",
    },
    {
      name: "Anil Reddy",
      role: "Treasurer",
      image: "/assets/committee/john.png",
    },
    {
      name: "Bhaskar Rao",
      role: "Secretary",
      image: "/assets/committee/john.png",
    },
    {
      name: "Manjunath",
      role: "Trustee",
      image: "/assets/committee/john.png",
    },
  ];
  

const HomePage = () => {
  return (
    <div className="px-4 md:px-12 py-8 space-y-12">
      {/* Hero */}
      <div className="mt-4">
      <HeroSection />
      </div>
      {/* Diksha Tiles */}
      <section>
        <h2 className="text-2xl font-bold text-[#cd8500] mb-6">Diksha Steps (1st to 18th Year)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dikshaSteps.map((title, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-4 rounded-lg shadow-md backdrop-blur-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img
                // src={`/assets/diksha/${index + 1}.jpg`}
                src={`/assets/gallery/honey_abhishek.jpg`}
                alt={title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold text-white">
                {index + 1} Year – {title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

     {/* Donors Section */}
     <section className="space-y-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
    
    {/* Top 5 Donors */}
    <div>
      <h2 className="text-2xl font-bold text-[#cd8500] mb-4">Top 5 Donors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {topDonors.map((donor, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-4 bg-white/10 p-4 rounded-lg text-white backdrop-blur-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <img
              src={donor.image}
              alt={donor.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">{donor.name}</h4>
              <p>₹{donor.amount.toLocaleString()}</p>
              <p className="text-sm text-gray-300">{donor.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Recent 5 Donors */}
    <div>
      <h2 className="text-2xl font-bold text-[#cd8500] mb-4">Recent 5 Donors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {recentDonors.map((donor, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-4 bg-white/10 p-4 rounded-lg text-white backdrop-blur-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <img
              src={donor.image}
              alt={donor.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">{donor.name}</h4>
              <p>₹{donor.amount.toLocaleString()}</p>
              <p className="text-sm text-gray-300">{donor.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

  </div>
</section>
<section className="space-y-10">
  <h2 className="text-3xl font-bold text-center text-[#cd8500] mb-8">
    Committee Members
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {committeeMembers.map((member, idx) => (
      <motion.div
        key={idx}
        className="bg-white/10 p-6 rounded-xl text-white text-center backdrop-blur-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: idx * 0.1 }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-4 border-[#cd8500]"
        />
        <h4 className="text-lg font-semibold">{member.name}</h4>
        <p className="text-sm text-gray-300">{member.role}</p>
      </motion.div>
    ))}
  </div>
</section>

    </div>
  );
};

export default HomePage;
