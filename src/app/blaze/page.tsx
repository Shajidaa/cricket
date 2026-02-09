import Container from '@/components/layout/Container';
import React from 'react';

export default function BlazePage() {
  const mascots = [
    {
      name: "Blaze",
      age: "7 years",
      position: "Batter",
      food: "Oranges",
      hobbies: "Dancing, playing beach cricket, cheering on the Perth Scorchers",
      holiday: "New Year's Day",
      color: "text-orange-600"
    },
    {
      name: "Amber",
      age: "5 years",
      position: "Bowler",
      food: "Peaches",
      hobbies: "Hopscotch, Playing backyard cricket, cheering on the Perth Scorchers",
      holiday: "Christmas Day",
      color: "text-orange-500"
    }
  ];

  return (
    <div className="">
      {/* Header Bar */}
      <header className="bg-gradient-to-b from-black to-red-700 p-6 text-center">
        <h1 className="text-white text-4xl font-black uppercase italic tracking-wider">
          Blaze & Amber
        </h1>
      </header>

      <Container className='pt-5 pb-5' >
        {/* Intro Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Blaze and Amber are the Perth Scorchers&apos; official mascots.
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The two of them love Scorchers match days, you&rsquo;ll find them circling the #TheFurnace, 
              playing on the field, dashing out high fives, showing off their dance moves and 
              taking selfies with their adoring fans!
            </p>
            <p>
              Despite being dragons, they&rsquo;re fearful of flying and haven&rsquo;t mastered the art of 
              fire breathing. So don&rsquo;t be afraid to come and say hi, they love meeting Scorchers 
              fans and making new friends.
            </p>
          </div>
        </section>

       

        <hr className="border-gray-200 mb-10" />

        {/* Profiles Section */}
        <div className="grid  gap-12">
          {mascots.map((mascot) => (
            <div key={mascot.name}>
              <h3 className={`text-3xl font-black mb-4 text-red-600`}>
                {mascot.name}
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-red-600">■</span>
                  <span className="font-bold text-gray-800">Age:</span> {mascot.age}
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">■</span>
                  <span className="font-bold text-gray-800">Cricket Position:</span> {mascot.position}
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">■</span>
                  <span className="font-bold text-gray-800">Favourite Food:</span> {mascot.food}
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">■</span>
                  <span className="font-bold text-gray-800">Hobbies:</span> {mascot.hobbies}
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">■</span>
                  <span className="font-bold text-gray-800">Favourite Holiday:</span> {mascot.holiday}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}