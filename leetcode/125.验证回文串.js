"use strict";
/*
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false
* */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const after_filter = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
    return after_filter === after_filter.split("").reverse().join("");
};
/**
 * 不需要完全 判断翻转后的字符串完全 等于 原来的
 * 只需要 在字符串上判断 相对于中间 相等就行了 省去了 split reverse join的时间
 * */
var isPalindrome1 = function (s) {
    const after_filter = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
    let i = 0;
    const len = after_filter.length;
    while (i < ~~(len / 2)) {
        if (after_filter[i] !== after_filter[len - 1 - i])
            return false;
        i++;
    }
    return true;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI1LumqjOivgeWbnuaWh+S4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTI1LumqjOivgeWbnuaWh+S4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7SUFhSTs7QUFFSjs7O0dBR0c7QUFDSCxJQUFJLFlBQVksR0FBRyxVQUFVLENBQVM7SUFDcEMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEUsT0FBTyxZQUFZLEtBQUssWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDcEUsQ0FBQyxDQUFDO0FBRUY7OztLQUdLO0FBQ0wsSUFBSSxhQUFhLEdBQUcsVUFBVSxDQUFTO0lBQ3JDLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLE1BQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3RCLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2hFLENBQUMsRUFBRSxDQUFDO0tBQ0w7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrlrZfnrKbkuLLvvIzpqozor4HlroPmmK/lkKbmmK/lm57mlofkuLLvvIzlj6rogIPomZHlrZfmr43lkozmlbDlrZflrZfnrKbvvIzlj6/ku6Xlv73nlaXlrZfmr43nmoTlpKflsI/lhpnjgIJcblxu6K+05piO77ya5pys6aKY5Lit77yM5oiR5Lus5bCG56m65a2X56ym5Liy5a6a5LmJ5Li65pyJ5pWI55qE5Zue5paH5Liy44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IFwiQSBtYW4sIGEgcGxhbiwgYSBjYW5hbDogUGFuYW1hXCJcbui+k+WHujogdHJ1ZVxu56S65L6LIDI6XG5cbui+k+WFpTogXCJyYWNlIGEgY2FyXCJcbui+k+WHujogZmFsc2VcbiogKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xudmFyIGlzUGFsaW5kcm9tZSA9IGZ1bmN0aW9uIChzOiBzdHJpbmcpIHtcbiAgY29uc3QgYWZ0ZXJfZmlsdGVyID0gcy5yZXBsYWNlKC9bXjAtOWEtekEtWl0vZywgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIGFmdGVyX2ZpbHRlciA9PT0gYWZ0ZXJfZmlsdGVyLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpO1xufTtcblxuLyoqXG4gKiDkuI3pnIDopoHlrozlhagg5Yik5pat57+76L2s5ZCO55qE5a2X56ym5Liy5a6M5YWoIOetieS6jiDljp/mnaXnmoRcbiAqIOWPqumcgOimgSDlnKjlrZfnrKbkuLLkuIrliKTmlq0g55u45a+55LqO5Lit6Ze0IOebuOetieWwseihjOS6hiDnnIHljrvkuoYgc3BsaXQgcmV2ZXJzZSBqb2lu55qE5pe26Ze0XG4gKiAqL1xudmFyIGlzUGFsaW5kcm9tZTEgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XG4gIGNvbnN0IGFmdGVyX2ZpbHRlciA9IHMucmVwbGFjZSgvW14wLTlhLXpBLVpdL2csIFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gIGxldCBpID0gMDtcbiAgY29uc3QgbGVuID0gYWZ0ZXJfZmlsdGVyLmxlbmd0aDtcbiAgd2hpbGUgKGkgPCB+fihsZW4gLyAyKSkge1xuICAgIGlmIChhZnRlcl9maWx0ZXJbaV0gIT09IGFmdGVyX2ZpbHRlcltsZW4gLSAxIC0gaV0pIHJldHVybiBmYWxzZTtcbiAgICBpKys7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCB7fTtcbiJdfQ==