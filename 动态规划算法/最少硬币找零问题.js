// MinCoinChange类接收coins参数（行{1}），该参数代表问题中的面额。对美国的硬币系
// 统而言，它是[1, 5, 10, 25]。我们可以随心所欲传递任何面额。此外，为了更加高效且不重
// 复计算值，我们使用了cache（行{2}）。
// 接下来是makeChange方法，它也是一个递归函数，找零问题由它解决。首先，若amount
// 不为正（< 0），就返回空数组（行{3}）；方法执行结束后，会返回一个数组，包含用来找零的各
// 个面额的硬币数量（最少硬币数）。接着，检查cache缓存。若结果已缓存（行{4}），则直接返
// 回结果；否则，执行算法。
// 我们基于coins参数（面额）解决问题。因此，对每个面额（行{5}），我们都计算newAmount
// （行{6}）的值，它的值会一直减小，直到能找零的最小钱数（别忘了本算法对所有的x < amount
// 都会计算makeChange结果）。若newAmount是合理的值（正值），我们也会计算它的找零结果（行
// {7}）。
// 最后，我们判断newAmount是否有效，minValue（最少硬币数）是否是最优解，与此同时
// minValue和newAmount是否是合理的值（{行10}）。若以上判断都成立，意味着有一个比之前
// 更优的答案（行{11}。以5美分为例，可以给5便士或者1个5美分镍币，1个5美分镍币是最优解）。
// 最后，返回最终结果（行{12}）

function MinCoinChange(coins) {
  var coins = coins; //{1} 
  var cache = {}; //{2} 
  this.makeChange = function (amount) {
    var me = this;
    if (!amount) { //{3} 
      return [];
    }
    if (cache[amount]) { //{4} 
      return cache[amount];
    }
    let min = [], newMin, newAmount;
    for (let i = 0; i < coins.length; i++) { //{5} 
      let coin = coins[i];
      newAmount = amount - coin; //{6} 
      console.log(amount, 'amount')
      console.log(coin, 'coin')
      console.log(newAmount, '888')
      if (newAmount >= 0) {
        console.log(newAmount, '进入')
        newMin = me.makeChange(newAmount); //{7} 
      }
      console.log(newAmount, '999')
      if (
        newAmount >= 0 && //{8} 
        (newMin.length < min.length - 1 || !min.length)//{9} 
        && (newMin.length || !newAmount)) { //{10}) 
        min = [coin].concat(newMin); //{11} 
      }
    }
    console.log(min)
    return (cache[amount] = min); //{12} 
  };
}


var minCoinChange = new MinCoinChange([1, 5, 10, 25])
console.log(minCoinChange.makeChange(36))