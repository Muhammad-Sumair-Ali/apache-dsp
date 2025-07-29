import Image from "next/image";

export default function CustomerLogos() {
  const logos = [
    {
      src: "https://images.ctfassets.net/8vofjvai1hpv/7K13nIbA3XgCFKAe8qqmIR/4d0c87c520d54928053af96478c09f68/Logo__7_.svg",
      alt: "Walmart",
    },
    {
      src: "https://images.ctfassets.net/8vofjvai1hpv/2rughBZKmfMCEX6VbuVrbu/31938baefff57b7ea9c0825c41c2f446/citi_revised.svg",
      alt: "Citi",
    },
    {
      src: "https://images.ctfassets.net/8vofjvai1hpv/6s7WkIBsCpN39oPocQcA2j/11c35e0dd40f98dd7697882a5179a7e2/Logo__2_.svg",
      alt: "eBay",
    },
    {
      src: "https://images.ctfassets.net/8vofjvai1hpv/4HyrFXfqwXi8KbKHOYMm3P/183a74d371570ca8ed8bff2fe04a0aa9/Logo__3_.svg",
      alt: "Instacart",
    },
    {
      src: "https://images.ctfassets.net/8vofjvai1hpv/4ArjqAzyhN5vNziyFcKdpX/abe97ee54e1ae635a428c1bff1f4e108/Logo.svg",
      alt: "Logo",
    },
    {
      src: "https://images.ctfassets.net/8vofjvai1hpv/2SMoegDz8msOoOq19NT9rK/ebd6169ae83c3e708e4ad0ec778215e7/Logo__6_.svg",
      alt: "Intel",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-8 lg:gap-12 opacity-60 hover:opacity-80 transition-opacity">
          {logos.map((logo, index) => (
            <Image
              height={10}
              width={10}
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
