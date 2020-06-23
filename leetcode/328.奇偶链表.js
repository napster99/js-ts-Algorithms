"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

示例 1:

输入: 1->2->3->4->5->NULL
输出: 1->3->5->2->4->NULL
示例 2:

输入: 2->1->3->5->6->4->7->NULL
输出: 2->3->6->7->1->5->4->NULL
说明:

应当保持奇数节点和偶数节点的相对顺序。
链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/odd-even-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const LinkedList_1 = require("../util/LinkedList");
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (head == null || head.next == null || head.next.next == null)
        return head;
    // 根据题意
    // 空间复杂度 O(1) 说明空间复杂度 不会应为 n 的大小而改变
    // 时间复杂度应为 O(nodes)，nodes 为节点总数。 那么每个节点只能遍历一次
    let odd_last_node = head;
    const even_head_node = head.next;
    let even_last_node = even_head_node;
    while (true) {
        if (even_last_node.next == null) {
            odd_last_node.next = even_head_node;
            break;
        }
        odd_last_node.next = even_last_node.next;
        odd_last_node = odd_last_node.next;
        if (odd_last_node.next == null) {
            odd_last_node.next = even_head_node;
            /**
             * 注意 由于单数的链表的最后一个节点一定连的是 偶数链表所有没问题
             * 但是偶数的节点的 最后一个节点 可能还连着 一个奇数的节点 所以要 加以处理
             * */
            even_last_node.next = null;
            break;
        }
        even_last_node.next = odd_last_node.next;
        even_last_node = even_last_node.next;
    }
    return head;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(oddEvenList(null), null);
assert_1.default.deepStrictEqual(oddEvenList(LinkedList_1.createLinkedList([1, 2, 3, 4])).toString(), [1, 3, 2, 4]);
assert_1.default.deepStrictEqual(oddEvenList(LinkedList_1.createLinkedList([1])).toString(), [1]);
assert_1.default.deepStrictEqual(oddEvenList(LinkedList_1.createLinkedList([1, 2])).toString(), [
    1,
    2,
]);
assert_1.default.deepStrictEqual(oddEvenList(LinkedList_1.createLinkedList([1, 2, 3])).toString(), [
    1,
    3,
    2,
]);
assert_1.default.deepStrictEqual(oddEvenList(LinkedList_1.createLinkedList([1, 2, 3, 4])).toString(), [1, 3, 2, 4]);
assert_1.default.deepStrictEqual(oddEvenList(LinkedList_1.createLinkedList([1, 2, 3, 4, 5])).toString(), [1, 3, 5, 2, 4]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzI4LuWlh+WBtumTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzI4LuWlh+WBtumTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkk7QUFDSixtREFBZ0U7QUFFaEU7OztHQUdHO0FBQ0gsSUFBSSxXQUFXLEdBQUcsVUFBVSxJQUFxQjtJQUMvQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzdFLE9BQU87SUFDUCxtQ0FBbUM7SUFDbkMsNkNBQTZDO0lBQzdDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztJQUN6QixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2pDLElBQUksY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUVwQyxPQUFPLElBQUksRUFBRTtRQUNYLElBQUksY0FBZSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEMsYUFBYSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7WUFDcEMsTUFBTTtTQUNQO1FBQ0QsYUFBYSxDQUFDLElBQUksR0FBRyxjQUFlLENBQUMsSUFBSSxDQUFDO1FBQzFDLGFBQWEsR0FBRyxhQUFhLENBQUMsSUFBSyxDQUFDO1FBRXBDLElBQUksYUFBYSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDOUIsYUFBYSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7WUFDcEM7OztpQkFHSztZQUNMLGNBQWMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQzNCLE1BQU07U0FDUDtRQUNELGNBQWUsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztRQUMxQyxjQUFjLEdBQUcsY0FBZSxDQUFDLElBQUksQ0FBQztLQUN2QztJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRCxnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsV0FBVyxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUN2RCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNiLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVFLGdCQUFNLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsUUFBUSxFQUFFLEVBQUU7SUFDeEUsQ0FBQztJQUNELENBQUM7Q0FDRixDQUFDLENBQUM7QUFDSCxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtJQUMzRSxDQUFDO0lBQ0QsQ0FBQztJQUNELENBQUM7Q0FDRixDQUFDLENBQUM7QUFDSCxnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsV0FBVyxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUN2RCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNiLENBQUM7QUFDRixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsV0FBVyxDQUFDLDZCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDMUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5Y2V6ZO+6KGo77yM5oqK5omA5pyJ55qE5aWH5pWw6IqC54K55ZKM5YG25pWw6IqC54K55YiG5Yir5o6S5Zyo5LiA6LW344CC6K+35rOo5oSP77yM6L+Z6YeM55qE5aWH5pWw6IqC54K55ZKM5YG25pWw6IqC54K55oyH55qE5piv6IqC54K557yW5Y+355qE5aWH5YG25oCn77yM6ICM5LiN5piv6IqC54K555qE5YC855qE5aWH5YG25oCn44CCXG5cbuivt+WwneivleS9v+eUqOWOn+WcsOeul+azleWujOaIkOOAguS9oOeahOeul+azleeahOepuumXtOWkjeadguW6puW6lOS4uiBPKDEp77yM5pe26Ze05aSN5p2C5bqm5bqU5Li6IE8obm9kZXMp77yMbm9kZXMg5Li66IqC54K55oC75pWw44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IDEtPjItPjMtPjQtPjUtPk5VTExcbui+k+WHujogMS0+My0+NS0+Mi0+NC0+TlVMTFxu56S65L6LIDI6XG5cbui+k+WFpTogMi0+MS0+My0+NS0+Ni0+NC0+Ny0+TlVMTFxu6L6T5Ye6OiAyLT4zLT42LT43LT4xLT41LT40LT5OVUxMXG7or7TmmI46XG5cbuW6lOW9k+S/neaMgeWlh+aVsOiKgueCueWSjOWBtuaVsOiKgueCueeahOebuOWvuemhuuW6j+OAglxu6ZO+6KGo55qE56ys5LiA5Liq6IqC54K56KeG5Li65aWH5pWw6IqC54K577yM56ys5LqM5Liq6IqC54K56KeG5Li65YG25pWw6IqC54K577yM5Lul5q2k57G75o6o44CCXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9vZGQtZXZlbi1saW5rZWQtbGlzdFxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG5pbXBvcnQgeyBMaXN0Tm9kZSwgY3JlYXRlTGlua2VkTGlzdCB9IGZyb20gXCIuLi91dGlsL0xpbmtlZExpc3RcIjtcblxuLyoqXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBoZWFkXG4gKiBAcmV0dXJuIHtMaXN0Tm9kZX1cbiAqL1xudmFyIG9kZEV2ZW5MaXN0ID0gZnVuY3Rpb24gKGhlYWQ6IExpc3ROb2RlIHwgbnVsbCkge1xuICBpZiAoaGVhZCA9PSBudWxsIHx8IGhlYWQubmV4dCA9PSBudWxsIHx8IGhlYWQubmV4dC5uZXh0ID09IG51bGwpIHJldHVybiBoZWFkO1xuICAvLyDmoLnmja7popjmhI9cbiAgLy8g56m66Ze05aSN5p2C5bqmIE8oMSkg6K+05piO56m66Ze05aSN5p2C5bqmIOS4jeS8muW6lOS4uiBuIOeahOWkp+Wwj+iAjOaUueWPmFxuICAvLyDml7bpl7TlpI3mnYLluqblupTkuLogTyhub2RlcynvvIxub2RlcyDkuLroioLngrnmgLvmlbDjgIIg6YKj5LmI5q+P5Liq6IqC54K55Y+q6IO96YGN5Y6G5LiA5qyhXG4gIGxldCBvZGRfbGFzdF9ub2RlID0gaGVhZDtcbiAgY29uc3QgZXZlbl9oZWFkX25vZGUgPSBoZWFkLm5leHQ7XG4gIGxldCBldmVuX2xhc3Rfbm9kZSA9IGV2ZW5faGVhZF9ub2RlO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaWYgKGV2ZW5fbGFzdF9ub2RlIS5uZXh0ID09IG51bGwpIHtcbiAgICAgIG9kZF9sYXN0X25vZGUubmV4dCA9IGV2ZW5faGVhZF9ub2RlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG9kZF9sYXN0X25vZGUubmV4dCA9IGV2ZW5fbGFzdF9ub2RlIS5uZXh0O1xuICAgIG9kZF9sYXN0X25vZGUgPSBvZGRfbGFzdF9ub2RlLm5leHQhO1xuXG4gICAgaWYgKG9kZF9sYXN0X25vZGUubmV4dCA9PSBudWxsKSB7XG4gICAgICBvZGRfbGFzdF9ub2RlLm5leHQgPSBldmVuX2hlYWRfbm9kZTtcbiAgICAgIC8qKlxuICAgICAgICog5rOo5oSPIOeUseS6juWNleaVsOeahOmTvuihqOeahOacgOWQjuS4gOS4quiKgueCueS4gOWumui/nueahOaYryDlgbbmlbDpk77ooajmiYDmnInmsqHpl67pophcbiAgICAgICAqIOS9huaYr+WBtuaVsOeahOiKgueCueeahCDmnIDlkI7kuIDkuKroioLngrkg5Y+v6IO96L+Y6L+e552AIOS4gOS4quWlh+aVsOeahOiKgueCuSDmiYDku6XopoEg5Yqg5Lul5aSE55CGXG4gICAgICAgKiAqL1xuICAgICAgZXZlbl9sYXN0X25vZGUubmV4dCA9IG51bGw7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZXZlbl9sYXN0X25vZGUhLm5leHQgPSBvZGRfbGFzdF9ub2RlLm5leHQ7XG4gICAgZXZlbl9sYXN0X25vZGUgPSBldmVuX2xhc3Rfbm9kZSEubmV4dDtcbiAgfVxuXG4gIHJldHVybiBoZWFkO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwob2RkRXZlbkxpc3QobnVsbCksIG51bGwpO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgb2RkRXZlbkxpc3QoY3JlYXRlTGlua2VkTGlzdChbMSwgMiwgMywgNF0pKSEudG9TdHJpbmcoKSxcbiAgWzEsIDMsIDIsIDRdXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChvZGRFdmVuTGlzdChjcmVhdGVMaW5rZWRMaXN0KFsxXSkpIS50b1N0cmluZygpLCBbMV0pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChvZGRFdmVuTGlzdChjcmVhdGVMaW5rZWRMaXN0KFsxLCAyXSkpIS50b1N0cmluZygpLCBbXG4gIDEsXG4gIDIsXG5dKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwob2RkRXZlbkxpc3QoY3JlYXRlTGlua2VkTGlzdChbMSwgMiwgM10pKSEudG9TdHJpbmcoKSwgW1xuICAxLFxuICAzLFxuICAyLFxuXSk7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICBvZGRFdmVuTGlzdChjcmVhdGVMaW5rZWRMaXN0KFsxLCAyLCAzLCA0XSkpIS50b1N0cmluZygpLFxuICBbMSwgMywgMiwgNF1cbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICBvZGRFdmVuTGlzdChjcmVhdGVMaW5rZWRMaXN0KFsxLCAyLCAzLCA0LCA1XSkpIS50b1N0cmluZygpLFxuICBbMSwgMywgNSwgMiwgNF1cbik7XG4iXX0=