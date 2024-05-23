import Card from './components/Card';

import data from './data.json';

const App = () => {
  const cards = data.map((item, index) => (
    <Card icon={item.icon_src} alt={item.alt} title={item.title} text={item.text} key={index} />
  ));

  return <div className="px-[24px] py-[88px]">{cards}</div>;
};

export default App;
