import classNames from 'classnames';

interface Props {
  color: string;
}

const bgColors: { [key: string]: string } = {
  orange: 'hover:bg-orange',
  teal: 'hover:bg-teal',
  dark_teal: 'hover:bg-dark_teal',
};

const textColors: { [key: string]: string } = {
  orange: 'text-orange',
  teal: 'text-teal',
  dark_teal: 'text-dark_teal',
};

const Button = ({ color }: Props) => {
  return (
    <button
      className={classNames(
        'font-lexend_deca bg-grey mt-auto rounded-[25px] px-[31px] py-[12px] text-[15px] font-normal leading-[25px]',
        textColors[color],
        bgColors[color],
      )}
    >
      Learn More
    </button>
  );
};

export default Button;
