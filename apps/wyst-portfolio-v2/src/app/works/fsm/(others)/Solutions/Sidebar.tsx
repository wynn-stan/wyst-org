import clsx from 'clsx';
import Data from '../(components)/data';

interface Props {
  activeSection: (typeof Data.key_solutions_and_impact)[0];
  setActiveSection: React.Dispatch<
    React.SetStateAction<(typeof Data.key_solutions_and_impact)[0]>
  >;
}

export default function Sidebar({ activeSection, setActiveSection }: Props) {
  /**
   * Variables
   */
  const items = Data.key_solutions_and_impact;

  return (
    <div className="p-5 pt-0 space-y-5">
      {items.map((item, key) => {
        //variables
        const Icon = item.Icon;
        const isActive = activeSection.title === item.title;
        return (
          <div
            role="button"
            onClick={() => {
              setActiveSection(item);
            }}
            key={key}
            style={{
              backgroundColor: isActive
                ? item.primary_color
                : item.secondary_color,
            }}
            className={clsx(
              'p-7 font-medium rounded-xl',
              'flex items-center gap-3'
            )}
          >
            <div
              style={{
                backgroundColor: isActive
                  ? item.secondary_color
                  : item.primary_color,
                color: isActive ? item.primary_color : 'white',
              }}
              className={clsx(`p-2 rounded-full`)}
            >
              <Icon size={16} />
            </div>
            <p className={clsx(isActive && 'text-white', 'hidden xl:block')}>
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}
