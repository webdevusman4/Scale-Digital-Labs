import Image from 'next/image';

const founders = [
  {
    name: 'Usman Mughal',
    title: 'Lead Engineer',
    bio: "Usman engineers the technical backbone of our clients' operations. Specializing in high-performance SaaS platforms and scalable Shopify infrastructures, he architects low-OPEX cloud solutions that are built for speed and designed to scale without technical debt.",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    pills: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
  },
  {
    name: 'Shazeb Khan',
    title: 'Head of Growth',
    bio: "Shazeb translates digital presence into measurable revenue. As a Chartered Accountant turned growth strategist, he combines rigorous financial discipline with high-ROI Meta, Google, and LinkedIn ad architectures to scale brands efficiently.",
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    pills: [],
  },
];

export function FoundersSection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {founders.map((founder) => (
          <div
            key={founder.name}
            className="attractive interactive card flex flex-col overflow-hidden rounded-2xl"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/5] md:h-80 md:aspect-auto lg:aspect-[4/5]">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Text Container */}
            <div className="flex flex-col flex-grow p-6 md:p-8 text-left">
              <h3 className="text-2xl font-black text-white brutalist-text uppercase tracking-tight">
                {founder.name}
              </h3>
              <p className="text-sm text-[#FF8C42] font-black uppercase tracking-widest mb-4 mt-1">
                {founder.title}
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {founder.bio}
              </p>

              {founder.pills.length > 0 && (
                <div className="flex flex-row flex-wrap gap-2 mt-auto">
                  {founder.pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-md text-gray-300"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Kept the previous export name as an alias to avoid breaking existing imports
export { FoundersSection as MeetTheFounders };
