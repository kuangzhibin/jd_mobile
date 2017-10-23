window.onload = function () {
  initHeader()
}

function initHeader () {
  var $jd_header_box = document.querySelector('.jd_header_box')
  var $jd_banner_height = document.querySelector('.jd_banner').offsetHeight
  console.log($jd_banner_height)
  window.addEventListener('scroll', function () {
    // background: rgba(242, 26, 76, 0);
    var sTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(sTop < $jd_banner_height){
      var opt = sTop/$jd_banner_height;
      $jd_header_box.style.background = 'rgba(242, 26, 76,'+opt+')'
    }else{
      $jd_header_box.style.background = 'rgba(242, 26, 76, 1)'
    }
  })

}