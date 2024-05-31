import _Database from "./database.ts";
async function main() {
  try {
    await new _Database().connect();

    Deno.serve(() => {
      return new Response("Starting api...");
    })
  } catch (error) {
    console.error(`Connections not initialized. ${error}.`);
  }
}

main();
