/**
 * @Author: Arvay
 * @Date:   2017年10月10日15:56:06
 * @Last modified by:   Arvay
 * @Last modified time: 2017年10月10日15:56:07
 */
$(function() {
	$(".content").load('views/home.html');
	var urlType = getQueryString('type')//获取url参数
	/**
	 * 展开菜单
	 */
	var menuToggle = true;
	mui('header').on('tap', '.menuBtn', function() {
		if(menuToggle = !menuToggle) {
			$(".menuBtn").css('background', 'url(images/nav_icon.png)')
		} else {
			$(".menuBtn").css('background', 'url(images/nav_close_icon.png)')
		}
		$(".menu").slideToggle();
	})
	/**
	 * 打开菜单子选项
	 */
	mui('.menu').on('tap', 'li', function() {
		$(this).addClass("menuClick").find('span').slideDown(), $(this).siblings().removeClass('menuClick').find('span').slideUp();
	});
	mui('.menu').on('tap', '.menuClick', function() {
		$(this).removeClass('menuClick').find('span').slideUp();
	})
	/**
	 * 页面跳转
	 */
	mui('body').on('tap', '.hrefContact', function() {
		href.content("contactUs");
	});
	mui('body').on('tap', '.hrefMap', function() {
		href.map("siteMap");
	});
	mui('body').on('tap', '.hrefHome', function() {
		href.home("home");
	});
	mui('body').on('tap', '.hrefFQA', function() {
		localStorage.setItem('hrefId',$(this).attr('id'))
		href.FQA("FQA");
	});
	mui('body').on('tap', '.hrefConsul', function() {
		localStorage.setItem('hrefId',$(this).attr('id'))
		href.consultation("activityConsultation");
	});
	mui('body').on('tap', '.hrefVideo', function() {
		localStorage.setItem('hrefId',$(this).attr('id'))
		href.video("video");
	});
	mui('body').on('tap', '.hrefNews', function() {
		href.news("newsBox");
	});
	mui('body').on('tap', '.hrefactivityBox', function() {
		href.activityBox("activityBox");
	});
	//联系我们
	var href = {
		home: function(url) {
			hrefCommon(url);
		},
		content: function(url) {
			hrefCommon(url);
		},
		map: function(url) {
			hrefCommon(url);
		},
		FQA: function(url) {
			hrefCommon(url);
		},
		consultation: function(url) {
			hrefCommon(url);
		},
		video: function(url) {
			hrefCommon(url);
		},
		news: function(url) {
			hrefCommon(url);
		},
		activityBox: function(url) {
			hrefCommon(url);
		}
	}
	switch (urlType){
		case '1': // 视频
			localStorage.setItem('hrefId',0)
			href.content("video");
			break;
		case '2': // 活动报道
			localStorage.setItem('hrefId',1)
			href.content("video");
			break;
		case '3': // 宫颈癌概述
			localStorage.setItem('hrefId',0)
			href.consultation("activityConsultation");
			break;
		case '4': // 宫颈癌预防
			localStorage.setItem('hrefId',1)
			href.consultation("activityConsultation");
			break;
		case '5': // 常见问题
			localStorage.setItem('hrefId',0)
			href.FQA("FQA");
			break;
		case '6': // 常见问题
			localStorage.setItem('hrefId',1)
			href.FQA("FQA");
			break;
		default:
			break;
	}
	function getQueryString(name) {
	    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) {
	        return unescape(r[2]);
	    }
	    return null;
	}
	function hrefCommon(url) {
		$(".content").html("").load('views/' + url + '.html')
		$(".menu").slideUp(), mui(".mui-scroll-wrapper").scroll().refresh(), $(".menuBtn").css('background', 'url(images/nav_icon.png)');
		menuToggle = true
	}
});