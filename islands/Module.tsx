import { useEffect, useState } from "preact/hooks";
import Placeholder from "../components/Placeholder.tsx";
import * as marked from "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
// deno-lint-ignore no-explicit-any
function Card({name, summary, description, version, source_code}: any) {
  const title = `px-4 py-3 mb-4 font-bold text(2xl gray-900 center)`;
  const subtitle = `px-4 py-3 mb-4 text(xl gray-600 center)`;
  const descript = `px-4 py-3 mb-4 text(lg gray-400 center) mt-4 max-h-24 overflow-y-auto`;
  const num = `px-2 py-2 mb-4 font-bold text(sm gray-500 center)`;

  return (
    <div>
      <div class={title}>{name} <a class={`bi bi-github`} href={source_code} style="font-size: 1rem;" ></a> <a class={num}>v.{version}</a></div>
      <div class={subtitle}>{summary}</div>
      
      <div class={descript} dangerouslySetInnerHTML={{ __html: marked.parse(description) }}></div>
    </div>
  );
}

export default function Module({name}:any) {
  const [data, setData] = useState(<Placeholder /> as h.JSX.Element);
  const container = `max-w-screen-sm mx-auto px(4 sm:4 md:4) space-y-3`;
  useEffect(() => {
    fetch(
      `https://pypi.org/pypi/${name}/json/`,
    )
      .then((r) => r.json())
      .then((r) => {
        setData(<Card name={r.info.name} summary={r.info.summary} description={r.info.description} version={r.info.version} source_code={r.info.project_urls["Source Code"]}/>);
      });
  }, []);
  return (
    <div class={container} onLoad={() => setData(<Placeholder /> as h.JSX.Element)}>
      {data}
    </div>
  );
}
