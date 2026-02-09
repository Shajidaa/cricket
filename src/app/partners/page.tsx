"use client";
import Container from "@/components/layout/Container";
import { useEffect, useState } from "react";

// Defining an interface makes your code much easier to manage
interface Partner {
  company: string;
  description: string;
  website: string;
}

export default function Partners() {
  const [partnersData, setPartnersData] = useState<Partner[] | null>(null);

  useEffect(() => {
    const fetchPartnersData = async () => {
      try {
        const response = await fetch('/data/partners.json');
        const data = await response.json();
        // Access the 'partnerships' array from your JSON
        setPartnersData(data.partnerships);
      } catch (error) {
        console.error('Error fetching partners data:', error);
      }
    };
    fetchPartnersData();
  }, []);

  return (
    <section className="">
   
       <div className="bg-gradient-to-r from-black via-red-950 to-red-600 text-white p-6 shadow-lg">
           <h1 className="text-4xl md:text-5xl text-center font-black italic mb-8 pl-4 uppercase">
            Our Partners
           </h1>
         </div>
         <Container>
      {!partnersData ? (
        <p>Loading partners...</p>
      ) : (
        <div className="grid mt-5 mb-5  gap-6 ">
          {partnersData?.map((partner, index) => (
            <div key={index} >
              <h3 className="md:text-5xl text-3xl font-semibold">{partner.company}</h3>
              <p className="text-gray-600 my-2">{partner.description}</p>
              <a 
                href={`https://${partner.website}`} 
                target="_blank" 
                className="text-red-500 hover:underline"
              >
                Visit {partner.company}
              </a>
            </div>
          ))}
        </div>
      )}
         </Container>

    </section>
  );
}