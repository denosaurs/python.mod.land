# Pip Deno

Import any python module into deno as long as you have it installed locally

[![License](https://img.shields.io/github/license/denosaurs/python.mod.land)](https://github.com/denosaurs/python.mod.land/blob/master/LICENSE)
### Usage

```ts
import np from "https://python-mod-land.deno.dev/pkg/numpy";
import plt from "https://python-mod-land.deno.dev/pkg/matplotlib.pyplot";

const xpoints = np.array([1, 8]);
const ypoints = np.array([3, 10]);

plt.plot(xpoints, ypoints);
plt.show();
```





