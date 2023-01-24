var l = new LanguageSelector();
window.onload = function () {
    $(document).on("change", "#langSelector", async function () {
        l = new LanguageSelector();
        var s = $(this).children("option:selected").val();
        l.setLang(s);
        window.location = window.location
    });
    if (JSON.stringify(l) === '{}') {
        obje = keep_lang(l)
        obje.parse();
    } else {
        l.parse();
    }
}

function keep_lang(l) {
    l.setLang(localStorage.getItem("lang"));
    return l
}