function contador() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

export default contador;