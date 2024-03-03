import brackest from "../assets/svg/Brackets";

const Tagline = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackest("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackest("right")}
    </div>
  );
};

export default Tagline;
