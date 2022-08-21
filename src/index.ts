export default async function getExports(name:string) {
    const pkg = await import(name);
    const keys = Object.keys(pkg);
    if(keys.length === 1 && keys[0] === 'default') {
        return Object.keys(pkg.default);
    }
    return keys;
}