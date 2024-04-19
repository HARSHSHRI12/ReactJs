import React, { useState } from 'react';

export default function Left() {
  var [x, upx] = useState(1234);

  var fun1 = () => {
    upx(300);
  };

  return (
    <div className="leftstyle">
      Left-{x}
    </div> 
  );
}
