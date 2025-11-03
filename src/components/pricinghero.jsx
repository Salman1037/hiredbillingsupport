
import PricingImage from "../assets/images/hero/Pricing-HBS.jpg"; // <-- use your imported image here

const PricingBanner = () => {
  return (
    <section
      className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: `url(${PricingImage})` }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Pricing
        </h3>
      </div>
    </section>
  );
};

export default PricingBanner;
