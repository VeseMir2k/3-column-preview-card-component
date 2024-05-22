import suvsIcon from './assets/icon-suvs.svg';
import Card from './components/Card';

const App = () => {
  return (
    <div>
      <Card icon={suvsIcon} alt="suv icon" title="SUVS" />
    </div>
  );
};

export default App;
