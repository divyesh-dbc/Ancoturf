import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import mainImage from 'figma:asset/6a116bfa00188f39d0b0bb98309c7ba4a61e9aaa.png';

const turfVarieties = [
  {
    id: 'sir-walter',
    name: 'Sir Walter DNA Certified',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    id: 'tiftuf',
    name: 'Tiftuf Hybrid Bermuda',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    id: 'eureka',
    name: 'Eureka Kikuyu',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    id: 'sir-grange',
    name: 'Sir Grange Zoysia',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    id: 'rtf',
    name: 'RTF Tall Fescue',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
  {
    id: 'nullarbor',
    name: 'Nullarbor Couch',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
];

export default function OurLawn() {
  const [openVariety, setOpenVariety] = useState<string>('sir-walter');

  const toggleVariety = (id: string) => {
    setOpenVariety(openVariety === id ? '' : id);
  };

  return (
    <section className="py-[80px] bg-white">
      <div className="max-w-[1400px] mx-auto px-[80px]">
        {/* Section Header */}
        <div className="text-center mb-[50px]">
          <h2 className="font-['Basis_Grotesque_Arabic_Pro'] text-[32px] text-[#202020] mb-[12px]">
            Our Lawn Turf Varieties
          </h2>
          <p className="font-['Basis_Grotesque_Arabic_Pro'] text-[14px] text-[#666666] max-w-[600px] mx-auto leading-[1.6]">
            lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-[50px] items-start">
          {/* Left Side - Image */}
          <div className="rounded-[20px] overflow-hidden">
            <img 
              src={mainImage}
              alt="Family with dog on lawn"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Accordion */}
          <div className="space-y-[6px]">
            {turfVarieties.map((variety) => {
              const isOpen = openVariety === variety.id;
              
              return (
                <div 
                  key={variety.id}
                  className="bg-[#f9f9f9] rounded-[8px] overflow-hidden transition-all duration-300"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleVariety(variety.id)}
                    className="w-full px-[24px] py-[18px] flex items-center justify-between hover:bg-[#f5f5f5] transition-colors"
                  >
                    <div className="flex items-center gap-[16px]">
                      {/* Logo placeholder */}
                      <div className="w-[80px] h-[40px] bg-white rounded-[4px] flex items-center justify-center">
                        <span className="font-['Basis_Grotesque_Arabic_Pro'] text-[10px] text-[#5d9732]">LOGO</span>
                      </div>
                      <h3 className="font-['Basis_Grotesque_Arabic_Pro'] text-[16px] text-[#202020]">
                        {variety.name}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`w-[20px] h-[20px] text-[#cccccc] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Accordion Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-[24px] pb-[24px] pt-0">
                      <p className="font-['Basis_Grotesque_Arabic_Pro'] text-[13px] leading-[1.7] text-[#666666] mb-[20px]">
                        {variety.description}
                      </p>
                      <div className="flex gap-[12px]">
                        <button className="px-[24px] py-[12px] bg-white text-[#5d9732] font-['Basis_Grotesque_Arabic_Pro'] text-[11px] tracking-[1px] uppercase rounded-[4px] hover:bg-[#5d9732] hover:text-white transition-colors border border-[#5d9732]">
                          View Detail
                        </button>
                        <button className="px-[24px] py-[12px] bg-[#5d9732] text-white font-['Basis_Grotesque_Arabic_Pro'] text-[11px] tracking-[1px] uppercase rounded-[4px] hover:bg-[#4a7828] transition-colors">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
