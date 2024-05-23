const Button = ({ btnTxtColor }: { btnTxtColor: string }) => {
  return (
    <button
      className={`font-lexend_deca bg-grey rounded-[25px] px-[31px] py-[12px] text-[15px] font-normal leading-[25px] ${btnTxtColor}`}
    >
      Learn More
    </button>
  );
};

export default Button;
