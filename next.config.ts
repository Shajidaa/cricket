import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
    remotePatterns: [
    {
        protocol: 'https',
        hostname: 'resources.melbourne-renegades.pulselive.com',
        pathname: '/**', 
      },
       {
        protocol: 'https',
        hostname: 'static.toiimg.com',
        pathname: '/thumb/**',
      
      },{
        protocol: 'https',
        hostname: 'images.unsplash.com',
         pathname: '/**',
       
      },
      
    ],
  },
};

export default nextConfig;
