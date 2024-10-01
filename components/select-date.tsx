import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { PopoverTrigger } from "@radix-ui/react-popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

export interface SelectDateProps {
  title: string;
  date: Date;
  onSelectDate: (date?: Date) => void;
}

export function SelectDate({ title, date, onSelectDate }: SelectDateProps) {
  return (
    <div className="flex space-x-2">
      <Button variant={"outline"} className="min-w-40" disabled={true}>
        {title}
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onSelectDate}
            initialFocus
            disabled={(date) =>
              date > new Date("2024-09-04") || date < new Date("2024-09-02")
            }
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
