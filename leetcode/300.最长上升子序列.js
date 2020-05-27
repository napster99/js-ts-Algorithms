"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
说明:

可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n2) 。
进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const lodash_1 = __importDefault(require("lodash"));
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) { };
/**
 * 普通的作法
 * 动态规划
 * 存储一个数组 储存当前index 所能含有的最长上升子序列的长度
 * 之后 每新增一个数 就和之前每个位置的数值相比较 所有比之前位置大的数 说明处于那个那个位置后的升序之中
 * 然后比较每个 之前所有所得位置中的最大值 然后 +1 就是当前位置的最长升序数列
 * */
function lengthOfLIS1(nums) {
    if (nums.length <= 1)
        return nums.length;
    const result = [1];
    for (let i = 1; i < nums.length; i++) {
        result.push(1);
        for (let j = i - 1; j >= 0; j--) {
            if (nums[j] < nums[i]) {
                result[result.length - 1] = Math.max(result[j] + 1, result[result.length - 1]);
            }
        }
    }
    return Math.max(...result);
}
/**
 方法二：贪心 + 二分查找
 思路与算法

 考虑一个简单的贪心，如果我们要使上升子序列尽可能的长，则我们需要让序列上升得尽可能慢，因此我们希望每次在上升子序列最后加上的那个数尽可能的小。
 * */
function lengthOfLIS2(nums) {
    if (nums.length <= 1)
        return nums.length;
    const result = [nums[0]]; // 表示长度为 i 的最长上升子序列的末尾元素的最小值，用 len 记录目前最长上升子序列的长度
    for (let i = 0; i < nums.length; i++) {
        // 最小值 中最右 也就是最大值比较
        // 相等说明 不需要任何操作 因为和上一个值的行为一直
        if (nums[i] === lodash_1.default.last(result))
            continue;
        if (nums[i] > lodash_1.default.last(result)) {
            // 如果 大于 说明需要添加当前到最小值数组 因为他满足上升序列
            result.push(nums[i]);
        }
        else {
            // 如果小于等于说明 当前值应该 算到 缓存的数组中,位置应该是 与它的值最相近的值 如果 要替换的值是 2 , 但是缓存的数组有 1 和 3 那么应该替换 3
            // 这里用到了 2分法
            SetDataByDichotomy2(result, nums[i]);
        }
    }
    return result.length;
}
/**
 * 二分法 没有找到相等的值 优先找到最靠近较小的值
 * 注意这里用 pos 存储 所要替换数值前一个的位置
 * */
function SetDataByDichotomy1(arr, data) {
    // 直接排除比所有值都小的情况
    if (data < arr[0]) {
        arr[0] = data;
        return;
    }
    let left = 0;
    let right = arr.length - 1;
    let pos = 0; // 例如 值 arr = [2,3] data = 1; 没有能够替换的位置 替换第一个
    while (left <= right) {
        /**
         * 在排除 data 比所有值都小的情况下
         * 因为使用的是 floor 所以只要 没有完全相等
         * 一定会执行到一次 arr[mid] < data
         * */
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === data)
            return; // 如果已经有了那么就是什么都不做
        if (arr[mid] < data) {
            // 如果 mid 在 data 的左边
            // [4, 6] 5; 最终 pos 也存在 4的位置
            pos = mid;
            left = mid + 1;
        }
        else
            right = mid - 1;
    }
    arr[pos + 1] = data;
}
/**
 * 二分法 没有值相等 优先选到最靠近较大的值
 * */
function SetDataByDichotomy2(arr, data) {
    // 直接排除比所有值都小的情况
    if (data < arr[0]) {
        arr[0] = data;
        return;
    }
    let left = 0;
    let right = arr.length - 1;
    let pos = 0; // 例如 值 arr = [2,3] data = 1; 没有能够替换的位置 替换第一个
    while (left <= right) {
        const mid = left + Math.ceil((right - left) / 2);
        if (arr[mid] === data)
            return; // 如果已经有了那么就是什么都不做
        if (arr[mid] < data)
            left = mid + 1;
        else {
            pos = mid;
            right = mid - 1;
        }
    }
    arr[pos] = data;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(lengthOfLIS1([10, 9, 2, 5, 3, 7, 101, 18]), 4);
assert_1.default.strictEqual(lengthOfLIS1([10, 9, 2, 5, 3, 7, 101, 18, 105]), 5);
assert_1.default.strictEqual(lengthOfLIS1([1, 3, 6, 7, 9, 4, 10, 5, 6]), 6);
assert_1.default.strictEqual(lengthOfLIS1([]), 0);
assert_1.default.strictEqual(lengthOfLIS2([10, 9, 2, 5, 3, 7, 101, 18]), 4);
assert_1.default.strictEqual(lengthOfLIS2([10, 9, 2, 5, 3, 7, 101, 18, 105]), 5);
assert_1.default.strictEqual(lengthOfLIS2([1, 3, 6, 7, 9, 4, 10, 5, 6]), 6);
assert_1.default.strictEqual(lengthOfLIS2([4, 10, 4, 3, 8, 9]), 3);
assert_1.default.strictEqual(lengthOfLIS2([3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12]), 6);
assert_1.default.strictEqual(lengthOfLIS2([]), 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAwLuacgOmVv+S4iuWNh+WtkOW6j+WIly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzAwLuacgOmVv+S4iuWNh+WtkOW6j+WIly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztJQWlCSTtBQUNKLG9EQUF1QjtBQUN2Qjs7O0dBR0c7QUFDSCxJQUFJLFdBQVcsR0FBRyxVQUFVLElBQWMsSUFBRyxDQUFDLENBQUM7QUFFL0M7Ozs7OztLQU1LO0FBQ0wsU0FBUyxZQUFZLENBQUMsSUFBYztJQUNsQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQztRQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxNQUFNLE1BQU0sR0FBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQ2xDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ2IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQzFCLENBQUM7YUFDSDtTQUNGO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQ7Ozs7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RSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xFLGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RSxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5peg5bqP55qE5pW05pWw5pWw57uE77yM5om+5Yiw5YW25Lit5pyA6ZW/5LiK5Y2H5a2Q5bqP5YiX55qE6ZW/5bqm44CCXG5cbuekuuS+izpcblxu6L6T5YWlOiBbMTAsOSwyLDUsMyw3LDEwMSwxOF1cbui+k+WHujogNFxu6Kej6YeKOiDmnIDplb/nmoTkuIrljYflrZDluo/liJfmmK/CoFsyLDMsNywxMDFd77yM5a6D55qE6ZW/5bqm5pivIDTjgIJcbuivtOaYjjpcblxu5Y+v6IO95Lya5pyJ5aSa56eN5pyA6ZW/5LiK5Y2H5a2Q5bqP5YiX55qE57uE5ZCI77yM5L2g5Y+q6ZyA6KaB6L6T5Ye65a+55bqU55qE6ZW/5bqm5Y2z5Y+v44CCXG7kvaDnrpfms5XnmoTml7bpl7TlpI3mnYLluqblupTor6XkuLrCoE8objIpIOOAglxu6L+b6Zi2OiDkvaDog73lsIbnrpfms5XnmoTml7bpl7TlpI3mnYLluqbpmY3kvY7liLDCoE8obiBsb2cgbikg5ZCXP1xuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvbG9uZ2VzdC1pbmNyZWFzaW5nLXN1YnNlcXVlbmNlXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgbGVuZ3RoT2ZMSVMgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHt9O1xuXG4vKipcbiAqIOaZrumAmueahOS9nOazlVxuICog5Yqo5oCB6KeE5YiSXG4gKiDlrZjlgqjkuIDkuKrmlbDnu4Qg5YKo5a2Y5b2T5YmNaW5kZXgg5omA6IO95ZCr5pyJ55qE5pyA6ZW/5LiK5Y2H5a2Q5bqP5YiX55qE6ZW/5bqmXG4gKiDkuYvlkI4g5q+P5paw5aKe5LiA5Liq5pWwIOWwseWSjOS5i+WJjeavj+S4quS9jee9rueahOaVsOWAvOebuOavlOi+gyDmiYDmnInmr5TkuYvliY3kvY3nva7lpKfnmoTmlbAg6K+05piO5aSE5LqO6YKj5Liq6YKj5Liq5L2N572u5ZCO55qE5Y2H5bqP5LmL5LitXG4gKiDnhLblkI7mr5TovoPmr4/kuKog5LmL5YmN5omA5pyJ5omA5b6X5L2N572u5Lit55qE5pyA5aSn5YC8IOeEtuWQjiArMSDlsLHmmK/lvZPliY3kvY3nva7nmoTmnIDplb/ljYfluo/mlbDliJdcbiAqICovXG5mdW5jdGlvbiBsZW5ndGhPZkxJUzEobnVtczogbnVtYmVyW10pIHtcbiAgaWYgKG51bXMubGVuZ3RoIDw9IDEpIHJldHVybiBudW1zLmxlbmd0aDtcbiAgY29uc3QgcmVzdWx0OiBudW1iZXJbXSA9IFsxXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2goMSk7XG4gICAgZm9yIChsZXQgaiA9IGkgLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgaWYgKG51bXNbal0gPCBudW1zW2ldKSB7XG4gICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPSBNYXRoLm1heChcbiAgICAgICAgICByZXN1bHRbal0gKyAxLFxuICAgICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIE1hdGgubWF4KC4uLnJlc3VsdCk7XG59XG5cbi8qKlxuIOaWueazleS6jO+8mui0quW/gyArIOS6jOWIhuafpeaJvlxuIOaAnei3r+S4jueul+azlVxuXG4g6ICD6JmR5LiA5Liq566A5Y2V55qE6LSq5b+D77yM5aaC5p6c5oiR5Lus6KaB5L2/5LiK5Y2H5a2Q5bqP5YiX5bC95Y+v6IO955qE6ZW/77yM5YiZ5oiR5Lus6ZyA6KaB6K6p5bqP5YiX5LiK5Y2H5b6X5bC95Y+v6IO95oWi77yM5Zug5q2k5oiR5Lus5biM5pyb5q+P5qyh5Zyo5LiK5Y2H5a2Q5bqP5YiX5pyA5ZCO5Yqg5LiK55qE6YKj5Liq5pWw5bC95Y+v6IO955qE5bCP44CCXG4gKiAqL1xuZnVuY3Rpb24gbGVuZ3RoT2ZMSVMyKG51bXM6IG51bWJlcltdKSB7XG4gIGlmIChudW1zLmxlbmd0aCA8PSAxKSByZXR1cm4gbnVtcy5sZW5ndGg7XG4gIGNvbnN0IHJlc3VsdCA9IFtudW1zWzBdXTsgLy8g6KGo56S66ZW/5bqm5Li6IGkg55qE5pyA6ZW/5LiK5Y2H5a2Q5bqP5YiX55qE5pyr5bC+5YWD57Sg55qE5pyA5bCP5YC877yM55SoIGxlbiDorrDlvZXnm67liY3mnIDplb/kuIrljYflrZDluo/liJfnmoTplb/luqZcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8g5pyA5bCP5YC8IOS4reacgOWPsyDkuZ/lsLHmmK/mnIDlpKflgLzmr5TovoNcbiAgICAvLyDnm7jnrYnor7TmmI4g5LiN6ZyA6KaB5Lu75L2V5pON5L2cIOWboOS4uuWSjOS4iuS4gOS4quWAvOeahOihjOS4uuS4gOebtFxuICAgIGlmIChudW1zW2ldID09PSBfLmxhc3QocmVzdWx0KSEpIGNvbnRpbnVlO1xuICAgIGlmIChudW1zW2ldID4gXy5sYXN0KHJlc3VsdCkhKSB7XG4gICAgICAvLyDlpoLmnpwg5aSn5LqOIOivtOaYjumcgOimgea3u+WKoOW9k+WJjeWIsOacgOWwj+WAvOaVsOe7hCDlm6DkuLrku5bmu6HotrPkuIrljYfluo/liJdcbiAgICAgIHJlc3VsdC5wdXNoKG51bXNbaV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlpoLmnpzlsI/kuo7nrYnkuo7or7TmmI4g5b2T5YmN5YC85bqU6K+lIOeul+WIsCDnvJPlrZjnmoTmlbDnu4TkuK0s5L2N572u5bqU6K+l5pivIOS4juWug+eahOWAvOacgOebuOi/keeahOWAvCDlpoLmnpwg6KaB5pu/5o2i55qE5YC85pivIDIgLCDkvYbmmK/nvJPlrZjnmoTmlbDnu4TmnIkgMSDlkowgMyDpgqPkuYjlupTor6Xmm7/mjaIgM1xuICAgICAgLy8g6L+Z6YeM55So5Yiw5LqGIDLliIbms5VcbiAgICAgIFNldERhdGFCeURpY2hvdG9teTIocmVzdWx0LCBudW1zW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0Lmxlbmd0aDtcbn1cblxuLyoqXG4gKiDkuozliIbms5Ug5rKh5pyJ5om+5Yiw55u4562J55qE5YC8IOS8mOWFiOaJvuWIsOacgOmdoOi/kei+g+Wwj+eahOWAvFxuICog5rOo5oSP6L+Z6YeM55SoIHBvcyDlrZjlgqgg5omA6KaB5pu/5o2i5pWw5YC85YmN5LiA5Liq55qE5L2N572uXG4gKiAqL1xuZnVuY3Rpb24gU2V0RGF0YUJ5RGljaG90b215MShhcnI6IG51bWJlcltdLCBkYXRhOiBudW1iZXIpIHtcbiAgLy8g55u05o6l5o6S6Zmk5q+U5omA5pyJ5YC86YO95bCP55qE5oOF5Ya1XG4gIGlmIChkYXRhIDwgYXJyWzBdKSB7XG4gICAgYXJyWzBdID0gZGF0YTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgbGVmdCA9IDA7XG4gIGxldCByaWdodCA9IGFyci5sZW5ndGggLSAxO1xuICBsZXQgcG9zID0gMDsgLy8g5L6L5aaCIOWAvCBhcnIgPSBbMiwzXSBkYXRhID0gMTsg5rKh5pyJ6IO95aSf5pu/5o2i55qE5L2N572uIOabv+aNouesrOS4gOS4qlxuICB3aGlsZSAobGVmdCA8PSByaWdodCkge1xuICAgIC8qKlxuICAgICAqIOWcqOaOkumZpCBkYXRhIOavlOaJgOacieWAvOmDveWwj+eahOaDheWGteS4i1xuICAgICAqIOWboOS4uuS9v+eUqOeahOaYryBmbG9vciDmiYDku6Xlj6ropoEg5rKh5pyJ5a6M5YWo55u4562JXG4gICAgICog5LiA5a6a5Lya5omn6KGM5Yiw5LiA5qyhIGFyclttaWRdIDwgZGF0YVxuICAgICAqICovXG4gICAgY29uc3QgbWlkID0gbGVmdCArIE1hdGguZmxvb3IoKHJpZ2h0IC0gbGVmdCkgLyAyKTtcbiAgICBpZiAoYXJyW21pZF0gPT09IGRhdGEpIHJldHVybjsgLy8g5aaC5p6c5bey57uP5pyJ5LqG6YKj5LmI5bCx5piv5LuA5LmI6YO95LiN5YGaXG4gICAgaWYgKGFyclttaWRdIDwgZGF0YSkge1xuICAgICAgLy8g5aaC5p6cIG1pZCDlnKggZGF0YSDnmoTlt6bovrlcbiAgICAgIC8vIFs0LCA2XSA1OyDmnIDnu4ggcG9zIOS5n+WtmOWcqCA055qE5L2N572uXG4gICAgICBwb3MgPSBtaWQ7XG4gICAgICBsZWZ0ID0gbWlkICsgMTtcbiAgICB9IGVsc2UgcmlnaHQgPSBtaWQgLSAxO1xuICB9XG5cbiAgYXJyW3BvcyArIDFdID0gZGF0YTtcbn1cblxuLyoqXG4gKiDkuozliIbms5Ug5rKh5pyJ5YC855u4562JIOS8mOWFiOmAieWIsOacgOmdoOi/kei+g+Wkp+eahOWAvFxuICogKi9cbmZ1bmN0aW9uIFNldERhdGFCeURpY2hvdG9teTIoYXJyOiBudW1iZXJbXSwgZGF0YTogbnVtYmVyKSB7XG4gIC8vIOebtOaOpeaOkumZpOavlOaJgOacieWAvOmDveWwj+eahOaDheWGtVxuICBpZiAoZGF0YSA8IGFyclswXSkge1xuICAgIGFyclswXSA9IGRhdGE7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGxlZnQgPSAwO1xuICBsZXQgcmlnaHQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgbGV0IHBvcyA9IDA7IC8vIOS+i+WmgiDlgLwgYXJyID0gWzIsM10gZGF0YSA9IDE7IOayoeacieiDveWkn+abv+aNoueahOS9jee9riDmm7/mjaLnrKzkuIDkuKpcbiAgd2hpbGUgKGxlZnQgPD0gcmlnaHQpIHtcbiAgICBjb25zdCBtaWQgPSBsZWZ0ICsgTWF0aC5jZWlsKChyaWdodCAtIGxlZnQpIC8gMik7XG4gICAgaWYgKGFyclttaWRdID09PSBkYXRhKSByZXR1cm47IC8vIOWmguaenOW3sue7j+acieS6humCo+S5iOWwseaYr+S7gOS5iOmDveS4jeWBmlxuICAgIGlmIChhcnJbbWlkXSA8IGRhdGEpIGxlZnQgPSBtaWQgKyAxO1xuICAgIGVsc2Uge1xuICAgICAgcG9zID0gbWlkO1xuICAgICAgcmlnaHQgPSBtaWQgLSAxO1xuICAgIH1cbiAgfVxuXG4gIGFycltwb3NdID0gZGF0YTtcbn1cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChsZW5ndGhPZkxJUzEoWzEwLCA5LCAyLCA1LCAzLCA3LCAxMDEsIDE4XSksIDQpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGxlbmd0aE9mTElTMShbMTAsIDksIDIsIDUsIDMsIDcsIDEwMSwgMTgsIDEwNV0pLCA1KTtcbmFzc2VydC5zdHJpY3RFcXVhbChsZW5ndGhPZkxJUzEoWzEsIDMsIDYsIDcsIDksIDQsIDEwLCA1LCA2XSksIDYpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGxlbmd0aE9mTElTMShbXSksIDApO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwobGVuZ3RoT2ZMSVMyKFsxMCwgOSwgMiwgNSwgMywgNywgMTAxLCAxOF0pLCA0KTtcbmFzc2VydC5zdHJpY3RFcXVhbChsZW5ndGhPZkxJUzIoWzEwLCA5LCAyLCA1LCAzLCA3LCAxMDEsIDE4LCAxMDVdKSwgNSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwobGVuZ3RoT2ZMSVMyKFsxLCAzLCA2LCA3LCA5LCA0LCAxMCwgNSwgNl0pLCA2KTtcbmFzc2VydC5zdHJpY3RFcXVhbChsZW5ndGhPZkxJUzIoWzQsIDEwLCA0LCAzLCA4LCA5XSksIDMpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGxlbmd0aE9mTElTMihbMywgNSwgNiwgMiwgNSwgNCwgMTksIDUsIDYsIDcsIDEyXSksIDYpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGxlbmd0aE9mTElTMihbXSksIDApO1xuIl19