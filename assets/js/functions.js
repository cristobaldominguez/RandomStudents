const RandomStudents = (() => {

	// Default variables
	const state = {
		date: new Date(2018, 8, 28, 19),
	}

	const students = {
		starting_ones: [
			'Carolina Cuevas',
			'Stephanie Chacin',
			'Pablo Bravo',
			'María Paz Romero',
		],
		random_ones: [
			'Juan Carlos Mujica',
			'Carol Torres',
			'Natalie Aguayo',
			'Oriele Nieto',
		],
		last_ones: [
			'Patricia Espinoza',
			'Marco Barraza',
			'Nicolás Vallejos',
			'Mariana Jara',
		]

	}

	// CacheDom
	const slideshow = document.querySelector('.slideshow')
	
	// Add init function
	function init() {
		const html = slideshow.innerHTML
		const students_string = [...students.starting_ones, ...students.random_ones.random(), ...students.last_ones].map(obj_generator)
								.map(el => create_table(el))
								.join('')

		slideshow.innerHTML = html + students_string
	}
	
	// Functions
	Array.prototype.random = function() {
		for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
		return this;
	}

	function get_hour(hour) {
		const increment = (hour * 10) * 60000
		const data = new Date(state.date.getTime() + increment)
		return data.toLocaleTimeString('es-CL', { hour12: false, hour: '2-digit', minute: '2-digit' })
	}

	const obj_generator = (name, index) => ({ 'name': name, 'hour': get_hour(index) })
	const create_table = (student) => (`<tr><td class="col-md-8">${student.name}</td><td class="col-md-4 text-center">${student.hour}</td></tr>`)

	// Outside Exposition of Functions and Variables
	return {
		init
	}
})()

RandomStudents.init()