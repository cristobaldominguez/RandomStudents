Array.prototype.random = function() {
	for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
	return this;
}

const date = new Date(2018, 8, 28, 19)

function get_hour(hour) {
	const increment = (hour * 10) * 60000
	const data = new Date(date.getTime() + increment)
	return data.toLocaleTimeString('es-CL', { hour12: false, hour: '2-digit', minute: '2-digit' })
}

const obj_generator = (name, index) => ({ 'name': name, 'hour': get_hour(index) })
const create_table = (student) => (`<tr><td class="col-md-8">${student.name}</td><td class="col-md-4 text-center">${student.hour}</td></tr>`)


const starting_ones = [
	'Carolina Cuevas',
	'Stephanie Chacin',
	'Pablo Bravo',
	'María Paz Romero',
]

const random_ones = [
	'Juan Carlos Mujica',
	'Carol Torres',
	'Natalie Aguayo',
	'Oriele Nieto',
]

const last_ones = [
	'Patricia Espinoza',
	'Marco Barraza',
	'Nicolás Vallejos',
	'Mariana Jara',
]

const slideshow = document.querySelector('.slideshow')
const monday_txt = slideshow.innerHTML
const students = [...starting_ones, ...random_ones.random(), ...last_ones].map(obj_generator).map(el => create_table(el)).join('')

slideshow.innerHTML = monday_txt + students