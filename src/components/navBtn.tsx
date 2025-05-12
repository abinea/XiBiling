import { useNavigate } from 'react-router-dom';

interface NavBarBtnProps {
  icon: string | React.ReactNode;
  text: string;
  styles?: {
    icon?: React.CSSProperties;
    text?: React.CSSProperties;
  };
  to: string;
  onClick?: () => void;
}

export const NavBarBtn = (props: NavBarBtnProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(props.to || '/');
        props.onClick?.();
      }}
      style={{
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          marginBottom: '10px',
          ...(props.styles?.icon || {}),
        }}
      >
        {props.icon}
      </div>
      <span style={{ fontSize: '14px', ...(props.styles?.text || {}) }}>
        {props.text}
      </span>
    </div>
  );
};
