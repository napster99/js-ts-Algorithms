"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
说明：

输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
我们可以不考虑输出结果的顺序。
进阶:

如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小很多，哪种方法更优？
如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
* */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }
    const short = nums1, long = nums2;
    // 处理较短的数组 成为
    // [字符] : 出现几次
    const map = {};
    for (const char of short) {
        map[char] = map[char] ? map[char] + 1 : 1;
    }
    const result = [];
    for (const char of long) {
        if (map[char]) {
            result.push(char);
            map[char]--;
        }
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(intersect([1, 2, 3, 4], [2, 3]), [2, 3]);
assert_1.default.deepStrictEqual(intersect([1, 2, 3, 4, 2], [2, 3, 2]), [2, 3, 2]);
assert_1.default.deepStrictEqual(intersect([1, 2, 2, 1], [2, 2]), [2, 2]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUwLuS4pOS4quaVsOe7hOeahOS6pOmbhklJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zNTAu5Lik5Liq5pWw57uE55qE5Lqk6ZuGSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQkk7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFBVSxLQUFlLEVBQUUsS0FBZTtJQUN4RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUMvQixPQUFPLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDaEM7SUFFRCxNQUFNLEtBQUssR0FBRyxLQUFLLEVBQ2pCLElBQUksR0FBRyxLQUFLLENBQUM7SUFDZixhQUFhO0lBQ2IsY0FBYztJQUNkLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFDMUMsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7UUFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzNDO0lBRUQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ3ZCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNiO0tBQ0Y7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLGdCQUFNLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RSxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5Lik5Liq5pWw57uE77yM57yW5YaZ5LiA5Liq5Ye95pWw5p2l6K6h566X5a6D5Lus55qE5Lqk6ZuG44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IG51bXMxID0gWzEsMiwyLDFdLCBudW1zMiA9IFsyLDJdXG7ovpPlh7o6IFsyLDJdXG7npLrkvosgMjpcblxu6L6T5YWlOiBudW1zMSA9IFs0LDksNV0sIG51bXMyID0gWzksNCw5LDgsNF1cbui+k+WHujogWzQsOV1cbuivtOaYju+8mlxuXG7ovpPlh7rnu5PmnpzkuK3mr4/kuKrlhYPntKDlh7rnjrDnmoTmrKHmlbDvvIzlupTkuI7lhYPntKDlnKjkuKTkuKrmlbDnu4TkuK3lh7rnjrDnmoTmrKHmlbDkuIDoh7TjgIJcbuaIkeS7rOWPr+S7peS4jeiAg+iZkei+k+WHuue7k+aenOeahOmhuuW6j+OAglxu6L+b6Zi2OlxuXG7lpoLmnpznu5nlrprnmoTmlbDnu4Tlt7Lnu4/mjpLlpb3luo/lkaLvvJ/kvaDlsIblpoLkvZXkvJjljJbkvaDnmoTnrpfms5XvvJ9cbuWmguaenCBudW1zMSDnmoTlpKflsI/mr5QgbnVtczIg5bCP5b6I5aSa77yM5ZOq56eN5pa55rOV5pu05LyY77yfXG7lpoLmnpwgbnVtczIg55qE5YWD57Sg5a2Y5YKo5Zyo56OB55uY5LiK77yM56OB55uY5YaF5a2Y5piv5pyJ6ZmQ55qE77yM5bm25LiU5L2g5LiN6IO95LiA5qyh5Yqg6L295omA5pyJ55qE5YWD57Sg5Yiw5YaF5a2Y5Lit77yM5L2g6K+l5oCO5LmI5Yqe77yfXG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXMxXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zMlxuICogQHJldHVybiB7bnVtYmVyW119XG4gKi9cbnZhciBpbnRlcnNlY3QgPSBmdW5jdGlvbiAobnVtczE6IG51bWJlcltdLCBudW1zMjogbnVtYmVyW10pOiBudW1iZXJbXSB7XG4gIGlmIChudW1zMS5sZW5ndGggPiBudW1zMi5sZW5ndGgpIHtcbiAgICByZXR1cm4gaW50ZXJzZWN0KG51bXMyLCBudW1zMSk7XG4gIH1cblxuICBjb25zdCBzaG9ydCA9IG51bXMxLFxuICAgIGxvbmcgPSBudW1zMjtcbiAgLy8g5aSE55CG6L6D55+t55qE5pWw57uEIOaIkOS4ulxuICAvLyBb5a2X56ymXSA6IOWHuueOsOWHoOasoVxuICBjb25zdCBtYXA6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0gPSB7fTtcbiAgZm9yIChjb25zdCBjaGFyIG9mIHNob3J0KSB7XG4gICAgbWFwW2NoYXJdID0gbWFwW2NoYXJdID8gbWFwW2NoYXJdICsgMSA6IDE7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgZm9yIChjb25zdCBjaGFyIG9mIGxvbmcpIHtcbiAgICBpZiAobWFwW2NoYXJdKSB7XG4gICAgICByZXN1bHQucHVzaChjaGFyKTtcbiAgICAgIG1hcFtjaGFyXS0tO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChpbnRlcnNlY3QoWzEsIDIsIDMsIDRdLCBbMiwgM10pLCBbMiwgM10pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChpbnRlcnNlY3QoWzEsIDIsIDMsIDQsIDJdLCBbMiwgMywgMl0pLCBbMiwgMywgMl0pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChpbnRlcnNlY3QoWzEsIDIsIDIsIDFdLCBbMiwgMl0pLCBbMiwgMl0pO1xuIl19