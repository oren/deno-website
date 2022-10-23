import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts"

const decoder = new TextDecoder("utf-8");
const filename = Deno.args[0];
const markdown = decoder.decode(await Deno.readFile(filename));
const markup = Marked.parse(markdown);
console.log(markup.content);
console.log(JSON.stringify(markup.meta))
