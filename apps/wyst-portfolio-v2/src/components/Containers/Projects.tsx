'use client';

import { MoveUpRightIcon } from 'lucide-react';
import ProjectItemComponent from './Projects/ProjectItem';
import { ProjectItems } from './Projects/data';
import Header from './components/Header';
import clsx from 'clsx';
import Image from 'next/image';
import styled from 'styled-components';

export default function Projects() {
  return (
    <div className="space-y-5 bg-black-50 rounded-xl h-full">
      <Header className="text-center">Projects</Header>
      <div
        className={clsx(
          'grid grid-cols-1 md:grid-cols-2',
          ' gap-5 justify-center',
          'p-5'
        )}
      >
        {ProjectItems.map((item, index) => (
          <div
            className={clsx('shadow-md bg-white', ' w-full rounded-xl')}
            key={index}
          >
            <div
              className={clsx(
                'border-b-[1px] border-black-100 rounded-xl',
                'space-y-3',
                'p-4 font-medium'
              )}
            >
              <div className="flex gap-4">
                <div>
                  <Image
                    src={item.logoUrl}
                    width={120}
                    height={120}
                    alt="logo.png"
                  />
                </div>
                <div className="space-y-3 flex-grow">
                  {item.stats_right.map((stat, index) => (
                    <StyledStat key={index}>
                      <div className="value">{stat.value}</div>
                      <div className="label">{stat.label}</div>
                    </StyledStat>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                {item.stats_bottom.map((stat, index) => (
                  <StyledStat
                    className={index > 0 ? 'flex-grow' : 'w-[129px]'}
                    key={index}
                  >
                    <div className="value">{stat.value}</div>
                    <div className="label">{stat.label}</div>
                  </StyledStat>
                ))}
              </div>
            </div>
            <div className="flex gap-3 items-center justify-between p-3">
              <div className="space-y-1">
                <div className="font-medium">{item.name}</div>
                <div className="text-sm font-medium w-fit text-black-600 bg-black-50 p-2 rounded-full text-center">
                  {item.industry}
                </div>
              </div>
              <div
                className={clsx(
                  'text-black-600 bg-black-50 w-[45px] h-[45px] rounded-full',
                  'flex justify-center items-center'
                )}
              >
                <MoveUpRightIcon size={25} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const StyledStat = styled.div`
  & {
    // border: 1px solid #d1d1d1;
    background: #f6f6f6;
    border-radius: 8px;
    text-align: center;
    padding: 8px;
  }

  & .label {
    font-size: 14px;
    color: #888888;
  }

  & .value {
    font-size: 20px;
  }
`;
