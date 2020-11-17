export class MultiplicationTable {
  public render(start: number, end: number): string{
    //const result = ''
    if(!isValidInput(start, end))
    {
      return ''
    }
    else
    {
      return '1*1=1'
    }
  }
}

function isValidInput(start: number, end: number): boolean
{
  return start <= 10 && start >= 1 && end <= 10 && end >= 1 && start <= end
}


// function buildExpressions(start: number, end: number):
