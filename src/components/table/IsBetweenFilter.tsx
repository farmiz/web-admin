import { useQueryParams } from "@/hooks/useSetQueryParam";
import { Input } from "../ui/input";
import { ChangeEvent, memo, useState } from "react";

const IsBetweenFilter = ({
  column,
  handleIsBetweenValues,
}: {
  column: string;
  handleIsBetweenValues: (data: { name: string; value: string }) => void;
}) => {
  const { getQueryParam } = useQueryParams();
  const queryParamValue = getQueryParam(`${column}_between`);
  const [less = "", high = ""] = queryParamValue
    ? queryParamValue.split(",")
    : [];

  const [lesserValue, setLessValue] = useState(less || "");
  const [higherValue, setHigherValue] = useState(high || "");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "lesserValue") {
      setLessValue(value);
    }
    if (name === "higherValue") {
      setHigherValue(value);
    }
    handleIsBetweenValues({ name, value });
  };

  return (
    <div className="flex gap-2 items-center justify-between">
      <Input
        type="number"
        className="h-10"
        value={lesserValue}
        name="lesserValue"
        onChange={handleInputChange}
      />
      <span>and</span>
      <Input
        type="number"
        className="h-10"
        value={higherValue}
        name="higherValue"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default memo(IsBetweenFilter);
