import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import Title from './Title';

interface Props {
  icon: string;
  alt?: string;
  title: string;
  text: string;
}

const Card = ({ icon, alt, title, text }: Props) => {
  return (
    <>
      <Icon icon={icon} alt={alt} />
      <Title title={title} />
      <Text text={text} />
      <Button />
    </>
  );
};

export default Card;
