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
	
	//상단높이 감지하기
	//  contentWindow.document 는 온라인에 연결되어야 실행된다
	//const hh = $("#header").get(0).contentWindow.document;
	//alert(hh);
	//const h = hh.find("#logo").height();
	//alert(h); //151.484 / 123.625
	const h = $("#logo").css("height");
	alert(h); //151.484 / 123.625
	
	
});/////////////////전체끝
