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
  btnTxtColor: string;
}

const Card = ({ icon, alt, title, text, bgColor, btnTxtColor }: Props) => {
  return (
    <div className={`${bgColor} p-[48px] text-white first-of-type:rounded-t-lg last-of-type:rounded-b-lg`}>
      <Icon icon={icon} alt={alt} />
      <Title title={title} />
      <Text text={text} />
      <Button btnTxtColor={btnTxtColor} />
    </div>
  );
};

export default Card;
