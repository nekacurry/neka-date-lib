const { months, mons, days, dys } = require('./utils')

class D {
	constructor(...args) {
		this._date = new Date(...args)
	}

  numPadding(num) {
    if (num < 10) {
      num = '0' + num.toString()
    }
    return num
  }

  get year() {
    return this._date.getFullYear()
  }

  get yr() {
    return this._date.getFullYear() % 100
  }

  get month() {
    return months[this._date.getMonth()]
  }

  get mon() {
    return mons[this._date.getMonth()]
  }

  get day() {
    return days[this._date.getDay()]
  } 

  get dy() {
    return dys[this._date.getDay()]
  } 

  get date() {
    return this._date.getDate()
  }

  get hour() {
    return this.numPadding(this._date.getHours())
  }

  get hr() {
    return this._date.getHours()
  }

  get minute() {
    return this.numPadding(this._date.getMinutes())
  }

  get min() {
    return this._date.getMinutes()
  }

  get second() {
    return this.numPadding(this._date.getSeconds())
  }

  get sec() {
    return this._date.getSeconds()
  }

  format(dateFormat = 'M, D, Y') {
    const dateDict = {
      Y: this.year,
      y: this.yr,
      M: this.month,
      m: this.mon,
      D: this.day,
      d: this.dy,
      H: this.hour,
      h: this.hr,
      I: this.minute,
      i: this.min,
      S: this.second,
      s: this.sec
    }
    let output = ''
    for (let i = 0; i < dateFormat.length; i++) {
      if (dateDict[dateFormat[i]] === undefined) {
        output += dateFormat[i]
      } else {
        output += dateDict[dateFormat[i]]
      }
    }

  return output
  }

  when () {
    const when = new D()
    const calcYear = this.year - when.year
    const calcMonth = this._date.getMonth() - when._date.getMonth() + (calcYear * 12)
    const calcDay = this._date.getDay() - when._date.getDay()
    const calcHours = this._date.getHours() - when._date.getHours() + (calcDay * 24)

    if (calcMonth > 11) {
      return `This is ${calcYear} year(s) from now`
    } else if (calcMonth < -11) {
      return `This was ${Math.abs(calcYear)} year(s) ago`
    } else if (calcMonth > 0) {
      return `This is ${calcMonth} month(s) from now`
    } else if (calcMonth < 0) {
      return `This was ${Math.abs(calcMonth)} month(s) ago`
    } else if (calcHours > 23) {
      return `This is ${Math.abs(calcDay)} day(s) from now`
    } else if (calcHours < -23) {
      return `This was ${Math.abs(calcDay)} day(s) ago`
    } else {
      return 'Enter a date: (Year, Month, Day, Hour, Minutes, Seconds)'
    }
  }
}

/**
 * class D create a new date
 * Year getter
 * @param {number} @returns the full year
 * Shortened year getter
 * @param {number} @returns the last 2 digits of year
 * Month getter
 * @param {number} @returns the full month name
 * Shortened month getter
 * @param {number} @returns the first 3 letters of month name
 * Day getter
 * @param {number} @returns the day of the week as full word
 * Shortened day getter
 * @param {number} @returns the first 3 letters of the day word
 * Date getter
 * @param {number} @returns the date
 * Hour getter
 * @param {number} @returns the hour of the date, padded with 0 if single digit
 * Shortened hour getter
 * @param {number} @returns the hour of the date, unpadded
 * Minute getter
 * @param {number} @returns the minutes of the date, padded with 0 if single digit
 * Shortened minute getter
 * @param {number} @returns the minutes of the date, unpadded
 * Seconds getter
 * @param {number} @returns the seconds of the date, padded with 0 if single digit
 * Shortened seconds getter
 * @param {number} @returns the seconds of the date, unpadded
 */




// console.logs

// const d = new D()
// console.log(d.year)
// console.log(d.yr) 

module.exports = D