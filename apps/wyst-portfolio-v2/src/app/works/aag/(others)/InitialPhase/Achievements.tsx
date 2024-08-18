import Achievement from '../../../(components)/Achievement';
import Card from '../../../(components)/Card';

export default function Achievements() {
  return (
    <Card.CardContainerWithHeader header={<header>Achievements</header>}>
      <div className="w-fit">
        <Achievement
          description="functionality and design issues resolved"
          value="25+"
          header="System Optimization"
        />
      </div>
    </Card.CardContainerWithHeader>
  );
}
