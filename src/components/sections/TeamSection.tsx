"use client";
import Image from 'next/image';
import { TeamMember } from '@/types/team';
import { useEffect, useState } from 'react';

export default function TeamSection() {
  const [teamData, setTeamData] = useState<TeamMember[] | null>(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('/data/team.json');
        const data = await response.json();
        setTeamData(data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };
    fetchTeamData();
  }, []);

  return (
    <section className="min-h-screen pb-20">
      <div className="mb-12 bg-gradient-to-r from-black via-red-950 to-red-600 text-white p-8 shadow-lg">
        <h1 className="text-4xl md:text-6xl text-center font-black italic uppercase tracking-tighter">
          Coaching Staff
        </h1>
      </div>

      <div className="container mx-auto px-4 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teamData?.map((member) => (
            <div
              key={member.id}
              className="group relative w-full aspect-[4/5] overflow-hidden bg-[#231f20] shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)",
              }}
            >
              {/* Background Overlay Layer */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black z-10 transition-opacity duration-500 group-hover:via-black/80 group-hover:to-black" />
              
              <div
                className="absolute inset-0 opacity-10 z-0"
                style={{
                  backgroundImage: `linear-gradient(135deg, transparent 25%, #fff 25%, #fff 50%, transparent 50%, transparent 75%, #fff 75%, #fff 100%)`,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Coach Image */}
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-cover object-top grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-10">
                
                {/* Role Tag */}
                <div className="mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="bg-red-600 text-white text-xs font-black uppercase px-4 py-1 skew-x-[-12deg] inline-block shadow-lg">
                    <span className="inline-block skew-x-12">{member.role}</span>
                  </span>
                </div>

                <h3 className="text-white text-3xl md:text-4xl font-black uppercase italic leading-none tracking-tight group-hover:text-red-500 transition-all duration-300">
                  {member.name}
                </h3>

                {/* Bio Section - Expands on Hover */}
                <div className="mt-0 max-h-0 opacity-0 group-hover:mt-4 group-hover:max-h-[60%] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <div className="overflow-y-auto pr-2 h-full custom-scrollbar border-l-2 border-red-600 pl-4">
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed whitespace-pre-line">
                      {member.bio}
                    </p>
                  </div>
                </div>
                
                {/* Decorative line - disappears when bio is shown to save space */}
                <div className="mt-6 w-16 h-1 bg-red-600 transition-all duration-500 group-hover:w-0 group-hover:opacity-0" />
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </section>
  );
}