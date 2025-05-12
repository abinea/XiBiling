import React, { useState } from 'react';

export const RateSlider = ({
  min = 0,
  max = 10,
  step = 1,
  value,
  onChange,
  label = '评分',
}) => {
  const [innerValue, setInnerValue] = useState(value ?? min);
  const handleChange = (e) => {
    const v = Number(e.target.value);
    setInnerValue(v);
    onChange && onChange(v);
  };
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 320,
        margin: '0 auto',
        padding: '24px 0',
      }}
    >
      <div style={{ marginBottom: 12, fontWeight: 500 }}>
        {label}：
        <span style={{ color: '#1677ff', fontSize: 18 }}>{innerValue}</span>
      </div>
      <div
        style={{
          position: 'relative',
          height: 48,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={innerValue}
          onChange={handleChange}
          style={{
            width: '100%',
            height: 8,
            borderRadius: 8,
            background: '#e5e5e5', // 灰色背景
            outline: 'none',
            appearance: 'none',
            WebkitAppearance: 'none',
            margin: 0,
          }}
        />
        <style>{`
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #1677ff;
  box-shadow: 0 2px 8px rgba(22,119,255,0.12);
  cursor: pointer;
  border: none;
  transition: background 0.2s;
}
input[type=range]::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #1677ff;
  box-shadow: 0 2px 8px rgba(22,119,255,0.12);
  cursor: pointer;
  border: none;
  transition: background 0.2s;
}
input[type=range]::-ms-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #1677ff;
  box-shadow: 0 2px 8px rgba(22,119,255,0.12);
  cursor: pointer;
  border: none;
  transition: background 0.2s;
}
input[type=range]:focus {
  outline: none;
}
`}</style>
        {/* 温度计刻度 */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 28,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 12,
            color: '#888',
          }}
        >
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    </div>
  );
};
