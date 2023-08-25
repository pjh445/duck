$(document).ready(function(){	
	
	//첫화면 fade슬라이드
	const slide = setInterval( fade , 2000 );
	let i = 3;
	function fade(){
		i--; // [2,1,0]
		if( i == 0){
			$("#index main img").fadeIn( 1000 );
			i = 3;
		} else {
			$("#index main img").eq( i ).fadeOut( 1000 );
		}
	}		
	
});/////////////////전체끝