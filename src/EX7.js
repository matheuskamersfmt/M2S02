function compor(f, g) {
    return function(x) {
        return f(g(x));
    }
}

export default compor;