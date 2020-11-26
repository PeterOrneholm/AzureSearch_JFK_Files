import * as React from "react";
import { LogoMicrosoftComponent } from "../logo-microsoft";
import { cnc } from "../../../util";

const style = require("./footer.style.scss");

const Links = () => (
    <div className={style.linkArea}>
      Bakgrundsbild ifrån <a className={style.link} href="https://commons.wikimedia.org/wiki/File:Sveav%C3%A4gen_44,_Stockholm.jpg" target="__blank">Wikipedia</a>.
      Baserat på <a className={style.link} href="https://www.microsoft.com/en-us/ai/ai-lab-jfk-files" target="__blank">JFK Files av Microsoft</a>.
      Modifierat för <a className={style.link} href="http://palmemordsarkivet.se/" target="__blank">palmemordsarkivet.se</a> av <a className={style.link} href="https://www.activesolution.se/" target="__blank">Active Solution</a>.
    </div>
);

const Statement = () => (
  <div className={style.statementArea}>
    
  </div>
);

export const FooterComponent = ({className = null}) => {
  return (
    <footer className={cnc(style.footer, className)}>
      <Links />
    </footer>
  );
}