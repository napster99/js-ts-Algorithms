"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    /**
     * 二叉搜索树
     * 右子节点一定大于 当前节点
     * 左子节点一定小于 当前节点
     * */
    // 由于题目没有明确p 和 q 哪个更大
    // 确定 是否在两个值之间 或者在某个值上
    if ((root.val - p.val) * (root.val - q.val) <= 0) {
        return root;
    }
    // 都小于 或者 都大于
    if (root.val - p.val < 0) {
        return lowestCommonAncestor(root.right, p, q);
    }
    else {
        return lowestCommonAncestor(root.left, p, q);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM1LuS6jOWPieaQnOe0ouagkeeahOacgOi/keWFrOWFseelluWFiC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjM1LuS6jOWPieaQnOe0ouagkeeahOacgOi/keWFrOWFseelluWFiC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQThCQTs7Ozs7R0FLRztBQUNILElBQUksb0JBQW9CLEdBQUcsVUFDekIsSUFBYyxFQUNkLENBQVcsRUFDWCxDQUFXO0lBRVg7Ozs7U0FJSztJQUNMLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2hELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxhQUFhO0lBQ2IsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDaEQ7U0FBTTtRQUNMLE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDL0M7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrkuozlj4nmkJzntKLmoJEsIOaJvuWIsOivpeagkeS4reS4pOS4quaMh+WumuiKgueCueeahOacgOi/keWFrOWFseelluWFiOOAglxyXG5cclxu55m+5bqm55m+56eR5Lit5pyA6L+R5YWs5YWx56WW5YWI55qE5a6a5LmJ5Li677ya4oCc5a+55LqO5pyJ5qC55qCRIFQg55qE5Lik5Liq57uT54K5IHDjgIFx77yM5pyA6L+R5YWs5YWx56WW5YWI6KGo56S65Li65LiA5Liq57uT54K5IHjvvIzmu6HotrMgeCDmmK8gcOOAgXEg55qE56WW5YWI5LiUIHgg55qE5rex5bqm5bC95Y+v6IO95aSn77yI5LiA5Liq6IqC54K55Lmf5Y+v5Lul5piv5a6D6Ieq5bex55qE56WW5YWI77yJ44CC4oCdXHJcblxyXG7kvovlpoLvvIznu5nlrprlpoLkuIvkuozlj4nmkJzntKLmoJE6ICByb290ID0gWzYsMiw4LDAsNCw3LDksbnVsbCxudWxsLDMsNV1cclxuXHJcblxyXG5cclxuXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogcm9vdCA9IFs2LDIsOCwwLDQsNyw5LG51bGwsbnVsbCwzLDVdLCBwID0gMiwgcSA9IDhcclxu6L6T5Ye6OiA2XHJcbuino+mHijog6IqC54K5IDIg5ZKM6IqC54K5IDgg55qE5pyA6L+R5YWs5YWx56WW5YWI5pivIDbjgIJcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IHJvb3QgPSBbNiwyLDgsMCw0LDcsOSxudWxsLG51bGwsMyw1XSwgcCA9IDIsIHEgPSA0XHJcbui+k+WHujogMlxyXG7op6Pph4o6IOiKgueCuSAyIOWSjOiKgueCuSA0IOeahOacgOi/keWFrOWFseelluWFiOaYryAyLCDlm6DkuLrmoLnmja7lrprkuYnmnIDov5HlhazlhbHnpZblhYjoioLngrnlj6/ku6XkuLroioLngrnmnKzouqvjgIJcclxuXHJcblxyXG7or7TmmI46XHJcblxyXG7miYDmnInoioLngrnnmoTlgLzpg73mmK/llK/kuIDnmoTjgIJcclxucOOAgXEg5Li65LiN5ZCM6IqC54K55LiU5Z2H5a2Y5Zyo5LqO57uZ5a6a55qE5LqM5Y+J5pCc57Si5qCR5Lit44CCXHJcbiogKi9cclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tIFwiLi4vdXRpbC9CaW5hcnlUcmVlXCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtUcmVlTm9kZX0gcm9vdFxyXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSBwXHJcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHFcclxuICogQHJldHVybiB7VHJlZU5vZGV9XHJcbiAqL1xyXG52YXIgbG93ZXN0Q29tbW9uQW5jZXN0b3IgPSBmdW5jdGlvbiAoXHJcbiAgcm9vdDogVHJlZU5vZGUsXHJcbiAgcDogVHJlZU5vZGUsXHJcbiAgcTogVHJlZU5vZGVcclxuKTogVHJlZU5vZGUge1xyXG4gIC8qKlxyXG4gICAqIOS6jOWPieaQnOe0ouagkVxyXG4gICAqIOWPs+WtkOiKgueCueS4gOWumuWkp+S6jiDlvZPliY3oioLngrlcclxuICAgKiDlt6blrZDoioLngrnkuIDlrprlsI/kuo4g5b2T5YmN6IqC54K5XHJcbiAgICogKi9cclxuICAvLyDnlLHkuo7popjnm67msqHmnInmmI7noa5wIOWSjCBxIOWTquS4quabtOWkp1xyXG4gIC8vIOehruWumiDmmK/lkKblnKjkuKTkuKrlgLzkuYvpl7Qg5oiW6ICF5Zyo5p+Q5Liq5YC85LiKXHJcbiAgaWYgKChyb290LnZhbCAtIHAudmFsKSAqIChyb290LnZhbCAtIHEudmFsKSA8PSAwKSB7XHJcbiAgICByZXR1cm4gcm9vdDtcclxuICB9XHJcbiAgLy8g6YO95bCP5LqOIOaIluiAhSDpg73lpKfkuo5cclxuICBpZiAocm9vdC52YWwgLSBwLnZhbCA8IDApIHtcclxuICAgIHJldHVybiBsb3dlc3RDb21tb25BbmNlc3Rvcihyb290LnJpZ2h0ISwgcCwgcSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBsb3dlc3RDb21tb25BbmNlc3Rvcihyb290LmxlZnQhLCBwLCBxKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQge307XHJcbiJdfQ==