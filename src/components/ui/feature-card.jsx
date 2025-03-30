const FeatureCard = ({ title, description }) => {
  return (
    <div className="border border-[#071631] backdrop-blur-2xl bg-gradient-to-b from-[#05142C] to-[#030F22] p-10 lg:p-6 2xl:p-10 rounded-[32px] w-full lg:w-[300px] 2xl:w-[380px] h-[231px] shadow-md">
      <h3 className="text-[32px] font-bold text-foreground">{title}</h3>
      <p className="text-[#F0F7FEB8] font-normal text-[22px] leading-[140%] mt-8">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
