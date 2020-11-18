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
  for(let i = 0; i <= end - start; i++)
  {
    result[i] = []
    for(let k = 0; k <= i; k++)
    {
      //console.log("i = "+ i +" k = " + k)
      const expression = new Expressions(start + k, start + i, (start + i)*(start + k))
      result[i].push(expression)
    }
  }
  return result
}
function render(expressions: Expressions[][]): string
{
  const stringArr: string[] = []
  const indexArr: number[] = []
  stringArr[expressions.length - 1] = ''
  for(let k = 0; k < expressions.length; k++)
  {
    indexArr[k] = stringArr[expressions.length - 1].length
    stringArr[expressions.length - 1] += expressions[expressions.length - 1][k].factor1 + '*' + expressions[expressions.length - 1][k].factor2 + '=' + expressions[expressions.length - 1][k].product + '  '
  }
  for(let i = 0; i < expressions.length - 1;)
  {
    stringArr[i] = ''
    for(let m = 0; m <= i; m++)
    {
      while(stringArr[i].length < indexArr[m])
      {
        stringArr[i] += ' '
      }
      stringArr[i] += expressions[i][m].factor1 + '*' + expressions[i][m].factor2 + '=' + expressions[i][m].product + '  '
      if(m === i)
      {
        i++
        break
      }
    }
  }
  let result = stringArr[expressions.length - 1]
  for(let j = expressions.length - 2; j >= 0; j--)
  {
    result = stringArr[j].trimEnd() + '\n' + result
  }
  result = result.trimEnd()
  return result
}
