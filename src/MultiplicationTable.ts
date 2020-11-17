export class MultiplicationTable {
  public render(start: number, end: number): string{
    //const result = ''
    if(!isValidInput(start, end))
    {
      return ''
    }
    else
    {
      const expressions = buildExpressions(start, end)
      return render(expressions)
    }
  }
}

function isValidInput(start: number, end: number): boolean
{
  return start <= 10 && start >= 1 && end <= 10 && end >= 1 && start <= end
}

class Expressions{
  factor1: number
  factor2: number
  product: number
  constructor(factor1: number, factor2: number, product: number){
    this.factor1 = factor1
    this.factor2 = factor2
    this.product = product
  }
}
function buildExpressions(start: number, end: number): Expressions[][]
{
  const result : Expressions[][] = []
  console.log('building expressions')
  for(let i = 0; i <= end - start; i++)
  {
    result[i] = []
    for(let k = 0; k <= i; k++)
    {
      //console.log("i = "+ i +" k = " + k)
      const expression = new Expressions(start + k, start + i, (start + i)*(start + k))
      //console.log('result[' + (i-start) + "][" + (j-start)+"] is "+ result[i-start][j-start].product)
      result[i].push(expression)
    }
  }
  return result
}
function render(expressions: Expressions[][]): string
{
  let result = ''
  for(let i = 0; i < expressions.length; i++)
  {
    for(let k = 0; k <= i; k++)
    {
      //console.log("adding expressions[" + i + "][" + k + "]")
      result += expressions[i][k].factor1 + '*' + expressions[i][k].factor2 + '=' + expressions[i][k].product + '  '
      if(k === i && k !== expressions.length - 1)
      {
        result = result.trimEnd()
        result += '\n'
      }
    }
  }
  result = result.trimEnd()
  return result
}
