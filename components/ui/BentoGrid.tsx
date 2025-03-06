import React from 'react';
import { cn } from '@/lib/utils';
import { BackgroundGradientAnimation } from './GradientBg';
import { GlobeDemo } from './GridGlobe';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'md:grid-row-7 mx-auto grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-5 lg:gap-8',
        className
      )}
      style={{ background: 'rgb(4, 7, 29 )' }}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}) => {
  return (
    <div
      className={cn(
        'group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border-2 border-red-500 border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
        className
      )}
      style={{
        background: 'rgb(2, 0, 36 )',
        backgroundColor:
          'linear-gradient(90deg, rgba(2, 0, 36, 1)0%, rgba(59, 59, 68, 1)26%, rgba(93, 108, 111, 1) 100%)',
      }}
    >
      <div className={`${id === 6} && 'flex h-full justify-center`}>
        <div className="absolute h-full w-full">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover, object-center')}
            />
          )}
        </div>

        <div
          className={`absolute -bottom-5 right-0 ${id === 5 && 'w-full opacity-80'}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover, h-full w-full object-center'}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center font-bold text-white" />
          </BackgroundGradientAnimation>
        )}
        {/* Title and Description */}
        <div
          className={cn(
            titleClassName,
            'relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10'
          )}
        >
          <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base">
            {description}
          </div>
          <div className="lg:tet-3xl z-10 max-w-96 font-sans text-lg font-bold">
            {title}
          </div>
        </div>

        {id === 2 && <GlobeDemo />}
      </div>
    </div>
  );
};
