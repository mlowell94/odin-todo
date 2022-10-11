const checkLength = function(someString) {
    return someString.length > 20;
}

const abbreviateString = function(someString) {
    const dots = '...';
    const slice = someString.slice(0, 17);
    return (slice+dots);
}

export { checkLength, abbreviateString };