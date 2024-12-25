import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { PersonsModel } from '../../../../../models';
import { usePersons } from '../../../../../hooks';
import * as PersonsLayout from './_components/index';
import { Spinner } from '@phosphor-icons/react';
import { Animated } from '../../../../../components';

export default function Persons() {
  /**
   * Hooks
   */
  const { personItems, isLoading } = usePersons();

  /**
   * State
   */
  const [activePerson, setActivePerson] = useState<PersonsModel | undefined>();
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  /**
   * Effect
   */
  useEffect(() => {
    if (personItems?.length) {
      setActivePerson(personItems?.[0]);
    }
  }, [personItems]);

  return (
    <div className={clsx('flex-grow', 'mid-container-gradient')}>
      <div
        className={clsx(
          'section-container',
          ' py-[60px] px-5 md:px-10',
          'flex flex-col gap-10 md:gap-[60px]'
        )}
      >
        {/* Heading */}
        <PersonsLayout.Header />

        {isLoading && (
          <div className="flex justify-center">
            <Spinner className="animate-spin" />
          </div>
        )}

        {!isLoading && (
          <Animated.FadeInFromBelowInView>
            {/* Body - Md and Above */}
            <div className="hidden lg:grid grid-cols-[1.5fr_1fr] gap-5">
              <PersonsLayout.DetailedView activePerson={activePerson} />

              <PersonsLayout.DefaultList
                onSelect={(person) => {
                  setActivePerson(person);
                }}
                activePerson={activePerson}
              />
            </div>

            <div className="lg:hidden">
              <PersonsLayout.StackList
                onSelect={(person) => {
                  setActivePerson(person);
                  setShowDetailsModal(true);
                }}
              />
            </div>
          </Animated.FadeInFromBelowInView>
        )}
      </div>

      {/* Modal */}
      <PersonsLayout.Modal
        show={showDetailsModal}
        onHide={() => setShowDetailsModal(false)}
        activePerson={activePerson}
      />
    </div>
  );
}
