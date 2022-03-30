/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, tw, hljs } from "../client_deps.ts";
import Header from "../components/Header.tsx";
import { Handlers, css } from "../server_deps.ts";
import { checkExist, isHtmlRequest } from "../utils.ts";
// deno-lint-ignore no-explicit-any
function Block(props: any) {
  const block = tw`bg-gray-100 p-3 hljs rounded`;
  // deno-lint-ignore no-explicit-any
  const code = (hljs as any).highlight(props.code, {language: 'javascript'}).value
  return (
    <div class={block}>
      <pre><code dangerouslySetInnerHTML={{__html: code}}></code></pre>
    </div>
  );
}
export const handler: Handlers = {
  GET(_, ctx) {
    if (isHtmlRequest(_)) {
      return ctx.render()
    }
    const mod =
      `import { python } from "https://deno.land/x/python@0.1.4/mod.ts";\nexport const python_mod = python.import("${ctx.params.name}");\nexport default python_mod;`;
    return new Response(mod, {
      headers: { "Content-Type": "application/javascript" },
    });
  },
};

export default function ModulePage(ctx: any) {
  const main = tw`max-w-screen-sm mx-auto px(4 sm:4 md:4) space-y-3 mb-8`;
  const text = tw`text-gray-600 text-lg`;
  return <>
    <style>{css}</style>
    <Header/>
    <section class={main}>
      <p class={text}>Import from a URL</p>
      <Block code={`import ${ctx.params.name.replace(".","")} from "https://python.mod.land/pkg/${ctx.params.name}"`}></Block>
    </section>
  </>
}

