export default function Gallery() {
  const images = [
    "1.jpg", "10.png", "11.png", "12.webp", "13.png", "14.png", "15.jpg", "16.jpg", "17.jpg", "19.jpg",
    "2.png", "20.png", "21.png", "22.png", "23.png", "24.png", "25.png", "26.png", "3.png", "4.jpg", "6.png", "7.png", "8.png", "9.png"
  ];

  return (
    <main className="relative min-h-screen bg-black pt-32 px-4 pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto animate-in fade-in duration-1000 slide-in-from-bottom-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-[var(--font-cinzel)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 tracking-widest mb-6">
            MEMORIES
          </h1>
          <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
          <p className="mt-8 text-white/60 max-w-2xl mx-auto text-lg">
            A glimpse into the unforgettable moments and stories created within Thamizhagam Reborn.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <div 
              key={i} 
              className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-white/5 bg-white/5 hover:border-amber-500/30 transition-colors duration-500 cursor-pointer"
            >
              <img 
                src={`/reborn-countdown/Memories/${img}`} 
                alt={`Memory ${i + 1}`} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <span className="font-[var(--font-cinzel)] font-bold tracking-widest text-amber-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  TMRP
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
