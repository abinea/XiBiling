import { Divider, Image, Typography } from 'antd';

interface ICommodityProps {
  img?: string;
  title?: string;
  price?: string;
  hasSoldCount?: number;
}

export const Commodity = (props: ICommodityProps) => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        borderRadius: '4px',
        width: '160px',
        padding: '8px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Image
        width={'100%'}
        height={140}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <Typography.Title
        level={5}
        style={{ fontSize: '15px', lineHeight: '32px', marginBottom: '0px' }}
      >
        {props.title}
      </Typography.Title>
      <div
        style={{
          display: 'flex',
          marginTop: '24px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ color: '#e83f0e', marginRight: '4px' }}>
          ¥{props.price}
        </div>
        <div style={{ fontSize: '12px', color: 'rgba(0,0,0,0.65)' }}>
          已售{props.hasSoldCount || 0}件
        </div>
      </div>
    </div>
  );
};
