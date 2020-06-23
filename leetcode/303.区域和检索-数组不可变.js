"use strict";
/*
给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。

示例：

给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

说明:
    1. 你可以假设数组不可变。
    2. 会多次调用 sumRange 方法。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 根据题意
 * 2. 会多次调用 sumRange 方法。 不能每次都做运算要有 正确的缓存机制
 * 又根据 1. 你可以假设数组不可变。 不用担心原始数据会 变化
 * */
class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.sum_cache = [];
        this.originData = nums;
    }
    /**
     * @param {number} i
     * @param {number} j
     * @return {number}
     */
    sumRange(i, j) {
        // 判断缓存j 位置的值 如果有直接用缓存计算
        if (this.sum_cache[j]) {
            if (i === 0)
                return this.sum_cache[j];
            return this.sum_cache[j] - this.sum_cache[i - 1];
        }
        // 计算缓存
        while (this.sum_cache.length - 1 !== j) {
            if (this.sum_cache.length === 0) {
                this.sum_cache.push(this.originData[0]);
            }
            else {
                const sum_cache_len = this.sum_cache.length;
                this.sum_cache.push(this.sum_cache[sum_cache_len - 1] + this.originData[sum_cache_len]);
            }
        }
        return this.sumRange(i, j);
    }
}
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
const assert_1 = __importDefault(require("assert"));
const instance = new NumArray([-2, 0, 3, -5, 2, -1]);
assert_1.default.strictEqual(instance.sumRange(0, 2), 1);
assert_1.default.strictEqual(instance.sumRange(2, 5), -1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAzLuWMuuWfn+WSjOajgOe0oi3mlbDnu4TkuI3lj6/lj5guanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzMwMy7ljLrln5/lkozmo4DntKIt5pWw57uE5LiN5Y+v5Y+YLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjSTs7Ozs7QUFFSjs7OztLQUlLO0FBRUwsTUFBTSxRQUFRO0lBSVo7O09BRUc7SUFDSCxZQUFZLElBQWM7UUFOMUIsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQU92QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFFBQVEsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUMzQix3QkFBd0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsRDtRQUVELE9BQU87UUFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6QztpQkFBTTtnQkFDTCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQ25FLENBQUM7YUFDSDtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUFFRDs7OztHQUlHO0FBRUgsb0RBQTRCO0FBRTVCLE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JELGdCQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9DLGdCQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5pW05pWw5pWw57uEICBudW1z77yM5rGC5Ye65pWw57uE5LuO57Si5byVIGkg5YiwIGogIChpIOKJpCBqKSDojIPlm7TlhoXlhYPntKDnmoTmgLvlkozvvIzljIXlkKsgaSwgIGog5Lik54K544CCXG5cbuekuuS+i++8mlxuXG7nu5nlrpogbnVtcyA9IFstMiwgMCwgMywgLTUsIDIsIC0xXe+8jOaxguWSjOWHveaVsOS4uiBzdW1SYW5nZSgpXG5cbnN1bVJhbmdlKDAsIDIpIC0+IDFcbnN1bVJhbmdlKDIsIDUpIC0+IC0xXG5zdW1SYW5nZSgwLCA1KSAtPiAtM1xuXG7or7TmmI46XG4gICAgMS4g5L2g5Y+v5Lul5YGH6K6+5pWw57uE5LiN5Y+v5Y+Y44CCXG4gICAgMi4g5Lya5aSa5qyh6LCD55SoIHN1bVJhbmdlIOaWueazleOAglxuKiAqL1xuXG4vKipcbiAqIOagueaNrumimOaEj1xuICogMi4g5Lya5aSa5qyh6LCD55SoIHN1bVJhbmdlIOaWueazleOAgiDkuI3og73mr4/mrKHpg73lgZrov5DnrpfopoHmnIkg5q2j56Gu55qE57yT5a2Y5py65Yi2XG4gKiDlj4jmoLnmja4gMS4g5L2g5Y+v5Lul5YGH6K6+5pWw57uE5LiN5Y+v5Y+Y44CCIOS4jeeUqOaLheW/g+WOn+Wni+aVsOaNruS8miDlj5jljJZcbiAqICovXG5cbmNsYXNzIE51bUFycmF5IHtcbiAgc3VtX2NhY2hlOiBudW1iZXJbXSA9IFtdO1xuICBvcmlnaW5EYXRhOiBudW1iZXJbXTtcblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xuICAgKi9cbiAgY29uc3RydWN0b3IobnVtczogbnVtYmVyW10pIHtcbiAgICB0aGlzLm9yaWdpbkRhdGEgPSBudW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBqXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHN1bVJhbmdlKGk6IG51bWJlciwgajogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAvLyDliKTmlq3nvJPlrZhqIOS9jee9rueahOWAvCDlpoLmnpzmnInnm7TmjqXnlKjnvJPlrZjorqHnrpdcbiAgICBpZiAodGhpcy5zdW1fY2FjaGVbal0pIHtcbiAgICAgIGlmIChpID09PSAwKSByZXR1cm4gdGhpcy5zdW1fY2FjaGVbal07XG4gICAgICByZXR1cm4gdGhpcy5zdW1fY2FjaGVbal0gLSB0aGlzLnN1bV9jYWNoZVtpIC0gMV07XG4gICAgfVxuXG4gICAgLy8g6K6h566X57yT5a2YXG4gICAgd2hpbGUgKHRoaXMuc3VtX2NhY2hlLmxlbmd0aCAtIDEgIT09IGopIHtcbiAgICAgIGlmICh0aGlzLnN1bV9jYWNoZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5zdW1fY2FjaGUucHVzaCh0aGlzLm9yaWdpbkRhdGFbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3VtX2NhY2hlX2xlbiA9IHRoaXMuc3VtX2NhY2hlLmxlbmd0aDtcbiAgICAgICAgdGhpcy5zdW1fY2FjaGUucHVzaChcbiAgICAgICAgICB0aGlzLnN1bV9jYWNoZVtzdW1fY2FjaGVfbGVuIC0gMV0gKyB0aGlzLm9yaWdpbkRhdGFbc3VtX2NhY2hlX2xlbl1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdW1SYW5nZShpLCBqKTtcbiAgfVxufVxuXG4vKipcbiAqIFlvdXIgTnVtQXJyYXkgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcbiAqIHZhciBvYmogPSBuZXcgTnVtQXJyYXkobnVtcylcbiAqIHZhciBwYXJhbV8xID0gb2JqLnN1bVJhbmdlKGksailcbiAqL1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuY29uc3QgaW5zdGFuY2UgPSBuZXcgTnVtQXJyYXkoWy0yLCAwLCAzLCAtNSwgMiwgLTFdKTtcbmFzc2VydC5zdHJpY3RFcXVhbChpbnN0YW5jZS5zdW1SYW5nZSgwLCAyKSwgMSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoaW5zdGFuY2Uuc3VtUmFuZ2UoMiwgNSksIC0xKTtcbiJdfQ==