import React from 'react';
import { useMobileMenu } from '../store';

const Shadowed = () => {
  const active = useMobileMenu((state) => state.active);
  const selectedMobileMenu = useMobileMenu((state) => state.selectedMobileMenu);

  return active ? (
    <div className="fixed top-0 left-0 h-screen w-full z-[1] bg-slate-900 bg-opacity-70" onClick={selectedMobileMenu} />
  ) : (
    <></>
  );
};

export default Shadowed;
