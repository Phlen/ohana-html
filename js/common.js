/* Ajax load（）函数 */

$('#sidebar  a').click(function(){
    var url = $(this).attr('href');
    $('.main').load(url + ' .main');
    return false;
});
/* 边栏菜单下拉功能 */
$(function () {
    $(".sidebar li:has(ul)").click(function () {
        $(".sidebar li:has(ul)").find('ul').hide();
        $(this).find('ul').show();
    });


 /* header用户信息下拉 */
    $("#user-menu").hover(function () {
            $(".user-sub-menu").show("1000");
        },
        function () {
            $(".user-sub-menu").hide("1000");
        });

    $(".table li:has(ul)").click(function () {

        $(".table li:has(ul)").find('ul').hide();
        $(this).find('ul').show();
    });

    // $("#signup").validate();
})