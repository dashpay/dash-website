/**
 * Created by cwilliams on 1/9/17.
 */

;(function($) {
  'use strict';

  $(document).ready(function() {
    $('.wallet-tile a').click(function(event){
      event.stopImmediatePropagation();
    })
  });

}(jQuery));
