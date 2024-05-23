const Icon = ({ icon, alt = 'icon' }: { icon: string; alt?: string }) => {
  return <img className="mb-[35px] h-[40px] w-[64px]" src={icon} alt={alt} />;
};

export default Icon;
