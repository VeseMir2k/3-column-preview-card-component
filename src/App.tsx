import Card from './components/Card';

import data from './data.json';

const App = () => {
  const colors = ['orange', 'teal', 'dark_teal'];

  const cards = data.map((item, index) => (
    <Card color={colors[index]} icon={item.icon_src} alt={item.alt} title={item.title} text={item.text} key={index} />
  ));

  return <div className="px-[24px] py-[88px]">{cards}</div>;
};

export default App;
