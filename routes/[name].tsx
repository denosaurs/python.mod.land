/** @jsx h */
import { Handlers } from "../server_deps.ts";

export const handler: Handlers = {
  GET(_, ctx) {
    const mod =
`import { python } from "https://deno.land/x/python@0.1.4/mod.ts";
export const python_mod = python.import("${ctx.params.name}");
export default python_mod;`;
    return new Response(mod, {
      headers: { "Content-Type": "application/javascript" },
    });
  },
};
