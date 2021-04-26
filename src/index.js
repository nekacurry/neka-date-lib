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
      m: this.mth,
      D: this.date,
      d: this.dt,
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
}








// console.logs

// const d = new D()
// console.log(d.year)
// console.log(d.yr) 

module.exports = D