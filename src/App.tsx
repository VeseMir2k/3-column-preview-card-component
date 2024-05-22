import suvsIcon from './assets/icon-suvs.svg';
import Card from './components/Card';

const App = () => {
  const textContent =
    'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.';

  return (
    <div>
      <Card icon={suvsIcon} alt="suv icon" title="SUVS" text={textContent} />
    </div>
  );
};

export default App;
