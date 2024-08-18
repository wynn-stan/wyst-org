import Card from '../../../(components)/Card';
import { SystemsData } from './Systems/data';
import SystemCard from './Systems/SystemCard';

export default function Systems() {
  return (
    <Card.CardContainerWithHeader header="Main Systems Developed">
      <Card.CardContainer className="space-y-5">
        {SystemsData.map((item, index) => (
          <SystemCard {...item} />
        ))}
      </Card.CardContainer>
    </Card.CardContainerWithHeader>
  );
}
