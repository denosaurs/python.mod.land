import { useEffect, useState } from "preact/hooks";

type Top = {
  rows: {
    download_count: number;
    project: string;
  }[];
};

// deno-lint-ignore no-explicit-any
function Card({index, name, count}: any) {
  const row = `border-b-2 leading-10 hover:bg-gray-100 cursor-pointer`
  return (
    <tr class={row} onClick={() => {window.location.replace(`${name}`)}}>
      <td class="font-bold">#{index}</td>
      <td>{name}</td>
      <td class="font-bold">{count}</td>
    </tr>
  )
}

export default function List() {
  const [data, setData] = useState([] as h.JSX.Element[]);
  const container = `max-w-screen-sm mx-auto px(4 sm:4 md:4) space-y-3`;
  const list = `max-w-screen-sm mt-4 text(lg gray-600 center)`;
  const table = `w-full table-auto mt-2`
  const header = `border(b-2 t-2) leading-10`
  useEffect(() => {
    fetch(
      "https://hugovk.github.io/top-pypi-packages/top-pypi-packages-30-days.min.json",
    )
      .then((r) => r.json())
      .then((r) => {
        const top = (r as Top).rows.slice(0, 10);
        const data = top.map((mod, i) => <Card index={i+1} name={mod.project} count={mod.download_count} />);
        setData(data);
      });
  }, []);
  return (
    <div class={container}>
      <table class={table}>
        <thead class={header}>
          <th class="font-bold">No.</th>
          <th class="font-bold">Project</th>
          <th class="font-bold">Downloads</th>
        </thead>
        <tbody class={list} onLoad={() => setData([])}>
          {data}
        </tbody>
      </table>
    </div>
  );
}
