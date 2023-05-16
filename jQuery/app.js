// -----------------------------------------TASK 1

$("h2.head").css("background-color", "green");
$(".inner").css("font-size", "35px");

// -----------------------------------------TASK 2

$("a[href^='https://']").attr("target", "_blank");

// -----------------------------------------TASK 3
$(document).ready(function(){
    $('h3').each(function(){
        let header = $(this);
        let div = header.next('div');
        div.insertBefore(header);
    });
});

// -----------------------------------------TASK 4
$(document).ready(function(){
    const isChecked = $("input[type='checkbox']");
    isChecked.change(function(){
        let checkedCount = isChecked.filter(':checked').length;
        if(checkedCount === 3) {
            isChecked.prop('disabled', true);
        }
    });
});
