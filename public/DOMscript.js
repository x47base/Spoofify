
function remove_other() {
	document.querySelector('.active-tab').classList.remove('active-tab')
}

document.addEventListener('DOMContentLoaded', function(){
	
	document.querySelectorAll('.sidebar__link').forEach(element => {
		element.addEventListener('click',function(){
			remove_other()
			element.children[0].classList.add('active-tab')
		})
	})

	document.querySelectorAll('.modal-btn')[0].addEventListener('click',function(){
		document.querySelectorAll('.modal')[0].remove()
	})

})
