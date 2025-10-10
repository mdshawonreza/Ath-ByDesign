import React from "react";

const AchievementsSection = () => {
  const cards = [
    {
      emoji: "👑",
      title: "JUST A KID FROM AKRON",
      text: "Never forgetting where he came from is central to everything LeBron does. No matter where he goes in the world, he will always be a kid from Akron.",
    },
    {
      emoji: "🚀",
      title: "STRIVE FOR GREATNESS",
      text: "The motivational message LeBron lives by. Greatness is something he strives for on and off the court and this message reminds him and everyone to never stop chasing it.",
    },
    {
      emoji: "❤️",
      title: "WE ARE FAMILY",
      text: "The heart of LeBron & The LeBron James Family Foundation. As they continue their mission to create real and lasting change in the Akron community, this serves as a reminder that everyone on this journey is family forever.",
    },
    {
      emoji: "💪",
      title: "MORE THAN AN ATHLETE",
      text: "Going above and beyond his role as a basketball player has transformed into an empowering message for athletes across the world. Being 'More Than' is the foundation for all of LeBron's and Maverick’s businesses, and has become a movement to empower all people.",
    },
  ];

  return (
    <section className="bg-zinc-950 text-white py-20 px-6 md:px-16 relative">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <div className="text-5xl">{card.emoji}</div>
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
