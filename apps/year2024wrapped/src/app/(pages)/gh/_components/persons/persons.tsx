import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { EventsModel, PersonsModel } from '../../../../../models';
import { useEvents, usePersons } from '../../../../../hooks';
import Details from '../others/Details/Details';
import Card from '../others/Card/Card';
import { Stacked } from '../others';
import { LinkPreview, Modal } from '../../../../../components';

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
        <div className={clsx('section-heading')}>
          <h1
            className={clsx(
              'section-heading__header',
              '!text-4xl md:!text-5xl'
            )}
          >
            Tech Personalities of 2024
          </h1>
          <p className="section-heading__desc">
            A look at the individuals who made a meaningful impact in Ghana’s
            tech scene this year, shaping conversations and driving progress.
          </p>
        </div>

        {/* Body - Md and Above */}
        <div className="hidden lg:grid grid-cols-[auto_minmax(0px,432px)] gap-5">
          {activePerson && (
            <Details
              containerClassName="shadow-[0px_6px_5px_#D96314]"
              details={{
                name: activePerson.name,
                cover_photo: activePerson.cover_photo,
                description: activePerson.description,
                profile_photo: activePerson.profile_photo,
                preview_urls: activePerson.preview_links,
                socials: activePerson.socials,
                tags: activePerson.tags,
              }}
            />
          )}

          <Stacked.DefaultContainer className="w-full">
            <div className="space-y-3">
              {personItems?.map((person, index) => (
                <Stacked.DefaultListItem
                  onClick={() => {
                    setActivePerson(person);
                  }}
                  key={index}
                  tags={person.tags.join(' | ')}
                  showSeperator={index + 1 !== personItems.length}
                  cover_photo={person.cover_photo}
                  name={person.name}
                  profile_photo={person.profile_photo}
                  description={person.description}
                />
              ))}
            </div>
          </Stacked.DefaultContainer>

          {/* <div
            className={clsx(
              'hidden md:flex flex-row lg:flex-col gap-5',
              'w-full lg:max-w-[432px]',
              'overflow-auto no-scrollbar',
              'relative'
            )}
          >
            {personItems?.map((item, index) => {
              const isActive = item.name === activePerson?.name;
              return (
                <Card
                  key={index}
                  description={item.description}
                  name={item.name}
                  profile_photo={item.profile_photo}
                  tags={item.tags}
                  isActive={isActive}
                  onClick={() => setActivePerson(item)}
                />
              );
            })}

           <div
              style={{
                background:
                  'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));',
                backdropFilter: 'blur(1px)',
              }}
              className={clsx('absolute left-0 right-0 bottom-0 h-10')}
            ></div> 
          </div> */}
        </div>

        <div className="lg:hidden">
          <Stacked.StackedContainer shadowColor="yellow">
            <div className="space-y-3">
              {personItems?.map((person, index) => (
                <Stacked.CardListItem
                  onClick={() => {
                    setShowDetailsModal(true);
                    setActivePerson(person);
                  }}
                  key={index}
                  tags={person.tags.join(' | ')}
                  showSeperator={index + 1 !== personItems.length}
                  cover_photo={person.cover_photo}
                  name={person.name}
                  profile_photo={person.profile_photo}
                  description={person.description}
                />
              ))}
            </div>
          </Stacked.StackedContainer>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)}>
        {activePerson && (
          <div className="max-w-full">
            <Details
              details={{
                name: activePerson.name,
                cover_photo: activePerson.cover_photo,
                description: activePerson.description,
                profile_photo: activePerson.profile_photo,
                preview_urls: activePerson.preview_links,
                socials: activePerson.socials,
                tags: activePerson.tags,
              }}
            />
          </div>
        )}
      </Modal>
    </div>
  );
}
