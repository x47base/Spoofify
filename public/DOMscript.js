/*
import {
	BsPlayFill,
	BsFillPauseFill
} from "react-icons/bs";
import { TiImageOutline } from "react-icons/ti";
  
const SideBarIcon = ({ icon, classes }) => {
	return (
	  <div className="sidebar-icon">
		<div className={classes}>{icon}</div>
	  </div>
	);
};
*/

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


	let current_title = document.getElementById('songCurrentlyPlaying')
	let current_time = document.getElementById('songCurrentTime')
	let current_time_slider = document.getElementById('songCurrentTimeSlider')
	let current_max_time = document.getElementById('songLength')
	
	let btnNeffex = document.getElementById('btn-FightBack-Neffex')
	let audioNeffex = document.getElementById('sound-FightBack-Neffex')
	btnNeffex.onclick = function(){
		if (audioNeffex.paused == true){
			audioNeffex.src = "./sounds/Neffex-FightBack.mp3"
			audioNeffex.play()
			current_title.innerText = 'Fight Back - Neffex'
			current_time.innerText = audioNeffex.currentTime
			
			current_max_time.innerText = audioNeffex.duration
		} else {
			audioNeffex.pause()
			current_title.innerText = 'Untitled'
			current_time.innerText = "0:00"
			
			current_max_time.innerText = "0.00"
		}
	}

	while(audioNeffex.paused != true){
		current_time_slider.value = audioNeffex.currentTime
		wait(1)
	}
})
