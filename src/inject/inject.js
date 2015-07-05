(function() {
    hideText = "Hide Sidebar";
    unhideText = "Unhide Sidebar";
    initText = hideText;

    if (localStorage["hideRedditSidebar"] === "hide") {
        $(".side").hide()
        $("#toggleSidebarHide").text(unhideText);
        initText = unhideText;
    }

    $("#header-bottom-right").append('<span class="separator">|</span> <a id="toggleSidebarHide" href="javascript:void(0)">' + initText + '</a>');

    $("#toggleSidebarHide").click(function() {
        if (localStorage["hideRedditSidebar"] === "hide") {
            $(".side").show();
            $("#toggleSidebarHide").text(hideText);
            localStorage["hideRedditSidebar"] = "unhide"
        } else {
            $(".side").hide();
            $("#toggleSidebarHide").text(unhideText);
            localStorage["hideRedditSidebar"] = "hide"
        }
    });
})();
