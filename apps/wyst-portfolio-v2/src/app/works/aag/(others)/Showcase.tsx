'use client';

import { TargetIcon } from 'lucide-react';
import Image from 'next/image';

import Section from '../../(components)/Section';
import styled from 'styled-components';
import clsx from 'clsx';

export default function Showcase() {
  /**
   * Variables
   */
  const basePath = '/assets/images/works/aag/showcase';
  const images = {
    yellow_shirt: `${basePath}/yellow-shirt.png`,
    team_cheer: `${basePath}/team-cheer.png`,
    crowd: `${basePath}/crowd.png`,
    stadium_event: `${basePath}/stadium-event.png`,
    blue_shirt: `${basePath}/blue-shirt.png`,
    team_work: `${basePath}/team-work.png`,
  };
  return (
    <Section Icon={<TargetIcon />} title="Showcase" childrenClassName="px-10">
      <div
        className={clsx('flex flex-col md:flex-row', 'gap-[6px] md:gap-3', '')}
      >
        <StyledImageContainer className="max-w-[300px] max-h-[500px] hidden md:block">
          <StyledImage
            src={images.yellow_shirt}
            alt="image"
            width={245}
            height={500}
          />
        </StyledImageContainer>
        <div className="space-y-[6px] md:space-y-3">
          <div className="flex gap-[6px] md:gap-3">
            <StyledImageContainer className="max-w-[300px] max-h-[245px]">
              <StyledImage
                src={images.team_cheer}
                alt="image"
                width={300}
                height={245}
              />
            </StyledImageContainer>{' '}
            <StyledImageContainer className="max-w-[180px] max-h-[245px]">
              <StyledImage
                src={images.crowd}
                alt="image"
                width={180}
                height={245}
              />
            </StyledImageContainer>{' '}
          </div>
          <StyledImageContainer className="max-w-[500px] max-h-[245px]">
            <StyledImage
              src={images.stadium_event}
              alt="image"
              width={500}
              height={245}
            />
          </StyledImageContainer>{' '}
        </div>
        <div className="space-y-[6px] md:space-y-3 hidden md:block">
          <StyledImageContainer className="max-w-[250px] max-h-[290px]">
            <StyledImage
              src={images.blue_shirt}
              alt="image"
              width={250}
              height={290}
            />
          </StyledImageContainer>
          <StyledImageContainer className="max-w-[250px] max-h-[195px]">
            <StyledImage
              src={images.team_work}
              alt="image"
              width={250}
              height={195}
            />
          </StyledImageContainer>
        </div>
        <div className="flex gap-[6px] md:hidden">
          <StyledImageContainer className="max-w-[300px] max-h-[500px]">
            <StyledImage
              src={images.yellow_shirt}
              alt="image"
              width={245}
              height={500}
            />
          </StyledImageContainer>
          <div className="space-y-[6px] md:space-y-3">
            <StyledImageContainer className="max-w-[250px] max-h-[290px]">
              <StyledImage
                src={images.blue_shirt}
                alt="image"
                width={250}
                height={290}
              />
            </StyledImageContainer>
            <StyledImageContainer className="max-w-[250px] max-h-[195px]">
              <StyledImage
                src={images.team_work}
                alt="image"
                width={250}
                height={195}
              />
            </StyledImageContainer>
          </div>
        </div>
      </div>
    </Section>
  );
}

const StyledImageContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: revert-layer;
`;
