import classNames from 'classnames';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import Title from './Title';

interface Props {
  icon: string;
  alt?: string;
  title: string;
  text: string;
  color: string;
}

const bgColors: { [key: string]: string } = {
  orange: 'bg-orange',
  teal: 'bg-teal',
  dark_teal: 'bg-dark_teal',
};

const Card = ({ icon, alt, title, text, color }: Props) => {
  return (
    <div
      className={classNames(
        'flex flex-col p-[48px] text-white first-of-type:rounded-t-lg last-of-type:rounded-b-lg md:first-of-type:rounded-bl-lg md:first-of-type:rounded-tr-none md:last-of-type:rounded-bl-none md:last-of-type:rounded-tr-lg lg:w-[300px]',
        bgColors[color],
      )}
    >
      <Icon icon={icon} alt={alt} />
      <Title title={title} />
      <Text text={text} />
      <Button color={color} />
    </div>
  );
};

export default Card;
