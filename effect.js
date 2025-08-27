$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
    $('.bannar').addClass('bannar-come');

    // hiện 3 ảnh trang trí
    $('.decoration-item').each(function(i){
        $(this).delay(500 * i).queue(function(next){
            $(this).css('opacity', 1);
            next();
        });
    });

    // vẫn giữ flow gốc để chạy tiếp
    $(this).fadeOut('slow').delay(6000).promise().done(function(){
        $('#balloons_flying').fadeIn('slow');
    });
});


	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

	function computeGap() {
  const $any = $('#b11,#b22,#b33,#b44,#b55,#b66,#b77').first();
  const W = $(window).width();
  const bw = ($any.length ? $any.outerWidth() : 90);     // độ rộng 1 bóng (px)
  // khoảng cách mục tiêu (sát vừa đẹp ~ 0.85 lần bề rộng bóng)
  let baseGap = bw * 0.85;

  // để chắc chắn KHÔNG tràn màn hình:
  // span tổng = 6*gap + bw (từ b11 đến b77 cộng 6 khoảng + 1 bóng)
  const maxGap = Math.max(40, (W - bw - 32) / 6);  // chừa ~32px lề an toàn
  return Math.min(baseGap, maxGap);
}

function arrangeBalloonsRow() {
  const W = $(window).width();
  const H = $(window).height();

  const vw = W / 2;             // tâm ngang
  const topY = Math.max(60, H * 0.30); // hàng chữ cách đỉnh ~30% (tối thiểu 60px)
  const gap = computeGap();

  // xếp 7 bóng quanh tâm, khoảng cách "gap" — luôn sát, không tràn
  $('#b11').stop(true).animate({ top: topY, left: vw - 3*gap }, 400);
  $('#b22').stop(true).animate({ top: topY, left: vw - 2*gap }, 400);
  $('#b33').stop(true).animate({ top: topY, left: vw - 1*gap }, 400);
  $('#b44').stop(true).animate({ top: topY, left: vw            }, 400);
  $('#b55').stop(true).animate({ top: topY, left: vw + 1*gap }, 400);
  $('#b66').stop(true).animate({ top: topY, left: vw + 2*gap }, 400);
  $('#b77').stop(true).animate({ top: topY, left: vw + 3*gap }, 400);
}
function moveBalloons() {
  // 1) dừng hiệu ứng bay tự do cũ
  $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop(true);

  // 2) đổi ID như file gốc để bước ghép chữ dùng các ID mới
  if ($('#b11').length === 0) { // đổi 1 lần thôi, tránh đổi lại sau khi resize
    $('#b1').attr('id','b11');
    $('#b2').attr('id','b22');
    $('#b3').attr('id','b33');
    $('#b4').attr('id','b44');
    $('#b5').attr('id','b55');
    $('#b6').attr('id','b66');
    $('#b7').attr('id','b77');
  }

  // 3) xếp thành hàng, responsive
  arrangeBalloonsRow();

  // 4) hiệu ứng chữ & mờ nhẹ như gốc
  $('.balloons, .balloon').css('opacity','0.9');
  $('.balloons h2, .balloon h2').fadeIn(3000);
}
$(window).on('resize orientationchange', function(){
  // Khi đã vào trạng thái ghép chữ (tức là đã có b11...), thì căn lại
  if ($('#b11').length) {
    arrangeBalloonsRow();
  }
});
$('#wish_message').off('click').on('click', function(){
  moveBalloons();
  $(this).fadeOut('slow').delay(3000).promise().done(function(){
    $('#story').fadeIn('slow');
  });
});


	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');