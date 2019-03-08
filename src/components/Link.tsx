import * as React from 'react';

export interface ILinkProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const Link: React.FunctionComponent<ILinkProps> = ({ active, children, onClick }) => {
  return (
    <button onClick={onClick} disabled={active} style={{ marginLeft: '4px' }}>
      {children}
    </button>
  );
};

export default Link;
