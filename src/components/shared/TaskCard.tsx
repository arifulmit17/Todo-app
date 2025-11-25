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
  category: string;
  targetDate?: string | undefined;
  completed: boolean;
  handleDeleteTodo: (id: string) => void;
  handleToggleTodo: (id: string) => void;
  onEdit: () => void;
}

export default function TaskCard({
  id,
  text,
  category,
  targetDate,
  completed,
  handleDeleteTodo,
  handleToggleTodo,
  onEdit
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
     <Card
  className={`p-4 shadow-md border rounded-xl hover:shadow-lg transition flex flex-row gap-6 ${
    completed
      ? "bg-gray-200"
      : remainingDays !== null && remainingDays < 3
      ? "bg-red-200 animate-bounce"
      : remainingDays !== null && remainingDays < 10
      ? "bg-yellow-200"
      : "bg-green-200"
  }`}
>
  {/* LEFT (Info) */}
  <div className="flex-1 space-y-2">
    {/* Category Badge */}
    {category && (
      <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
        {category}
      </span>
    )}

    <CardHeader className="pb-2">
      <CardTitle className="text-xl font-semibold">{text}</CardTitle>
      <CardDescription>
        <h3>
          <span className="font-medium text-blue-600">Target Date: </span>
          {targetDate}
        </h3>

        <h4
          className={`font-semibold ${
            remainingDays !== null && remainingDays < 10
              ? remainingDays !== null && remainingDays < 3
                ? "text-red-600"
                : "text-yellow-600"
              : "text-green-600"
          }`}
        >
          Remaining Days: {remainingDays ?? "N/A"}
        </h4>
      </CardDescription>
    </CardHeader>
  </div>

  {/* RIGHT (Buttons) */}
  <div className="flex gap-3 items-center justify-center">
    {!completed && (
      <Button
        variant="destructive"
        className="px-4 bg-red-600"
        onClick={() => handleDeleteTodo(id)}
      >
        Delete
      </Button>
    )}
    {onEdit && !completed && (
      <Button className="bg-green-400" onClick={onEdit}>
        Edit
      </Button>
    )}

    {completed ? (
      <Button
        className="bg-gray-600 hover:bg-gray-700 text-white px-4"
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
