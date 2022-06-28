import { Command, Select, prompt } from "./deps.ts";
import { eli } from "./eli.ts";

async function main() {
  await new Command()
    .name("eli")
    .description("Eli, your devoted assistant")
    .version("v0.1.0")
    .action(async () => {
      eli.start();

      await prompt([
        {
          name: "entrypoint",
          message: "",
          search: true,
          type: Select,
          options: [
            { name: "Do this", value: "do-this" },
            { name: "Do that", value: "do-that" },
            { name: "Or something like that", value: "or-something-like-that" },
          ],
          after: (_, next) => next("entrypoint"),
        },
      ]);
    })
    .parse(Deno.args);
}

if (import.meta.main) {
  main();
}
