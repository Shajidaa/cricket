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
        port: '',
        pathname: '/thumb/**',
        search: '',
      },{
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
        search: '',
      },
      
    ],
  },
};

export default nextConfig;
