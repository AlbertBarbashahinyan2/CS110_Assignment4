function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return n + '! = ' + result;
}

function gcd(a, b) {
    if (b >= a) {
        let temp = a;
        a = b;
        b = temp;
    }
    let rem;
    while (rem != 0) {
        rem = a % b;
        a = b;
        if (rem != 0) {
            b = rem;
        }
    }
    return b;
}

function lcm(a, b) {
    return (a * b) / (gcd(a, b));
}

function toHexadecimal(n) {
    chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hex = '';
    let rem;
    while (n > 0) {
        rem = n % 16;
        hex += chars[rem];
        n = Math.floor(n / 16);
    }
    let result = '';
    for (let i = hex.length - 1; i >= 0; i--) {
        result += hex[i];
    }
    return result;
}

module.exports = {
    factorial,
    gcd,
    lcm,
    toHexadecimal
}