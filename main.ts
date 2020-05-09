namespace EncodeURI {
    //% block="encodeURI $str"
    //% inlineInputMode=inline
    export function encode(str: string): string {
        return encodeURI(str)
    }

    //% block="decodeURI $str"
    //% inlineInputMode=inline
    export function decode(str: string): string {
        return decodeURI(str)
    }
}