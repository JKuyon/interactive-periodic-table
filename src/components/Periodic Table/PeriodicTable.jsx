import React from 'react';
import Elements from '../Elements/Elements';

import './PeriodicTable.scss';

const PeriodicTable = (props) => {
  return (
    <div className='periodic-table'>{props.children}</div>
  )
}

export default PeriodicTable;


// <PeriodicTable>
//    <Element>
//      Hydrogen 
//    </Element>
// </PeriodicTable>