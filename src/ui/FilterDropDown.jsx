import Select from "./Select";
import { useSearchParams } from "react-router-dom";

function FilterDropDown({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(filterField) || "";
  function handleChange(e) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  }

  return <Select onChange={handleChange} value={value} options={options} />;
}

export default FilterDropDown;
