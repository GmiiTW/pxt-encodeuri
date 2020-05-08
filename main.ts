namespace EncodeURI {
    //% block="encodeURI $str"
    //% inlineInputMode=inline
    export function map(str: string): string {
        return encodeURI(str)
    }
}