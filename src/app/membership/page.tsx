
"use client";
import { useState, useEffect } from 'react';
import Container from '@/components/layout/Container';
import { MembershipData, MembershipType } from '@/types/membership';
import {
  Users,
  Trophy,
  Calendar,
  CheckCircle,
  Star,
  CreditCard,
  UserPlus,
  Shield,
  Award,
  Clock,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

export default function MembershipPage() {
  const [membershipData, setMembershipData] = useState<MembershipData | null>(null);
  const [selectedMembership, setSelectedMembership] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembershipData = async () => {
      try {
        // In a real app, this would be an API call
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


  if (!membershipData) {
    return (
      <Container className="py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Membership Data</h1>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </Container>
    );
  }

  const { team, memberships, statistics, seasons } = membershipData;
  const currentSeason = seasons.find(s => s.season_status === 'Active');

  const getMembershipIcon = (type: string) => {
    switch (type) {
      case 'PLYR': return <Trophy className="w-8 h-8" />;
      case 'ASOC': return <Users className="w-8 h-8" />;
      case 'JUNR': return <Star className="w-8 h-8" />;
      case 'LIFE': return <Award className="w-8 h-8" />;
      default: return <Shield className="w-8 h-8" />;
    }
  };

  const getMembershipColor = (type: string) => {
    // All membership cards use the same red color scheme
    return 'from-red-500 to-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Trophy className="w-12 h-12 text-yellow-400" />
              <h1 className="text-4xl md:text-5xl font-black italic uppercase">
                {team.team_name}
              </h1>
            </div>

            <p className="text-xl md:text-2xl mb-6 text-red-100">
              Join our cricket family and be part of the legacy since {team.established_year}
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{team.home_ground}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{team.team_category}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Team Code: {team.team_code}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Club Statistics</h2>
            <p className="text-gray-600 text-lg">Join our growing cricket community</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{statistics.total_members}</div>
              <div className="text-sm text-gray-600">Total Members</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{statistics.active_members}</div>
              <div className="text-sm text-gray-600">Active Members</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{statistics.playing_members}</div>
              <div className="text-sm text-gray-600">Playing Members</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{statistics.associate_members}</div>
              <div className="text-sm text-gray-600">Associate Members</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{statistics.junior_members}</div>
              <div className="text-sm text-gray-600">Junior Members</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{statistics.life_members}</div>
              <div className="text-sm text-gray-600">Life Members</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{statistics.renewal_rate}</div>
              <div className="text-sm text-gray-600">Renewal Rate</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Current Season Info */}
      {currentSeason && (
        <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Current Season: {currentSeason.season_year}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800 mb-1">Season Start</div>
                  <div className="text-blue-600 font-medium">
                    {new Date(currentSeason.start_date).toLocaleDateString()}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800 mb-1">Season End</div>
                  <div className="text-blue-600 font-medium">
                    {new Date(currentSeason.end_date).toLocaleDateString()}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800 mb-1">Registration Deadline</div>
                  <div className="text-red-600 font-medium">
                    {new Date(currentSeason.registration_deadline).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Membership Types */}
      <Container className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Membership Options</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the membership that best fits your cricket journey and commitment level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {memberships.types.map((membership: MembershipType) => (
              <div
                key={membership.id}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2 ${selectedMembership === membership.id ? 'ring-4 ring-red-500' : ''
                  }`}
                onClick={() => setSelectedMembership(membership.id)}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${getMembershipColor(membership.id)} text-white p-6 text-center`}>
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {getMembershipIcon(membership.id)}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{membership.name}</h3>
                  <p className="text-sm opacity-90">{membership.description}</p>
                </div>

                {/* Pricing */}
                <div className="p-6 text-center border-b">
                  {membership.one_time_fee ? (
                    <div>
                      <div className="text-3xl font-bold text-gray-800 mb-1">
                        ${membership.one_time_fee}
                      </div>
                      <div className="text-sm text-gray-600">One-time payment</div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-3xl font-bold text-gray-800 mb-1">
                        ${membership.annual_fee}
                      </div>
                      <div className="text-sm text-gray-600">per year</div>
                    </div>
                  )}
                </div>

                {/* Benefits */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-4">Benefits Include:</h4>
                  <ul className="space-y-2">
                    {membership.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  <button className={`w-full bg-gradient-to-r ${getMembershipColor(membership.id)} text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}>
                    <UserPlus className="w-5 h-5" />
                    Choose {membership.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Container>


    </div>
  );
}
