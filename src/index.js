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
}






// console.logs

// const d = new D()
// console.log(d.year)
// console.log(d.yr) 

module.exports = D