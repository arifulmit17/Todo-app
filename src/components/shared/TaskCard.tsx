import React from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

interface TaskCardProps {
  id: string;
  text: string;
  targetDate?: string | undefined;
  completed: boolean;
  handleDeleteTodo: (id: string) => void;
  handleToggleTodo: (id: string) => void;
}

export default function TaskCard({
  id,
  text,
  targetDate,
  completed,
  handleDeleteTodo,
  handleToggleTodo,
  handleUpdateTodo
}: TaskCardProps) {
  // Calculate remaining days for this todo
  const remainingDays = targetDate
    ? Math.ceil(
        (new Date(targetDate).getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      )
    : null; // or 0, or 'N/A'

  return (
    <div>
      <Card className="p-4 shadow-md border rounded-xl hover:shadow-lg transition flex flex-row gap-6">
        {/* LEFT (Info) */}
        <div className="flex-1 space-y-3">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold">{text}</CardTitle>
            <CardDescription>
              <p>
                <span className="font-medium text-blue-600">Target Date: </span>
                {targetDate}
              </p>

              <p
                className={`font-semibold ${
                  remainingDays !== null && remainingDays < 10
                    ? remainingDays !== null && remainingDays < 3?  "text-red-600 animate-bounce" : "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                Remaining Days: {remainingDays ?? "N/A"}
              </p>
            </CardDescription>
          </CardHeader>
        </div>

        {/* RIGHT (Buttons) */}
        <div className="flex gap-3 items-center justify-center">
          <Button
            variant="destructive"
            className="px-4 bg-red-600"
            onClick={() => handleDeleteTodo(id)}
          >
            Delete
          </Button>
          <Button
            variant="destructive"
            className="px-4 bg-green-400"
            onClick={() => handleUpdateTodo(id)}
          >
            Update
          </Button>

          {completed ? (
            <Button
              className="bg-green-600 hover:bg-green-700 text-white px-4"
              onClick={() => handleToggleTodo(id)}
            >
              Completed
            </Button>
          ) : (
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4"
              onClick={() => handleToggleTodo(id)}
            >
              Complete
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
