const CallToAction = ({ title, subtitle, buttonText, onClick, textColor="text-blue-900" }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-5 mt-10 px-6 md:px-20 lg:px-40">
      <div className={`md:w-1/2 text-center ${textColor} md:text-left mb-6 md:mb-0`} >
        <h1 className="text-2xl md:text-3xl  font-semibold">{title}</h1>
        <p className="text-base md:text-lg  mt-3">{subtitle}</p>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div
          onClick={onClick}
          className="bg-[#ED8628] text-base md:text-lg text-white max-w-fit px-10   min-w-fit h-14 rounded-xl flex items-center justify-center gap-2 hover:bg-[#FFDBA1] cursor-pointer transition"
        >
          <span>{buttonText}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
