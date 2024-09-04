import React, { useEffect } from 'react';
import { useMobileMenu } from '../store';

const Burger = () => {
  const active = useMobileMenu((state) => state.active);
  const selectedMobileMenu = useMobileMenu((state) => state.selectedMobileMenu);

  useEffect(() => {
    active ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = '');
  }, [active]);

  return (
    <div className="w-6 h-5 relative z-[500]" onClick={selectedMobileMenu}>
      <div
        className={
          active
            ? 'rotate-45 w-full max-h-[2px] min-h-[2px] bg-text duration-150 absolute top-[45%] left-0 translate-y-1/2'
            : 'w-full max-h-[2px] min-h-[2px] bg-text rotate-0 duration-150 absolute top-0 left-0 mt-[0.5px]'
        }
      />
      <div
        className={
          active
            ? 'scale-0'
            : 'duration-150 scale-100 w-full h-[2px] max-h-[2px] min-h-[2px] bg-text absolute top-1/2 translate-x-0 -translate-y-1/2 mt-[0.5px]'
        }
      />
      <div
        className={
          active
            ? '-rotate-45 w-full max-h-[2px] min-h-[2px] bg-text duration-150 absolute bottom-1/2 left-0 translate-y-1/2'
            : 'duration-150 w-full max-h-[2px] min-h-[2px] bg-text rotate-0 absolute bottom-0 left-0'
        }
      />
    </div>
  );
};

export default Burger;
