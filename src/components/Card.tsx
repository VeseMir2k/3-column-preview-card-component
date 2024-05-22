import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import Title from './Title';

interface Props {
  icon: string;
  alt: string;
  title: string;
}

const Card = ({ icon, alt, title }: Props) => {
  return (
    <>
      <Icon icon={icon} alt={alt} />
      <Title title={title} />
      <Text />
      <Button />
    </>
  );
};

export default Card;
