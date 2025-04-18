import { useState } from "react";
import { Button } from "@mui/material";
import { filterconfig } from "../helpers";
import { FilterSlider } from "./Filter/FilterSlider";
import { FilterCheckbox } from "./Filter/FilterCheckbox";

export const Filter = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="max-w-6xl py-2 px-4 ">
      <div className="h-fit border border-cyan-200 rounded-2xl shadow">
        <h1 className="text-xl mb-4">Відцентрові (радіальні) вентилятори</h1>
        <form action="" className="max-w-xs">
          <ul className="space-y-4">
            {filterconfig.sliderList.map((element) => (
              <li key={element.title}>
                <FilterSlider
                  min={element.min}
                  max={element.max}
                  title={element.title}
                  displayText={element.dispalyValue}
                />
              </li>
            ))}

            {open && (
              <>
                <li>
                  <FilterCheckbox
                    title={filterconfig.numberslist.title}
                    items={filterconfig.numberslist.items}
                  />
                </li>
                <li>
                  <FilterCheckbox
                    title={filterconfig.rmp.title}
                    items={filterconfig.rmp.items}
                  />
                </li>
                <li>
                  <FilterCheckbox
                    title={filterconfig.materials.title}
                    items={filterconfig.materials.items}
                  />
                </li>
              </>
            )}
            <li>
              <Button
                variant="text"
                size="small"
                onClick={() => setOpen((p) => !p)}
                sx={{ fontSize: "10px" }}
              >
                {open ? "згорнути" : "Детальний підбір"}
              </Button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};
