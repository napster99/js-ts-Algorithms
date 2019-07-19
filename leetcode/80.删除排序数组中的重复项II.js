"use strict";
/*
给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 1:

给定 nums = [1,1,1,2,2,3],

函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。

你不需要考虑数组中超出新长度后面的元素。
示例 2:

给定 nums = [0,0,1,1,1,1,2,3,3],

函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。

你不需要考虑数组中超出新长度后面的元素。
说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 1)
        return nums.length;
    let index = 1;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        const current = nums[i];
        const last = nums[i - 1];
        if (current === last) {
            count++;
            if (count <= 2) {
                nums[index++] = current;
            }
        }
        else {
            count = 1;
            nums[index++] = current;
        }
    }
    return index;
};
const assert_1 = __importDefault(require("assert"));
{
    const sample = [1, 1, 1, 2, 2, 3];
    sample.length = removeDuplicates(sample);
    assert_1.default.deepStrictEqual(sample, [1, 1, 2, 2, 3]);
}
{
    const sample = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    sample.length = removeDuplicates(sample);
    assert_1.default.deepStrictEqual(sample, [0, 0, 1, 1, 2, 3, 3]);
}
{
    const sample = [];
    sample.length = removeDuplicates(sample);
    assert_1.default.deepStrictEqual(sample, []);
}
{
    const sample = [1];
    sample.length = removeDuplicates(sample);
    assert_1.default.deepStrictEqual(sample, [1]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODAu5Yig6Zmk5o6S5bqP5pWw57uE5Lit55qE6YeN5aSN6aG5SUkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzgwLuWIoOmZpOaOkuW6j+aVsOe7hOS4reeahOmHjeWkjemhuUlJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUNJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBVSxJQUFjO0lBQzNDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3pDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNsQixLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDWixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDM0I7U0FDSjthQUFNO1lBQ0gsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNWLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztTQUMzQjtLQUNKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBRTVCO0lBQ0ksTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLE1BQU0sRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDbEIsQ0FBQztDQUNMO0FBRUQ7SUFDSSxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsTUFBTSxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3hCLENBQUM7Q0FDTDtBQUVEO0lBQ0ksTUFBTSxNQUFNLEdBQVksRUFBRSxDQUFDO0lBQzNCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLE1BQU0sRUFDTixFQUFFLENBQ0wsQ0FBQztDQUNMO0FBRUQ7SUFDSSxNQUFNLE1BQU0sR0FBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLE1BQU0sRUFDTixDQUFDLENBQUMsQ0FBQyxDQUNOLENBQUM7Q0FDTCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrmjpLluo/mlbDnu4TvvIzkvaDpnIDopoHlnKjljp/lnLDliKDpmaTph43lpI3lh7rnjrDnmoTlhYPntKDvvIzkvb/lvpfmr4/kuKrlhYPntKDmnIDlpJrlh7rnjrDkuKTmrKHvvIzov5Tlm57np7vpmaTlkI7mlbDnu4TnmoTmlrDplb/luqbjgIJcblxu5LiN6KaB5L2/55So6aKd5aSW55qE5pWw57uE56m66Ze077yM5L2g5b+F6aG75Zyo5Y6f5Zyw5L+u5pS56L6T5YWl5pWw57uE5bm25Zyo5L2/55SoIE8oMSkg6aKd5aSW56m66Ze055qE5p2h5Lu25LiL5a6M5oiQ44CCXG5cbuekuuS+i8KgMTpcblxu57uZ5a6aIG51bXMgPSBbMSwxLDEsMiwyLDNdLFxuXG7lh73mlbDlupTov5Tlm57mlrDplb/luqYgbGVuZ3RoID0gNSwg5bm25LiU5Y6f5pWw57uE55qE5YmN5LqU5Liq5YWD57Sg6KKr5L+u5pS55Li6IDEsIDEsIDIsIDIsIDMg44CCXG5cbuS9oOS4jemcgOimgeiAg+iZkeaVsOe7hOS4rei2heWHuuaWsOmVv+W6puWQjumdoueahOWFg+e0oOOAglxu56S65L6LwqAyOlxuXG7nu5nlrpogbnVtcyA9IFswLDAsMSwxLDEsMSwyLDMsM10sXG5cbuWHveaVsOW6lOi/lOWbnuaWsOmVv+W6piBsZW5ndGggPSA3LCDlubbkuJTljp/mlbDnu4TnmoTliY3kupTkuKrlhYPntKDooqvkv67mlLnkuLrCoDAsIDAsIDEsIDEsIDIsIDMsIDMg44CCXG5cbuS9oOS4jemcgOimgeiAg+iZkeaVsOe7hOS4rei2heWHuuaWsOmVv+W6puWQjumdoueahOWFg+e0oOOAglxu6K+05piOOlxuXG7kuLrku4DkuYjov5Tlm57mlbDlgLzmmK/mlbTmlbDvvIzkvYbovpPlh7rnmoTnrZTmoYjmmK/mlbDnu4TlkaI/XG5cbuivt+azqOaEj++8jOi+k+WFpeaVsOe7hOaYr+S7peKAnOW8leeUqOKAneaWueW8j+S8oOmAkueahO+8jOi/meaEj+WRs+edgOWcqOWHveaVsOmHjOS/ruaUuei+k+WFpeaVsOe7hOWvueS6juiwg+eUqOiAheaYr+WPr+ingeeahOOAglxuXG7kvaDlj6/ku6Xmg7PosaHlhoXpg6jmk43kvZzlpoLkuIs6XG5cbi8vIG51bXMg5piv5Lul4oCc5byV55So4oCd5pa55byP5Lyg6YCS55qE44CC5Lmf5bCx5piv6K+077yM5LiN5a+55a6e5Y+C5YGa5Lu75L2V5ou36LSdXG5pbnQgbGVuID0gcmVtb3ZlRHVwbGljYXRlcyhudW1zKTtcblxuLy8g5Zyo5Ye95pWw6YeM5L+u5pS56L6T5YWl5pWw57uE5a+55LqO6LCD55So6ICF5piv5Y+v6KeB55qE44CCXG4vLyDmoLnmja7kvaDnmoTlh73mlbDov5Tlm57nmoTplb/luqYsIOWug+S8muaJk+WNsOWHuuaVsOe7hOS4reivpemVv+W6puiMg+WbtOWGheeahOaJgOacieWFg+e0oOOAglxuZm9yIChpbnQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuwqAgwqAgcHJpbnQobnVtc1tpXSk7XG59XG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9yZW1vdmUtZHVwbGljYXRlcy1mcm9tLXNvcnRlZC1hcnJheS1paVxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgcmVtb3ZlRHVwbGljYXRlcyA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xuICAgIGlmIChudW1zLmxlbmd0aCA8PSAxKSByZXR1cm4gbnVtcy5sZW5ndGg7XG4gICAgbGV0IGluZGV4ID0gMTtcbiAgICBsZXQgY291bnQgPSAxO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gbnVtc1tpXTtcbiAgICAgICAgY29uc3QgbGFzdCA9IG51bXNbaSAtIDFdO1xuICAgICAgICBpZiAoY3VycmVudCA9PT0gbGFzdCkge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIGlmIChjb3VudCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgbnVtc1tpbmRleCsrXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb3VudCA9IDE7XG4gICAgICAgICAgICBudW1zW2luZGV4KytdID0gY3VycmVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG59O1xuXG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG57XG4gICAgY29uc3Qgc2FtcGxlID0gWzEsIDEsIDEsIDIsIDIsIDNdO1xuICAgIHNhbXBsZS5sZW5ndGggPSByZW1vdmVEdXBsaWNhdGVzKHNhbXBsZSk7XG4gICAgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICAgICAgc2FtcGxlLFxuICAgICAgICBbMSwgMSwgMiwgMiwgM10sXG4gICAgKTtcbn1cblxue1xuICAgIGNvbnN0IHNhbXBsZSA9IFswLCAwLCAxLCAxLCAxLCAxLCAyLCAzLCAzXTtcbiAgICBzYW1wbGUubGVuZ3RoID0gcmVtb3ZlRHVwbGljYXRlcyhzYW1wbGUpO1xuICAgIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgICAgIHNhbXBsZSxcbiAgICAgICAgWzAsIDAsIDEsIDEsIDIsIDMsIDNdLFxuICAgICk7XG59XG5cbntcbiAgICBjb25zdCBzYW1wbGU6bnVtYmVyW10gPSBbXTtcbiAgICBzYW1wbGUubGVuZ3RoID0gcmVtb3ZlRHVwbGljYXRlcyhzYW1wbGUpO1xuICAgIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgICAgIHNhbXBsZSxcbiAgICAgICAgW10sXG4gICAgKTtcbn1cblxue1xuICAgIGNvbnN0IHNhbXBsZTpudW1iZXJbXSA9IFsxXTtcbiAgICBzYW1wbGUubGVuZ3RoID0gcmVtb3ZlRHVwbGljYXRlcyhzYW1wbGUpO1xuICAgIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgICAgIHNhbXBsZSxcbiAgICAgICAgWzFdLFxuICAgICk7XG59XG5cbiJdfQ==