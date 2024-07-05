export function sum(...args: number[]) {
    return args.reduce((sum, value) => sum + value);
}