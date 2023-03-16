$(function () {
  mainInit();

  //링크막아주기 넣기
  $(document).on('click', 'a[href="#"]', function (e) { e.preventDefault() })





})



function mainInit() {

  gnb_menu();
  visual();
  family();
  top_btn();
}





//메뉴
function gnb_menu() {

  let $gnbli = $('#header .nav >.gnb > li');
  let $subul = $('#header .nav .gnb li ul');
  let $menui=$('#header .nav .gnb >li >i');
  let $header = $('#header');
  
  $subul.hide().css('opacity', '1');;
  
  $menui.on('click',function(){
    $subul.show().css('z-index', '200');
  })


  $header.on('mouseleave', function () {
    $subul.hide();
  })
}

//
function visual(){



  let $bannerul=$('#visual .banner');
  let $bannerli=$('#visual .banner li');
  let $bannerimg=$('#visual .banner img');
  let $textbox=$('#visual .text-box');
  let $textboxul=$('#visual .text-box ul');
  let $textboxli=$('#visual .text-box ul li');
  let $h2=$('#visual .text-box ul li h2');
  let $p=$('#visual .text-box ul li p');
  let $paging=$('#visual .paging');
  let $pagingli=$('#visual .paging li');
  

  

  let cnt=0,length=0,w=0,timer=null, interval=3000,imgurl='';
  let current=0,old=0;
size=$bannerli.length;
w = $bannerli.width();
textw=$textboxli.length;

timer = setInterval(make, interval);

function make() {
  cnt++;
  if (cnt > size - 1) {
    cnt = 0;
  }

  $bannerimg.attr('src','images/visual'+(cnt+1)+'.png');
  $textboxli.animate({right:-textw}).hide();
  $textboxli.eq(cnt).show().css('opacity','1');

  $pagingli.removeClass('on');
  $pagingli.eq(cnt).addClass('on');
  
}


  $pagingli.on('click',function(){
    cnt = $(this).index();
    $bannerimg.attr('src','images/visual'+(cnt+1)+'.png');
    $textboxli.animate({right:-textw}).hide();
    $textboxli.eq(cnt).show().css('opacity','1');

    $pagingli.removeClass('on');
    $pagingli.eq(cnt).addClass('on');
    
    clearInterval(timer);
    timer = setInterval(make, interval);
  })


}


//패밀리사이트
function family(){
  $('#footer .sub').hide();
  $('#footer .family i').on('click',function(){
  $('#footer .sub').toggle();
  })
}



//탑버튼
function top_btn(){
  let $top=$('#footer .top');
  let $topli1=$('#footer .top ul li:nth-of-type(1)');
  let $topli2=$('#footer .top ul li:nth-of-type(2)');
  let $topli3=$('#footer .top ul li:nth-of-type(3)');
  let ty=0;
  let h = $('#header').height();
  
  
  $(window).on('scroll',function(){
    ty = $(window).scrollTop();
    if(ty>h){
      $top.show();
    }else{
      $top.hide();
    }
  })

  $topli1.click(function(){
    $('html, body').animate({scrollTop:600},400);
    return false;
  });

  $topli2.click(function(){
    $('html, body').animate({scrollTop:600},400);
    return false;
  });

  $topli3.click(function(){
    $('html, body').animate({scrollTop:0},400);
    return false;
  });
  
}