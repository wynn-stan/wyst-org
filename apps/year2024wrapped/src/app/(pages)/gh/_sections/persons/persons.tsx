import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { PersonsModel } from '../../../../../models';
import { usePersons } from '../../../../../hooks';
import * as PersonsLayout from './_components/index';

export default function Persons() {
  /**
   * Hooks
   */
  const { personItems } = usePersons();

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
    <div className={clsx('mid-container-gradient')}>
      <div
        className={clsx(
          'section-container',
          ' py-[60px] px-5 md:px-10',
          'flex flex-col gap-10 md:gap-[60px]'
        )}
      >
        {/* Heading */}
        <PersonsLayout.Header />

        {/* Body - Md and Above */}
        <div className="hidden lg:grid grid-cols-[auto_minmax(0px,432px)] gap-5">
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
