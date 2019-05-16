"use strict";
/**
 * 归并排序
 * 把一系列排好序的子序列合并成一个大的完整有序序列。
 * 从理论上讲，这个算法很容易实现。我们需要两个排好序的子数组，
 * 然后通过比较数据大小，先从最小的数据开始插入，最后合并得到第三个数组。
 *
 * 问题:在实际情况中，归并排序还有一些问题，当我们用这个算法对一个很大的数据集进行排序时，
 * 我们需要相当大的空间来合并存储两个子数组.
 * */
Object.defineProperty(exports, "__esModule", { value: true });
function mergeSort(arr) {
    if (arr.length < 2) {
        return;
    }
    let step = 1;
    let left, right;
    while (step < arr.length) {
        left = 0;
        right = step;
        while (right + step <= arr.length) {
            mergeArrays(arr, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if (right < arr.length) {
            mergeArrays(arr, left, left + step, right, arr.length);
        }
        step *= 2;
    }
}
exports.default = mergeSort;
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    const rightArr = new Array(stopRight - startRight + 1);
    const leftArr = new Array(stopLeft - startLeft + 1);
    let _startRight = startRight;
    for (let i = 0; i < rightArr.length - 1; ++i) {
        rightArr[i] = arr[_startRight];
        ++_startRight;
    }
    let _startLeft = startLeft;
    for (let i = 0; i < leftArr.length - 1; i++) {
        leftArr[i] = arr[_startLeft];
        ++_startLeft;
    }
    // 设置哨兵值 为了 在 left 和 right 长度不相等的时候 依然排序不出问题 因为短的没有值了 长的值 都应按次序插入
    rightArr[rightArr.length - 1] = Infinity; // 哨兵值
    leftArr[leftArr.length - 1] = Infinity; // 哨兵值
    // m 和 n 相当于左右数组的指针
    let m = 0, n = 0;
    // 两个各自已经*排序好*的数组 组合进行排序 只比较共 左数组的length+ 右数组的length次
    // 并且左右数组(必定相邻)的区间 在结果arr数组中排序
    for (let k = startLeft; k < stopRight; k++) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        }
        else {
            arr[k] = rightArr[n];
            n++;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2VTb3J0LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnrpfms5Uv5o6S5bqP566X5rOVL21lcmdlU29ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7O0tBUUs7O0FBRUwsU0FBd0IsU0FBUyxDQUFDLEdBQWE7SUFDM0MsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNoQixPQUFPO0tBQ1Y7SUFDRCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLElBQUksRUFBRSxLQUFLLENBQUM7SUFDaEIsT0FBTyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRTtRQUN0QixJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNiLE9BQU8sS0FBSyxHQUFHLElBQUksSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQy9CLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN6RCxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNwQixLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztTQUN2QjtRQUNELElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDcEIsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxJQUFJLENBQUMsQ0FBQztLQUNiO0FBQ0wsQ0FBQztBQW5CRCw0QkFtQkM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxHQUFhLEVBQUUsU0FBaUIsRUFBRSxRQUFnQixFQUFFLFVBQWtCLEVBQUUsU0FBaUI7SUFDMUcsTUFBTSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2RCxNQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUksV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDMUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQixFQUFFLFdBQVcsQ0FBQztLQUNqQjtJQUNELElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDekMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixFQUFFLFVBQVUsQ0FBQztLQUNoQjtJQUVELGlFQUFpRTtJQUNqRSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxNQUFNO0lBQ2hELE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLE1BQU07SUFFOUMsbUJBQW1CO0lBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWpCLHFEQUFxRDtJQUNyRCw4QkFBOEI7SUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4QyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDM0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixDQUFDLEVBQUUsQ0FBQztTQUNQO2FBQU07WUFDSCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsRUFBRSxDQUFDO1NBQ1A7S0FDSjtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5b2S5bm25o6S5bqPXHJcbiAqIOaKiuS4gOezu+WIl+aOkuWlveW6j+eahOWtkOW6j+WIl+WQiOW5tuaIkOS4gOS4quWkp+eahOWujOaVtOacieW6j+W6j+WIl+OAglxyXG4gKiDku47nkIborrrkuIrorrLvvIzov5nkuKrnrpfms5XlvojlrrnmmJPlrp7njrDjgILmiJHku6zpnIDopoHkuKTkuKrmjpLlpb3luo/nmoTlrZDmlbDnu4TvvIxcclxuICog54S25ZCO6YCa6L+H5q+U6L6D5pWw5o2u5aSn5bCP77yM5YWI5LuO5pyA5bCP55qE5pWw5o2u5byA5aeL5o+S5YWl77yM5pyA5ZCO5ZCI5bm25b6X5Yiw56ys5LiJ5Liq5pWw57uE44CCXHJcbiAqXHJcbiAqIOmXrumimDrlnKjlrp7pmYXmg4XlhrXkuK3vvIzlvZLlubbmjpLluo/ov5jmnInkuIDkupvpl67popjvvIzlvZPmiJHku6znlKjov5nkuKrnrpfms5Xlr7nkuIDkuKrlvojlpKfnmoTmlbDmja7pm4bov5vooYzmjpLluo/ml7bvvIxcclxuICog5oiR5Lus6ZyA6KaB55u45b2T5aSn55qE56m66Ze05p2l5ZCI5bm25a2Y5YKo5Lik5Liq5a2Q5pWw57uELlxyXG4gKiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VTb3J0KGFycjogbnVtYmVyW10pIHtcclxuICAgIGlmIChhcnIubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBzdGVwID0gMTtcclxuICAgIGxldCBsZWZ0LCByaWdodDtcclxuICAgIHdoaWxlIChzdGVwIDwgYXJyLmxlbmd0aCkge1xyXG4gICAgICAgIGxlZnQgPSAwO1xyXG4gICAgICAgIHJpZ2h0ID0gc3RlcDtcclxuICAgICAgICB3aGlsZSAocmlnaHQgKyBzdGVwIDw9IGFyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbWVyZ2VBcnJheXMoYXJyLCBsZWZ0LCBsZWZ0ICsgc3RlcCwgcmlnaHQsIHJpZ2h0ICsgc3RlcCk7XHJcbiAgICAgICAgICAgIGxlZnQgPSByaWdodCArIHN0ZXA7XHJcbiAgICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHN0ZXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyaWdodCA8IGFyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbWVyZ2VBcnJheXMoYXJyLCBsZWZ0LCBsZWZ0ICsgc3RlcCwgcmlnaHQsIGFyci5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGVwICo9IDI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmdlQXJyYXlzKGFycjogbnVtYmVyW10sIHN0YXJ0TGVmdDogbnVtYmVyLCBzdG9wTGVmdDogbnVtYmVyLCBzdGFydFJpZ2h0OiBudW1iZXIsIHN0b3BSaWdodDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCByaWdodEFyciA9IG5ldyBBcnJheShzdG9wUmlnaHQgLSBzdGFydFJpZ2h0ICsgMSk7XHJcbiAgICBjb25zdCBsZWZ0QXJyID0gbmV3IEFycmF5KHN0b3BMZWZ0IC0gc3RhcnRMZWZ0ICsgMSk7XHJcbiAgICBsZXQgX3N0YXJ0UmlnaHQgPSBzdGFydFJpZ2h0O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByaWdodEFyci5sZW5ndGggLSAxOyArK2kpIHtcclxuICAgICAgICByaWdodEFycltpXSA9IGFycltfc3RhcnRSaWdodF07XHJcbiAgICAgICAgKytfc3RhcnRSaWdodDtcclxuICAgIH1cclxuICAgIGxldCBfc3RhcnRMZWZ0ID0gc3RhcnRMZWZ0O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZWZ0QXJyLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIGxlZnRBcnJbaV0gPSBhcnJbX3N0YXJ0TGVmdF07XHJcbiAgICAgICAgKytfc3RhcnRMZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiuvue9ruWTqOWFteWAvCDkuLrkuoYg5ZyoIGxlZnQg5ZKMIHJpZ2h0IOmVv+W6puS4jeebuOetieeahOaXtuWAmSDkvp3nhLbmjpLluo/kuI3lh7rpl67popgg5Zug5Li655+t55qE5rKh5pyJ5YC85LqGIOmVv+eahOWAvCDpg73lupTmjInmrKHluo/mj5LlhaVcclxuICAgIHJpZ2h0QXJyW3JpZ2h0QXJyLmxlbmd0aCAtIDFdID0gSW5maW5pdHk7IC8vIOWTqOWFteWAvFxyXG4gICAgbGVmdEFycltsZWZ0QXJyLmxlbmd0aCAtIDFdID0gSW5maW5pdHk7IC8vIOWTqOWFteWAvFxyXG5cclxuICAgIC8vIG0g5ZKMIG4g55u45b2T5LqO5bem5Y+z5pWw57uE55qE5oyH6ZKIXHJcbiAgICBsZXQgbSA9IDAsIG4gPSAwO1xyXG5cclxuICAgIC8vIOS4pOS4quWQhOiHquW3sue7jyrmjpLluo/lpb0q55qE5pWw57uEIOe7hOWQiOi/m+ihjOaOkuW6jyDlj6rmr5TovoPlhbEg5bem5pWw57uE55qEbGVuZ3RoKyDlj7PmlbDnu4TnmoRsZW5ndGjmrKFcclxuICAgIC8vIOW5tuS4lOW3puWPs+aVsOe7hCjlv4Xlrprnm7jpgrsp55qE5Yy66Ze0IOWcqOe7k+aenGFycuaVsOe7hOS4reaOkuW6j1xyXG4gICAgZm9yIChsZXQgayA9IHN0YXJ0TGVmdDsgayA8IHN0b3BSaWdodDsgaysrKSB7XHJcbiAgICAgICAgaWYgKGxlZnRBcnJbbV0gPD0gcmlnaHRBcnJbbl0pIHtcclxuICAgICAgICAgICAgYXJyW2tdID0gbGVmdEFyclttXTtcclxuICAgICAgICAgICAgbSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFycltrXSA9IHJpZ2h0QXJyW25dO1xyXG4gICAgICAgICAgICBuKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==