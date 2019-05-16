/**
 * 图的实际信息都保存在边上面，因为它们描述了图的结构。
 * 我们很容易像之前提到的那样用二叉树的方式去表示图，这是不对的。
 * 二叉树的表现形式相当固定，一个父节点只能有两个子节点，而图的结构却要灵活得多，一个顶点既可以有一条边，也可以有多条边与它相连。
 *
 * 我们将表示图的边的方法称为邻接表或者邻接表数组。
 * 这种方法将边存储为由顶点的相邻顶点列表构成的数组，并以此顶点作为索引。
 * */
declare class Graph {
    vertices: number;
    adj: (number | "")[][];
    edges: number;
    constructor(vertices: number);
    addEdge(v: number, w: number): void;
    showGraph(): void;
    dfs(v: number): void;
    bfs(s: number): {
        edgeTo: number[];
        marked: any[];
    };
    pathTo(start: number, end: number): number[] | undefined;
}
declare const g: Graph;
