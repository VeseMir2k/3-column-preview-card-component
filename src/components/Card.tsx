import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import Title from './Title';

interface Props {
  icon: string;
  alt: string;
}

const Card = ({ icon, alt }: Props) => {
  return (
    <>
      <Icon icon={icon} alt={alt} />
      <Title />
      <Text />
      <Button />
    </>
  );
};

export default Card;
