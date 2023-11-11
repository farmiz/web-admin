"use client";

import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ActionButton } from "@/interfaces/tables";
import { FC, memo } from "react";
interface DataTableRowActionsProps {
  actionButtons: ActionButton[];
  row: any;
}
export const DataTableRowActions: FC<DataTableRowActionsProps> = memo(
  ({ actionButtons, row }) => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          {actionButtons && actionButtons.length &&  actionButtons.map((actionButton, index) => {
            return (
              <DropdownMenuItem
                key={index + 1}
                className="cursor-pointer"
                onClick={() => actionButton.action(row.original)}
              >
                {actionButton.label}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
);
