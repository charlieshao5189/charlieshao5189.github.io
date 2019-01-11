
/*!--------------------------------*\
   3-Jekyll Theme
   @author Peiwen Lu (P233)
   https://github.com/P233/3-Jekyll
\*---------------------------------*/

// Detect window size, if less than 1280px add class 'mobile' to sidebar therefore it will be auto hide when trigger the pjax request in small screen devices.
if ($(window).width() <= 10000="" 1280)="" {="" $('#sidebar').addclass('mobile')="" }="" variables="" var="" sidebar="$('#sidebar')," container="$('#post')," content="$('#pjax')," button="$('#icon-arrow');" tags="" switcher="" clickhandler="function(id)" return="" function()="" if($(this).attr('id')="=$('.active').attr('id')){" if($('#posts-list').css('display')="='none'){" $('#posts-list').css('display','block');="" $('#sidebar').css('width','585px')="" }else{="" $('#posts-list').css('display','none');="" $('#sidebar').css('width','165px')="" $(this).addclass('active').siblings().removeclass('active');="" $('.pl__all').hide();="" $('.'="" +="" id).delay(50).fadein(350);="" };="" $('#tags__ul="" li').each(function(index){="" $('#'="" $(this).attr('id')).on('click',="" clickhandler($(this).attr('id')));="" });="" if="" has="" class="" 'mobile',="" hide="" it="" after="" clicking.="" $('.pl__all').on('click',="" (sidebar.hasclass('mobile'))="" $('#sidebar,="" #pjax,="" #icon-arrow').addclass('fullscreen');="" enable="" fullscreen.="" $('#js-fullscreen').on('click',="" (button.hasclass('fullscreen'))="" sidebar.removeclass('fullscreen');="" button.removeclass('fullscreen');="" content.delay(300).queue(function(){="" $(this).removeclass('fullscreen').dequeue();="" else="" sidebar.addclass('fullscreen');="" button.addclass('fullscreen');="" content.delay(200).queue(function(){="" $(this).addclass('fullscreen').dequeue();="" $('#mobile-avatar').on('click',="" function(){="" pjax="" $(document).pjax('#avatar,="" #mobile-avatar,="" .pl__all',="" '#pjax',="" fragment:="" timeout:="" $(document).on({="" 'pjax:click':="" content.removeclass('fadein').addclass('fadeout');="" nprogress.start();="" },="" 'pjax:start':="" content.css({'opacity':0});="" 'pjax:end':="" nprogress.done();="" container.scrolltop(0);="" content.css({'opacity':1}).removeclass('fadeout').addclass('fadein');="" afterpjax();="" re-run="" scripts="" for="" post="" function="" afterpjax()="" open links="" in="" new="" tab="" $('#post__content="" a').attr('target','_blank');="" generate="" toc="" h1="" h2="" and="" h3="" empty="" an="" entry="" toc.empty().append('<li=""><a href="#post__title" class="js-anchor-link">' + $('#post__title').text() + '</a>');

  // Generate entries for h2 and h3
  $('#post__content').children('h2,h3').each(function() {
    // Generate random ID for each heading
    $(this).attr('id', function() {
      var ID = "",
          alphabet = "abcdefghijklmnopqrstuvwxyz";

      for(var i=0; i < 5; i++) {
        ID += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      }
      return ID;
    });

    if ($(this).prop("tagName") == 'H2') {
      toc.append('<li class="post__toc-li post__toc-h2"><a href="#' + $(this).attr('id') + '" class="js-anchor-link">' + $(this).text() + '</a></li>');
    } else {
      toc.append('<li class="post__toc-li post__toc-h3"><a href="#' + $(this).attr('id') + '" class="js-anchor-link">' + $(this).text() + '</a></li>');
    }
  });

  // Smooth scrolling
  $('.js-anchor-link').on('click', function() {
    var target = $(this.hash);
    container.animate({scrollTop: target.offset().top + container.scrollTop() - 70}, 500, function() {
      target.addClass('flash').delay(700).queue(function() {
        $(this).removeClass('flash').dequeue();
      });
    });
  });

    //search
    $("#search-input").keyup(function(){
        //$("#s-box").hide("slow");
        var text = $("#search-input").val().toLowerCase();
        //console.log(text);

        if(text =="" || text==undefined){
            $("#pl__container a").show();
        }else{
            $("#pl__container a").hide();
            $(".pl__title").each(function(){
                var htmlstr = $(this).html().toLowerCase();
                if(htmlstr.indexOf(text) != -1){
                    console.log(htmlstr);
                    $(this).parent().show();
                }
            })
        }
    })


  // Lazy Loading Disqus
  // http://jsfiddle.net/dragoncrew/SHGwe/1/
  var ds_loaded = false,
      top = $('#disqus_thread').offset().top;
  window.disqus_shortname = $('#disqus_thread').attr('name');

  function check() {
    if ( !ds_loaded && container.scrollTop() + container.height() > top ) {
      $.ajax({
        type: 'GET',
        url: 'http://' + disqus_shortname + '.disqus.com/embed.js',
        dataType: 'script',
        cache: true
      });
      ds_loaded = true;
    }
  }check();
  container.scroll(check);
}afterPjax();

</=>