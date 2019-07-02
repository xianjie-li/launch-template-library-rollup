import React, { useState } from 'react';

import Skeleton from '@esm/Skeleton';
import '@esm/Skeleton/style';
 
export default function Test() { 
  return (
    <div>
      test:
      <Skeleton loading={true} img={true}></Skeleton>
    </div>
  );
}
