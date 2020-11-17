import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  // beforeEach(() => {
  //   const table = new MultiplicationTable()
  // })
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })

  it('start should not be greater than end', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })

  it('should have input between 1-10', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })
  it('should render multiplication table of (2, 4)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16')
  })
  it('should render multiplication table of (8, 10)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 8
    const end = 10

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('8*8=64\n8*9=72   9*9=81\n8*10=80  9*10=90  10*10=100')
  })
})
