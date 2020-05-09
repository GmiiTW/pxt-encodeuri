// tests go here; this will not be compiled when this package is used as a library

var str = "test 測試"
var encoded = encodeuri.encode(str)
console.log(`encoded: ${encoded}`)
var decoded = encodeuri.decode(encoded)
console.log(`decoded: ${decoded}`)
