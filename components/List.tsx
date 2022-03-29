/** @jsx h */

import { h, tw, useState, useEffect } from "../client_deps.ts";


export function List() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://hugovk.github.io/top-pypi-packages/top-pypi-packages-30-days.min.json").then(r => r.json()).then(r => setData(r)).then(r => console.log(r))
    }, []);
    const container = tw`max-w-screen-sm mx-auto px(4 sm:4 md:4) space-y-3`;
    const list = tw`max-w-screen-sm mt-4 text(xl gray-600 center)`;
    const listItem = tw`max-w-screen-sm mt-4 text(xl gray-600 center)`;
    return (
        <div class={container}>
            <ul class={list}>
                Top Modules
            </ul>
        </div>
    );
}
// https://hugovk.github.io/top-pypi-packages/top-pypi-packages-30-days.min.json