import { useState, useEffect } from "react";
import Select from "react-select";
import {
  AXIS_VALUES,
  DISPLAY_HORIZONTAL,
  METHOD_HORIZONTAL_BLOCK,
  METHOD_VERTICAL,
  METHOD_BOTH,
} from "./data";

import { useCodeContext } from "./codeContext.jsx";

export default function Dropdowns(props) {
  const [axis, setAxis] = useState({});

  const [display, setDisplay] = useState({});
  const [displayValues, setDisplayValues] = useState({});

  const [method, setMethod] = useState({});
  const [methodValues, setMethodValues] = useState({});

  const { code, setCode } = useCodeContext();

  // Change display based on the selected axix
  useEffect(() => {
    switch (axis.value) {
      case "horizontal":
        setDisplayValues(DISPLAY_HORIZONTAL);
        break;
      case "vertical":
        setMethodValues(METHOD_VERTICAL);
        break;
      case "both":
        setMethodValues(METHOD_BOTH);
        break;
      default:
        setDisplayValues({});
    }
  }, [axis]);

  /*
   * Set code when the display method on horizontal axis is set
   * Otherwise, set methods
   */
  useEffect(() => {
    switch (display.value) {
      case "inline":
        setCode(`.center {
          text-align: center;
    }`);
        break;
      case "block":
        setMethodValues(METHOD_HORIZONTAL_BLOCK);
        break;
      default:
        setCode("");
    }
  }, [display]);

  // Set code when we have everything
  useEffect(() => {
    switch (axis.value) {
      case "horizontal":
        if (display.value === "inline") {
          setCode(`
.center {
    text-align: center;
}
    `);
        } else if (display.value === "block") {
          if (method.value === "margin") {
            setCode(`
.center {
  margin: 0 auto;
}`);
          } else if (method.value === "flex") {
            setCode(`
.center {
  display: flex;
  justify-content: center;
}`);
          }
        } else {
          setCode(null);
        }
        break;

      case "vertical":
        if (method.value === "flex") {
          setCode(`
.center {
  display: flex;
  align-items: center;
}`);
        } else if (method.value === "apns") {
          setCode(`
.parent {
  position: absolute;
}

.children {
  position: absolute;
  top: 50%;
  margin-top: -25%;
}`);
        } else if (method.value === "tt") {
          setCode(`
.parent {
  position: relative;
}

.children {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}`);
        } else {
          setCode(null);
        }
        break;

      case "both":
        if (method.value === "flex") {
          setCode(`
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}`);
        } else if (method.value === "apns") {
          setCode(`
.parent {
  position: relative;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25%, 0, 0, -25%;
}`);
        } else if (method.value === "tt") {
          setCode(`
.parent {
  position: relative;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`);
        } else {
          setCode(null);
        }
        break;
      default:
        break;
    }
  }, [code, axis, display, method]);

  return (
    <>
      <section className="dropdowns">
        <Select
          options={AXIS_VALUES}
          defaultValue={axis}
          onChange={setAxis}
          className="dropdown"
        />

        {/* Level 02 */}
        {axis.value === "horizontal" ? (
          <Select
            options={displayValues}
            defaultValue={display}
            onChange={setDisplay}
            className="dropdown"
          />
        ) : null}

        {/* Level 03 */}
        {display.value === "block" ||
        axis.value === "vertical" ||
        axis.value === "both" ? (
          <Select
            options={methodValues}
            defaultValue={method}
            onChange={setMethod}
            className="dropdown"
          />
        ) : null}
      </section>
    </>
  );
}
