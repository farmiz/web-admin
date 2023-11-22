import { useCallback, useState } from "react";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useQueryParams } from "@/hooks/useSetQueryParam";
interface DataTableFacetedFilterProps {
  column: string;
  title?: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
  extra?: {
    mainIcon?: React.ComponentType<{ className?: string }>;
  };
}

export function DataTableFacetedFilter({
  title,
  options,
  extra,
  column,
}: DataTableFacetedFilterProps) {
  const { getQueryParam, removeQueryParam, setQueryParam } = useQueryParams();
  const [selectedValues, setSelectedValues] = useState<string[]>(
    getQueryParam(`${column}_in`)?.split(",") || []
  );

  const itemExists = (item: string) =>
    !!options.find((option) => option.value === item);

  const handleItemChange = (item: string) => {
    if (!itemExists(item)) return;
    setSelectedValues((prev) => {
      const newValues = [...prev, item];
      setQueryParam(`${column}_in`, newValues.join(","));
      return newValues;
    });
  };
  const handleItemRemove = (item: string) => {
    const newValues = selectedValues.filter((value) => value !== item);
    setSelectedValues(newValues);
    setQueryParam(`${column}_in`, newValues.join(","));
  };
  const resetItems = useCallback(() => {
    removeQueryParam(`${column}_in`);
    setSelectedValues([]);
  }, []);
  // useEffect(() => {
  //   console.log(getQueryParam(`${column}_in`)?.split(","));
  // }, []);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          {extra && extra.mainIcon && (
            <extra.mainIcon className="mr-2 h-4 w-4" />
          )}
          {title}
          {selectedValues?.length > 0 && (
            <>
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selectedValues.length}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.length > 2 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {selectedValues.length} selected
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.includes(option.value))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.value}
                        className="rounded-sm px-1 font-normal"
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options &&
                options.length > 0 &&
                options.map((option) => {
                  const isSelected = selectedValues.includes(option.value);
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => {
                        if (isSelected) {
                          handleItemRemove(option.value);
                        } else {
                          handleItemChange(option.value);
                        }
                      }}
                      className="cursor-pointer"
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible"
                        )}
                      >
                        <CheckIcon className={cn("h-4 w-4")} />
                      </div>
                      {option.icon && (
                        <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                      )}
                      <span>{option.label}</span>
                    </CommandItem>
                  );
                })}
            </CommandGroup>
            {selectedValues.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={resetItems}
                    className="justify-center text-center cursor-pointer"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
