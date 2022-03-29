// deno-lint-ignore no-explicit-any
export function checkExist(name: string, callback: (exists: any) => void) {
  fetch(`https://pypi.org/pypi/${name}`, { method: "head" }).then((res) => {
    callback(res.status === 200);
  });
}
