import { useState } from 'react';
import { Check, Droplet, Sun, Wrench, Wind, Umbrella } from 'lucide-react';
import grassBg from 'figma:asset/1a4892ef51dc9f0e4e97b09e879295c01f1b8e2e.png';

const turfFeatures = [
  { id: 'shade-tolerance', label: 'High Shade Tolerance' },
  { id: 'weed-resistance', label: 'High Weed Resistance' },
  { id: 'low-maintenance', label: 'Low Maintenance' },
  { id: 'wear-tolerance', label: 'High Wear Tolerance' },
  { id: 'drought-resistance', label: 'Drought Resistance' },
];

const turfProducts = [
  {
    id: 1,
    name: 'Tiftuf Hybrid Bermuda',
    subtitle: 'Hybrid Bermuda Grass Forged By The Worlds Leading Turf Grass Scientists.',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=300&h=300&fit=crop',
    features: [
      { label: 'Drought Resistance', value: 'Very High', icon: Droplet },
      { label: 'Shade Tolerance', value: 'Up To 50%', icon: Sun },
      { label: 'Wear', value: 'Very High', icon: Wind },
      { label: 'Maintenance', value: 'Very Low', icon: Wrench },
      { label: 'Leaf', value: 'Fine', icon: Wind },
      { label: 'Cost', value: '$10.95 Per M²', icon: null },
    ],
  },
  {
    id: 2,
    name: 'Sir Walter DNA Certified',
    subtitle: 'Australia\'s Number 1 Buffalo Lawn. The Perfect All-Rounder.',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=300&h=300&fit=crop',
    features: [
      { label: 'Drought Resistance', value: 'Very High', icon: Droplet },
      { label: 'Shade Tolerance', value: 'Up To 50%', icon: Sun },
      { label: 'Wear', value: 'Very High', icon: Wind },
      { label: 'Maintenance', value: 'Very Low', icon: Wrench },
      { label: 'Leaf', value: 'Fine', icon: Wind },
      { label: 'Cost', value: '$13.95 Per M²', icon: null },
    ],
  },
  {
    id: 3,
    name: 'Sir Grange Zoysia',
    subtitle: 'Stunningly Versatile With Countless Possibilities.',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=300&h=300&fit=crop',
    features: [
      { label: 'Drought Resistance', value: 'Very High', icon: Droplet },
      { label: 'Shade Tolerance', value: 'Up To 50%', icon: Sun },
      { label: 'Wear', value: 'Very High', icon: Wind },
      { label: 'Maintenance', value: 'Very Low', icon: Wrench },
      { label: 'Leaf', value: 'Fine', icon: Wind },
      { label: 'Cost', value: '$22.95 Per M²', icon: null },
    ],
  },
];

export default function HowToFind() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const toggleFeature = (featureId: string) => {
    if (selectedFeatures.includes(featureId)) {
      setSelectedFeatures(selectedFeatures.filter(id => id !== featureId));
    } else if (selectedFeatures.length < 3) {
      setSelectedFeatures([...selectedFeatures, featureId]);
    }
  };

  return (
    <>
      {/* How To Find Section */}
      <section 
        className="py-[70px] relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${grassBg})`
        }}
      >
        <div className="max-w-[1400px] mx-auto px-[80px]">
          <div className="text-center">
            <p className="font-['Basis_Grotesque_Arabic_Pro'] text-[11px] tracking-[2.2px] uppercase text-white mb-[8px]">
              How to find the right turf
            </p>
            <h2 className="font-['Basis_Grotesque_Arabic_Pro'] text-[32px] text-[#d4af37] mb-[50px]">
              Choose The 3 Most Important To You
            </h2>

            {/* Feature Toggles */}
            <div className="flex justify-center items-start gap-[50px]">
              {turfFeatures.map((feature) => {
                const isSelected = selectedFeatures.includes(feature.id);
                return (
                  <button
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    className="flex flex-col items-center gap-[14px] group"
                  >
                    {/* Checkbox Icon */}
                    <div 
                      className={`w-[60px] h-[60px] rounded-[4px] flex items-center justify-center transition-all duration-200 ${
                        isSelected 
                          ? 'bg-[#5d9732] border-2 border-white' 
                          : 'bg-transparent border-2 border-white/60 hover:border-white hover:bg-white/10'
                      }`}
                    >
                      {isSelected && (
                        <Check className="w-[32px] h-[32px] text-white stroke-[3]" />
                      )}
                    </div>
                    {/* Label */}
                    <p className="font-['Basis_Grotesque_Arabic_Pro'] text-[12px] text-white max-w-[90px] leading-[1.3]">
                      {feature.label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="pt-[0px] pb-[80px] bg-[#f0f0f0]">
        <div className="max-w-[1400px] mx-auto px-[80px]">
          {/* Results Header with Triangle */}
          <div className="flex flex-col items-center mb-[50px]">
            <div className="relative">
              <div className="bg-[#2d2d2d] text-white px-[160px] py-[14px] rounded-full font-['Basis_Grotesque_Arabic_Pro'] text-[11px] tracking-[2.2px] uppercase">
                Your Results
              </div>
              {/* Triangle Pointer */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-[10px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#2d2d2d]"></div>
            </div>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-3 gap-[24px] mb-[50px]">
            {turfProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-[12px] overflow-hidden shadow-sm">
                {/* Product Header */}
                <div className="p-[24px] border-b border-[#e8e8e8]">
                  <div className="flex items-center justify-between mb-[16px]">
                    {/* Logo placeholder */}
                    <div className="w-[90px] h-[44px] bg-[#f8f8f8] rounded-[4px] flex items-center justify-center border border-[#e5e5e5]">
                      <span className="font-['Basis_Grotesque_Arabic_Pro'] text-[10px] text-[#5d9732]">LOGO</span>
                    </div>
                    {/* Grass Sample - Moved to right */}
                    <div className="w-[70px] h-[70px] rounded-full overflow-hidden border-2 border-[#e5e5e5]">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <h3 className="font-['Basis_Grotesque_Arabic_Pro'] text-[17px] text-[#202020] mb-[8px]">
                    {product.name}
                  </h3>
                  <p className="font-['Basis_Grotesque_Arabic_Pro'] text-[12px] leading-[1.5] text-[#666666]">
                    {product.subtitle}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="p-[24px] grid grid-cols-2 gap-x-[16px] gap-y-[14px]">
                  {product.features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-start gap-[10px]">
                        {Icon ? (
                          <Icon className="w-[16px] h-[16px] text-[#5d9732] shrink-0 mt-[2px]" />
                        ) : (
                          <div className="w-[16px] h-[16px] shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="font-['Basis_Grotesque_Arabic_Pro'] text-[10px] text-[#999999] mb-[2px]">
                            {feature.label}
                          </p>
                          <p className="font-['Basis_Grotesque_Arabic_Pro'] text-[12px] text-[#202020]">
                            {feature.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="px-[24px] pb-[24px] flex gap-[12px]">
                  <button className="flex-1 px-[18px] py-[12px] bg-white text-[#5d9732] font-['Basis_Grotesque_Arabic_Pro'] text-[10px] tracking-[1px] uppercase rounded-[4px] hover:bg-[#5d9732] hover:text-white transition-all border border-[#5d9732]">
                    Turf Calculator
                  </button>
                  <button className="flex-1 px-[18px] py-[12px] bg-[#5d9732] text-white font-['Basis_Grotesque_Arabic_Pro'] text-[10px] tracking-[1px] uppercase rounded-[4px] hover:bg-[#4a7828] transition-all">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Turf Selection Tool Button */}
          <div className="text-center">
            <button className="px-[36px] py-[14px] bg-transparent text-[#5d9732] font-['Basis_Grotesque_Arabic_Pro'] text-[11px] tracking-[2.2px] uppercase rounded-[4px] hover:bg-[#5d9732] hover:text-white transition-all border-2 border-[#5d9732]">
              Turf Selection Tool
            </button>
          </div>
        </div>
      </section>
    </>
  );
}