import { accepts } from "https://deno.land/x/oak_commons@0.1.1/negotiation.ts";
// deno-lint-ignore no-explicit-any
export function checkExist(name: string, callback: (exists: any) => void) {
  fetch(`https://pypi.org/pypi/${name}`, { method: "head" }).then((res) => {
    callback(res.status === 200);
  });
}

export function isHtmlRequest(req: Request) {
  return accepts(req, "application/*", "text/html") === "text/html";
}
