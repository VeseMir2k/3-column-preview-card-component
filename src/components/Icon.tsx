const Icon = ({ icon, alt = 'icon' }: { icon: string; alt?: string }) => {
  return <img className="mb-[35px]" src={icon} alt={alt} />;
};

export default Icon;
