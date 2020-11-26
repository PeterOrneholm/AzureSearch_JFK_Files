import * as React from "react"

const style = require("./caption.style.scss");


export const CaptionComponent = () => (
  <div className={style.caption}>
    <p className={style.title}>Utforska dokumenten</p>
    <p className={style.subtitle}>Palmemordsutredningen tillgängliggjord med hjälp av AI</p>
  </div>
);