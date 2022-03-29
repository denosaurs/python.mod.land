# Pip Deno

Import any python module into deno as long as you have it installed locally

### Usage

```ts
import np from "https://pip.deno.dev/pkg/numpy";
import plt from "https://pip.deno.dev/pkg/matplotlib.pyplot";

const xpoints = np.array([1, 8]);
const ypoints = np.array([3, 10]);

plt.plot(xpoints, ypoints);
plt.show();
```





