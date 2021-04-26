
const D = require('../src/index')
const { months, mons, days, dys } = require('../src/utils')

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
    expect(bDay.month).toBe(months[4])
})

test('D.mon', () => {
    expect(bDay.mon).toBe(mons[4])
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
    expect(d.minute).toBe(today.getMinutes())
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