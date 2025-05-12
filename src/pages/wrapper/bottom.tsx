import type { PropsWithChildren } from 'react';
import { NavBar } from '../../components/base/navbar';

export const NavWrapper = (props: PropsWithChildren) => {
  return (
    <>
      <div>{props.children}</div>
      <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
        <NavBar />
      </div>
    </>
  );
};
