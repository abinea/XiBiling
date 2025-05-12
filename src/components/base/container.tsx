import type { PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {
  style?: React.CSSProperties;
}

export const Container = (props: ContainerProps) => {
  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
        padding: '20px',
        boxSizing: 'border-box',
        paddingBottom: '100px',
        ...(props.style || {}),
      }}
    >
      {props.children}
      {/* <div
        style={{
          width: '100%',
          textAlign: 'center',
          color: '#999',
          fontSize: '12px',
        }}
      >
        已经到底啦~
      </div> */}
    </div>
  );
};
