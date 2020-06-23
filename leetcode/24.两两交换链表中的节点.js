"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/swap-nodes-in-pairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
const LinkedList_1 = require("../util/LinkedList");
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head == null || head.next == null)
        return head;
    // 先交换 第一个节点和 第二个节点
    const current = head;
    const next = current.next;
    current.next = next.next;
    next.next = current;
    step(current);
    function step(lastNode) {
        if (lastNode == null || lastNode.next == null || lastNode.next.next == null)
            return;
        const current = lastNode.next;
        const next = current.next;
        current.next = next.next;
        next.next = current;
        lastNode.next = next;
        step(current);
    }
    return next;
};
// 最佳的写法
// 递归 交换后 靠后的节点 后的next
var swapPairs_2 = function (head) {
    if (head == null || head.next == null)
        return head;
    const current = head;
    const next = current.next;
    current.next = swapPairs_2(next.next);
    next.next = current;
    return next;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(swapPairs(LinkedList_1.createLinkedList([1, 2, 3, 4])).toString(), [
    2,
    1,
    4,
    3,
]);
assert_1.default.deepStrictEqual(swapPairs(LinkedList_1.createLinkedList([1, 2, 3, 4, 5])).toString(), [2, 1, 4, 3, 5]);
assert_1.default.deepStrictEqual(swapPairs_2(LinkedList_1.createLinkedList([1, 2, 3, 4, 5])).toString(), [2, 1, 4, 3, 5]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQu5Lik5Lik5Lqk5o2i6ZO+6KGo5Lit55qE6IqC54K5LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yNC7kuKTkuKTkuqTmjaLpk77ooajkuK3nmoToioLngrkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjSTtBQUNKLG1EQUFnRTtBQUVoRTs7O0dBR0c7QUFDSCxJQUFJLFNBQVMsR0FBRyxVQUFVLElBQXFCO0lBQzdDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUNuRCxtQkFBbUI7SUFDbkIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFFMUIsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFLLENBQUMsSUFBSSxDQUFDO0lBQzFCLElBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBRXJCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVkLFNBQVMsSUFBSSxDQUFDLFFBQXlCO1FBQ3JDLElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJO1lBQ3pFLE9BQU87UUFDVCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzlCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFFMUIsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFLLENBQUMsSUFBSSxDQUFDO1FBQzFCLElBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRixRQUFRO0FBQ1Isc0JBQXNCO0FBQ3RCLElBQUksV0FBVyxHQUFHLFVBQVUsSUFBcUI7SUFDL0MsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRW5ELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSyxDQUFDO0lBRTNCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUVwQixPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsUUFBUSxFQUFFLEVBQUU7SUFDNUUsQ0FBQztJQUNELENBQUM7SUFDRCxDQUFDO0lBQ0QsQ0FBQztDQUNGLENBQUMsQ0FBQztBQUNILGdCQUFNLENBQUMsZUFBZSxDQUNwQixTQUFTLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUN4RCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDaEIsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNwQixXQUFXLENBQUMsNkJBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUMxRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrpk77ooajvvIzkuKTkuKTkuqTmjaLlhbbkuK3nm7jpgrvnmoToioLngrnvvIzlubbov5Tlm57kuqTmjaLlkI7nmoTpk77ooajjgIJcblxu5L2g5LiN6IO95Y+q5piv5Y2V57qv55qE5pS55Y+Y6IqC54K55YaF6YOo55qE5YC877yM6ICM5piv6ZyA6KaB5a6e6ZmF55qE6L+b6KGM6IqC54K55Lqk5o2i44CCXG5cbsKgXG5cbuekuuS+izpcblxu57uZ5a6aIDEtPjItPjMtPjQsIOS9oOW6lOivpei/lOWbniAyLT4xLT40LT4zLlxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvc3dhcC1ub2Rlcy1pbi1wYWlyc1xu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXG4qICovXG5pbXBvcnQgeyBMaXN0Tm9kZSwgY3JlYXRlTGlua2VkTGlzdCB9IGZyb20gXCIuLi91dGlsL0xpbmtlZExpc3RcIjtcblxuLyoqXG4gKiBAcGFyYW0ge0xpc3ROb2RlfSBoZWFkXG4gKiBAcmV0dXJuIHtMaXN0Tm9kZX1cbiAqL1xudmFyIHN3YXBQYWlycyA9IGZ1bmN0aW9uIChoZWFkOiBMaXN0Tm9kZSB8IG51bGwpIHtcbiAgaWYgKGhlYWQgPT0gbnVsbCB8fCBoZWFkLm5leHQgPT0gbnVsbCkgcmV0dXJuIGhlYWQ7XG4gIC8vIOWFiOS6pOaNoiDnrKzkuIDkuKroioLngrnlkowg56ys5LqM5Liq6IqC54K5XG4gIGNvbnN0IGN1cnJlbnQgPSBoZWFkO1xuICBjb25zdCBuZXh0ID0gY3VycmVudC5uZXh0O1xuXG4gIGN1cnJlbnQubmV4dCA9IG5leHQhLm5leHQ7XG4gIG5leHQhLm5leHQgPSBjdXJyZW50O1xuXG4gIHN0ZXAoY3VycmVudCk7XG5cbiAgZnVuY3Rpb24gc3RlcChsYXN0Tm9kZTogTGlzdE5vZGUgfCBudWxsKSB7XG4gICAgaWYgKGxhc3ROb2RlID09IG51bGwgfHwgbGFzdE5vZGUubmV4dCA9PSBudWxsIHx8IGxhc3ROb2RlLm5leHQubmV4dCA9PSBudWxsKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGN1cnJlbnQgPSBsYXN0Tm9kZS5uZXh0O1xuICAgIGNvbnN0IG5leHQgPSBjdXJyZW50Lm5leHQ7XG5cbiAgICBjdXJyZW50Lm5leHQgPSBuZXh0IS5uZXh0O1xuICAgIG5leHQhLm5leHQgPSBjdXJyZW50O1xuICAgIGxhc3ROb2RlLm5leHQgPSBuZXh0O1xuXG4gICAgc3RlcChjdXJyZW50KTtcbiAgfVxuXG4gIHJldHVybiBuZXh0O1xufTtcblxuLy8g5pyA5L2z55qE5YaZ5rOVXG4vLyDpgJLlvZIg5Lqk5o2i5ZCOIOmdoOWQjueahOiKgueCuSDlkI7nmoRuZXh0XG52YXIgc3dhcFBhaXJzXzIgPSBmdW5jdGlvbiAoaGVhZDogTGlzdE5vZGUgfCBudWxsKTogTGlzdE5vZGUgfCBudWxsIHtcbiAgaWYgKGhlYWQgPT0gbnVsbCB8fCBoZWFkLm5leHQgPT0gbnVsbCkgcmV0dXJuIGhlYWQ7XG5cbiAgY29uc3QgY3VycmVudCA9IGhlYWQ7XG4gIGNvbnN0IG5leHQgPSBjdXJyZW50Lm5leHQhO1xuXG4gIGN1cnJlbnQubmV4dCA9IHN3YXBQYWlyc18yKG5leHQubmV4dCk7XG4gIG5leHQubmV4dCA9IGN1cnJlbnQ7XG5cbiAgcmV0dXJuIG5leHQ7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzd2FwUGFpcnMoY3JlYXRlTGlua2VkTGlzdChbMSwgMiwgMywgNF0pKSEudG9TdHJpbmcoKSwgW1xuICAyLFxuICAxLFxuICA0LFxuICAzLFxuXSk7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICBzd2FwUGFpcnMoY3JlYXRlTGlua2VkTGlzdChbMSwgMiwgMywgNCwgNV0pKSEudG9TdHJpbmcoKSxcbiAgWzIsIDEsIDQsIDMsIDVdXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgc3dhcFBhaXJzXzIoY3JlYXRlTGlua2VkTGlzdChbMSwgMiwgMywgNCwgNV0pKSEudG9TdHJpbmcoKSxcbiAgWzIsIDEsIDQsIDMsIDVdXG4pO1xuIl19