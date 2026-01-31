import Image from 'next/image';
import { TeamMember } from '@/types/team';

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Chandika Hathurusighe",
    role: "Head Coach",
    bio: `Chandika Hathurusighe has been appointed Bangladesh National Team Head Coach. This will be the former Sri Lanka batsman’s second spell with the Bangladesh team which he had previously coached from 2014 to 2017. The 54-year old Hathurusighe has reached a two-year term with the BCB which starts from February 2023.\n\nHathurusighe said he was excited at the prospect of returning to Bangladesh cricket: “It’s an honour to have been given this opportunity to coach the Bangladesh national team once again.\n\n“I really loved the warmth of the people and the culture of Bangladesh whenever I have been there. I’m looking forward to working with the players once again and enjoy their successes.”\n\nBCB CEO Nizam Uddin Chowdhury has welcomed the new head coach who replaces South African Russell Domingo: “Chandika’s experience and knowledge of Bangladesh cricket will be an advantage for him and will benefit the players. He is a proven tactician and we have seen his impact on the national team during his first assignment.”\n\nSome of the highlights of Hathurusighe’s previous tenure include first ODI series victories over Pakistan, India and South Africa, a maiden quarterfinal appearance in a World Cup (2015) and first Test wins against England, Australia and Sri Lanka.`,
    imageUrl: "https://tigercricket.com.bd/images/2023/03/1759416357391826.jfif",
  },
  {
    id: 2,
    name: "Julian Wood",
    role: "Assistant Coach",
    bio: `Julian Wood, world renowned power-hitting coach, is all set to join Bangladesh set-up in August to help them improve their range of shots as they prepare for the forthcoming T20 Asia Cup.\n\nWood, who is credited for transforming England's white-ball side by introducing power-hitting methods, is expected to arrive before the start of the camp in August and will guide the players for three weeks.\n\n"I think the key for me is there's a lot of talent there. They've always had talent. When it comes to white ball cricket, striking the ball is obviously a major part of the game now," he said.`,
    imageUrl: "https://static.cricbuzz.com/a/img/v1/1080x608/i1/c730844/julian-wood-has-previously-worked-with-the-chattogram-challengers-in-the-bpl.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
            Coaching <span className="text-red-600">Staff</span>
          </h2>
          <div className="h-1.5 w-24 bg-red-600 mt-4 mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto space-y-16 md:space-y-32">
          {teamData.map((member, index) => (
            <div 
              key={member.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-0 lg:gap-12`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 group relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    priority={index === 0}
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  {/* Bangladesh Theme Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent mix-blend-multiply" />
                </div>
                {/* Decorative Element */}
                <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-red-600/10 rounded-full blur-3xl -z-10`} />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 mt-[-40px] lg:mt-0 px-4 md:px-0 z-10">
                <div className="bg-white p-8 md:p-12 shadow-xl rounded-xl border-t-4 lg:border-t-0 lg:border-l-4 border-red-600">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-[2px] bg-red-600"></span>
                    <span className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                      {member.role}
                    </span>
                  </div>
                  
                  <h3 className="text-gray-900 text-3xl md:text-4xl font-black mb-6 leading-tight uppercase">
                    {member.name}
                  </h3>
                  
                  <div className="max-h-[300px] overflow-y-auto pr-4 custom-scrollbar">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-gray-400 text-xs font-medium uppercase tracking-widest">Bangladesh Cricket Board</span>
                    <div className="flex gap-2">
                       <div className="w-2 h-2 rounded-full bg-green-600"></div>
                       <div className="w-2 h-2 rounded-full bg-red-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  
    </section>
  );
}