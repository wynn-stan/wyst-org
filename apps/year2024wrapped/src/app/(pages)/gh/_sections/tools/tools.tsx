import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { useTools } from '../../../../../hooks';
import { ToolsModel } from '../../../../../models';
import * as ToolsLayout from './_components/index';
import { Spinner } from '@phosphor-icons/react';
import { Animated } from '../../../../../components';
import { useWindowWidth } from '@react-hook/window-size';
import Link from 'next/link';

export default function Tools() {
  /**
   * Hooks
   */
  const { toolsItems, isLoading } = useTools();
  const isTablet = useWindowWidth() < 1024;

  /**
   * State
   */
  const [activeTool, setActiveTool] = useState<ToolsModel | undefined>();
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  /**
   * Effect
   */
  useEffect(() => {
    if (toolsItems?.length) {
      setActiveTool(toolsItems?.[0]);
    }
  }, [toolsItems]);

  return (
    <div className={clsx('flex-grow', 'bottom-container-gradient')}>
      {isLoading && (
        <div className="flex justify-center">
          <Spinner className="animate-spin" />
        </div>
      )}

      {!isLoading && (
        <Animated.FadeInFromBelowInView>
          <div
            className={clsx(
              'section-container',
              'py-[60px] px-5 md:px-10 ',
              'hidden',
              'md:block lg:grid grid-cols-[1fr_1fr] gap-[60px]'
            )}
          >
            <div className="space-y-10">
              {/* Heading */}
              <ToolsLayout.Header />

              <ToolsLayout.DefaultList
                onSelect={(tool) => {
                  setActiveTool(tool);
                  isTablet && setShowDetailsModal(true);
                }}
                activeTool={activeTool}
              />
            </div>

            <div className="hidden lg:block">
              <ToolsLayout.DetailedView activeTool={activeTool} />
            </div>
          </div>

          <div
            className={clsx(
              'md:hidden space-y-10 md:space-y-[60px]',
              'py-[60px] px-10'
            )}
          >
            {/* Heading */}
            <ToolsLayout.Header />

            <ToolsLayout.StackList
              onSelect={(tool) => {
                setActiveTool(tool);
                setShowDetailsModal(true);
              }}
            />
          </div>
        </Animated.FadeInFromBelowInView>
      )}

      {/* Modal */}
      <ToolsLayout.Modal
        activeTool={activeTool}
        show={showDetailsModal}
        onHide={() => setShowDetailsModal(false)}
      />

      <small className="w-full p-4 text-gray-300 text-center">
        <Link
          target="_blank"
          href={`${process?.env?.NEXT_PUBLIC_PORTFOLIO_SITE || ''}`}
          className="underline"
        >
          wyst-org
        </Link>{' '}
        &copy; Copyright 2024
      </small>
    </div>
  );
}
