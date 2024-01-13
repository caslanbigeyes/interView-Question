#  字符串分割取值
````
var object = { 'a': [{ 'b': { 'c': 3 } }] };

get(object, 'a[0].b.c');
// // => 3

get(object, ['a', '0', 'b', 'c']);
// => 3

get(object, 'a.b.c', 'default');
// // => 'default'

function get(obj, path, defaultValue) {
    // write here
    const keys = Array.isArray(path) ? path : path.split('.');
    let result = obj;
    for (let key of keys) {
        if (result === undefined) break;
        if (key.includes('[') && key.includes(']')) {
            // 获得数组索引
            console.log(key.split(/[\[\]]/),333)
            const [prop, index] = key.split(/[\[\]]/);
            result = result[prop][index]
        } else {
            console.log(result[key],3332111)
            result = result[key]
        }
    }

    return result ? result : defaultValue
}
 ````