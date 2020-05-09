//% color="#0000FF" weight=10 icon="\uf121"
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