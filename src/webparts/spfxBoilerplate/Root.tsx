import { IWebPartContext } from "@microsoft/sp-webpart-base";
import {ISpfxBoilerplateWebPartProps} from "./SpfxBoilerplateWebPart";

import * as ReactDOM from "react-dom";
import * as React from "react";

/**
 * Routing Base
 * @export
 * @param {IWebPartContext} context
 * @param {Element} container
 * @param {IAuslastungWebPartProps} webpartProps
 */
export function renderRoot(context: IWebPartContext, container: Element, webpartProps: ISpfxBoilerplateWebPartProps) {
  ReactDOM.render(
    <div>
      <h1>Super is des, echt ned blöd</h1>
    </div>
    , container
  );
}
