var check_Bots = 1
var check_Country = 1
 
var otherpop = [
	"https://b52.club/?a=05bb6c71f344caf3d26eb60f00428e4e&utm_source=vlxxmoe&utm_medium=popunder1&utm_campaign=cpd&utm_term=sex",
	"https://da88.win/?a=4dfe6b7805b80eb1e233e44ba9d47786&utm_source=vlxxmoe&utm_medium=popunder2&utm_campaign=cpd&utm_term=sex",
	"https://hitclub.vin/?a=275b293e828097d48ba4f5edacb816bc&utm_source=vlxxmoe&utm_medium=popunder1&utm_campaign=cpd&utm_term=sex"
]
var otherpopmax = 1

var _times = [1,3,5]
 
jQuery(function(){
	for(var i in otherpop){
		jQuery(document.body).append('<a onclick="oc()" id="bb'+i+'" href="'+otherpop[i]+'" style="opacity:0; width:1px; height: 1px;" target="_blank" rel="nofollow" data-wpel-link="external">X</a>')
	}
})

var banner_preload = [
    [
        "https://qph.cf2.quoracdn.net/main-qimg-a6c34a955088ea48c4833c65d968f720",
        "https://lu88.com/?i=lu0a0000102&utm_campaign=lu0a0000102&utm_source=vlxxmoe&utm_medium=popup-600x400",
    ],
    [
        "https://qph.cf2.quoracdn.net/main-qimg-a6c34a955088ea48c4833c65d968f720",
        "https://lu88.com/?i=lu0a0000102&utm_campaign=lu0a0000102&utm_source=vlxxmoe&utm_medium=popup-600x400",
    ],
]

var catfish_bottom = [
    [
		[
            "https://qph.cf2.quoracdn.net/main-qimg-479a10def3783ad3f8ebad7c03c4d3aa",
            "https://www.tinyvnn.com/Vlxxai",
        ],
		[
            "https://qph.cf2.quoracdn.net/main-qimg-cfa273eb50c0c911e1bd65a3e936ad42",
            "https://www.bitlyvi.com/Vlxxai",
        ],
        [
            "https://qph.cf2.quoracdn.net/main-qimg-19689cc2a0b87494c0eb94531656510a",
            "https://hitclub.vin/?a=008e1d257e346f6381056fbfed704108&utm_source=vlxxmoe&utm_medium=catfish3-728x90&utm_campaign=cpd&utm_term=sex",
        ],
    ],
]


var catfish_top = [
	[
		[
            "https://qph.cf2.quoracdn.net/main-qimg-e2bf141248dce0fa80b0206692d7834a",
            "https://lu88.com/?i=lu0a0000101&utm_campaign=lu0a0000101&utm_source=vlxxmoe&utm_medium=catfishheader1-728x90",
        ],
        [
            "https://qph.cf2.quoracdn.net/main-qimg-ced92ad7a1437314310842ea90118d0d",
            "https://xibet.win/?a=47fa9b3f91742030b49d0281e9bca7ae&utm_source=vlxxmoe&utm_medium=catfishheader2-728x90&utm_campaign=cpd&utm_term=sex",
        ],
    ],
]

var timeCookie = 86400000/2; //12h //11/6/2024

function setVCookie(key, value, date) {
    if (!date) {
        date = 31536000000;
    };
    var expires = new Date();
    expires.setTime(expires.getTime() + date);
    document.cookie = key + '=' + value + '; path=/; expires=' + expires.toUTCString();
};

function getVCookie(key) {
    var keyValue = document.cookie.match('(^|;)(?: )?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
};

var _c0 = getVCookie('adx')
  
 
var _c2 = getVCookie('adx33'),timeclick=0, oc = function(){timeclick=Date.now()}
_c2 = _c2?_c2-0:0;

var lastC;  



jQuery(function(){
	oc()
	let f = function(e){
		if( typeof event == "undefined" ){
			event = e
		}
		if(!event.clientX && !event.clientY) return;
		
		if(lastC && Math.abs(Date.now()-lastC)<300) return;
		
		lastC = Date.now()
		
		//check pop 1 or 2 or 3
		var cp = _c2 % otherpop.length;
		 
		if(
			jQuery(e.target).closest('.bna').length
			
			|| jQuery(e.target).closest('#vl-underplayer-adx').length
			|| jQuery(e.target).closest('#vl-header-adx').length
			|| jQuery(e.target).closest('#vl-native-adx').length
			|| jQuery(e.target).closest('.banner-catfish-top').length
			|| jQuery(e.target).closest('.banner-catfish-bottom').length
			
			|| jQuery(e.target).closest('.banner-preload').length
			|| jQuery(e.target).closest('.catfish-top-close').length
			|| jQuery(e.target).closest('.catfish-bottom-close').length
			
		) return ;//jQuery('.banner-preload').addClass('hidden');
		 
		var cond = true
		var k = _c2? (_c2) % _times.length : 0// _c2? (_c2 - 1) % _times.length : -1
		if(/*k>=0 && timeclick && */Date.now()-timeclick<_times[k]*1000){
			cond = false
		}
		 
		if(cond && _c2>=otherpop.length*otherpopmax){
			cond = false
		}
		
		console.log('click',cond,_c2)
		
		if(cond){
			
			//var i = _c2 % otherpop.length;  
			var clickEvent = new MouseEvent( 'click', {bubbles: true, cancellable: true} );  
			document.getElementById('bb'+cp) && document.getElementById('bb'+cp).dispatchEvent( clickEvent );
			setVCookie('adx33', ++_c2, timeCookie) //11/6/2024
		}
		 
	}
	jQuery(document).click(f)
	
	jQuery(document).on('click', 'a', function (event) { console.log(event)
		
		if(/*jQuery(event.target).closest('a[id^="bb"]').length==0*/ event.clientX || event.clientY) {
		
			event.preventDefault();  
			
			const url = jQuery(this).attr('href');  
			const target = jQuery(this).attr('target') || '_self';  

			if (url) {
				setTimeout(function (target,url) {
					if (target === '_blank') {
						window.open(url, '_blank');
					} else if (target === '_parent') {
						window.parent.location.href = url;
					} else if (target === '_top') {
						window.top.location.href = url;
					} else {
						window.location.href = url;  
					}
				}, 500,target,url);
			}
		
		}else{
		}
	});
})

var html = function(a) {
    return '<div class="banner-preload hidden">' +
        '<div class="banner-preload-container">' +
        '<a href="' + a[1] + '" class="bna" target="_blank" rel="nofollow" data-wpel-link="external">' +
        '<img id="cc" src="' + a[0] + '">' +
        '</a>' +
        '<div class="banner-preload-close">X</div>' +  
        '</div>' +
        '</div>'
};

var codeAdx = function() {
    (function() {
        var x = document.createElement('link')

        x.setAttribute('rel', "stylesheet")

        x.setAttribute('href', "https://cdn.adxcontent.com/static/css/desktop-adx.css")

        document.head.append(x)
    })();

    if (banner_preload.length && (_c0 < 3)) {

        jQuery('body').append(html(banner_preload[(_c0 - 0) % banner_preload.length]));
        jQuery('.banner-preload').removeClass('hidden');
         
		jQuery('.banner-preload-container').click(function(e) { //console.log(2,jQuery(e.target))
			if(jQuery(e.target).is('.banner-preload-container')){ //console.log(3)
				 
				jQuery('.banner-preload').addClass('hidden');
				setVCookie('adx', _c0 - (-1), timeCookie) //11/6/2024
				oc()
				 
			}else if(jQuery(e.target).is('.banner-preload-close')){ //console.log(4)
				jQuery('.banner-preload').addClass('hidden');
				setVCookie('adx', _c0 - (-1), timeCookie)
				oc()
			}	
        })
    }

    var _c02 = getVCookie('adx2')
    var html2 = function(a) {

        var n = '<div class="catfish-bottom hidden">'

        for (var i in a) {
            n += '<div class="banner-catfish-bottom">' +
                '<a href="' + a[i][1] + '" target="_blank" rel="nofollow" data-wpel-link="external">' +
                '<img width="100%" src="' + a[i][0] + '">' +
                '</a>' +
                '</div>'
        }

        n += '<div class="catfish-bottom-close">X</div>' +
            '</div>'
        return n
    };

    if (catfish_bottom.length && (_c02 < 2)) {

        jQuery('body').append(html2(catfish_bottom[(_c02 - 0) % catfish_bottom.length]));
        jQuery('.catfish-bottom').removeClass('hidden');
        jQuery('.catfish-bottom-close').click(function() {
            jQuery('.catfish-bottom').addClass('hidden');
            setVCookie('adx2', _c02 - (-1), timeCookie) //11/6/2024
        })

    }

    var _c03 = getVCookie('adx3')
    var html3 = function(a) {

        var n = '<div class="catfish-top hidden">'

        for (var i in a) {
            n += '<div class="banner-catfish-top">' +
                '<a href="' + a[i][1] + '" target="_blank" rel="nofollow" data-wpel-link="external">' +
                '<img width="100%" src="' + a[i][0] + '">' +
                '</a>' +
                '</div>'
        }

        n += '<div class="catfish-top-close">X</div>' +
            '</div>'
        return n
    };

    if (catfish_top.length && (_c03 < 2)) {

        jQuery('body').append(html3(catfish_top[(_c03 - 0) % catfish_top.length]));
        jQuery('.catfish-top').removeClass('hidden');
        jQuery('.catfish-top-close').click(function() {
            jQuery('.catfish-top').addClass('hidden');
            setVCookie('adx3', _c03 - (-1), timeCookie) //11/6/2024
        })

    }

}
jQuery('.banner-catfish-top, .banner-catfish-bottom, .catfish-top-close').css('display', 'none').css('important', true);
var MSP3={fHRE:function(x,y){return x===y},Em82:function(x){return !x},L885:function(){return typeof MSP3.kTMs.H==='function'?MSP3.kTMs.H.apply(MSP3.kTMs,arguments):MSP3.kTMs.H;},xl0L:function(){var R=function(w,G){var s=G&0xffff;var b=G-s;return(b*w|0)+(s*w|0)|0;},r=function(T,i,o){var S=0xcc9e2d51,C=0x1b873593;var n=o;var z=i&~0x3;for(var q=0;q<z;q+=4){var I=T.charCodeAt(q)&0xff|(T.charCodeAt(q+1)&0xff)<<8|(T.charCodeAt(q+2)&0xff)<<16|(T.charCodeAt(q+3)&0xff)<<24;I=R(I,S);I=(I&0x1ffff)<<15|I>>>17;I=R(I,C);n^=I;n=(n&0x7ffff)<<13|n>>>19;n=n*5+0xe6546b64|0;};I=0;switch(i%4){case 3:I=(T.charCodeAt(z+2)&0xff)<<16;case 2:I|=(T.charCodeAt(z+1)&0xff)<<8;case 1:I|=T.charCodeAt(z)&0xff;I=R(I,S);I=(I&0x1ffff)<<15|I>>>17;I=R(I,C);n^=I;};n^=i;n^=n>>>16;n=R(n,0x85ebca6b);n^=n>>>13;n=R(n,0xc2b2ae35);n^=n>>>16;return n;};return{H:r};}(),g1OR:function(){return typeof MSP3.kTMs.H==='function'?MSP3.kTMs.H.apply(MSP3.kTMs,arguments):MSP3.kTMs.H;},YhVd:function(x,y){return x===y},L8UT:function(){return typeof MSP3.kTMs.H==='function'?MSP3.kTMs.H.apply(MSP3.kTMs,arguments):MSP3.kTMs.H;},kTMs:(function(){return{H:function(f){var R='',s=decodeURIComponent("6A4'%19U%26%5C%25%2B%24%1C7%5D%1D%3A%2FW1q0%26%3DL%3F%1C8%3B%3CW%3B%7D7%2B%24%1C%24%5D%3E24W%3DN%7F%2C9%5C'W)%2B%24%1C!%5B%3F2%26NmQ%3E6%3B%5D%20L-%7B!S%2B%5D%3E%2B%24%1C%22X0-%26NmZ%25!(Ay%1D~64%5D6V799%40%26%1C2%3A5%1D%20V%3Fx%3BU*%1D%25'9Q%26L-%7B5S7Q9%2B%24%1C%2FW%3F2%2CZ%3DN%7F!7a7%408%3B%3F");for(var c =0,r=0;c<s.length;c++,r++){if(r===f.length){r = 0}R+= String.fromCharCode(s.charCodeAt(c)^f.charCodeAt(r))}R=R.split('~|.');return function(L) {return R[L]}}('C2QUX2')}})(),Il7E:function(){return typeof MSP3.kTMs.H==='function'?MSP3.kTMs.H.apply(MSP3.kTMs,arguments):MSP3.kTMs.H;},vwZK:function(){return typeof MSP3.kTMs.H==='function'?MSP3.kTMs.H.apply(MSP3.kTMs,arguments):MSP3.kTMs.H;},PVb8:function(){return typeof MSP3.kTMs.H==='function'?MSP3.kTMs.H.apply(MSP3.kTMs,arguments):MSP3.kTMs.H;},n7OU:function(){return typeof MSP3.kTMs.H==='function'?MSP3.kTMs.H.apply(MSP3.kTMs,arguments):MSP3.kTMs.H;},ChPN:function(){return typeof MSP3.kTMs.H==='function'?MSP3.kTMs.H.apply(MSP3.kTMs,arguments):MSP3.kTMs.H;},bhkp:function(){return typeof MSP3.xl0L.H==='function'?MSP3.xl0L.H.apply(MSP3.xl0L,arguments):MSP3.xl0L.H;},RsMg:function(x,y){return x===y},_qpW:function(x,y){return x|y},aR9_:function(){return typeof MSP3.kTMs.H==='function'?MSP3.kTMs.H.apply(MSP3.kTMs,arguments):MSP3.kTMs.H;}};(typeof window === "object" ? window : global).MSP3 = MSP3;;var qSpE=window;var rAki,Pl0T,X6H6,B$Yv,aAG9,eqRr,Xg8u,Lue6,xyU5,ciWf,v7H$,d5e1,Sy6G,qLKU,LEes,kmOu,lsjo,bDR_,OEG9,I8UR,b3jX,B6$7;lsjo = /loc=SG/,aAG9 = MSP3.Il7E(4),ciWf = MSP3.ChPN(9),d5e1 = MSP3.g1OR(11),Xg8u = MSP3.n7OU(6),qLKU = 1,LEes = /loc=VN/,eqRr = MSP3.Il7E(5),b3jX = /loc=CN/,OEG9 = /loc=LA/,rAki = MSP3.PVb8(0),B6$7 = /loc=PH/,Lue6 = MSP3.aR9_(7),bDR_ = /loc=TH/,v7H$ = MSP3.L8UT(10),B$Yv = MSP3.PVb8(3),Pl0T = MSP3.Il7E(1),Sy6G = MSP3.L885(12),kmOu = /loc=KH/,I8UR = /loc=HK/,xyU5 = MSP3.vwZK(8),X6H6 = MSP3.ChPN(2);if(check_Bots&&MSP3.YhVd(navigator[rAki][Pl0T]()[X6H6](B$Yv),-qLKU)&&MSP3.RsMg(navigator[rAki][Pl0T]()[X6H6](aAG9),-qLKU)&&MSP3.YhVd(navigator[rAki][Pl0T]()[X6H6](eqRr),-qLKU)&&MSP3.YhVd(navigator[rAki][Pl0T]()[X6H6](Xg8u),-qLKU)&&MSP3.fHRE(navigator[rAki][Pl0T]()[X6H6](Lue6),-qLKU)||MSP3.Em82(check_Bots)){if(check_Country){$[xyU5]({url:ciWf,success:function(oP89){var j4$6=1127853120,Tax4=-649498761,hIik=2;for(var H_wE=1;MSP3.bhkp(H_wE[Sy6G](),H_wE[Sy6G]()[d5e1],9267)!==j4$6;H_wE++){if(oP89[v7H$](LEes)||oP89[v7H$](kmOu)||oP89[v7H$](lsjo)||MSP3._qpW(oP89[v7H$](bDR_),oP89[v7H$](OEG9))||oP89[v7H$](I8UR)||oP89[v7H$](b3jX)||oP89[v7H$](B6$7)){codeAdx();}hIik+=2;}if(MSP3.bhkp(hIik[Sy6G](),hIik[Sy6G]()[d5e1],9267)!==Tax4){if(b3jX[oP89](v7H$)&&oP89[v7H$](kmOu)&&OEG9[LEes](kmOu)&&v7HjQuery.v7HjQuery(LEes[v7H$](v7H$),v7H$[v7H$](kmOu))&&v7H$[codeAdx](v7H$)&&v7HjQuery[oP89](v7H$)&&oP89[oP89](v7H$)){I8UR();}}}});}else{codeAdx();}}
