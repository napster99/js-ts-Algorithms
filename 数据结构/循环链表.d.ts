/**
 * 循环链表和单向链表相似，节点类型都是一样的。唯一的区别是，
 * 在创建循环链表时，让其头节点的 next 属性指向它本身，即：
 * head.next = head
 * 这种行为会传导至链表中的每个节点，使得每个节点的 next 属性都指向链表的头节点。
 * 换句话说，链表的尾节点指向头节点，形成了一个循环链表
 * 如果你希望可以从后向前遍历链表，但是又不想付出额外代价来创建一个双向链表，
 * 那么就需要使用循环链表。从循环链表的尾节点向后移动，就等于从后向前遍历链表。
 * */
export {};
