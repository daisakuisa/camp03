// 名前に意味はありません。自由です。
// 名前に意味はありません。自由です。
$(document).ready(function () {
  // alert(1); //中身は今回適当に決めただけです
  // id="a"に対してクリックされたら
  $("#a").on("click", function () {
    // ここに書いていく
    $("#a").html("クリックされた");
    $("#a").css("color", "red");
    // $("#a").fadeOut(5000); //5秒
    // fadeInは消えている要素にしか効かない
    // $("#a").fadeIn(5000); //5秒
    $("#a").append("<p>pタグが入りました</p>");
    // p class="b"
    $(".b").hide(); //消すおまじない
    $(".b").fadeIn(2000);
    $(".b").countMaster();

    // clickの閉じタグ、消しちゃダメ
  });
  // これは$(document).readyの閉じタグ
});
