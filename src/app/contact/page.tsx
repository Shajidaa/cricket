import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, MapPin, Send } from 'lucide-react';
import Container from '@/components/layout/Container';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-black via-red-950 to-red-600 text-white p-12 shadow-lg mb-12">
        <Container>
          <h1 className="md:text-6xl text-4xl font-black italic text-center uppercase tracking-tighter">
            Contact
          </h1>
        </Container>
      </div>

      <Container className="pb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Details Column */}
          <div className="space-y-10">
            {/* Phone & Email */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2 inline-block">
                Phone & Email
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone size={20} className="text-red-600" />
                  <span><strong>Phone:</strong> +61 (8) 9265 7222</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail size={20} className="text-red-600" />
                  <span><strong>Email:</strong> <a href="mailto:info@perthscorchers.com.au" className="hover:text-red-600 underline">info@perthscorchers.com.au</a></span>
                </div>
              </div>
            </section>

            {/* Membership */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2 inline-block">
                Membership
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone size={20} className="text-red-600" />
                  <span><strong>Telephone:</strong> +61 8 9265 7279</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail size={20} className="text-red-600" />
                  <span><strong>Email:</strong> <a href="mailto:membership@wacricket.com.au" className="hover:text-red-600 underline">membership@wacricket.com.au</a></span>
                </div>
              </div>
            </section>

            {/* Social Media */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-600 pb-2 inline-block">
                Social Media
              </h2>
              <div className="flex flex-col gap-3">
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                  <Facebook size={20} />
                  <span>Like us on Facebook: <strong>Perth Scorchers</strong></span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-400 transition-colors">
                  <Twitter size={20} />
                  <span>Follow us on Twitter: <strong>@ScorchersBBL</strong> & <strong>@ScorchersWBBL</strong></span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-pink-600 transition-colors">
                  <Instagram size={20} />
                  <span>Follow us on Instagram: <strong>@ScorchersBBL</strong></span>
                </a>
              </div>
            </section>
          </div>

          {/* Address Column */}
          <div className="space-y-10">
            {/* Physical Address */}
            <section className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin size={24} className="text-red-600" /> Physical Address
              </h2>
              <address className="not-italic text-gray-700 space-y-1">
                <p className="font-bold">WACA Ground</p>
                <p>Gate 8, Cnr Hay and Braithwaite Street</p>
                <p>East Perth, Western Australia</p>
              </address>
            </section>

            {/* Postal Address */}
            <section className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-black">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Send size={24} className="text-black" /> Postal Address
              </h2>
              <address className="not-italic text-gray-700 space-y-1">
                <p className="font-bold">Western Australian Cricket Association</p>
                <p>PO Box 6045, East Perth WA 6892</p>
              </address>
            </section>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default ContactPage;