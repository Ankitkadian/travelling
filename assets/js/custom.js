/*Bootstrap modal custom*/
$('.modal').on("hidden.bs.modal", function (e) {
    if ($('.modal:visible').length) {
        $('.modal-backdrop').first().css('z-index', parseInt($('.modal:visible').last().css('z-index')) - 10);
        $('body').addClass('modal-open');
    }
}).on("show.bs.modal", function (e) {
    if ($('.modal:visible').length) {
        $('.modal-backdrop.in').first().css('z-index', parseInt($('.modal:visible').last().css('z-index')) + 10);
        $(this).css('z-index', parseInt($('.modal-backdrop.in').first().css('z-index')) + 10);
    }
});
/*Bootstrap modal custom  ends*/

/*input type=file*/

'use strict';

;
(function (document, window, index) {
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function (input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function (e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });

        // Firefox bug fix
        input.addEventListener('focus', function () {
            input.classList.add('has-focus');
        });
        input.addEventListener('blur', function () {
            input.classList.remove('has-focus');
        });
    });
}(document, window, 0));

/*input type=file ends*/


/*input type number*/
$ = jQuery;

jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function () {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

});
/*input type number ends*/

/*owl carousel starts*/
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 2,
            nav: true,
            loop: false
        }
    }
});
/*owl carousel ends*/

/*accordion starts*/
$(function () {
    var icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };
    $(".accordion").accordion({
        icons: icons,
        heightStyle: "content",
        collapsible: true,
        active: false
    });
    $("#toggle").button().on("click", function () {
        if ($(".accordion").accordion("option", "icons")) {
            $(".accordion").accordion("option", "icons", null);
        } else {
            $(".accordion").accordion("option", "icons", icons);
        }
    });
});
/*accordion ends*/

/*bootstrap calender*/
$(document).ready(function () {
    var date_input = $('input[name="date"]'); //our date input has the name "date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    });
})
/*bootstrap calender ends*/

document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 20,
        backSpeed: 20,
        startDelay: 1000,
        loop: false,
        loopCount: Infinity,
        onComplete: function (self) {
            prettyLog('onComplete ' + self)
        },
        preStringTyped: function (pos, self) {
            prettyLog('preStringTyped ' + pos + ' ' + self);
        },
        onStringTyped: function (pos, self) {
            prettyLog('onStringTyped ' + pos + ' ' + self)
        },
        onLastStringBackspaced: function (self) {
            prettyLog('onLastStringBackspaced ' + self)
        },
        onTypingPaused: function (pos, self) {
            prettyLog('onTypingPaused ' + pos + ' ' + self)
        },
        onTypingResumed: function (pos, self) {
            prettyLog('onTypingResumed ' + pos + ' ' + self)
        },
        onReset: function (self) {
            prettyLog('onReset ' + self)
        },
        onStop: function (pos, self) {
            prettyLog('onStop ' + pos + ' ' + self)
        },
        onStart: function (pos, self) {
            prettyLog('onStart ' + pos + ' ' + self)
        },
        onDestroy: function (self) {
            prettyLog('onDestroy ' + self)
        }
    });

    document.querySelector('.toggle').addEventListener('click', function () {
        typed.toggle();
    });
    document.querySelector('.stop').addEventListener('click', function () {
        typed.stop();
    });
    document.querySelector('.start').addEventListener('click', function () {
        typed.start();
    });
    document.querySelector('.reset').addEventListener('click', function () {
        typed.reset();
    });
    document.querySelector('.destroy').addEventListener('click', function () {
        typed.destroy();
    });
    document.querySelector('.loop').addEventListener('click', function () {
        toggleLoop(typed);
    });

    var typed2 = new Typed('#typed2', {
        strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],
        typeSpeed: 0,
        backSpeed: 0,
        fadeOut: true,
        loop: true
    });
    document.querySelector('.loop2').addEventListener('click', function () {
        toggleLoop(typed2);
    });

    new Typed('#typed3', {
        strings: ['My strings are: <i>strings</i> with', 'My strings are: <strong>HTML</strong>', 'My strings are: Chars &times; &copy;'],
        typeSpeed: 0,
        backSpeed: 0,
        smartBackspace: true,
        loop: true
    });

    new Typed('#typed4', {
        strings: ['Some strings without', 'Some HTML', 'Chars'],
        typeSpeed: 0,
        backSpeed: 0,
        attr: 'placeholder',
        bindInputFocusEvents: true,
        loop: true
    });

    new Typed('#typed5', {
        strings: ['1 Some <i>strings</i> with', '2 Some <strong>HTML</strong>', '3 Chars &times; &copy;'],
        typeSpeed: 0,
        backSpeed: 0,
        shuffle: true,
        cursorChar: '_',
        smartBackspace: false,
        loop: true
    });

    new Typed('#typed6', {
        strings: ['npm install^1000\n`installing components...` ^1000\n`Fetching from source...`'],
        typeSpeed: 40,
        backSpeed: 0,
        loop: true
    });
});

function prettyLog(str) {
    console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function toggleLoop(typed) {
    if (typed.loop) {
        typed.loop = false;
    } else {
        typed.loop = true;
    }
}
