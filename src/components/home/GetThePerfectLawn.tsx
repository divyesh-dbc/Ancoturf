const steps = [
  {
    id: 1,
    title: 'CHOOSE',
    subtitle: 'TURF',
    image: 'https://images.unsplash.com/photo-1670910305754-bdd7800803bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFzcyUyMGxhd24lMjBjbG9zZSUyMHRleHR1cmV8ZW58MXx8fHwxNzY1MzQ5NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    title: 'MEASURE',
    subtitle: 'LAWN',
    image: 'https://images.unsplash.com/photo-1685660251930-d787bb0e3c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWFzdXJpbmclMjB0YXBlJTIwbGF3biUyMGdyYXNzfGVufDF8fHx8MTc2NTM0ODQwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    title: 'ORDER',
    subtitle: 'TURF',
    image: 'https://images.unsplash.com/photo-1730817403162-83d5094480ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMG1vYmlsZSUyMHNob3BwaW5nJTIwYXBwfGVufDF8fHx8MTc2NTM0OTQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    title: 'LAY',
    subtitle: 'TURF',
    image: 'https://images.unsplash.com/photo-1759683527845-78059c8bca21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWxsaW5nJTIwdHVyZiUyMGdyYXNzJTIwbGF3bnxlbnwxfHx8fDE3NjUzNDg0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export default function GetThePerfectLawn() {
  return (
    <section className="py-[80px] bg-white">
      <div className="max-w-[1400px] mx-auto px-[80px]">
        {/* Section Title */}
        <h2 className="font-['Basis_Grotesque_Arabic_Pro'] text-[32px] text-[#202020] text-center mb-[50px]">
          Get The Perfect Lawn In 4 Easy Steps
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-4 gap-[24px]">
          {steps.map((step) => (
            <div 
              key={step.id}
              className="relative overflow-hidden rounded-[16px] aspect-[4/5] group cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={step.image}
                alt={`${step.title} ${step.subtitle}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/70 transition-all duration-300" />
              
              {/* Text Content - Top Left */}
              <div className="absolute top-[24px] left-[24px] z-10">
                <h3 className="font-['Basis_Grotesque_Arabic_Pro'] text-[18px] tracking-[1.8px] text-white uppercase leading-[1.4]">
                  <span className="block">{step.title}</span>
                  <span className="block opacity-90">{step.subtitle}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
