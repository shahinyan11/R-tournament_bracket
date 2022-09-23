import React from 'react';

import getLinePosition from "../../helpers/getLinePosition";

const Line = ({columnNumber}) => {

  return (
      <div className={'line'} style={getLinePosition(columnNumber)}>
          <div className={'left'}/>
          <div className={'center'}/>
          <div className={'right'}/>
      </div>
  );
};

export default Line;
