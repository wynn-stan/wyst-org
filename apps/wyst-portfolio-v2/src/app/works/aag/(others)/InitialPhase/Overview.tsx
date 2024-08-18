import clsx from 'clsx';
import Card from '../../../(components)/Card';
import ImageShowcase from './Overview/ImageShowcase';

export default function Overview() {
  return (
    <div className={clsx('flex flex-col md:flex-row gap-3', 'md:h-[250px]')}>
      <Card.CardItem
        className="md:max-w-[60%] !space-y-0 flex flex-col gap-5 justify-center"
        header="Phase Overview"
        description="The project's initial phase involved redesigning and developing the official website for the All African Games 2023. The goal was to modernize the website's appearance and enhance its functionality."
      />
      <div className="w-full min-h-full">
        <ImageShowcase />
      </div>
    </div>
  );
}
