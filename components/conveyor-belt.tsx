"use client";

import { motion } from "framer-motion";

const SLOT = 80;
const BOX_W = 56;
const UNIQUE = 6;
const REPS = 3;

const BOXES = [
  { box: "#d97706", tape: "#92400e" },
  { box: "#ca8a04", tape: "#a16207" },
  { box: "#b45309", tape: "#78350f" },
  { box: "#d97706", tape: "#92400e" },
  { box: "#c2830a", tape: "#a16207" },
  { box: "#ca8a04", tape: "#78350f" },
];

const ALL_BOXES = Array.from({ length: UNIQUE * REPS }, (_, i) => BOXES[i % UNIQUE]);

export default function ConveyorBelt() {
  return (
    <div className="w-full select-none my-6">
      <div className="relative overflow-hidden bg-zinc-600 dark:bg-zinc-700 h-16 rounded-t-sm">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0px, transparent 38px, white 38px, white 40px)",
          }}
        />
        <motion.div
          className="absolute top-0 left-0 h-full flex items-end pb-1"
          style={{ width: ALL_BOXES.length * SLOT }}
          animate={{ x: [0, -(UNIQUE * SLOT)] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        >
          {ALL_BOXES.map((color, i) => (
            <div
              key={i}
              style={{ width: BOX_W, marginRight: SLOT - BOX_W, backgroundColor: color.box }}
              className="h-12 shrink-0 rounded-sm relative shadow-md"
            >
              <div
                className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-0.5"
                style={{ backgroundColor: color.tape }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5"
                style={{ backgroundColor: color.tape }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div
        className="bg-zinc-800 dark:bg-zinc-900 h-4 flex items-center overflow-hidden rounded-b-sm"
        style={{ paddingLeft: SLOT / 2 - 6, gap: SLOT - 12 }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-zinc-600 dark:bg-zinc-500 shrink-0 border border-zinc-500 dark:border-zinc-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>
    </div>
  );
}
