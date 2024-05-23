import Card from './components/Card';

import data from './data.json';

const App = () => {
  const colors = ['orange', 'teal', 'dark_teal'];

  const cards = data.map((item, index) => (
    <Card color={colors[index]} icon={item.icon_src} alt={item.alt} title={item.title} text={item.text} key={index} />
  ));

  return (
    <div className="flex min-h-screen px-[24px] py-[88px] md:items-center md:justify-center md:px-[24px]">
      <div className="flex flex-col md:flex-row">{cards}</div>
    </div>
  );
};

export default App;
