(function ($) {

    "use strict";

    $("#contact").validate({
        invalidHandler: function() {
            $('.errorContent').fadeIn(1000);
            $('.successContent').fadeOut(500);
        },
        messages: {
            name: {required: '氏名は必ず入力してください。'},
            email: {required: 'メールアドレスは必ず入力してください。'},
            message: {required: 'メッセージは必ず入力してください。'},
        }
    });

})(jQuery);


