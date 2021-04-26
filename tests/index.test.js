
const D = require('../src/index')
const { months, mons, days, dys } = require('../src/utils')

const today = new Date()
const d = new D()
const bDay = new D('Apr 9, 1998 14:04:01')

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

test('D.day', () => {
    expect(d.day).toBe(days[today.getDay()])
})

test('D.dy', () => {
    expect(d.dy).toBe(dys[today.getDay()])
})

test('D.date,', () => {
    expect(d.date).toBe(today.getDate())
})

test('D.hour', () => {
    expect(d.hour).toBe(today.getHours())
})

test('D.hr', () => {
    expect(d.hr).toBe(today.getHours())
})

test('D.minute', () => {
    expect(bDay.minute).toBe('04')
})

test('D.min', () => {
    expect(d.min).toBe(today.getMinutes())
})

test('D.second', () => {
    expect(d.second).toBe(today.getSeconds())
})

test('D.sec', () => {
    expect(d.sec).toBe(today.getSeconds())
})