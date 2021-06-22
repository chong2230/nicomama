export function getQueryString(key) {
    let val = '';
    let str = location.search.slice(1);
    let arr = str.split('&');
    for (let i in arr) {
        let res = arr[i].split('=');
        if (res[0] == key) val = res[1];
    }
    return val;
}