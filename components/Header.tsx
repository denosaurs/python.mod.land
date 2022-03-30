/** @jsx h */
/** @jsxFrag Fragment */

import { h, tw } from "../client_deps.ts";

export default function Header() {
    const container = tw`w-full h-64 flex justify-center items-center flex-col`;
    const title = tw`max-w-screen-sm mt-4 font-bold text(4xl gray-900 center)`;
    const subtitle = tw`max-w-screen-sm mt-4 text(xl gray-600 center)`;
    return (
      <section class={container}>
        <p class={title}>python.mod.land</p>
        <p class={subtitle}>
          A fast CDN to use statically typed Python modules in Deno.
        </p>
      </section>
    );
}
  