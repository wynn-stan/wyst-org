import { Animated } from '../../../../../components';
import Card from '../../../(components)/Card';
import { SystemsData } from './Systems/data';
import SystemCard from './Systems/SystemCard';

export default function Systems() {
  return (
    <Card.CardContainerWithHeader header="Main Systems Developed">
      <Card.CardContainer className="space-y-5">
        {SystemsData.map((item, index) => (
          <Animated.FadeInFromBelowInView key={index}>
            <SystemCard {...item} />
          </Animated.FadeInFromBelowInView>
        ))}
      </Card.CardContainer>
    </Card.CardContainerWithHeader>
  );
}
