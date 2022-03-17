import React, { useState } from 'react';

import './index.scss';

declare var window: any;

const BUTTONS = [
  {
    type: '(',
    value: '(',
  },
  {
    type: ')',
    value: ')'
  },
  {
    type: '%',
    value: '%',
  },
  {
    type: 'clear',
    value: 'C',
  },
  {
    type: 'num',
    value: '7',
  },
  {
    type: 'num',
    value: '8',
  },
  {
    type: 'num',
    value: '9',
  },
  {
    type: 'divide',
    value: '÷'
  },
  {
    type: 'num',
    value: '4',
  },
  {
    type: 'num',
    value: '5',
  },
  {
    type: 'num',
    value: '6',
  },
  {
    type: 'multiply',
    value: 'x'
  },
  {
    type: 'num',
    value: '1',
  },
  {
    type: 'num',
    value: '2',
  },
  {
    type: 'num',
    value: '3',
  },
  {
    type: 'subtract',
    value: '-',
  },
  {
    type: 'num',
    value: '0',
  },
  {
    type: 'dot',
    value: '.',
  },
  {
    type: 'equal',
    value: '=',
  },
  {
    type: 'add',
    value: '+',
  },
];

function Counter() {
  const [cal, setCal] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handle = (v: string, type: string) => {
    switch (type) {
      case 'clear':
        setCal('');
        setResult(null);
        break;
      case 'equal':
        try {
          const result = eval(cal);
          setCal(`${cal}=`);
          setResult(parseFloat(result.toFixed(10)));
        } catch (e) {}
        break;
      default:
        setCal(cal + v);
    }
  };

  return (
    <div className="container">
      <div className="layout-body">
        <div className="calculator">
          <div className="calculator-inner">
            <div className="calculator-screen">
              <div className="calculater-screen-box">
                <p className="calculator-screen-process"><span className="value">{result !== null ? cal : ''}</span></p>
                <p className="calculator-screen-result"><span className="value">{result !== null ? result : cal}</span></p>
              </div>
            </div>
            {BUTTONS.map((btn: any) => {
              return (
                <span
                  className={`btn ${btn.type}`}
                  onClick={handle.bind(null, btn.value, btn.type)}
                >
                  {btn.value}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


window?.pluginManager?.register('counter', {
  Comp: Counter,
});
