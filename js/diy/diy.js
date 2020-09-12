/**
 * Created by林墨白 on 2020/7/7.
 */


/*添加图片top*/
var top_up = "<img id='upj' class='upj' style='max-width: 1000%; transform: translate(-70px,-70px);' src='https://cdn.jsdelivr.net/gh/lete114/CDN/Use/up.gif' title='回到顶部' >";
/*添加到返回顶部按钮下*/
document.getElementById("go-up").innerHTML += top_up;

/* 手机客户端导航栏默认隐藏 */
var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
var menus_item_child = mobile_sidebar_menus.getElementsByClassName("menus_item_child");
var menus_expand = mobile_sidebar_menus.getElementsByClassName("expand");
for (var i = 0; i < menus_item_child.length; i++) {
    menus_item_child[i].style.display = "none";
    menus_expand[i].className += " closed";
}

// 可爱的Title
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(つェ⊂) 我藏好了哦~~';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(*´∇｀*) 被你发现啦~~' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});



// 气泡
function qipao() {
    $('#page-header').circleMagic({
        radius: 10,
        density: .2,
        color: 'rgba(255,255,255,.4)',
        clearOffset: 0.99
    });
}! function(p) {
    p.fn.circleMagic = function(t) {
        var o, a, n, r, e = !0,
            i = [],
            d = p.extend({ color: "rgba(255,0,0,.5)", radius: 10, density: .3, clearOffset: .2 }, t),
            l = this[0];

        function c() { e = !(document.body.scrollTop > a) }

        function s() { o = l.clientWidth, a = l.clientHeight, l.height = a + "px", n.width = o, n.height = a }

        function h() {
            if (e)
                for (var t in r.clearRect(0, 0, o, a), i) i[t].draw();
            requestAnimationFrame(h)
        }

        function f() {
            var t = this;

            function e() { t.pos.x = Math.random() * o, t.pos.y = a + 100 * Math.random(), t.alpha = .1 + Math.random() * d.clearOffset, t.scale = .1 + .3 * Math.random(), t.speed = Math.random(), "random" === d.color ? t.color = "rgba(" + Math.floor(255 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.random().toPrecision(2) + ")" : t.color = d.color }
            t.pos = {}, e(), this.draw = function() { t.alpha <= 0 && e(), t.pos.y -= t.speed, t.alpha -= 5e-4, r.beginPath(), r.arc(t.pos.x, t.pos.y, t.scale * d.radius, 0, 2 * Math.PI, !1), r.fillStyle = t.color, r.fill(), r.closePath() }
        }! function() {
            o = l.offsetWidth, a = l.offsetHeight,
                function() {
                    var t = document.createElement("canvas");
                    t.id = "canvas", t.style.top = 0, t.style.zIndex = 0, t.style.position = "absolute", l.appendChild(t), t.parentElement.style.overflow = "hidden"
                }(), (n = document.getElementById("canvas")).width = o, n.height = a, r = n.getContext("2d");
            for (var t = 0; t < o * d.density; t++) {
                var e = new f;
                i.push(e)
            }
            h()
        }(), window.addEventListener("scroll", c, !1), window.addEventListener("resize", s, !1)
    }
}(jQuery);
qipao()


// 设置页脚博主
$(document).ready(function(e) {
    $('.copyright').html('©2020 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> 林墨白');
});

/*鼠标点击出字*/

var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#FF0000"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
			3000,
			function() {
			    $i.remove();
			});
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}


/* 丝带 */
/**
 * Copyright (c) 2016 hustcc
 * License: MIT
 * Version: %%GULP_INJECT_VERSION%%
 * GitHub: https://github.com/hustcc/ribbon.js
**/
/*jshint -W030 */
! function() {
  function attr(node, attr, default_value) {
    return Number(node.getAttribute(attr)) || default_value;
  }

  // get user config
  var scripts = document.getElementsByTagName('script'),
    script = scripts[scripts.length - 1]; // 当前加载的script
  config = {
    z: attr(script, "zIndex", -1), // z-index
    a: attr(script, "alpha", 0.6), // alpha
    s: attr(script, "size", 150), // size
  };

  var canvas = document.createElement('canvas'),
    g2d = canvas.getContext('2d'),
    pr = window.devicePixelRatio || 1,
    width = window.innerWidth,
    height = window.innerHeight,
    f = config.s,
    q, t,
    m = Math,
    r = 0,
    pi = m.PI*2,
    cos = m.cos,
    random = m.random;
  canvas.width = width * pr;
  canvas.height = height * pr;
  g2d.scale(pr, pr);
  g2d.globalAlpha = config.a;
  canvas.style.cssText = 'opacity: ' + config.a + ';position:fixed;top:0;left:0;z-index: ' + config.z + ';width:100%;height:100%;pointer-events:none;';
  // create canvas
  document.getElementsByTagName('body')[0].appendChild(canvas);

  function redraw() {
    g2d.clearRect(0, 0, width, height);
    q = [{x: 0, y: height * 0.7 + f}, {x: 0, y: height * 0.7 - f}];
    while(q[1].x < width + f) draw(q[0], q[1]);
  }
  function draw(i, j) {
    g2d.beginPath();
    g2d.moveTo(i.x, i.y);
    g2d.lineTo(j.x, j.y);
    var k = j.x + (random()*2-0.25)*f, n = line(j.y);
    g2d.lineTo(k, n);
    g2d.closePath();
    r -= pi / -50;
    g2d.fillStyle = '#'+(cos(r)*127+128<<16 | cos(r+pi/3)*127+128<<8 | cos(r+pi/3*2)*127+128).toString(16);
    g2d.fill();
    q[0] = q[1];
    q[1] = {x: k, y: n};
  }
  function line(p){
    t = p + (random() * 2 - 1.1) * f;
    return (t > height || t < 0) ? line(p) : t;
  }

  document.onclick = redraw;
  document.ontouchstart = redraw;
  redraw();
}();
