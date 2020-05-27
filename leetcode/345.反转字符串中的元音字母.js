"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例 1:

输入: "hello"
输出: "holle"
示例 2:

输入: "leetcode"
输出: "leotcede"
说明:
元音字母不包含字母"y"。
* */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    // 首尾指针
    const string_arr = s.split("");
    let left = 0;
    let right = string_arr.length - 1;
    const dictionary = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    while (left < right) {
        if (!dictionary.includes(string_arr[left])) {
            left++;
            continue;
        }
        if (!dictionary.includes(string_arr[right])) {
            right--;
            continue;
        }
        [string_arr[right], string_arr[left]] = [
            string_arr[left],
            string_arr[right],
        ];
        left++;
        right--;
    }
    return string_arr.join("");
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(reverseVowels("hello"), "holle");
assert_1.default.strictEqual(reverseVowels("leetcode"), "leotcede");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQ1LuWPjei9rOWtl+espuS4suS4reeahOWFg+mfs+Wtl+avjS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzQ1LuWPjei9rOWtl+espuS4suS4reeahOWFg+mfs+Wtl+avjS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQVM7SUFDckMsT0FBTztJQUNQLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0RSxPQUFPLElBQUksR0FBRyxLQUFLLEVBQUU7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxFQUFFLENBQUM7WUFDUCxTQUFTO1NBQ1Y7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMzQyxLQUFLLEVBQUUsQ0FBQztZQUNSLFNBQVM7U0FDVjtRQUNELENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ3RDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDaEIsVUFBVSxDQUFDLEtBQUssQ0FBQztTQUNsQixDQUFDO1FBQ0YsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsQ0FBQztLQUNUO0lBRUQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDcEQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57yW5YaZ5LiA5Liq5Ye95pWw77yM5Lul5a2X56ym5Liy5L2c5Li66L6T5YWl77yM5Y+N6L2s6K+l5a2X56ym5Liy5Lit55qE5YWD6Z+z5a2X5q+N44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogXCJoZWxsb1wiXHJcbui+k+WHujogXCJob2xsZVwiXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiBcImxlZXRjb2RlXCJcclxu6L6T5Ye6OiBcImxlb3RjZWRlXCJcclxu6K+05piOOlxyXG7lhYPpn7PlrZfmr43kuI3ljIXlkKvlrZfmr41cInlcIuOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG52YXIgcmV2ZXJzZVZvd2VscyA9IGZ1bmN0aW9uIChzOiBzdHJpbmcpIHtcclxuICAvLyDpppblsL7mjIfpkohcclxuICBjb25zdCBzdHJpbmdfYXJyID0gcy5zcGxpdChcIlwiKTtcclxuICBsZXQgbGVmdCA9IDA7XHJcbiAgbGV0IHJpZ2h0ID0gc3RyaW5nX2Fyci5sZW5ndGggLSAxO1xyXG4gIGNvbnN0IGRpY3Rpb25hcnkgPSBbXCJhXCIsIFwiQVwiLCBcImVcIiwgXCJFXCIsIFwiaVwiLCBcIklcIiwgXCJvXCIsIFwiT1wiLCBcInVcIiwgXCJVXCJdO1xyXG4gIHdoaWxlIChsZWZ0IDwgcmlnaHQpIHtcclxuICAgIGlmICghZGljdGlvbmFyeS5pbmNsdWRlcyhzdHJpbmdfYXJyW2xlZnRdKSkge1xyXG4gICAgICBsZWZ0Kys7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFkaWN0aW9uYXJ5LmluY2x1ZGVzKHN0cmluZ19hcnJbcmlnaHRdKSkge1xyXG4gICAgICByaWdodC0tO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuICAgIFtzdHJpbmdfYXJyW3JpZ2h0XSwgc3RyaW5nX2FycltsZWZ0XV0gPSBbXHJcbiAgICAgIHN0cmluZ19hcnJbbGVmdF0sXHJcbiAgICAgIHN0cmluZ19hcnJbcmlnaHRdLFxyXG4gICAgXTtcclxuICAgIGxlZnQrKztcclxuICAgIHJpZ2h0LS07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RyaW5nX2Fyci5qb2luKFwiXCIpO1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwocmV2ZXJzZVZvd2VscyhcImhlbGxvXCIpLCBcImhvbGxlXCIpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwocmV2ZXJzZVZvd2VscyhcImxlZXRjb2RlXCIpLCBcImxlb3RjZWRlXCIpO1xyXG4iXX0=