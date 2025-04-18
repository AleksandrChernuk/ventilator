import { Filter } from "./Filter";
import { Tz } from "./Tz";

export const Main = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <Filter />
          <Tz />
        </div>
      </div>
    </div>
  );
};
