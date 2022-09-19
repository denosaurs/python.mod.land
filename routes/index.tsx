import { hljs} from "../client_deps.ts";
import { css } from "../server_deps.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import List from "../islands/List.tsx";
import { Head } from "$fresh/runtime.ts";


export default function Index() {
  const main = `max-w-screen-sm mx-auto px(4 sm:4 md:4) space-y-3 mb-8 pt-8`;
  const projects = `max-w-screen-sm mx-auto px(4 sm:4 md:4) space-y-3 mb-8 `;
  const text = `text-gray-600 text-lg`;
  function handleSearch(e) {
    e.preventDefault()
    console.log(e)
  }
  return (
    <>
      <Head>
        <title>Python Land - A fast CDN to use statically typed Python modules in Deno.</title>
        <meta
          name="description"
          content="A fast CDN to use statically typed Python modules in Deno."
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css"/>
          <style>{css}</style>
      </Head>
      <Header />
      <section class={main}>
        <p class={text}>Import from a URL</p>
        <Block code={'import np from "https://python.mod.land/numpy"'}></Block>
      </section>
      <section class={projects}>
        <p class={text}>Top Projects</p>
        <List />
      </section>
      <Footer />
    </>
  );
}

// deno-lint-ignore no-explicit-any
function Block(props: any) {
  const block = `bg-gray-100 p-3 hljs rounded`;
  // deno-lint-ignore no-explicit-any
  const code = (hljs as any).highlight(props.code, { language: 'javascript' }).value
  return (
    <div class={block}>
      <pre><code dangerouslySetInnerHTML={{ __html: code }}></code></pre>
    </div>
  );
}