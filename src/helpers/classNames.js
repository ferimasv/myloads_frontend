export default function classNames(className, ...args) {
    const isExist = args.length !== 0;
    if (isExist) {
        return `${className} ` + classNames(...args);
    }
    return `${className}`
}