/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h, Head, hljs, tw } from "../client_deps.ts";
import { css } from "../server_deps.ts";
import Header from "../components/Header.tsx";
import List from "../islands/List.tsx";

export default function Index() {
  const main = tw`max-w-screen-sm mx-auto px(4 sm:4 md:4) space-y-3 mb-8`;
  const projects = tw`max-w-screen-sm mx-auto px(4 sm:4 md:4) space-y-3 mb-8 `;
  const text = tw`text-gray-600 text-lg`;

  return (
    <>
      <Head>
        <title>Python Land</title>
        <meta
          name="description"
          content="A fast CDN to use statically typed Python modules in Deno."
        />
        <style>{css}</style>
      </Head>
      <Header/>
      <section class={main}>
        <p class={text}>Import from a URL</p>
        <Block code={'import np from "https://python.mod.land/pkg/numpy"'}></Block>
      </section>
      <section class={projects}>
        <p class={text}>Top Projects</p>
        <List/>
      </section>
    </>
  );
}

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