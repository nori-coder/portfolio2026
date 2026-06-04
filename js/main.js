$(function () {

    /*=================================================
        スクロール時の画像フェード表示
        ===================================================*/
    $(window).on("scroll", function () {
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();

        // 既存のタイトル表示処理
        $(".section-title").each(function () {
            if ($(this).hasClass("slideTitle")) return;
            let target = $(this).offset().top;
            if (scroll > target - windowHeight + $(this).height() / 2) {
                $(this).addClass("slideTitle");
            }
        });

        // --- 花の出現 ---
        $(".deco").each(function () {
            if ($(this).hasClass("is-show")) return; // すでに表示されてたらスルー

            let target = $(this).offset().top;
            // 画面の territoire（下から10%くらいの位置）に入ったら出現
            if (scroll > target - windowHeight + 50) {
                $(this).addClass("is-show");
            }
        });
    });
    /*=================================================
    WORKS 横スクロール（矢印）
    ===================================================*/
    $('.arrow.right').on('click', function () {
        const track = $('.works-track');
        const scrollAmount = track.outerWidth();

        track.animate(
            { scrollLeft: track.scrollLeft() + scrollAmount },
            400
        );
    });

    $('.arrow.left').on('click', function () {
        const track = $('.works-track');
        const scrollAmount = track.outerWidth();

        track.animate(
            { scrollLeft: track.scrollLeft() - scrollAmount },
            400
        );
    });

    /*=================================================
    スムーススクロール
    ===================================================*/
    $('a[href^="#"]').on('click', function (e) {

        let target = $(this).attr('href');

        if (target === "#") return;

        e.preventDefault();

        let $target = $(target);

        if ($target.length) {
            $('html, body').animate(
                {
                    scrollTop: $target.offset().top
                },
                600
            );
        }
    });

    /*=================================================
    トップに戻る
    ===================================================*/
    let pagetop = $(".scroll-circle");
    // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
    pagetop.hide();

    // スクロールイベント（スクロールされた際に実行）
    $(window).scroll(function () {
        // スクロール位置が700pxを超えた場合
        if ($(this).scrollTop() > 700) {
            // トップに戻るボタンを表示する
            pagetop.fadeIn();

            // スクロール位置が700px未満の場合
        } else {
            // トップに戻るボタンを非表示にする
            pagetop.fadeOut();
        }
    });

    // クリックイベント（ボタンがクリックされた際に実行）
    pagetop.click(function () {
        // 0.5秒かけてページトップへ移動
        $("body,html").animate({ scrollTop: 0 }, 500);

        return false;
    });
});



