const Icon = ({ icon, alt = 'icon' }: { icon: string; alt?: string }) => {
  return <img src={icon} alt={alt} />;
};

export default Icon;
