import { python } from "https://deno.land/x/python@0.1.4/mod.ts";

export async function checkRegistry(name: string) {
    const baseUrl = `https://pypi.org/pypi/`;
    try {
        const res = await fetch(`${baseUrl}${name}/json`)
        return await res.json();
    } catch (_e: unknown) {
        throw new Error(`Package ${name} not found`);
    }
}
export async function verifyInstall(name: string) {
    if (await checkRegistry(name)) {
        try {
            const _res = python.import(name);
        } catch (_e: unknown) {
            const pip = python.import('pip');
            pip.main(['install', name]);
        }

    }
}