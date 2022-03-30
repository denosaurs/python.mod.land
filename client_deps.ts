export * from "https://raw.githubusercontent.com/lucacasonato/fresh/main/runtime.ts";
import { IS_BROWSER } from "https://raw.githubusercontent.com/lucacasonato/fresh/main/runtime.ts";
import { apply, setup, tw } from "https://esm.sh/twind@0.16.16";
export { apply, setup, tw };
export { default as hljs } from "https://jspm.dev/highlight.js@11.0.1";
if (IS_BROWSER) {
  setup({});
}
