"use strict";
/*
给定两个字符串 s 和 t，判断它们是否是同构的。

如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。

所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。

示例 1:

输入: s = "egg", t = "add"
输出: true
示例 2:

输入: s = "foo", t = "bar"
输出: false
示例 3:

输入: s = "paper", t = "title"
输出: true
说明:
你可以假设 s 和 t 具有相同的长度。
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const map = {}; // 存放 s 映射 t 的值
    const t_set = new Set(); // 存放 已经映射了的 t字符
    const s_arr = Array.from(s);
    for (let i = 0; i < s_arr.length; i++) {
        const s_value = s_arr[i];
        const t_value = t[i];
        if (!map[s_value]) {
            // 有两个不同的 s 字符 映射 相同的 t字符
            if (t_set.has(t_value))
                return false;
            map[s_value] = t_value;
            t_set.add(t_value);
            continue;
        }
        // 同位置的 s,t字符 映射 不同
        if (map[s_value] !== t_value)
            return false;
    }
    return true;
};
const assert = require("assert");
assert.strictEqual(isIsomorphic("egg", "add"), true);
assert.strictEqual(isIsomorphic("ab", "aa"), false);
assert.strictEqual(isIsomorphic("qwertyuiop[]asdfghjkl;'\\zxcvbnm,./", "',.pyfgcrl/=aoeuidhtns-\\;qjkxbmwvz"), true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA1LuWQjOaehOWtl+espuS4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjA1LuWQjOaehOWtl+espuS4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFCRTtBQUVGOzs7O0dBSUc7QUFDSCxJQUFJLFlBQVksR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBSS9DLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQyxDQUFDLGVBQWU7SUFDcEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLGdCQUFnQjtJQUN6QyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3JDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQix5QkFBeUI7WUFDekIsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztnQkFBRSxPQUFPLEtBQUssQ0FBQztZQUNyQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkIsU0FBUztTQUNWO1FBRUQsbUJBQW1CO1FBQ25CLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLE9BQU87WUFBRSxPQUFPLEtBQUssQ0FBQztLQUM1QztJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyRCxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEQsTUFBTSxDQUFDLFdBQVcsQ0FDaEIsWUFBWSxDQUNWLHFDQUFxQyxFQUNyQyxxQ0FBcUMsQ0FDdEMsRUFDRCxJQUFJLENBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuKTkuKrlrZfnrKbkuLIgcyDlkowgdO+8jOWIpOaWreWug+S7rOaYr+WQpuaYr+WQjOaehOeahOOAglxuXG7lpoLmnpwgcyDkuK3nmoTlrZfnrKblj6/ku6Xooqvmm7/mjaLlvpfliLAgdCDvvIzpgqPkuYjov5nkuKTkuKrlrZfnrKbkuLLmmK/lkIzmnoTnmoTjgIJcblxu5omA5pyJ5Ye6546w55qE5a2X56ym6YO95b+F6aG755So5Y+m5LiA5Liq5a2X56ym5pu/5o2i77yM5ZCM5pe25L+d55WZ5a2X56ym55qE6aG65bqP44CC5Lik5Liq5a2X56ym5LiN6IO95pig5bCE5Yiw5ZCM5LiA5Liq5a2X56ym5LiK77yM5L2G5a2X56ym5Y+v5Lul5pig5bCE6Ieq5bex5pys6Lqr44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IHMgPSBcImVnZ1wiLCB0ID0gXCJhZGRcIlxu6L6T5Ye6OiB0cnVlXG7npLrkvosgMjpcblxu6L6T5YWlOiBzID0gXCJmb29cIiwgdCA9IFwiYmFyXCJcbui+k+WHujogZmFsc2VcbuekuuS+iyAzOlxuXG7ovpPlhaU6IHMgPSBcInBhcGVyXCIsIHQgPSBcInRpdGxlXCJcbui+k+WHujogdHJ1ZVxu6K+05piOOlxu5L2g5Y+v5Lul5YGH6K6+IHMg5ZKMIHQg5YW35pyJ55u45ZCM55qE6ZW/5bqm44CCXG4qL1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gKiBAcGFyYW0ge3N0cmluZ30gdFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xudmFyIGlzSXNvbW9ycGhpYyA9IGZ1bmN0aW9uIChzOiBzdHJpbmcsIHQ6IHN0cmluZykge1xuICB0eXBlIG1hcCA9IHtcbiAgICBbbGFiZWw6IHN0cmluZ106IHN0cmluZztcbiAgfTtcbiAgY29uc3QgbWFwOiBtYXAgPSB7fTsgLy8g5a2Y5pS+IHMg5pig5bCEIHQg55qE5YC8XG4gIGNvbnN0IHRfc2V0ID0gbmV3IFNldCgpOyAvLyDlrZjmlL4g5bey57uP5pig5bCE5LqG55qEIHTlrZfnrKZcbiAgY29uc3Qgc19hcnIgPSBBcnJheS5mcm9tKHMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNfYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc192YWx1ZSA9IHNfYXJyW2ldO1xuICAgIGNvbnN0IHRfdmFsdWUgPSB0W2ldO1xuICAgIGlmICghbWFwW3NfdmFsdWVdKSB7XG4gICAgICAvLyDmnInkuKTkuKrkuI3lkIznmoQgcyDlrZfnrKYg5pig5bCEIOebuOWQjOeahCB05a2X56ymXG4gICAgICBpZiAodF9zZXQuaGFzKHRfdmFsdWUpKSByZXR1cm4gZmFsc2U7XG4gICAgICBtYXBbc192YWx1ZV0gPSB0X3ZhbHVlO1xuICAgICAgdF9zZXQuYWRkKHRfdmFsdWUpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8g5ZCM5L2N572u55qEIHMsdOWtl+espiDmmKDlsIQg5LiN5ZCMXG4gICAgaWYgKG1hcFtzX3ZhbHVlXSAhPT0gdF92YWx1ZSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG5hc3NlcnQuc3RyaWN0RXF1YWwoaXNJc29tb3JwaGljKFwiZWdnXCIsIFwiYWRkXCIpLCB0cnVlKTtcbmFzc2VydC5zdHJpY3RFcXVhbChpc0lzb21vcnBoaWMoXCJhYlwiLCBcImFhXCIpLCBmYWxzZSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIGlzSXNvbW9ycGhpYyhcbiAgICBcInF3ZXJ0eXVpb3BbXWFzZGZnaGprbDsnXFxcXHp4Y3Zibm0sLi9cIixcbiAgICBcIicsLnB5ZmdjcmwvPWFvZXVpZGh0bnMtXFxcXDtxamt4Ym13dnpcIlxuICApLFxuICB0cnVlXG4pO1xuIl19