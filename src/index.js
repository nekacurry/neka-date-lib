class D {
	constructor(...args) {
		this._date = new Date(...args)
	}

  year() {
    return this.date.getFullYear()
  }

  yr() {
    return this.getFullYear() % 100
  }
}






// console.logs

const d = new D()
console.log(d.year())