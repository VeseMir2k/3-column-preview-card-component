interface Props {
  icon: string;
  alt: string;
}

const Icon = ({ icon, alt }: Props) => {
  return <img src={icon} alt={alt} />;
};

export default Icon;
