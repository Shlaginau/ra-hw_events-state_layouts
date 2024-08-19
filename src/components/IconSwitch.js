import React from 'react';

function IconSwitch({ icon, onSwitch }) {
  return (
    <div className="icon-switch">
      <button className="material-icons" onClick={onSwitch}>
        {icon}
      </button>
    </div>
  );
}

export default IconSwitch;
