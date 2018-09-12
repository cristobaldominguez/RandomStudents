const RandomStudents = (() => {

	// Default variables
	const state = {
		date: new Date(2019, 0, 1, 13),		// Month number is 0 based
		increment: 10,						// Increment in minutes
		selector: '.slideshow'				// 
	}

	const students = {
		first_ones: [
			'Alumno 01',
			'Alumno 02',
		],
		random_ones: [
			'Alumno Random 01',
			'Alumno Random 02',
			'Alumno Random 03',
			'Alumno Random 04',
			'Alumno Random 05',
			'Alumno Random 06',
			'Alumno Random 07',
			'Alumno Random 08',
		],
		last_ones: [
			'Alumno 03',
			'Alumno 04',
		]

	}

	// CacheDom
	const slideshow = document.querySelector(state.selector)
	const html = slideshow.innerHTML
	
	// Add init function
	function init(stt) {
		this.state = {...this.state, ...stt}
		const students_html = [...students.first_ones, ...students.random_ones.random(), ...students.last_ones]
							  .map(obj_generator)
							  .map(el => create_table(el))
							  .join('')

		slideshow.innerHTML = html + students_html
	}

	// Functions
	Array.prototype.random = function() {
		for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
		return this;
	}

	function get_hour(hour) {
		const increment = (hour * state.increment) * 60000
		const data = new Date(state.date.getTime() + increment)
		return data.toLocaleTimeString('es-CL', { hour12: false, hour: '2-digit', minute: '2-digit' })
	}

	const obj_generator = (name, index) => ({ 'name': name, 'hour': get_hour(index) })
	const create_table = student => (`<tr><td class="col-md-8">${ student.name }</td><td class="col-md-4 text-center">${ student.hour }</td></tr>`)

	// Outside Exposition of Functions and Variables
	return {
		init
	}
})()