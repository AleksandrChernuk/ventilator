/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Slider, TextField } from "@mui/material";
import { useState } from "react";

type Props = {
  title: string;
  min: number;
  max: number;
  displayText?: (v: number) => string;
};

export const FilterSlider = (props: Props) => {
  const [value, setValue] = useState<number[]>([props.min, props.max]);

  const handleChangePow = (
    //@ts-ignore
    event: Event,
    newValue: number[],
    activeThumb: number
  ) => {
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - 10), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + 10)]);
    }
  };

  return (
    <li>
      <h3 className="text-md text-gray-700 font-medium mb-1">{props.title}</h3>
      <div className="flex items-center gap-2">
        <TextField
          id="pow-min"
          value={props.displayText ? props.displayText(value[0]) : value[0]}
          variant="outlined"
          size="small"
        />
        <TextField
          id="pow-max"
          value={props.displayText ? props.displayText(value[1]) : value[1]}
          variant="outlined"
          size="small"
        />
      </div>
      <Slider
        id="pow"
        getAriaLabel={() => "Minimum distance"}
        value={value}
        min={props.min}
        max={props.max}
        onChange={handleChangePow}
        valueLabelDisplay="auto"
        disableSwap
      />
    </li>
  );
};
