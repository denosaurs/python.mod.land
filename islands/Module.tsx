/** @jsx h */
/** @jsxFrag Fragment */

import { h, tw, useEffect, useState } from "../client_deps.ts";

// deno-lint-ignore no-explicit-any
function Card({name, description}: any) {
  const title = tw`px-4 py-3 mb-4 font-bold text(2xl gray-900 center)`;
  const subtitle = tw`px-4 py-3 mb-4 text(xl gray-600 center)`;

  return (
    <div>
      <div class={title}>{name}</div>
      <div class={subtitle}>{description}</div>
    </div>
  );
}

export default function Module({name}:any) {
  const [data, setData] = useState(<div>loading...</div> as h.JSX.Element);
  const container = tw`max-w-screen-sm mx-auto px(4 sm:4 md:4) space-y-3`;
  useEffect(() => {
    fetch(
      `https://pypi.org/pypi/${name}/json/`,
    )
      .then((r) => r.json())
      .then((r) => {
        console.log(r)
        setData(<Card name={r.info.name} description={r.info.summary} />);
      });
  }, []);
  return (
    <div class={container} onLoad={() => setData(<div>loading...</div> as h.JSX.Element)}>
      {data}
    </div>
  );
}
