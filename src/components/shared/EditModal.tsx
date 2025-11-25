

"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { DatePicker } from "../ui/datepicker";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialText: string;
  initialDate?: Date | undefined;
  onSave: (text: string, date?: Date) => void;
}

export default function EditModal({
  isOpen,
  onClose,
  initialText,
  initialDate,
  onSave,
}: EditModalProps) {
  const [text, setText] = useState(initialText);
  const [date, setDate] = useState<Date | undefined>(initialDate);

  // Reset fields when modal opens
  useEffect(() => {
    setText(initialText);
    setDate(initialDate);
  }, [isOpen, initialText, initialDate]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold">Edit Task</h2>

        {/* Task Name Input */}
        <div className="flex flex-col space-y-1">
          <label className="font-medium">Task Name</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Target Date */}
        <div className="flex flex-col space-y-1">
          <label className="font-medium">Target Date</label>
          <DatePicker value={date} onChange={setDate} />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="px-4 py-2"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              onSave(text, date);
              onClose();
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

