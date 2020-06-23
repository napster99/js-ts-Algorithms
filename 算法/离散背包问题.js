/**
 * @param val       : Array 物品价值的数组
 * @param we        : Array 物品的重量的数组
 * @param W         : Number 可以携带的物品的总重量
 * */
function Knapsack(val, we, W) {
  var N = we.length; // 物品的数量
  var V = [];
  for (let i = 0; i <= N; i++) {
    V.push([]);
    for (let j = 0; j <= W; j++) {
      V[i].push(0);
    }
  }

  for (let item = 1; item <= N; item++) {
    for (let weight = 1; weight <= W; weight++) {
      if (we[item - 1] <= weight) {
        // 判断能不能放进背包（当前物品是的重量是否大于当前副总）
        V[item][weight] = Math.max(
          val[item - 1] + V[item - 1][weight - we[item - 1]],
          V[item - 1][weight]
        );
        // 能放进背包     最大值为当前物品的价值 + V数组上一行当前总负重下放进当前物品的价值(可能返回undefined)　，  V数组上一行的最优解
      } else {
        // 不能把当前物品放进背包 最优解就是V上一行的解
        V[item][weight] = V[item - 1][weight];
      }
    }
  }
  console.log(V);
  // V行最后一行的最后一个就是 最优解(在最大负重下 尝试放进每个物品)
  return V[V.length - 1][V[0].length - 1];
}

var val = [10, 40, 30, 50, 30, 60];
var we = [5, 4, 6, 3, 2, 3];
var W = 10;

console.log(Knapsack(val, we, W));
