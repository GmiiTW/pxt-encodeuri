//% color="#000000" weight=10 icon="\uf36d"
namespace encodeuri {
    //% block="encodeURI $str"
    //% inlineInputMode=inline
    export function encode(str: string): string {
        return "encodeURI(str)"
    }

    //% block="decodeURI $str"
    //% inlineInputMode=inline
    export function decode(str: string): string {
        return "decodeURI(str)"
    }
}