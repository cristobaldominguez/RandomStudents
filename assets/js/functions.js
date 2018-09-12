const RandomStudents = (() => {

	// Default variables
	const state = {
		date: new Date(2019, 0, 1, 13),		// Month number is 0 based
		increment: 10,						// Increment in minutes
		selector: '.slideshow',				//
		date_target: '.date',
		students: {
			first_ones: [
				'Alumno 01',
			],
			random_ones: [
				'Alumno Random 01',
				'Alumno Random 02',
			],
			last_ones: [
				'Alumno 02',
			]
		}
	}


	// CacheDom
	const slideshow = document.querySelector(state.selector)
	const date_html = document.querySelector(state.date_target)
	const html = slideshow.innerHTML
	
	// Add init function
	function init(stt) {
		state.students = { ...state.students, ...stt.students }
		this.state = { ...this.state, ...stt }
		const students_html = [...state.students.first_ones, ...state.students.random_ones.random(), ...state.students.last_ones]
							  .map(obj_generator)
							  .map(el => create_table(el))
							  .join('')

		slideshow.innerHTML = html + students_html
		date_html.innerHTML = this.state.date.toLocaleDateString('es-CL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
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