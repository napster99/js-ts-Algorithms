"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
请你来实现一个 atoi 函数，使其能将字符串转换成整数。

首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。

当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。

该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。

注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。

在任何情况下，若函数不能进行有效的转换时，请返回 0。

说明：

假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，qing返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。

示例 1:

输入: "42"
输出: 42
示例 2:

输入: "   -42"
输出: -42
解释: 第一个非空白字符为 '-', 它是一个负号。
     我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
示例 3:

输入: "4193 with words"
输出: 4193
解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
示例 4:

输入: "words and 987"
输出: 0
解释: 第一个非空字符是 'w', 但它不是数字或正、负号。
     因此无法执行有效的转换。
示例 5:

输入: "-91283472332"
输出: -2147483648
解释: 数字 "-91283472332" 超过 32 位有符号整数范围。
     因此返回 INT_MIN (−231) 。
* */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    // 判断是否可合法
    const RegResult = /^\s*([+-]*\d+\.?\d*)/.exec(str);
    if (!RegResult) {
        return 0;
    }
    const num = parseFloat(RegResult[1]) || 0;
    const MAX = Math.pow(2, 31) - 1;
    const MIN = -Math.pow(2, 31);
    if (num > MAX)
        return MAX;
    if (num < MIN)
        return MIN;
    return num;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(myAtoi("42"), 42);
assert_1.default.strictEqual(myAtoi("   -42"), -42);
assert_1.default.strictEqual(myAtoi("4193 with words"), 4193);
assert_1.default.strictEqual(myAtoi("words and 987"), 0);
assert_1.default.strictEqual(myAtoi("-91283472332"), -2147483648);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC7lrZfnrKbkuLLovazmjaLmlbTmlbAoYXRvaSkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzgu5a2X56ym5Liy6L2s5o2i5pW05pWwKGF0b2kpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNENJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxNQUFNLEdBQUcsVUFBVSxHQUFXO0lBQ2hDLFVBQVU7SUFDVixNQUFNLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7SUFDRCxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLElBQUksR0FBRyxHQUFHLEdBQUc7UUFBRSxPQUFPLEdBQUcsQ0FBQztJQUMxQixJQUFJLEdBQUcsR0FBRyxHQUFHO1FBQUUsT0FBTyxHQUFHLENBQUM7SUFDMUIsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3JDLGdCQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLGdCQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3BELGdCQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7or7fkvaDmnaXlrp7njrDkuIDkuKogYXRvaSDlh73mlbDvvIzkvb/lhbbog73lsIblrZfnrKbkuLLovazmjaLmiJDmlbTmlbDjgIJcblxu6aaW5YWI77yM6K+l5Ye95pWw5Lya5qC55o2u6ZyA6KaB5Lii5byD5peg55So55qE5byA5aS056m65qC85a2X56ym77yM55u05Yiw5a+75om+5Yiw56ys5LiA5Liq6Z2e56m65qC855qE5a2X56ym5Li65q2i44CCXG5cbuW9k+aIkeS7rOWvu+aJvuWIsOeahOesrOS4gOS4qumdnuepuuWtl+espuS4uuato+aIluiAhei0n+WPt+aXtu+8jOWImeWwhuivpeespuWPt+S4juS5i+WQjumdouWwveWPr+iDveWkmueahOi/nue7reaVsOWtl+e7hOWQiOi1t+adpe+8jOS9nOS4uuivpeaVtOaVsOeahOato+i0n+WPt++8m+WBh+WmguesrOS4gOS4qumdnuepuuWtl+espuaYr+aVsOWtl++8jOWImeebtOaOpeWwhuWFtuS4juS5i+WQjui/nue7reeahOaVsOWtl+Wtl+espue7hOWQiOi1t+adpe+8jOW9ouaIkOaVtOaVsOOAglxuXG7or6XlrZfnrKbkuLLpmaTkuobmnInmlYjnmoTmlbTmlbDpg6jliIbkuYvlkI7kuZ/lj6/og73kvJrlrZjlnKjlpJrkvZnnmoTlrZfnrKbvvIzov5nkupvlrZfnrKblj6/ku6Xooqvlv73nlaXvvIzlroPku6zlr7nkuo7lh73mlbDkuI3lupTor6XpgKDmiJDlvbHlk43jgIJcblxu5rOo5oSP77ya5YGH5aaC6K+l5a2X56ym5Liy5Lit55qE56ys5LiA5Liq6Z2e56m65qC85a2X56ym5LiN5piv5LiA5Liq5pyJ5pWI5pW05pWw5a2X56ym44CB5a2X56ym5Liy5Li656m65oiW5a2X56ym5Liy5LuF5YyF5ZCr56m655m95a2X56ym5pe277yM5YiZ5L2g55qE5Ye95pWw5LiN6ZyA6KaB6L+b6KGM6L2s5o2i44CCXG5cbuWcqOS7u+S9leaDheWGteS4i++8jOiLpeWHveaVsOS4jeiDvei/m+ihjOacieaViOeahOi9rOaNouaXtu+8jOivt+i/lOWbniAw44CCXG5cbuivtOaYju+8mlxuXG7lgYforr7miJHku6znmoTnjq/looPlj6rog73lrZjlgqggMzIg5L2N5aSn5bCP55qE5pyJ56ym5Y+35pW05pWw77yM6YKj5LmI5YW25pWw5YC86IyD5Zu05Li6IFviiJIyMzEsICAyMzEg4oiSIDFd44CC5aaC5p6c5pWw5YC86LaF6L+H6L+Z5Liq6IyD5Zu077yMcWluZ+i/lOWbniAgSU5UX01BWCAoMjMxIOKIkiAxKSDmiJYgSU5UX01JTiAo4oiSMjMxKSDjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogXCI0MlwiXG7ovpPlh7o6IDQyXG7npLrkvosgMjpcblxu6L6T5YWlOiBcIiAgIC00MlwiXG7ovpPlh7o6IC00Mlxu6Kej6YeKOiDnrKzkuIDkuKrpnZ7nqbrnmb3lrZfnrKbkuLogJy0nLCDlroPmmK/kuIDkuKrotJ/lj7fjgIJcbiAgICAg5oiR5Lus5bC95Y+v6IO95bCG6LSf5Y+35LiO5ZCO6Z2i5omA5pyJ6L+e57ut5Ye6546w55qE5pWw5a2X57uE5ZCI6LW35p2l77yM5pyA5ZCO5b6X5YiwIC00MiDjgIJcbuekuuS+iyAzOlxuXG7ovpPlhaU6IFwiNDE5MyB3aXRoIHdvcmRzXCJcbui+k+WHujogNDE5M1xu6Kej6YeKOiDovazmjaLmiKrmraLkuo7mlbDlrZcgJzMnIO+8jOWboOS4uuWug+eahOS4i+S4gOS4quWtl+espuS4jeS4uuaVsOWtl+OAglxu56S65L6LIDQ6XG5cbui+k+WFpTogXCJ3b3JkcyBhbmQgOTg3XCJcbui+k+WHujogMFxu6Kej6YeKOiDnrKzkuIDkuKrpnZ7nqbrlrZfnrKbmmK8gJ3cnLCDkvYblroPkuI3mmK/mlbDlrZfmiJbmraPjgIHotJ/lj7fjgIJcbiAgICAg5Zug5q2k5peg5rOV5omn6KGM5pyJ5pWI55qE6L2s5o2i44CCXG7npLrkvosgNTpcblxu6L6T5YWlOiBcIi05MTI4MzQ3MjMzMlwiXG7ovpPlh7o6IC0yMTQ3NDgzNjQ4XG7op6Pph4o6IOaVsOWtlyBcIi05MTI4MzQ3MjMzMlwiIOi2hei/hyAzMiDkvY3mnInnrKblj7fmlbTmlbDojIPlm7TjgIJcbiAgICAg5Zug5q2k6L+U5ZueIElOVF9NSU4gKOKIkjIzMSkg44CCXG4qICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIG15QXRvaSA9IGZ1bmN0aW9uIChzdHI6IHN0cmluZykge1xuICAvLyDliKTmlq3mmK/lkKblj6/lkIjms5VcbiAgY29uc3QgUmVnUmVzdWx0ID0gL15cXHMqKFsrLV0qXFxkK1xcLj9cXGQqKS8uZXhlYyhzdHIpO1xuICBpZiAoIVJlZ1Jlc3VsdCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoUmVnUmVzdWx0WzFdKSB8fCAwO1xuXG4gIGNvbnN0IE1BWCA9IE1hdGgucG93KDIsIDMxKSAtIDE7XG4gIGNvbnN0IE1JTiA9IC1NYXRoLnBvdygyLCAzMSk7XG4gIGlmIChudW0gPiBNQVgpIHJldHVybiBNQVg7XG4gIGlmIChudW0gPCBNSU4pIHJldHVybiBNSU47XG4gIHJldHVybiBudW07XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKG15QXRvaShcIjQyXCIpLCA0Mik7XG5hc3NlcnQuc3RyaWN0RXF1YWwobXlBdG9pKFwiICAgLTQyXCIpLCAtNDIpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKG15QXRvaShcIjQxOTMgd2l0aCB3b3Jkc1wiKSwgNDE5Myk7XG5hc3NlcnQuc3RyaWN0RXF1YWwobXlBdG9pKFwid29yZHMgYW5kIDk4N1wiKSwgMCk7XG5hc3NlcnQuc3RyaWN0RXF1YWwobXlBdG9pKFwiLTkxMjgzNDcyMzMyXCIpLCAtMjE0NzQ4MzY0OCk7XG4iXX0=