import { Checkbox } from "@mui/material";

type Props = {
  title: string;
  items: string[] | number[];
};

export const FilterCheckbox = (props: Props) => {
  return (
    <li>
      <span className="text-md text-gray-700 font-medium mb-1">
        {props.title}
      </span>
      <ul className="flex flex-col gap-1">
        {props.items.map((i) => (
          <li>
            <Checkbox disableRipple size="small" id={`${i}`} />
            <label className="text-sm text-gray-600" htmlFor={`${i}`}>
              {i}
            </label>
          </li>
        ))}
      </ul>
    </li>
  );
};
