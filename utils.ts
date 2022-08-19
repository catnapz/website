/**
 * Helper function to join classNames together
 * @example 
 * classNames(true ? "class-true" : "class-false", "class-always-1")
 * > "class-true class-always-1"
 */
export const classNames = (...classes: string[]) => {
    return classes.join(' ')
}