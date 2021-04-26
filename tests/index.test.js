
const D = require('../src/index')

const today = new Date()
const d = new D()
const bDay = new D(1998, 4, 9)

test('D.year', () => {
    expect(d.year).toBe(today.getFullYear())
    expect(bDay.year).toBe(1998)
})

test('D.yr', () => {
    expect(d.yr).toBe( today.getFullYear() % 100)
    expect(bDay.yr).toBe(98)
})

test('D.month', () => {
    expect(bDay.month).toBe('April')
})

test('D.mon', () => {
    expect(bDay.mon).toBe('Apr')
})