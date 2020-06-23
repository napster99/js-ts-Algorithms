/**
 * 求最小公约数
 * 辗转相除法
 * @link http://blog.jobbole.com/106315/
 * */
function gcd(a, b) {
  if (a === b) {
    return a;
  }
  if (a < b) {
    return gcd(b, a);
  } else {
    // &1 最快判断是否是偶数
    // 如果两个都是偶数 则公约数一定是偶数
    if (!(a & 1) && !(b & 1)) {
      return gcd(a >> 1, b >> 1) << 1;
    } else if (!(a & 1) && b & 1) {
      return gcd(a >> 1, b);
    } else if (a & 1 && !(b & 1)) {
      return gcd(a, b >> 1);
    } else {
      return gcd(b, a - b);
    }
  }
}

const assert = require("assert");
assert.strictEqual(gcd(18, 24), 6);
assert.strictEqual(gcd(20, 2100), 20);
