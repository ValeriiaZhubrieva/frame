$(document).ready(function () {

    $('input:checkbox').change(
        function () {
            if ($(this).is(':checked')) $("body").removeClass("disabled");
            else $("body").addClass("disabled");
        });

    $(":radio").change(function () {
        var radio = $(this).parents(".page-section__options").find(':radio');
        var countRadio = 0;
        $(radio).each(function () {
            if($(this).is(':checked')) countRadio++;
        });
        if (countRadio == radio.length / 2) $("body").removeClass("disabled");   
    });

    $(".form__input").change(function () {
        var isValid = true;
        $(".form__input").each(function () {
            if ($(this).val() == "") isValid = false;
        });
        if (isValid) $("body").removeClass("disabled");
    });
});