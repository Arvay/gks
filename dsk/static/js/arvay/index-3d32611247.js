$(function() {
	function n(n) {
		document.all ? (document.body.style.behavior = "url(#default#homepage)", document.body.setHomePage(n)) : alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!")
	}
	$("body").bind("input propertychange", function() {
		var n = $(".el-input__inner").val();
		$(".indexSearch").show(), $(".type-in").html(n), $(".subnav,.footerNav,.indexLive,.indexBox,.contactUs,.indexFQA").hide()
	}), $(".find_nav li").hover(function() {
		$(this).fadeIn("a").addClass("navHover").siblings().removeClass("navHover"), $(this).find(".navList").slideDown(300), $(this).siblings().find(".navList").removeClass("flipInX").hide(), $(this).find("i").slideDown(300), $(this).siblings().find("i").hide()
	}, function() {
		$(this).find("i").hide(), $(this).find(".navList").removeClass("flipInX").hide()
	}), $(".find_nav li").mouseover(function() {
		$(this).addClass("hoverSpan")
	}), $(".find_nav li").mouseout(function() {
		$(this).removeClass("hoverSpan")
	}), $(".siteMap").click(function() {
		window.location.href = "contactUs.html?page=0", localStorage.setItem("contact", "false")
	}), $(".contact").click(function() {
		window.location.href = "contactUs.html?page=1", localStorage.setItem("contact", "true")
	}), $(".more_icon2").click(function() {
		window.location.href = "FQA.html"
	}), $(".more_icon").click(function() {
		window.location.href = "classroom.html?page=0"
	}), $(".addcollect").click(function() {
		var n = -1 != navigator.userAgent.toLowerCase().indexOf("mac") ? "Command/Cmd" : "CTRL";
		document.all ? window.external.addFavorite("http://ccp.alihealth.cn/", "中华预防医学会") : window.sidebar ? window.sidebar.addPanel("中华预防医学会", "http://ccp.alihealth.cn/", "") : alert("您可以尝试通过快捷键" + n + " + D 加入到收藏夹~")
	}), $("body").on("click", ".videoBox", function() {
		window.location.href = "dskLive.html?page=0"
	}), $(".homepage").click(function() {
		n("http://ccp.alihealth.cn/")
	}), $("footer").load("footer.html")
});