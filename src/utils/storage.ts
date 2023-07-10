function setItem(key: string, value: string): void {
    try {
        localStorage.setItem(key, value)
    } catch (err) {
        throw err
    }
}

function removeItem(key: string): void {
    try {
        localStorage.removeItem(key)
    } catch (err) {
        throw err
    }
}

function getItem(key: string): string | null {
    try {
        return localStorage.getItem(key)
    } catch (err) {
        throw err
    }
}

export default {
    setItem,
    removeItem,
    getItem,
}
