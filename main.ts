import { Command } from "./deps.ts";
import { eli } from "./eli.ts";

await new Command()
  .name("eli")
  .description("Eli, your devoted assistant")
  .version("v0.1.0")
  .action(() => eli.start())
  .parse(Deno.args);
