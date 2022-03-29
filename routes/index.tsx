/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h, Head, hljs, tw } from "../client_deps.ts";

export default function Index() {
  const main = tw`max-w-screen-sm mx-auto px(4 sm:4 md:4) space-y-3`;
  const text = tw`text-gray-600 text-lg`;

  return (
    <>
      <Head>
        <title>PythonLand</title>
        <meta
          name="description"
          content="A fast CDN to use statically typed Python modules in Deno."
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/default.min.css"/>
      </Head>
      <Hero />
      <section class={main}>
        <p class={text}>Import from a URL</p>
        <Block code={'import np from "https://python.mod.land/numpy"'}></Block>
      </section>
    </>
  );
}

function Hero() {
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

function Block(props: any) {
  const block = tw`bg-gray-100 p-3`;
  const code = hljs.highlight(props.code, {language: 'javascript'}).value
  return (
    <div class={block}>
      <pre><code dangerouslySetInnerHTML={{__html: code}}></code></pre>
    </div>
  );
}