'use strict';

  $(document).ready(function() {
        function filterPath(string) {
        return string
          .replace(/^\//,'')
          .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
          .replace(/\/$/,'');
        }
        let locationPath = filterPath(location.pathname);
        $('a[href*=#]').each(function() {
          let thisPath = filterPath(this.pathname) || locationPath;
          if (  locationPath == thisPath
          && (location.hostname == this.hostname || !this.hostname)
          && this.hash.replace(/#/,'') ) {
            let $target = $(this.hash), target = this.hash;
            if (target) {
              let targetOffset = $target.offset().top;
              $(this).click(function(event) {
                event.preventDefault();
                $('html, body').animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });
});
  
