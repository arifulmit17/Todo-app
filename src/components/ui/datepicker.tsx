"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
  value?: Date | undefined;
  onChange?: (date: Date | undefined) => void;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(value);
  console.log(internalDate);
  const handleSelect = (selected: Date | undefined) => {
    setInternalDate(selected);     // update internal state for button display
    if (onChange) onChange(selected); // notify parent
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!internalDate}
          className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
        >
          <CalendarIcon />
          {internalDate ? format(internalDate, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={internalDate} onSelect={handleSelect} />
      </PopoverContent>
    </Popover>
  );
}