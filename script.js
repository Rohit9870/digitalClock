
setInterval(showTime, 1000);

function showTime(){
	let time = new Date();
	let hour = time.getHours();
	let minute = time.getMinutes();
	let second = time.getSeconds();
	let am_pm ='AM';

	// if (hour < 10){
	// 	document.getElementById('hrs').innerHTML = "0"+ hour;
	// }
	// if (minute < 10){
	// 	document.getElementById('mins').innerHTML = "0"+ minute;
	// }
	// if (second < 10){
	// 	document.getElementById('secs').innerHTML = "0"+ second;
	// }
	if(hour == 0 || hour < 12){
		am_pm = 'AM';
		hour = hour;
	}else if(hour == 12){
		am_pm = 'PM';
		hour = hour;
	}else{
		am_pm = 'PM';
		hour = hour - 12;
	}
	hour = hour < 10 ?  "0" + hour : hour;
	minute = minute < 10 ? "0" + minute : minute;
	second = second < 10 ? "0" + second : second;
	document.getElementById('hrs').innerHTML = hour;
	document.getElementById('mins').innerHTML = minute;
	document.getElementById('secs').innerHTML = second;
	document.getElementById('ampm').innerHTML = am_pm;
	
}
showTime();
