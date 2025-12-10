import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import heroImage from 'figma:asset/e5ab6dffc68d5df31aea65825e6d5ab69db51075.png';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'video',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1621398945024-8d70345f33cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBsYXduJTIwZ3Jhc3MlMjBvdXRkb29yfGVufDF8fHx8MTc2NTM0ODQzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'The Mowing Express- A Complete Guide To Lawn Mowing',
  },
  {
    id: 2,
    type: 'video',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnail: heroImage,
    title: 'Here\'s To 100 Million Metres Of Sir Walter! - Anco Turf',
  },
  {
    id: 3,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1587119908644-2f42171ef3e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxhd24lMjBiYWNreWFyZHxlbnwxfHx8fDE3NjUyODA2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'How To Stop Birds Ripping Up Your Lawn - Anco Turf',
  },
  {
    id: 4,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1759683527845-78059c8bca21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJmJTIwZ3Jhc3MlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzY1MzQ5MTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Professional Turf Installation Guide',
  },
  {
    id: 5,
    type: 'video',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1743327811352-8f9b286f9c12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXduJTIwY2FyZSUyMGdhcmRlbnxlbnwxfHx8fDE3NjUzNDkxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'How to Maintain Your Perfect Lawn - Video Tutorial',
  },
  {
    id: 6,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1636007657954-8986c3c672f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmZWN0JTIwZ3Jhc3MlMjBmaWVsZHxlbnwxfHx8fDE3NjUzNDkxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Perfect Green Grass Field Installation',
  },
  {
    id: 7,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1760017770624-e02d0c7c948e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBkb2clMjBsYXduJTIwZ3Jhc3N8ZW58MXx8fHwxNzY1MzQ4Mjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Family Enjoying Their Beautiful Lawn',
  },
];

export default function ReadyForLife() {
  const [selectedMediaId, setSelectedMediaId] = useState<number>(2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  const selectedMedia = mediaItems.find(item => item.id === selectedMediaId) || mediaItems[0];

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  const handleMediaClick = (id: number) => {
    setSelectedMediaId(id);
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
        setIsPlaying(false);
      } else {
        videoRef.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoClick = () => {
    handlePlayPause();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Reset playing state when media changes
  useEffect(() => {
    setIsPlaying(false);
  }, [selectedMediaId]);

  // Get 3 visible items starting from currentIndex
  const getVisibleItems = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % mediaItems.length;
      visible.push(mediaItems[index]);
    }
    return visible;
  };

  const visibleItems = getVisibleItems();

  return (
    <>
      {/* Heading Section */}
      <section className="py-[40px] bg-[#eeeeee]">
        <div className="max-w-[1400px] mx-auto px-[80px]">
          <h2 className="font-['Basis_Grotesque_Arabic_Pro'] text-[28px] text-[#202020] text-center">
            Engineered For Perfection. Ready For Life.
          </h2>
        </div>
      </section>

      {/* Main Media Display Section */}
      <section className="relative h-[500px] overflow-hidden bg-black">
        {selectedMedia.type === 'image' ? (
          <>
            {/* Background Image - No Play Button */}
            <img 
              src={selectedMedia.url}
              alt={selectedMedia.title}
              className="absolute inset-0 w-full h-full object-cover"
              key={selectedMedia.id}
            />
          </>
        ) : (
          <>
            {/* Video Element without native controls */}
            <video
              src={selectedMedia.url}
              poster={selectedMedia.thumbnail || selectedMedia.url}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
              key={selectedMedia.id}
              ref={setVideoRef}
              onClick={handleVideoClick}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              Your browser does not support the video tag.
            </video>
            
            {/* Custom Center Play Button */}
            {!isPlaying && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayPause();
                }}
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer bg-black/20 transition-all hover:bg-black/30"
                aria-label="Play video"
              >
                <div className="w-[80px] h-[80px] bg-white/95 rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-lg">
                  <Play className="w-[32px] h-[32px] text-[#202020] ml-[4px]" fill="currentColor" />
                </div>
              </button>
            )}
          </>
        )}
      </section>

      {/* Carousel Section */}
      <section className="py-[60px] bg-white">
        <div className="max-w-[1200px] mx-auto px-[80px]">
          <div className="relative">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              disabled={isTransitioning}
              className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center border border-[#e0e0e0] hover:border-[#5d9732] hover:bg-[#5d9732] transition-all z-10 group disabled:opacity-50"
              aria-label="Previous items"
            >
              <ChevronLeft className="w-[24px] h-[24px] text-[#202020] group-hover:text-white transition-colors" strokeWidth={2} />
            </button>

            {/* Media Items Grid */}
            <div className="grid grid-cols-3 gap-[32px]">
              {visibleItems.map((item) => {
                const isSelected = item.id === selectedMediaId;
                const displayImage = item.type === 'video' ? item.thumbnail : item.url;
                
                return (
                  <button
                    key={`${item.id}-${currentIndex}`}
                    onClick={() => handleMediaClick(item.id)}
                    className="group cursor-pointer text-left"
                    style={{
                      animation: isTransitioning ? 'fadeIn 0.3s ease-in-out' : 'none'
                    }}
                  >
                    {/* Media Thumbnail */}
                    <div className={`relative overflow-hidden rounded-[12px] aspect-[16/10] transition-all ${
                      isSelected ? 'ring-4 ring-[#5d9732] shadow-lg' : 'shadow-sm hover:shadow-md'
                    }`}>
                      <img 
                        src={displayImage}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Video Play Icon Overlay */}
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-[50px] h-[50px] bg-white/90 rounded-full flex items-center justify-center">
                            <Play className="w-[20px] h-[20px] text-[#202020] ml-[2px]" fill="currentColor" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Media Title */}
                    <h3 className="font-['Basis_Grotesque_Arabic_Pro'] text-[13px] leading-[1.4] mt-[14px] text-[#202020]">
                      {item.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center border border-[#e0e0e0] hover:border-[#5d9732] hover:bg-[#5d9732] transition-all z-10 group disabled:opacity-50"
              aria-label="Next items"
            >
              <ChevronRight className="w-[24px] h-[24px] text-[#202020] group-hover:text-white transition-colors" strokeWidth={2} />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}