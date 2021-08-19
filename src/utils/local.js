/**
 * 操作本地存储的封装
 */

 const local = {
    get(key) {
        return JSON.parse(window.localStorage.getItem(key))
    },
    set(key, val) {
        window.localStorage.setItem(key, JSON.stringify(val))
    },
    clear() {
        window.localStorage.clear()
    },
    remove(key) {
        window.localStorage.removeItem(key)
    }
}

export default local;