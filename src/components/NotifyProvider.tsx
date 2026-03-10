import React, { ReactNode } from 'react';
import { NotifyContainer } from './NotifyContainer';

interface NotifyProviderProps {
  children: ReactNode;
}

export const NotifyProvider: React.FC<NotifyProviderProps> = ({ children }) => {
  return (
    <>
      {children}
      <NotifyContainer />
    </>
  );
};