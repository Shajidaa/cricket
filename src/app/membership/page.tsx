"use client";
import { useState, useEffect } from 'react';
import Container from '@/components/layout/Container';
import { MembershipData, MembershipType } from '@/types/membership';
import { CheckCircle, Info} from 'lucide-react';

export default function MembershipPage() {
  const [membershipData, setMembershipData] = useState<MembershipData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembershipData = async () => {
      try {
        const response = await fetch('/data/membership.json');
        const data = await response.json();
        setMembershipData(data);
      } catch (error) {
        console.error('Error fetching membership data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMembershipData();
  }, []);

  if (loading || !membershipData) return <div className="text-center h-screen py-20">Loading...</div>;

  const { memberships } = membershipData;

  // Function to match colors from the image (Gold/Orange/Grey)
  const getMembershipColor = (id: string) => {
    switch (id) {
      case 'ALL_ACCESS': return 'text-orange-500 border-orange-500';
      case 'CHAMPIONS': return 'text-yellow-600 border-yellow-600';
      case '1885_CLUB': return 'text-blue-900 border-blue-900';
      default: return 'text-orange-400 border-orange-400';
    }
  };

  return (
    <div className="min-h-screen bg-white">
       {/* Header Section */}
            <div className="bg-gradient-to-r from-black via-red-950 to-red-600 text-white p-6 shadow-lg mb-8">
              <Container className="p-5">
                <div className="flex justify-between items-end mb-8">
                  <h1 className="text-5xl font-black italic text-white tracking-tighter text-center pl-4 uppercase">
                   MemberShip
                  </h1>
               </div>
              </Container>
            </div>
      {/* Header following the image style */}
      <div className="flex justify-between items-center px-8 py-6  mx-auto max-w-7xl">
        <h1 className="text-3xl  font-bold text-gray-800">Popular Membership Packages</h1>
        <button className="bg-gray-700 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider">
          Browse All Options
        </button>
      </div>

      <Container className="pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memberships.types.map((membership: MembershipType) => (
            <div key={membership.id} className="border border-gray-200 shadow-md flex flex-col">
              {/* Image Placeholder (matching the top of cards) */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-bold uppercase">
                  {membership.id === 'CHAMPIONS' || membership.id === '1885_CLUB' ? 'Premium Membership' : ''}
                </div>
              </div>

              <div className="p-6 grow flex flex-col items-center text-center">
                <h3 className={`text-2xl font-black uppercase mb-4 ${getMembershipColor(membership.id)}`}>
                  {membership.name}
                </h3>
                
                {/* Simulated Icon Row */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[10px] font-bold">
                      🏆
                    </div>
                  ))}
                </div>

                <div className="w-full border-t border-gray-300 my-4" />
                
                <div className="text-2xl font-bold text-gray-700 mb-6">
                  ${membership.annual_fee}
                </div>

                <ul className="space-y-3 text-left w-full mb-8">
                  {membership.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-red-500 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* More Info Button (matching the image) */}
              <button className="w-full bg-gray-600 text-white font-bold py-4 uppercase flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors">
                More Info <Info className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}