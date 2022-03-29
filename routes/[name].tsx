/** @jsx h */
import { Handlers } from "../server_deps.ts";
import { checkExist } from "../utils.ts";
export const handler: Handlers = {
  GET(_, ctx) {
    let exists: boolean;
    checkExist(ctx.params.name, (_exists: boolean) => {
      exists = _exists;
    });
    const mod = exists!
      ? `import { python } from "https://deno.land/x/python@0.1.4/mod.ts";
export const python_mod = python.import("${ctx.params.name}");
export default python_mod;`
      : `404 not found`;
    return new Response(mod, {
      headers: { "Content-Type": "application/javascript" },
    });
  },
};
