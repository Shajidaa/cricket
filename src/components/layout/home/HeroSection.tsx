import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      {/* 1. The Background Image */}
      <Image
        src="https://resources.melbourne-renegades.pulselive.com/photo-resources/2026/01/14/84061bde-3d12-46ae-bac8-075b113b2862/GettyImages-2255609787.jpg?width=1600&height=640"
        alt="Cricket Hero"
        fill // Fills the container
        priority // Loads the image faster
        className="object-cover" // Ensures it covers the area without stretching
      />

      {/* 2. The Black Overlay */}
      {/* opacity-50 makes it semi-transparent; adjust as needed */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 3. Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">
        Thanks, Gades fans. 
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl">
         See you next season!
        </p>
     
      </div>
    </div>
  )
}