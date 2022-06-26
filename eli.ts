import { createMachine, interpret } from "./deps.ts";

const eliMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGgAoBbAQwGMALASwzAEoA6KiAGzHxAActYqAXKlgwcAHogAsAJnQBPRAE4ADA3kB2eZPEAOeVvHi145GhDFy1WnQ7deAoaMQBGLbKdbjxoA */
  createMachine(
    {
      tsTypes: {} as import("./eli.typegen.ts").Typegen0,
      id: "eli",
      initial: "idle",
      states: {
        idle: {
          entry: "sayHi",
        },
      },
    },
    {
      actions: {
        sayHi: () => {
          console.log("Hello world.");
          console.log("—Eli");
        },
      },
    }
  );

export const eli = interpret(eliMachine);
