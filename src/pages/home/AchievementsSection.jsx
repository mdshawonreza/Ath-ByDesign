import React from "react";

const AchievementsSection = () => {
 const cards = [
  {
    emoji: "👑",
    title: "ATHLETE BY DESIGN",
    text: "Athlete By Design focuses on helping athletes reach their full potential through personalized training, mindset coaching, and performance strategies.",
  },
  {
    emoji: "🚀",
    title: "STRIVE FOR EXCELLENCE",
    text: "The core philosophy of Athlete By Design is continuous improvement. Athletes are encouraged to push their limits both on and off the field, striving to achieve excellence in every aspect.",
  },
  {
    emoji: "❤️",
    title: "COMMUNITY & SUPPORT",
    text: "Athlete By Design emphasizes the importance of teamwork and community. Every athlete is supported through a network of mentors, trainers, and peers to create lasting impact.",
  },
  {
    emoji: "💪",
    title: "MORE THAN JUST SPORTS",
    text: "Athlete By Design goes beyond athletic performance. It empowers athletes with life skills, leadership training, and personal development, ensuring they succeed both in sports and life.",
  },
];

  return (
    <section className="bg-zinc-950 text-white py-20 px-6 md:px-16 relative md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            {/* <div className="text-5xl">{card.emoji}</div> */}
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>

      {/* <div className="text-center mt-16 text-sm text-gray-400">
        <div className="flex justify-center space-x-6 mb-3">
          <a href="#" className="hover:underline">
            PRIVACY POLICY
          </a>
          <a href="#" className="hover:underline">
            USER AGREEMENT
          </a>
        </div>
        <p className="italic mb-2">
          “I promise to never forget where I came from.”
        </p>
        <p className="font-semibold">LEBRON JAMES</p>
        <p className="text-xs mt-4">
          Developed by <span className="text-blue-400">{`{ ETHODE }`}</span>
        </p>
      </div> */}
    </section>
  );
};

export default AchievementsSection;
