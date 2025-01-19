"use client"

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button = ({ children, disabled, className }: Props) => {
  return (
    <button
      disabled={disabled}
      className={twMerge(
        'bg-lightOrange text-base text-white hover:text-darkOrange hoverEffect md:px-8 md:py-3 rounded-full font-semibold',
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
