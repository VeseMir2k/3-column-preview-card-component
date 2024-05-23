import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import Title from './Title';

interface Props {
  icon: string;
  alt?: string;
  title: string;
  text: string;
  bgColor: string;
}

const Card = ({ icon, alt, title, text, bgColor }: Props) => {
  return (
    <div className={`${bgColor} p-[48px]`}>
      <Icon icon={icon} alt={alt} />
      <Title title={title} />
      <Text text={text} />
      <Button />
    </div>
  );
};

export default Card;
