const Button = ({ children }) => {
  return (
    <>
      <div className="inline-flex justify-center items-center bg-[#071630] px-6 py-2   rounded-full border border-[#111627] ">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-base font-semibold shadow-md">
          {children}
        </span>
      </div>
    </>
  );
};

export default Button;
