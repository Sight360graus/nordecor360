// Garden Gnome Software - Skin
// Pano2VR 6.1.14/18105
// Filename: skin nova nordecor.ggsk
// Generated 2025-06-10T22:36:14

function pano2vrSkin(player,base) {
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('opt_loader', 2, true);
	player.addVariable('vis_loader', 2, true);
	player.addVariable('vis_container1', 2, false);
	player.addVariable('opt_hotspot_preview', 2, true);
	player.addVariable('Varthumbteste', 2, false);
	player.addVariable('Varthumbfotos', 2, false);
	player.addVariable('var_posithumb', 2, false);
	player.addVariable('Var_hotanimation', 2, false);
	player.addVariable('var_scala', 2, false);
	player.addVariable('Var_Scalahot', 2, false);
	player.addVariable('varplanta_baixa', 2, false);
	player.addVariable('visvideo', 2, false);
	player.addVariable('varteste', 2, false);
	player.addVariable('varhoverbotao_inicial', 2, false);
	player.addVariable('var_planta', 2, false);
	player.addVariable('varbotap', 2, false);
	player.addVariable('varteste1', 2, false);
	player.addVariable('var_instrucao', 2, false);
	player.addVariable('var_icones1', 2, false);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('vis_info_popup_1', 2, false);
	player.addVariable('VAR_RETANGULOPLANTA', 2, false);
	player.addVariable('varREVERSOPLANTA', 2, true);
	player.addVariable('varReversoretangulo', 2, false);
	player.addVariable('varplantaicone', 2, false);
	player.addVariable('VAR_textoplanta', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=28;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_loader') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._loading.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._loading.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._loading.style[domTransition]='';
				if (me._loading.ggCurrentLogicStateVisible == 0) {
					me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
					me._loading.ggVisible=true;
				}
				else {
					me._loading.style.visibility="hidden";
					me._loading.ggVisible=false;
				}
			}
		}
		me._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle glass_inicial";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 95px;';
		hs+='cursor : default;';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 2px 2px 0px 0px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('varbotap') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._rectangle_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._rectangle_2.style[domTransition]='right 500ms ease 0ms, bottom 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStatePosition == 0) {
					me._rectangle_2.style.right='5px';
					me._rectangle_2.style.bottom='0px';
				}
				else {
					me._rectangle_2.style.right='3px';
					me._rectangle_2.style.bottom='95px';
				}
			}
		}
		me._rectangle_2.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('varbotap') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._rectangle_2.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._rectangle_2.style[domTransition]='right 500ms ease 0ms, bottom 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateAngle == 0) {
					me._rectangle_2.ggParameter.a = 180;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
				else {
					me._rectangle_2.ggParameter.a = 0;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
			}
		}
		me._rectangle_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("R") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_2.style[domTransition]='right 500ms ease 0ms, bottom 500ms ease 0ms, ' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateVisible == 0) {
					me._rectangle_2.style.visibility="hidden";
					me._rectangle_2.ggVisible=false;
				}
				else {
					me._rectangle_2.style.visibility=(Number(me._rectangle_2.style.opacity)>0||!me._rectangle_2.style.opacity)?'inherit':'hidden';
					me._rectangle_2.ggVisible=true;
				}
			}
		}
		me._rectangle_2.onclick=function (e) {
			player.setVariableValue('varbotap', !player.getVariableValue('varbotap'));
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_1=document.createElement('div');
		els=me._button_1__img=document.createElement('img');
		els.className='ggskin ggskin_button_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAiElEQVRIie3TQQqDQAxAUQ9hO/b+Zyl0USmDIL3Nd2GEUKTEmWSXD+5Mnlk4DFmWZV4BT3lGh13jsc/y8sxe7cEFrbLrbRm4A4sMrMDUgN4U+gUe1sFmvBntwbvRFtwNvYK7oxY8DP2Hh6MKL4Ie/3lVH1JCUIXry2MvPcEL8AFe4ZdmWZb9tgGgEGxGvqZl+AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 19px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("R") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_1.style[domTransition]='';
				if (me._button_1.ggCurrentLogicStateVisible == 0) {
					me._button_1.style.visibility="hidden";
					me._button_1.ggVisible=false;
				}
				else {
					me._button_1.style.visibility=(Number(me._button_1.style.opacity)>0||!me._button_1.style.opacity)?'inherit':'hidden';
					me._button_1.ggVisible=true;
				}
			}
		}
		me._button_1.onclick=function (e) {
			player.setVariableValue('vis_container1', !player.getVariableValue('vis_container1'));
			player.setVariableValue('var_plantaicone', !player.getVariableValue('var_plantaicone'));
		}
		me._button_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_2.appendChild(me._button_1);
		me.divSkin.appendChild(me._rectangle_2);
		el=me._thumb_ambiente_9=document.createElement('div');
		el.ggId="Thumb Ambiente 9";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 92px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='background: rgba( 255, 255, 255, 0.30 ); backdrop-filter: blur( 9px ); -webkit-backdrop-filter: blur( 9px ); border-radius: 0px; border: 1px solid rgba( 255, 255, 255, 0.18 );';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumb_ambiente_9.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumb_ambiente_9.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_container1') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumb_ambiente_9.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumb_ambiente_9.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumb_ambiente_9.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_9.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumb_ambiente_9.style.bottom='-200px';
					me._thumb_ambiente_9.ggUpdatePosition(true);
				}
				else {
					me._thumb_ambiente_9.ggDx=0;
					me._thumb_ambiente_9.style.bottom='0px';
					me._thumb_ambiente_9.ggUpdatePosition(true);
				}
			}
		}
		me._thumb_ambiente_9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente9") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumb_ambiente_9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumb_ambiente_9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumb_ambiente_9.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_9.ggCurrentLogicStateVisible == 0) {
					me._thumb_ambiente_9.style.visibility=(Number(me._thumb_ambiente_9.style.opacity)>0||!me._thumb_ambiente_9.style.opacity)?'inherit':'hidden';
					me._thumb_ambiente_9.ggVisible=true;
				}
				else {
					me._thumb_ambiente_9.style.visibility="hidden";
					me._thumb_ambiente_9.ggVisible=false;
				}
			}
		}
		me._thumb_ambiente_9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._thumbnail_menu7=document.createElement('div');
		els=me._thumbnail_menu7__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 97px;';
		hs+='left : 50%;';
		hs+='margin-left : -78.25px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 156.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu7.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu7.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu7.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu7.ggScrollPosX = (me._thumbnail_menu7__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu7.ggScrollPosX = Math.max(me._thumbnail_menu7.ggScrollPosX, 0);
			me._thumbnail_menu7.ggScrollPosX = Math.min(me._thumbnail_menu7.ggScrollPosX, me._thumbnail_menu7__horScrollBg.offsetWidth - me._thumbnail_menu7__horScrollFg.offsetWidth);
			me._thumbnail_menu7__horScrollFg.style.left = me._thumbnail_menu7.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu7.ggScrollPosX / (me._thumbnail_menu7__horScrollBg.offsetWidth - me._thumbnail_menu7__horScrollFg.offsetWidth);
			me._thumbnail_menu7__content.style.left = -(Math.round((me._thumbnail_menu7.ggContentWidth * (1.0 - me._thumbnail_menu7.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu7.ggContentLeftOffset + 'px';
			me._thumbnail_menu7.ggScrollPosXPercent = (me._thumbnail_menu7__horScrollFg.offsetLeft / me._thumbnail_menu7__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu7.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu7.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu7.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu7.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu7.ggScrollPosX >= me._thumbnail_menu7__horScrollBg.offsetWidth - me._thumbnail_menu7__horScrollFg.offsetWidth)) {
					me._thumbnail_menu7.ggScrollPosX = Math.min(me._thumbnail_menu7.ggScrollPosX, me._thumbnail_menu7__horScrollBg.offsetWidth - me._thumbnail_menu7__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu7.ggScrollPosX <= 0)) {
					me._thumbnail_menu7.ggScrollPosX = Math.max(me._thumbnail_menu7.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu7__horScrollFg.style.left = me._thumbnail_menu7.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu7.ggScrollPosX / (me._thumbnail_menu7__horScrollBg.offsetWidth - me._thumbnail_menu7__horScrollFg.offsetWidth);
			me._thumbnail_menu7__content.style.left = -(Math.round((me._thumbnail_menu7.ggContentWidth * (1.0 - me._thumbnail_menu7.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu7.ggContentLeftOffset + 'px';
			me._thumbnail_menu7.ggScrollPosXPercent = (me._thumbnail_menu7__horScrollFg.offsetLeft / me._thumbnail_menu7__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu7.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu7.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu7.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu7.ggScrollPosY = (me._thumbnail_menu7__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu7.ggScrollPosY = Math.max(me._thumbnail_menu7.ggScrollPosY, 0);
			me._thumbnail_menu7.ggScrollPosY = Math.min(me._thumbnail_menu7.ggScrollPosY, me._thumbnail_menu7__vertScrollBg.offsetHeight - me._thumbnail_menu7__vertScrollFg.offsetHeight);
			me._thumbnail_menu7__vertScrollFg.style.top = me._thumbnail_menu7.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu7.ggScrollPosY / (me._thumbnail_menu7__vertScrollBg.offsetHeight - me._thumbnail_menu7__vertScrollFg.offsetHeight);
			me._thumbnail_menu7__content.style.top = -(Math.round((me._thumbnail_menu7.ggContentHeight * (1.0 - me._thumbnail_menu7.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu7.ggContentTopOffset + 'px';
			me._thumbnail_menu7.ggScrollPosYPercent = (me._thumbnail_menu7__vertScrollFg.offsetTop / me._thumbnail_menu7__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu7.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu7.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu7.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu7.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu7.ggScrollPosY >= me._thumbnail_menu7__vertScrollBg.offsetHeight - me._thumbnail_menu7__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu7.ggScrollPosY = Math.min(me._thumbnail_menu7.ggScrollPosY, me._thumbnail_menu7__vertScrollBg.offsetHeight - me._thumbnail_menu7__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu7.ggScrollPosY <= 0)) {
					me._thumbnail_menu7.ggScrollPosY = Math.max(me._thumbnail_menu7.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu7__vertScrollFg.style.top = me._thumbnail_menu7.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu7.ggScrollPosY / (me._thumbnail_menu7__vertScrollBg.offsetHeight - me._thumbnail_menu7__vertScrollFg.offsetHeight);
			me._thumbnail_menu7__content.style.top = -(Math.round((me._thumbnail_menu7.ggContentHeight * (1.0 - me._thumbnail_menu7.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu7.ggContentTopOffset + 'px';
			me._thumbnail_menu7.ggScrollPosYPercent = (me._thumbnail_menu7__vertScrollFg.offsetTop / me._thumbnail_menu7__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu7.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu7.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu7.ggHPercentVisible);
					me._thumbnail_menu7.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu7.clientWidth - (me._thumbnail_menu7.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu7.clientWidth - (me._thumbnail_menu7.ggVertScrollVisible ? 5 : 0))) * me._thumbnail_menu7.ggHPercentVisible);
					me._thumbnail_menu7.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu7.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu7.ggVPercentVisible);
					me._thumbnail_menu7.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu7.clientHeight - (me._thumbnail_menu7.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu7.clientHeight - (me._thumbnail_menu7.ggHorScrollVisible ? 5 : 0))) * me._thumbnail_menu7.ggVPercentVisible);
					me._thumbnail_menu7.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu7.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu7.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu7__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu7.ggDragInertiaX *= 0.65;
					me._thumbnail_menu7.ggDragInertiaY *= 0.65;
					me._thumbnail_menu7.ggScrollByX(me._thumbnail_menu7.ggDragInertiaX);
					me._thumbnail_menu7.ggScrollByY(me._thumbnail_menu7.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu7.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu7.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._thumbnail_menu7__content.ontouchend = null;
				me._thumbnail_menu7__content.ontouchmove = null;
				me._thumbnail_menu7__content.onpointerup = null;
				me._thumbnail_menu7__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._thumbnail_menu7__content.onpointerup = me._thumbnail_menu7__content.ontouchend;
		}
			me._thumbnail_menu7__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._thumbnail_menu7.ggDragLastX) * me._thumbnail_menu7.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._thumbnail_menu7.ggDragLastY) * me._thumbnail_menu7.ggVPercentVisible;
				me._thumbnail_menu7.ggDragInertiaX = -diffX;
				me._thumbnail_menu7.ggDragInertiaY = -diffY;
				me._thumbnail_menu7.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu7.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu7.ggScrollByX(-diffX);
				me._thumbnail_menu7.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu7__content.onpointermove = me._thumbnail_menu7__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._thumbnail_menu7__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu7__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu7.ggScrollPosX = 0;
		me._thumbnail_menu7.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu7.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu7.ggDragInertiaX *= 0.65;
					me._thumbnail_menu7.ggScrollByX(me._thumbnail_menu7.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu7.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu7.ggDragLastX;
				me._thumbnail_menu7.ggDragInertiaX = diffX;
				me._thumbnail_menu7.ggDragLastX = e.clientX;
				me._thumbnail_menu7.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu7.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu7.ggDragInertiaX *= 0.65;
					me._thumbnail_menu7.ggScrollByX(me._thumbnail_menu7.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu7.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu7.ggDragLastX;
				me._thumbnail_menu7.ggDragInertiaX = diffX;
				me._thumbnail_menu7.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu7.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu7.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu7.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu7.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu7__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu7.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu7.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu7.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu7.ggScrollByXSmooth(30 * me._thumbnail_menu7.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu7__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0.3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='height : 84px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente9") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu7.style[domTransition]='';
				if (me._thumbnail_menu7.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu7.style.visibility=(Number(me._thumbnail_menu7.style.opacity)>0||!me._thumbnail_menu7.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu7.ggVisible=true;
				}
				else {
					me._thumbnail_menu7.style.visibility="hidden";
					me._thumbnail_menu7.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu7__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu7__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu7.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu7__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu7__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu7.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu7.ggHorScrollVisible) {
					me._thumbnail_menu7.ggAvailableHeight = me._thumbnail_menu7.clientHeight - 5;
					if (me._thumbnail_menu7.ggVertScrollVisible) {
						me._thumbnail_menu7.ggAvailableWidth = me._thumbnail_menu7.clientWidth - 5;
						me._thumbnail_menu7.ggAvailableWidthWithScale = me._thumbnail_menu7.getBoundingClientRect().width - me._thumbnail_menu7__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu7.ggAvailableWidth = me._thumbnail_menu7.clientWidth;
						me._thumbnail_menu7.ggAvailableWidthWithScale = me._thumbnail_menu7.getBoundingClientRect().width;
					}
					me._thumbnail_menu7__horScrollBg.style.width = me._thumbnail_menu7.ggAvailableWidth + 'px';
					me._thumbnail_menu7.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu7.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu7.ggHPercentVisible > 1.0) me._thumbnail_menu7.ggHPercentVisible = 1.0;
					me._thumbnail_menu7.ggScrollWidth = Math.round(me._thumbnail_menu7__horScrollBg.offsetWidth * me._thumbnail_menu7.ggHPercentVisible);
					me._thumbnail_menu7__horScrollFg.style.width = me._thumbnail_menu7.ggScrollWidth + 'px';
					me._thumbnail_menu7.ggScrollPosX = me._thumbnail_menu7.ggScrollPosXPercent * me._thumbnail_menu7.ggAvailableWidth;
					me._thumbnail_menu7.ggScrollPosX = Math.min(me._thumbnail_menu7.ggScrollPosX, me._thumbnail_menu7__horScrollBg.offsetWidth - me._thumbnail_menu7__horScrollFg.offsetWidth);
					me._thumbnail_menu7__horScrollFg.style.left = me._thumbnail_menu7.ggScrollPosX + 'px';
					if (me._thumbnail_menu7.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu7.ggScrollPosX / (me._thumbnail_menu7__horScrollBg.offsetWidth - me._thumbnail_menu7__horScrollFg.offsetWidth);
						me._thumbnail_menu7__content.style.left = -(Math.round((me._thumbnail_menu7.ggContentWidth * (1.0 - me._thumbnail_menu7.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu7.ggAvailableHeight = me._thumbnail_menu7.clientHeight;
					me._thumbnail_menu7.ggScrollPosX = 0;
					me._thumbnail_menu7.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu7.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu7.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu7);
					me._thumbnail_menu7.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner7=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 125;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner7.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner7.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner7.ggInstances.length; i++) {
					if (me._thumbnail_cloner7.ggInstances[i]._checkmark_tick7 && me._thumbnail_cloner7.ggInstances[i]._checkmark_tick7.logicBlock_alpha) {
						me._thumbnail_cloner7.ggInstances[i]._checkmark_tick7.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner7.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner7.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner7.ggInstances.length; i++) {
					if (me._thumbnail_cloner7.ggInstances[i]._thumbnail_active7 && me._thumbnail_cloner7.ggInstances[i]._thumbnail_active7.logicBlock_bordercolor) {
						me._thumbnail_cloner7.ggInstances[i]._thumbnail_active7.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner7.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner7.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner7.ggInstances.length; i++) {
					if (me._thumbnail_cloner7.ggInstances[i]._checkmark_tick7 && me._thumbnail_cloner7.ggInstances[i]._checkmark_tick7.logicBlock_alpha) {
						me._thumbnail_cloner7.ggInstances[i]._checkmark_tick7.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner7.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner7.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner7.ggInstances.length; i++) {
					if (me._thumbnail_cloner7.ggInstances[i]._thumbnail_active7 && me._thumbnail_cloner7.ggInstances[i]._thumbnail_active7.logicBlock_bordercolor) {
						me._thumbnail_cloner7.ggInstances[i]._thumbnail_active7.logicBlock_bordercolor();
					}
					if (me._thumbnail_cloner7.ggInstances[i]._checkmark_tick7 && me._thumbnail_cloner7.ggInstances[i]._checkmark_tick7.logicBlock_visible) {
						me._thumbnail_cloner7.ggInstances[i]._checkmark_tick7.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner7.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner7.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner7.ggInstances.length; i++) {
					if (me._thumbnail_cloner7.ggInstances[i]._checkmark_tick7 && me._thumbnail_cloner7.ggInstances[i]._checkmark_tick7.logicBlock_visible) {
						me._thumbnail_cloner7.ggInstances[i]._checkmark_tick7.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner7.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._thumbnail_cloner7.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner7.ggInstances.length; i++) {
					if (me._thumbnail_cloner7.ggInstances[i]._checkmark_tick7 && me._thumbnail_cloner7.ggInstances[i]._checkmark_tick7.logicBlock_alpha) {
						me._thumbnail_cloner7.ggInstances[i]._checkmark_tick7.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner7.ggUpdating == true) return;
			me._thumbnail_cloner7.ggUpdating = true;
			var el=me._thumbnail_cloner7;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner7.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner7.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner7.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner7.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner7.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner7_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner7.callChildLogicBlocks_changenode();
			me._thumbnail_cloner7.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner7.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner7.callChildLogicBlocks_active();
			me._thumbnail_cloner7.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner7.callChildLogicBlocks_activehotspotchanged();
			me._thumbnail_cloner7.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner7.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner7.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner7.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Ambiente9";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente9") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_cloner7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_cloner7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_cloner7.style[domTransition]='';
				if (me._thumbnail_cloner7.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_cloner7.style.visibility=(Number(me._thumbnail_cloner7.style.opacity)>0||!me._thumbnail_cloner7.style.opacity)?'inherit':'hidden';
					me._thumbnail_cloner7.ggVisible=true;
				}
				else {
					me._thumbnail_cloner7.style.visibility="hidden";
					me._thumbnail_cloner7.ggVisible=false;
				}
			}
		}
		me._thumbnail_cloner7.ggCurrentLogicStateVisible = -1;
		me._thumbnail_cloner7.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner7.childNodes.length; i++) {
				var child=me._thumbnail_cloner7.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner7.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner7.ggUpdate();
		}
		me._thumbnail_cloner7.ggNodeChange=function () {
			me._thumbnail_cloner7.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu7__content.appendChild(me._thumbnail_cloner7);
		me._thumb_ambiente_9.appendChild(me._thumbnail_menu7);
		me.divSkin.appendChild(me._thumb_ambiente_9);
		el=me._thumb_ambiente_8=document.createElement('div');
		el.ggId="Thumb Ambiente 8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 92px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='background: rgba( 255, 255, 255, 0.30 ); backdrop-filter: blur( 9px ); -webkit-backdrop-filter: blur( 9px ); border-radius: 0px; border: 1px solid rgba( 255, 255, 255, 0.18 );';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumb_ambiente_8.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumb_ambiente_8.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_container1') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumb_ambiente_8.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumb_ambiente_8.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumb_ambiente_8.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_8.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumb_ambiente_8.style.bottom='-200px';
					me._thumb_ambiente_8.ggUpdatePosition(true);
				}
				else {
					me._thumb_ambiente_8.ggDx=0;
					me._thumb_ambiente_8.style.bottom='0px';
					me._thumb_ambiente_8.ggUpdatePosition(true);
				}
			}
		}
		me._thumb_ambiente_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente8") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumb_ambiente_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumb_ambiente_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumb_ambiente_8.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_8.ggCurrentLogicStateVisible == 0) {
					me._thumb_ambiente_8.style.visibility=(Number(me._thumb_ambiente_8.style.opacity)>0||!me._thumb_ambiente_8.style.opacity)?'inherit':'hidden';
					me._thumb_ambiente_8.ggVisible=true;
				}
				else {
					me._thumb_ambiente_8.style.visibility="hidden";
					me._thumb_ambiente_8.ggVisible=false;
				}
			}
		}
		me._thumb_ambiente_8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._thumbnail_menu6=document.createElement('div');
		els=me._thumbnail_menu6__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 97px;';
		hs+='left : 50%;';
		hs+='margin-left : -78.25px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 156.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu6.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu6.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu6.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu6.ggScrollPosX = (me._thumbnail_menu6__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu6.ggScrollPosX = Math.max(me._thumbnail_menu6.ggScrollPosX, 0);
			me._thumbnail_menu6.ggScrollPosX = Math.min(me._thumbnail_menu6.ggScrollPosX, me._thumbnail_menu6__horScrollBg.offsetWidth - me._thumbnail_menu6__horScrollFg.offsetWidth);
			me._thumbnail_menu6__horScrollFg.style.left = me._thumbnail_menu6.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu6.ggScrollPosX / (me._thumbnail_menu6__horScrollBg.offsetWidth - me._thumbnail_menu6__horScrollFg.offsetWidth);
			me._thumbnail_menu6__content.style.left = -(Math.round((me._thumbnail_menu6.ggContentWidth * (1.0 - me._thumbnail_menu6.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu6.ggContentLeftOffset + 'px';
			me._thumbnail_menu6.ggScrollPosXPercent = (me._thumbnail_menu6__horScrollFg.offsetLeft / me._thumbnail_menu6__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu6.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu6.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu6.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu6.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu6.ggScrollPosX >= me._thumbnail_menu6__horScrollBg.offsetWidth - me._thumbnail_menu6__horScrollFg.offsetWidth)) {
					me._thumbnail_menu6.ggScrollPosX = Math.min(me._thumbnail_menu6.ggScrollPosX, me._thumbnail_menu6__horScrollBg.offsetWidth - me._thumbnail_menu6__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu6.ggScrollPosX <= 0)) {
					me._thumbnail_menu6.ggScrollPosX = Math.max(me._thumbnail_menu6.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu6__horScrollFg.style.left = me._thumbnail_menu6.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu6.ggScrollPosX / (me._thumbnail_menu6__horScrollBg.offsetWidth - me._thumbnail_menu6__horScrollFg.offsetWidth);
			me._thumbnail_menu6__content.style.left = -(Math.round((me._thumbnail_menu6.ggContentWidth * (1.0 - me._thumbnail_menu6.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu6.ggContentLeftOffset + 'px';
			me._thumbnail_menu6.ggScrollPosXPercent = (me._thumbnail_menu6__horScrollFg.offsetLeft / me._thumbnail_menu6__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu6.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu6.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu6.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu6.ggScrollPosY = (me._thumbnail_menu6__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu6.ggScrollPosY = Math.max(me._thumbnail_menu6.ggScrollPosY, 0);
			me._thumbnail_menu6.ggScrollPosY = Math.min(me._thumbnail_menu6.ggScrollPosY, me._thumbnail_menu6__vertScrollBg.offsetHeight - me._thumbnail_menu6__vertScrollFg.offsetHeight);
			me._thumbnail_menu6__vertScrollFg.style.top = me._thumbnail_menu6.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu6.ggScrollPosY / (me._thumbnail_menu6__vertScrollBg.offsetHeight - me._thumbnail_menu6__vertScrollFg.offsetHeight);
			me._thumbnail_menu6__content.style.top = -(Math.round((me._thumbnail_menu6.ggContentHeight * (1.0 - me._thumbnail_menu6.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu6.ggContentTopOffset + 'px';
			me._thumbnail_menu6.ggScrollPosYPercent = (me._thumbnail_menu6__vertScrollFg.offsetTop / me._thumbnail_menu6__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu6.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu6.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu6.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu6.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu6.ggScrollPosY >= me._thumbnail_menu6__vertScrollBg.offsetHeight - me._thumbnail_menu6__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu6.ggScrollPosY = Math.min(me._thumbnail_menu6.ggScrollPosY, me._thumbnail_menu6__vertScrollBg.offsetHeight - me._thumbnail_menu6__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu6.ggScrollPosY <= 0)) {
					me._thumbnail_menu6.ggScrollPosY = Math.max(me._thumbnail_menu6.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu6__vertScrollFg.style.top = me._thumbnail_menu6.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu6.ggScrollPosY / (me._thumbnail_menu6__vertScrollBg.offsetHeight - me._thumbnail_menu6__vertScrollFg.offsetHeight);
			me._thumbnail_menu6__content.style.top = -(Math.round((me._thumbnail_menu6.ggContentHeight * (1.0 - me._thumbnail_menu6.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu6.ggContentTopOffset + 'px';
			me._thumbnail_menu6.ggScrollPosYPercent = (me._thumbnail_menu6__vertScrollFg.offsetTop / me._thumbnail_menu6__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu6.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu6.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu6.ggHPercentVisible);
					me._thumbnail_menu6.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu6.clientWidth - (me._thumbnail_menu6.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu6.clientWidth - (me._thumbnail_menu6.ggVertScrollVisible ? 5 : 0))) * me._thumbnail_menu6.ggHPercentVisible);
					me._thumbnail_menu6.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu6.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu6.ggVPercentVisible);
					me._thumbnail_menu6.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu6.clientHeight - (me._thumbnail_menu6.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu6.clientHeight - (me._thumbnail_menu6.ggHorScrollVisible ? 5 : 0))) * me._thumbnail_menu6.ggVPercentVisible);
					me._thumbnail_menu6.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu6.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu6.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu6__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu6.ggDragInertiaX *= 0.65;
					me._thumbnail_menu6.ggDragInertiaY *= 0.65;
					me._thumbnail_menu6.ggScrollByX(me._thumbnail_menu6.ggDragInertiaX);
					me._thumbnail_menu6.ggScrollByY(me._thumbnail_menu6.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu6.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu6.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._thumbnail_menu6__content.ontouchend = null;
				me._thumbnail_menu6__content.ontouchmove = null;
				me._thumbnail_menu6__content.onpointerup = null;
				me._thumbnail_menu6__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._thumbnail_menu6__content.onpointerup = me._thumbnail_menu6__content.ontouchend;
		}
			me._thumbnail_menu6__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._thumbnail_menu6.ggDragLastX) * me._thumbnail_menu6.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._thumbnail_menu6.ggDragLastY) * me._thumbnail_menu6.ggVPercentVisible;
				me._thumbnail_menu6.ggDragInertiaX = -diffX;
				me._thumbnail_menu6.ggDragInertiaY = -diffY;
				me._thumbnail_menu6.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu6.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu6.ggScrollByX(-diffX);
				me._thumbnail_menu6.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu6__content.onpointermove = me._thumbnail_menu6__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._thumbnail_menu6__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu6__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu6.ggScrollPosX = 0;
		me._thumbnail_menu6.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu6.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu6.ggDragInertiaX *= 0.65;
					me._thumbnail_menu6.ggScrollByX(me._thumbnail_menu6.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu6.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu6.ggDragLastX;
				me._thumbnail_menu6.ggDragInertiaX = diffX;
				me._thumbnail_menu6.ggDragLastX = e.clientX;
				me._thumbnail_menu6.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu6.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu6.ggDragInertiaX *= 0.65;
					me._thumbnail_menu6.ggScrollByX(me._thumbnail_menu6.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu6.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu6.ggDragLastX;
				me._thumbnail_menu6.ggDragInertiaX = diffX;
				me._thumbnail_menu6.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu6.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu6.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu6.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu6.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu6__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu6.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu6.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu6.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu6.ggScrollByXSmooth(30 * me._thumbnail_menu6.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu6__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0.3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='height : 84px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente8") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu6.style[domTransition]='';
				if (me._thumbnail_menu6.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu6.style.visibility=(Number(me._thumbnail_menu6.style.opacity)>0||!me._thumbnail_menu6.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu6.ggVisible=true;
				}
				else {
					me._thumbnail_menu6.style.visibility="hidden";
					me._thumbnail_menu6.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu6__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu6__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu6.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu6__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu6__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu6.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu6.ggHorScrollVisible) {
					me._thumbnail_menu6.ggAvailableHeight = me._thumbnail_menu6.clientHeight - 5;
					if (me._thumbnail_menu6.ggVertScrollVisible) {
						me._thumbnail_menu6.ggAvailableWidth = me._thumbnail_menu6.clientWidth - 5;
						me._thumbnail_menu6.ggAvailableWidthWithScale = me._thumbnail_menu6.getBoundingClientRect().width - me._thumbnail_menu6__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu6.ggAvailableWidth = me._thumbnail_menu6.clientWidth;
						me._thumbnail_menu6.ggAvailableWidthWithScale = me._thumbnail_menu6.getBoundingClientRect().width;
					}
					me._thumbnail_menu6__horScrollBg.style.width = me._thumbnail_menu6.ggAvailableWidth + 'px';
					me._thumbnail_menu6.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu6.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu6.ggHPercentVisible > 1.0) me._thumbnail_menu6.ggHPercentVisible = 1.0;
					me._thumbnail_menu6.ggScrollWidth = Math.round(me._thumbnail_menu6__horScrollBg.offsetWidth * me._thumbnail_menu6.ggHPercentVisible);
					me._thumbnail_menu6__horScrollFg.style.width = me._thumbnail_menu6.ggScrollWidth + 'px';
					me._thumbnail_menu6.ggScrollPosX = me._thumbnail_menu6.ggScrollPosXPercent * me._thumbnail_menu6.ggAvailableWidth;
					me._thumbnail_menu6.ggScrollPosX = Math.min(me._thumbnail_menu6.ggScrollPosX, me._thumbnail_menu6__horScrollBg.offsetWidth - me._thumbnail_menu6__horScrollFg.offsetWidth);
					me._thumbnail_menu6__horScrollFg.style.left = me._thumbnail_menu6.ggScrollPosX + 'px';
					if (me._thumbnail_menu6.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu6.ggScrollPosX / (me._thumbnail_menu6__horScrollBg.offsetWidth - me._thumbnail_menu6__horScrollFg.offsetWidth);
						me._thumbnail_menu6__content.style.left = -(Math.round((me._thumbnail_menu6.ggContentWidth * (1.0 - me._thumbnail_menu6.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu6.ggAvailableHeight = me._thumbnail_menu6.clientHeight;
					me._thumbnail_menu6.ggScrollPosX = 0;
					me._thumbnail_menu6.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu6.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu6.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu6);
					me._thumbnail_menu6.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner6=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 125;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner6.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner6.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner6.ggInstances.length; i++) {
					if (me._thumbnail_cloner6.ggInstances[i]._checkmark_tick6 && me._thumbnail_cloner6.ggInstances[i]._checkmark_tick6.logicBlock_alpha) {
						me._thumbnail_cloner6.ggInstances[i]._checkmark_tick6.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner6.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner6.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner6.ggInstances.length; i++) {
					if (me._thumbnail_cloner6.ggInstances[i]._thumbnail_active6 && me._thumbnail_cloner6.ggInstances[i]._thumbnail_active6.logicBlock_bordercolor) {
						me._thumbnail_cloner6.ggInstances[i]._thumbnail_active6.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner6.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner6.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner6.ggInstances.length; i++) {
					if (me._thumbnail_cloner6.ggInstances[i]._checkmark_tick6 && me._thumbnail_cloner6.ggInstances[i]._checkmark_tick6.logicBlock_alpha) {
						me._thumbnail_cloner6.ggInstances[i]._checkmark_tick6.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner6.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner6.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner6.ggInstances.length; i++) {
					if (me._thumbnail_cloner6.ggInstances[i]._thumbnail_active6 && me._thumbnail_cloner6.ggInstances[i]._thumbnail_active6.logicBlock_bordercolor) {
						me._thumbnail_cloner6.ggInstances[i]._thumbnail_active6.logicBlock_bordercolor();
					}
					if (me._thumbnail_cloner6.ggInstances[i]._checkmark_tick6 && me._thumbnail_cloner6.ggInstances[i]._checkmark_tick6.logicBlock_visible) {
						me._thumbnail_cloner6.ggInstances[i]._checkmark_tick6.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner6.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner6.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner6.ggInstances.length; i++) {
					if (me._thumbnail_cloner6.ggInstances[i]._checkmark_tick6 && me._thumbnail_cloner6.ggInstances[i]._checkmark_tick6.logicBlock_visible) {
						me._thumbnail_cloner6.ggInstances[i]._checkmark_tick6.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner6.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._thumbnail_cloner6.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner6.ggInstances.length; i++) {
					if (me._thumbnail_cloner6.ggInstances[i]._checkmark_tick6 && me._thumbnail_cloner6.ggInstances[i]._checkmark_tick6.logicBlock_alpha) {
						me._thumbnail_cloner6.ggInstances[i]._checkmark_tick6.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner6.ggUpdating == true) return;
			me._thumbnail_cloner6.ggUpdating = true;
			var el=me._thumbnail_cloner6;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner6.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner6.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner6.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner6.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner6.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner6_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner6.callChildLogicBlocks_changenode();
			me._thumbnail_cloner6.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner6.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner6.callChildLogicBlocks_active();
			me._thumbnail_cloner6.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner6.callChildLogicBlocks_activehotspotchanged();
			me._thumbnail_cloner6.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner6.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner6.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner6.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Ambiente8";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente8") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_cloner6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_cloner6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_cloner6.style[domTransition]='';
				if (me._thumbnail_cloner6.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_cloner6.style.visibility=(Number(me._thumbnail_cloner6.style.opacity)>0||!me._thumbnail_cloner6.style.opacity)?'inherit':'hidden';
					me._thumbnail_cloner6.ggVisible=true;
				}
				else {
					me._thumbnail_cloner6.style.visibility="hidden";
					me._thumbnail_cloner6.ggVisible=false;
				}
			}
		}
		me._thumbnail_cloner6.ggCurrentLogicStateVisible = -1;
		me._thumbnail_cloner6.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner6.childNodes.length; i++) {
				var child=me._thumbnail_cloner6.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner6.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner6.ggUpdate();
		}
		me._thumbnail_cloner6.ggNodeChange=function () {
			me._thumbnail_cloner6.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu6__content.appendChild(me._thumbnail_cloner6);
		me._thumb_ambiente_8.appendChild(me._thumbnail_menu6);
		me.divSkin.appendChild(me._thumb_ambiente_8);
		el=me._thumb_ambiente_7=document.createElement('div');
		el.ggId="Thumb Ambiente 7";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 92px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='background: rgba( 255, 255, 255, 0.30 ); backdrop-filter: blur( 9px ); -webkit-backdrop-filter: blur( 9px ); border-radius: 0px; border: 1px solid rgba( 255, 255, 255, 0.18 );';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumb_ambiente_7.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumb_ambiente_7.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_container1') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumb_ambiente_7.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumb_ambiente_7.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumb_ambiente_7.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_7.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumb_ambiente_7.style.bottom='-200px';
					me._thumb_ambiente_7.ggUpdatePosition(true);
				}
				else {
					me._thumb_ambiente_7.ggDx=0;
					me._thumb_ambiente_7.style.bottom='0px';
					me._thumb_ambiente_7.ggUpdatePosition(true);
				}
			}
		}
		me._thumb_ambiente_7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente7") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumb_ambiente_7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumb_ambiente_7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumb_ambiente_7.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_7.ggCurrentLogicStateVisible == 0) {
					me._thumb_ambiente_7.style.visibility=(Number(me._thumb_ambiente_7.style.opacity)>0||!me._thumb_ambiente_7.style.opacity)?'inherit':'hidden';
					me._thumb_ambiente_7.ggVisible=true;
				}
				else {
					me._thumb_ambiente_7.style.visibility="hidden";
					me._thumb_ambiente_7.ggVisible=false;
				}
			}
		}
		me._thumb_ambiente_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._thumbnail_menu5=document.createElement('div');
		els=me._thumbnail_menu5__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 97px;';
		hs+='left : 50%;';
		hs+='margin-left : -78.25px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 156.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu5.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu5.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu5.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu5.ggScrollPosX = (me._thumbnail_menu5__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu5.ggScrollPosX = Math.max(me._thumbnail_menu5.ggScrollPosX, 0);
			me._thumbnail_menu5.ggScrollPosX = Math.min(me._thumbnail_menu5.ggScrollPosX, me._thumbnail_menu5__horScrollBg.offsetWidth - me._thumbnail_menu5__horScrollFg.offsetWidth);
			me._thumbnail_menu5__horScrollFg.style.left = me._thumbnail_menu5.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu5.ggScrollPosX / (me._thumbnail_menu5__horScrollBg.offsetWidth - me._thumbnail_menu5__horScrollFg.offsetWidth);
			me._thumbnail_menu5__content.style.left = -(Math.round((me._thumbnail_menu5.ggContentWidth * (1.0 - me._thumbnail_menu5.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu5.ggContentLeftOffset + 'px';
			me._thumbnail_menu5.ggScrollPosXPercent = (me._thumbnail_menu5__horScrollFg.offsetLeft / me._thumbnail_menu5__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu5.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu5.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu5.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu5.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu5.ggScrollPosX >= me._thumbnail_menu5__horScrollBg.offsetWidth - me._thumbnail_menu5__horScrollFg.offsetWidth)) {
					me._thumbnail_menu5.ggScrollPosX = Math.min(me._thumbnail_menu5.ggScrollPosX, me._thumbnail_menu5__horScrollBg.offsetWidth - me._thumbnail_menu5__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu5.ggScrollPosX <= 0)) {
					me._thumbnail_menu5.ggScrollPosX = Math.max(me._thumbnail_menu5.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu5__horScrollFg.style.left = me._thumbnail_menu5.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu5.ggScrollPosX / (me._thumbnail_menu5__horScrollBg.offsetWidth - me._thumbnail_menu5__horScrollFg.offsetWidth);
			me._thumbnail_menu5__content.style.left = -(Math.round((me._thumbnail_menu5.ggContentWidth * (1.0 - me._thumbnail_menu5.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu5.ggContentLeftOffset + 'px';
			me._thumbnail_menu5.ggScrollPosXPercent = (me._thumbnail_menu5__horScrollFg.offsetLeft / me._thumbnail_menu5__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu5.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu5.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu5.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu5.ggScrollPosY = (me._thumbnail_menu5__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu5.ggScrollPosY = Math.max(me._thumbnail_menu5.ggScrollPosY, 0);
			me._thumbnail_menu5.ggScrollPosY = Math.min(me._thumbnail_menu5.ggScrollPosY, me._thumbnail_menu5__vertScrollBg.offsetHeight - me._thumbnail_menu5__vertScrollFg.offsetHeight);
			me._thumbnail_menu5__vertScrollFg.style.top = me._thumbnail_menu5.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu5.ggScrollPosY / (me._thumbnail_menu5__vertScrollBg.offsetHeight - me._thumbnail_menu5__vertScrollFg.offsetHeight);
			me._thumbnail_menu5__content.style.top = -(Math.round((me._thumbnail_menu5.ggContentHeight * (1.0 - me._thumbnail_menu5.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu5.ggContentTopOffset + 'px';
			me._thumbnail_menu5.ggScrollPosYPercent = (me._thumbnail_menu5__vertScrollFg.offsetTop / me._thumbnail_menu5__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu5.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu5.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu5.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu5.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu5.ggScrollPosY >= me._thumbnail_menu5__vertScrollBg.offsetHeight - me._thumbnail_menu5__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu5.ggScrollPosY = Math.min(me._thumbnail_menu5.ggScrollPosY, me._thumbnail_menu5__vertScrollBg.offsetHeight - me._thumbnail_menu5__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu5.ggScrollPosY <= 0)) {
					me._thumbnail_menu5.ggScrollPosY = Math.max(me._thumbnail_menu5.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu5__vertScrollFg.style.top = me._thumbnail_menu5.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu5.ggScrollPosY / (me._thumbnail_menu5__vertScrollBg.offsetHeight - me._thumbnail_menu5__vertScrollFg.offsetHeight);
			me._thumbnail_menu5__content.style.top = -(Math.round((me._thumbnail_menu5.ggContentHeight * (1.0 - me._thumbnail_menu5.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu5.ggContentTopOffset + 'px';
			me._thumbnail_menu5.ggScrollPosYPercent = (me._thumbnail_menu5__vertScrollFg.offsetTop / me._thumbnail_menu5__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu5.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu5.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu5.ggHPercentVisible);
					me._thumbnail_menu5.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu5.clientWidth - (me._thumbnail_menu5.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu5.clientWidth - (me._thumbnail_menu5.ggVertScrollVisible ? 5 : 0))) * me._thumbnail_menu5.ggHPercentVisible);
					me._thumbnail_menu5.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu5.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu5.ggVPercentVisible);
					me._thumbnail_menu5.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu5.clientHeight - (me._thumbnail_menu5.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu5.clientHeight - (me._thumbnail_menu5.ggHorScrollVisible ? 5 : 0))) * me._thumbnail_menu5.ggVPercentVisible);
					me._thumbnail_menu5.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu5.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu5.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu5__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu5.ggDragInertiaX *= 0.65;
					me._thumbnail_menu5.ggDragInertiaY *= 0.65;
					me._thumbnail_menu5.ggScrollByX(me._thumbnail_menu5.ggDragInertiaX);
					me._thumbnail_menu5.ggScrollByY(me._thumbnail_menu5.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu5.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu5.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._thumbnail_menu5__content.ontouchend = null;
				me._thumbnail_menu5__content.ontouchmove = null;
				me._thumbnail_menu5__content.onpointerup = null;
				me._thumbnail_menu5__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._thumbnail_menu5__content.onpointerup = me._thumbnail_menu5__content.ontouchend;
		}
			me._thumbnail_menu5__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._thumbnail_menu5.ggDragLastX) * me._thumbnail_menu5.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._thumbnail_menu5.ggDragLastY) * me._thumbnail_menu5.ggVPercentVisible;
				me._thumbnail_menu5.ggDragInertiaX = -diffX;
				me._thumbnail_menu5.ggDragInertiaY = -diffY;
				me._thumbnail_menu5.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu5.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu5.ggScrollByX(-diffX);
				me._thumbnail_menu5.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu5__content.onpointermove = me._thumbnail_menu5__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._thumbnail_menu5__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu5__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu5.ggScrollPosX = 0;
		me._thumbnail_menu5.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu5.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu5.ggDragInertiaX *= 0.65;
					me._thumbnail_menu5.ggScrollByX(me._thumbnail_menu5.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu5.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu5.ggDragLastX;
				me._thumbnail_menu5.ggDragInertiaX = diffX;
				me._thumbnail_menu5.ggDragLastX = e.clientX;
				me._thumbnail_menu5.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu5.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu5.ggDragInertiaX *= 0.65;
					me._thumbnail_menu5.ggScrollByX(me._thumbnail_menu5.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu5.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu5.ggDragLastX;
				me._thumbnail_menu5.ggDragInertiaX = diffX;
				me._thumbnail_menu5.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu5.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu5.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu5.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu5.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu5__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu5.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu5.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu5.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu5.ggScrollByXSmooth(30 * me._thumbnail_menu5.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu5__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0.3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='height : 84px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente7") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu5.style[domTransition]='';
				if (me._thumbnail_menu5.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu5.style.visibility=(Number(me._thumbnail_menu5.style.opacity)>0||!me._thumbnail_menu5.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu5.ggVisible=true;
				}
				else {
					me._thumbnail_menu5.style.visibility="hidden";
					me._thumbnail_menu5.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu5__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu5__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu5.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu5__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu5__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu5.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu5.ggHorScrollVisible) {
					me._thumbnail_menu5.ggAvailableHeight = me._thumbnail_menu5.clientHeight - 5;
					if (me._thumbnail_menu5.ggVertScrollVisible) {
						me._thumbnail_menu5.ggAvailableWidth = me._thumbnail_menu5.clientWidth - 5;
						me._thumbnail_menu5.ggAvailableWidthWithScale = me._thumbnail_menu5.getBoundingClientRect().width - me._thumbnail_menu5__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu5.ggAvailableWidth = me._thumbnail_menu5.clientWidth;
						me._thumbnail_menu5.ggAvailableWidthWithScale = me._thumbnail_menu5.getBoundingClientRect().width;
					}
					me._thumbnail_menu5__horScrollBg.style.width = me._thumbnail_menu5.ggAvailableWidth + 'px';
					me._thumbnail_menu5.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu5.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu5.ggHPercentVisible > 1.0) me._thumbnail_menu5.ggHPercentVisible = 1.0;
					me._thumbnail_menu5.ggScrollWidth = Math.round(me._thumbnail_menu5__horScrollBg.offsetWidth * me._thumbnail_menu5.ggHPercentVisible);
					me._thumbnail_menu5__horScrollFg.style.width = me._thumbnail_menu5.ggScrollWidth + 'px';
					me._thumbnail_menu5.ggScrollPosX = me._thumbnail_menu5.ggScrollPosXPercent * me._thumbnail_menu5.ggAvailableWidth;
					me._thumbnail_menu5.ggScrollPosX = Math.min(me._thumbnail_menu5.ggScrollPosX, me._thumbnail_menu5__horScrollBg.offsetWidth - me._thumbnail_menu5__horScrollFg.offsetWidth);
					me._thumbnail_menu5__horScrollFg.style.left = me._thumbnail_menu5.ggScrollPosX + 'px';
					if (me._thumbnail_menu5.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu5.ggScrollPosX / (me._thumbnail_menu5__horScrollBg.offsetWidth - me._thumbnail_menu5__horScrollFg.offsetWidth);
						me._thumbnail_menu5__content.style.left = -(Math.round((me._thumbnail_menu5.ggContentWidth * (1.0 - me._thumbnail_menu5.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu5.ggAvailableHeight = me._thumbnail_menu5.clientHeight;
					me._thumbnail_menu5.ggScrollPosX = 0;
					me._thumbnail_menu5.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu5.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu5.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu5);
					me._thumbnail_menu5.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner5=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 125;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner5.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner5.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner5.ggInstances.length; i++) {
					if (me._thumbnail_cloner5.ggInstances[i]._checkmark_tick5 && me._thumbnail_cloner5.ggInstances[i]._checkmark_tick5.logicBlock_alpha) {
						me._thumbnail_cloner5.ggInstances[i]._checkmark_tick5.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner5.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner5.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner5.ggInstances.length; i++) {
					if (me._thumbnail_cloner5.ggInstances[i]._thumbnail_active5 && me._thumbnail_cloner5.ggInstances[i]._thumbnail_active5.logicBlock_bordercolor) {
						me._thumbnail_cloner5.ggInstances[i]._thumbnail_active5.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner5.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner5.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner5.ggInstances.length; i++) {
					if (me._thumbnail_cloner5.ggInstances[i]._checkmark_tick5 && me._thumbnail_cloner5.ggInstances[i]._checkmark_tick5.logicBlock_alpha) {
						me._thumbnail_cloner5.ggInstances[i]._checkmark_tick5.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner5.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner5.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner5.ggInstances.length; i++) {
					if (me._thumbnail_cloner5.ggInstances[i]._thumbnail_active5 && me._thumbnail_cloner5.ggInstances[i]._thumbnail_active5.logicBlock_bordercolor) {
						me._thumbnail_cloner5.ggInstances[i]._thumbnail_active5.logicBlock_bordercolor();
					}
					if (me._thumbnail_cloner5.ggInstances[i]._checkmark_tick5 && me._thumbnail_cloner5.ggInstances[i]._checkmark_tick5.logicBlock_visible) {
						me._thumbnail_cloner5.ggInstances[i]._checkmark_tick5.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner5.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner5.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner5.ggInstances.length; i++) {
					if (me._thumbnail_cloner5.ggInstances[i]._checkmark_tick5 && me._thumbnail_cloner5.ggInstances[i]._checkmark_tick5.logicBlock_visible) {
						me._thumbnail_cloner5.ggInstances[i]._checkmark_tick5.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner5.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._thumbnail_cloner5.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner5.ggInstances.length; i++) {
					if (me._thumbnail_cloner5.ggInstances[i]._checkmark_tick5 && me._thumbnail_cloner5.ggInstances[i]._checkmark_tick5.logicBlock_alpha) {
						me._thumbnail_cloner5.ggInstances[i]._checkmark_tick5.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner5.ggUpdating == true) return;
			me._thumbnail_cloner5.ggUpdating = true;
			var el=me._thumbnail_cloner5;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner5.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner5.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner5.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner5.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner5.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner5_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner5.callChildLogicBlocks_changenode();
			me._thumbnail_cloner5.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner5.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner5.callChildLogicBlocks_active();
			me._thumbnail_cloner5.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner5.callChildLogicBlocks_activehotspotchanged();
			me._thumbnail_cloner5.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner5.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner5.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner5.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Ambiente7";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente7") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_cloner5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_cloner5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_cloner5.style[domTransition]='';
				if (me._thumbnail_cloner5.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_cloner5.style.visibility=(Number(me._thumbnail_cloner5.style.opacity)>0||!me._thumbnail_cloner5.style.opacity)?'inherit':'hidden';
					me._thumbnail_cloner5.ggVisible=true;
				}
				else {
					me._thumbnail_cloner5.style.visibility="hidden";
					me._thumbnail_cloner5.ggVisible=false;
				}
			}
		}
		me._thumbnail_cloner5.ggCurrentLogicStateVisible = -1;
		me._thumbnail_cloner5.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner5.childNodes.length; i++) {
				var child=me._thumbnail_cloner5.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner5.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner5.ggUpdate();
		}
		me._thumbnail_cloner5.ggNodeChange=function () {
			me._thumbnail_cloner5.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu5__content.appendChild(me._thumbnail_cloner5);
		me._thumb_ambiente_7.appendChild(me._thumbnail_menu5);
		me.divSkin.appendChild(me._thumb_ambiente_7);
		el=me._thumb_ambiente_6=document.createElement('div');
		el.ggId="Thumb Ambiente 6";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 92px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='background: rgba( 255, 255, 255, 0.30 ); backdrop-filter: blur( 9px ); -webkit-backdrop-filter: blur( 9px ); border-radius: 0px; border: 1px solid rgba( 255, 255, 255, 0.18 );';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumb_ambiente_6.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumb_ambiente_6.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_container1') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumb_ambiente_6.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumb_ambiente_6.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumb_ambiente_6.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_6.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumb_ambiente_6.style.bottom='-200px';
					me._thumb_ambiente_6.ggUpdatePosition(true);
				}
				else {
					me._thumb_ambiente_6.ggDx=0;
					me._thumb_ambiente_6.style.bottom='0px';
					me._thumb_ambiente_6.ggUpdatePosition(true);
				}
			}
		}
		me._thumb_ambiente_6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente6") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumb_ambiente_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumb_ambiente_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumb_ambiente_6.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_6.ggCurrentLogicStateVisible == 0) {
					me._thumb_ambiente_6.style.visibility=(Number(me._thumb_ambiente_6.style.opacity)>0||!me._thumb_ambiente_6.style.opacity)?'inherit':'hidden';
					me._thumb_ambiente_6.ggVisible=true;
				}
				else {
					me._thumb_ambiente_6.style.visibility="hidden";
					me._thumb_ambiente_6.ggVisible=false;
				}
			}
		}
		me._thumb_ambiente_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._thumbnail_menu4=document.createElement('div');
		els=me._thumbnail_menu4__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 97px;';
		hs+='left : 50%;';
		hs+='margin-left : -78.25px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 156.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu4.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu4.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu4.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu4.ggScrollPosX = (me._thumbnail_menu4__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu4.ggScrollPosX = Math.max(me._thumbnail_menu4.ggScrollPosX, 0);
			me._thumbnail_menu4.ggScrollPosX = Math.min(me._thumbnail_menu4.ggScrollPosX, me._thumbnail_menu4__horScrollBg.offsetWidth - me._thumbnail_menu4__horScrollFg.offsetWidth);
			me._thumbnail_menu4__horScrollFg.style.left = me._thumbnail_menu4.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu4.ggScrollPosX / (me._thumbnail_menu4__horScrollBg.offsetWidth - me._thumbnail_menu4__horScrollFg.offsetWidth);
			me._thumbnail_menu4__content.style.left = -(Math.round((me._thumbnail_menu4.ggContentWidth * (1.0 - me._thumbnail_menu4.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu4.ggContentLeftOffset + 'px';
			me._thumbnail_menu4.ggScrollPosXPercent = (me._thumbnail_menu4__horScrollFg.offsetLeft / me._thumbnail_menu4__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu4.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu4.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu4.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu4.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu4.ggScrollPosX >= me._thumbnail_menu4__horScrollBg.offsetWidth - me._thumbnail_menu4__horScrollFg.offsetWidth)) {
					me._thumbnail_menu4.ggScrollPosX = Math.min(me._thumbnail_menu4.ggScrollPosX, me._thumbnail_menu4__horScrollBg.offsetWidth - me._thumbnail_menu4__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu4.ggScrollPosX <= 0)) {
					me._thumbnail_menu4.ggScrollPosX = Math.max(me._thumbnail_menu4.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu4__horScrollFg.style.left = me._thumbnail_menu4.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu4.ggScrollPosX / (me._thumbnail_menu4__horScrollBg.offsetWidth - me._thumbnail_menu4__horScrollFg.offsetWidth);
			me._thumbnail_menu4__content.style.left = -(Math.round((me._thumbnail_menu4.ggContentWidth * (1.0 - me._thumbnail_menu4.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu4.ggContentLeftOffset + 'px';
			me._thumbnail_menu4.ggScrollPosXPercent = (me._thumbnail_menu4__horScrollFg.offsetLeft / me._thumbnail_menu4__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu4.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu4.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu4.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu4.ggScrollPosY = (me._thumbnail_menu4__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu4.ggScrollPosY = Math.max(me._thumbnail_menu4.ggScrollPosY, 0);
			me._thumbnail_menu4.ggScrollPosY = Math.min(me._thumbnail_menu4.ggScrollPosY, me._thumbnail_menu4__vertScrollBg.offsetHeight - me._thumbnail_menu4__vertScrollFg.offsetHeight);
			me._thumbnail_menu4__vertScrollFg.style.top = me._thumbnail_menu4.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu4.ggScrollPosY / (me._thumbnail_menu4__vertScrollBg.offsetHeight - me._thumbnail_menu4__vertScrollFg.offsetHeight);
			me._thumbnail_menu4__content.style.top = -(Math.round((me._thumbnail_menu4.ggContentHeight * (1.0 - me._thumbnail_menu4.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu4.ggContentTopOffset + 'px';
			me._thumbnail_menu4.ggScrollPosYPercent = (me._thumbnail_menu4__vertScrollFg.offsetTop / me._thumbnail_menu4__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu4.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu4.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu4.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu4.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu4.ggScrollPosY >= me._thumbnail_menu4__vertScrollBg.offsetHeight - me._thumbnail_menu4__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu4.ggScrollPosY = Math.min(me._thumbnail_menu4.ggScrollPosY, me._thumbnail_menu4__vertScrollBg.offsetHeight - me._thumbnail_menu4__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu4.ggScrollPosY <= 0)) {
					me._thumbnail_menu4.ggScrollPosY = Math.max(me._thumbnail_menu4.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu4__vertScrollFg.style.top = me._thumbnail_menu4.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu4.ggScrollPosY / (me._thumbnail_menu4__vertScrollBg.offsetHeight - me._thumbnail_menu4__vertScrollFg.offsetHeight);
			me._thumbnail_menu4__content.style.top = -(Math.round((me._thumbnail_menu4.ggContentHeight * (1.0 - me._thumbnail_menu4.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu4.ggContentTopOffset + 'px';
			me._thumbnail_menu4.ggScrollPosYPercent = (me._thumbnail_menu4__vertScrollFg.offsetTop / me._thumbnail_menu4__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu4.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu4.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu4.ggHPercentVisible);
					me._thumbnail_menu4.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu4.clientWidth - (me._thumbnail_menu4.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu4.clientWidth - (me._thumbnail_menu4.ggVertScrollVisible ? 5 : 0))) * me._thumbnail_menu4.ggHPercentVisible);
					me._thumbnail_menu4.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu4.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu4.ggVPercentVisible);
					me._thumbnail_menu4.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu4.clientHeight - (me._thumbnail_menu4.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu4.clientHeight - (me._thumbnail_menu4.ggHorScrollVisible ? 5 : 0))) * me._thumbnail_menu4.ggVPercentVisible);
					me._thumbnail_menu4.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu4.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu4.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu4__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu4.ggDragInertiaX *= 0.65;
					me._thumbnail_menu4.ggDragInertiaY *= 0.65;
					me._thumbnail_menu4.ggScrollByX(me._thumbnail_menu4.ggDragInertiaX);
					me._thumbnail_menu4.ggScrollByY(me._thumbnail_menu4.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu4.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu4.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._thumbnail_menu4__content.ontouchend = null;
				me._thumbnail_menu4__content.ontouchmove = null;
				me._thumbnail_menu4__content.onpointerup = null;
				me._thumbnail_menu4__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._thumbnail_menu4__content.onpointerup = me._thumbnail_menu4__content.ontouchend;
		}
			me._thumbnail_menu4__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._thumbnail_menu4.ggDragLastX) * me._thumbnail_menu4.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._thumbnail_menu4.ggDragLastY) * me._thumbnail_menu4.ggVPercentVisible;
				me._thumbnail_menu4.ggDragInertiaX = -diffX;
				me._thumbnail_menu4.ggDragInertiaY = -diffY;
				me._thumbnail_menu4.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu4.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu4.ggScrollByX(-diffX);
				me._thumbnail_menu4.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu4__content.onpointermove = me._thumbnail_menu4__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._thumbnail_menu4__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu4__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu4.ggScrollPosX = 0;
		me._thumbnail_menu4.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu4.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu4.ggDragInertiaX *= 0.65;
					me._thumbnail_menu4.ggScrollByX(me._thumbnail_menu4.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu4.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu4.ggDragLastX;
				me._thumbnail_menu4.ggDragInertiaX = diffX;
				me._thumbnail_menu4.ggDragLastX = e.clientX;
				me._thumbnail_menu4.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu4.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu4.ggDragInertiaX *= 0.65;
					me._thumbnail_menu4.ggScrollByX(me._thumbnail_menu4.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu4.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu4.ggDragLastX;
				me._thumbnail_menu4.ggDragInertiaX = diffX;
				me._thumbnail_menu4.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu4.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu4.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu4.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu4.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu4__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu4.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu4.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu4.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu4.ggScrollByXSmooth(30 * me._thumbnail_menu4.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu4__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0.3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='height : 84px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente6") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu4.style[domTransition]='';
				if (me._thumbnail_menu4.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu4.style.visibility=(Number(me._thumbnail_menu4.style.opacity)>0||!me._thumbnail_menu4.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu4.ggVisible=true;
				}
				else {
					me._thumbnail_menu4.style.visibility="hidden";
					me._thumbnail_menu4.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu4__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu4__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu4.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu4__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu4__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu4.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu4.ggHorScrollVisible) {
					me._thumbnail_menu4.ggAvailableHeight = me._thumbnail_menu4.clientHeight - 5;
					if (me._thumbnail_menu4.ggVertScrollVisible) {
						me._thumbnail_menu4.ggAvailableWidth = me._thumbnail_menu4.clientWidth - 5;
						me._thumbnail_menu4.ggAvailableWidthWithScale = me._thumbnail_menu4.getBoundingClientRect().width - me._thumbnail_menu4__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu4.ggAvailableWidth = me._thumbnail_menu4.clientWidth;
						me._thumbnail_menu4.ggAvailableWidthWithScale = me._thumbnail_menu4.getBoundingClientRect().width;
					}
					me._thumbnail_menu4__horScrollBg.style.width = me._thumbnail_menu4.ggAvailableWidth + 'px';
					me._thumbnail_menu4.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu4.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu4.ggHPercentVisible > 1.0) me._thumbnail_menu4.ggHPercentVisible = 1.0;
					me._thumbnail_menu4.ggScrollWidth = Math.round(me._thumbnail_menu4__horScrollBg.offsetWidth * me._thumbnail_menu4.ggHPercentVisible);
					me._thumbnail_menu4__horScrollFg.style.width = me._thumbnail_menu4.ggScrollWidth + 'px';
					me._thumbnail_menu4.ggScrollPosX = me._thumbnail_menu4.ggScrollPosXPercent * me._thumbnail_menu4.ggAvailableWidth;
					me._thumbnail_menu4.ggScrollPosX = Math.min(me._thumbnail_menu4.ggScrollPosX, me._thumbnail_menu4__horScrollBg.offsetWidth - me._thumbnail_menu4__horScrollFg.offsetWidth);
					me._thumbnail_menu4__horScrollFg.style.left = me._thumbnail_menu4.ggScrollPosX + 'px';
					if (me._thumbnail_menu4.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu4.ggScrollPosX / (me._thumbnail_menu4__horScrollBg.offsetWidth - me._thumbnail_menu4__horScrollFg.offsetWidth);
						me._thumbnail_menu4__content.style.left = -(Math.round((me._thumbnail_menu4.ggContentWidth * (1.0 - me._thumbnail_menu4.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu4.ggAvailableHeight = me._thumbnail_menu4.clientHeight;
					me._thumbnail_menu4.ggScrollPosX = 0;
					me._thumbnail_menu4.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu4.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu4.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu4);
					me._thumbnail_menu4.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner4=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 125;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner4.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner4.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner4.ggInstances.length; i++) {
					if (me._thumbnail_cloner4.ggInstances[i]._checkmark_tick4 && me._thumbnail_cloner4.ggInstances[i]._checkmark_tick4.logicBlock_alpha) {
						me._thumbnail_cloner4.ggInstances[i]._checkmark_tick4.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner4.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner4.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner4.ggInstances.length; i++) {
					if (me._thumbnail_cloner4.ggInstances[i]._thumbnail_active4 && me._thumbnail_cloner4.ggInstances[i]._thumbnail_active4.logicBlock_bordercolor) {
						me._thumbnail_cloner4.ggInstances[i]._thumbnail_active4.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner4.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner4.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner4.ggInstances.length; i++) {
					if (me._thumbnail_cloner4.ggInstances[i]._checkmark_tick4 && me._thumbnail_cloner4.ggInstances[i]._checkmark_tick4.logicBlock_alpha) {
						me._thumbnail_cloner4.ggInstances[i]._checkmark_tick4.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner4.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner4.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner4.ggInstances.length; i++) {
					if (me._thumbnail_cloner4.ggInstances[i]._thumbnail_active4 && me._thumbnail_cloner4.ggInstances[i]._thumbnail_active4.logicBlock_bordercolor) {
						me._thumbnail_cloner4.ggInstances[i]._thumbnail_active4.logicBlock_bordercolor();
					}
					if (me._thumbnail_cloner4.ggInstances[i]._checkmark_tick4 && me._thumbnail_cloner4.ggInstances[i]._checkmark_tick4.logicBlock_visible) {
						me._thumbnail_cloner4.ggInstances[i]._checkmark_tick4.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner4.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner4.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner4.ggInstances.length; i++) {
					if (me._thumbnail_cloner4.ggInstances[i]._checkmark_tick4 && me._thumbnail_cloner4.ggInstances[i]._checkmark_tick4.logicBlock_visible) {
						me._thumbnail_cloner4.ggInstances[i]._checkmark_tick4.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner4.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._thumbnail_cloner4.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner4.ggInstances.length; i++) {
					if (me._thumbnail_cloner4.ggInstances[i]._checkmark_tick4 && me._thumbnail_cloner4.ggInstances[i]._checkmark_tick4.logicBlock_alpha) {
						me._thumbnail_cloner4.ggInstances[i]._checkmark_tick4.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner4.ggUpdating == true) return;
			me._thumbnail_cloner4.ggUpdating = true;
			var el=me._thumbnail_cloner4;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner4.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner4.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner4.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner4.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner4.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner4_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner4.callChildLogicBlocks_changenode();
			me._thumbnail_cloner4.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner4.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner4.callChildLogicBlocks_active();
			me._thumbnail_cloner4.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner4.callChildLogicBlocks_activehotspotchanged();
			me._thumbnail_cloner4.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner4.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner4.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner4.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Ambiente6";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente6") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_cloner4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_cloner4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_cloner4.style[domTransition]='';
				if (me._thumbnail_cloner4.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_cloner4.style.visibility=(Number(me._thumbnail_cloner4.style.opacity)>0||!me._thumbnail_cloner4.style.opacity)?'inherit':'hidden';
					me._thumbnail_cloner4.ggVisible=true;
				}
				else {
					me._thumbnail_cloner4.style.visibility="hidden";
					me._thumbnail_cloner4.ggVisible=false;
				}
			}
		}
		me._thumbnail_cloner4.ggCurrentLogicStateVisible = -1;
		me._thumbnail_cloner4.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner4.childNodes.length; i++) {
				var child=me._thumbnail_cloner4.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner4.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner4.ggUpdate();
		}
		me._thumbnail_cloner4.ggNodeChange=function () {
			me._thumbnail_cloner4.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu4__content.appendChild(me._thumbnail_cloner4);
		me._thumb_ambiente_6.appendChild(me._thumbnail_menu4);
		me.divSkin.appendChild(me._thumb_ambiente_6);
		el=me._thumb_ambiente_5=document.createElement('div');
		el.ggId="Thumb Ambiente 5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 92px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='background: rgba( 255, 255, 255, 0.30 ); backdrop-filter: blur( 9px ); -webkit-backdrop-filter: blur( 9px ); border-radius: 0px; border: 1px solid rgba( 255, 255, 255, 0.18 );';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumb_ambiente_5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumb_ambiente_5.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_container1') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumb_ambiente_5.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumb_ambiente_5.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumb_ambiente_5.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_5.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumb_ambiente_5.style.bottom='-200px';
					me._thumb_ambiente_5.ggUpdatePosition(true);
				}
				else {
					me._thumb_ambiente_5.ggDx=0;
					me._thumb_ambiente_5.style.bottom='0px';
					me._thumb_ambiente_5.ggUpdatePosition(true);
				}
			}
		}
		me._thumb_ambiente_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente5") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumb_ambiente_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumb_ambiente_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumb_ambiente_5.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_5.ggCurrentLogicStateVisible == 0) {
					me._thumb_ambiente_5.style.visibility=(Number(me._thumb_ambiente_5.style.opacity)>0||!me._thumb_ambiente_5.style.opacity)?'inherit':'hidden';
					me._thumb_ambiente_5.ggVisible=true;
				}
				else {
					me._thumb_ambiente_5.style.visibility="hidden";
					me._thumb_ambiente_5.ggVisible=false;
				}
			}
		}
		me._thumb_ambiente_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._thumbnail_menu3=document.createElement('div');
		els=me._thumbnail_menu3__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 97px;';
		hs+='left : 50%;';
		hs+='margin-left : -78.25px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 156.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu3.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu3.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu3.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu3.ggScrollPosX = (me._thumbnail_menu3__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu3.ggScrollPosX = Math.max(me._thumbnail_menu3.ggScrollPosX, 0);
			me._thumbnail_menu3.ggScrollPosX = Math.min(me._thumbnail_menu3.ggScrollPosX, me._thumbnail_menu3__horScrollBg.offsetWidth - me._thumbnail_menu3__horScrollFg.offsetWidth);
			me._thumbnail_menu3__horScrollFg.style.left = me._thumbnail_menu3.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu3.ggScrollPosX / (me._thumbnail_menu3__horScrollBg.offsetWidth - me._thumbnail_menu3__horScrollFg.offsetWidth);
			me._thumbnail_menu3__content.style.left = -(Math.round((me._thumbnail_menu3.ggContentWidth * (1.0 - me._thumbnail_menu3.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu3.ggContentLeftOffset + 'px';
			me._thumbnail_menu3.ggScrollPosXPercent = (me._thumbnail_menu3__horScrollFg.offsetLeft / me._thumbnail_menu3__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu3.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu3.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu3.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu3.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu3.ggScrollPosX >= me._thumbnail_menu3__horScrollBg.offsetWidth - me._thumbnail_menu3__horScrollFg.offsetWidth)) {
					me._thumbnail_menu3.ggScrollPosX = Math.min(me._thumbnail_menu3.ggScrollPosX, me._thumbnail_menu3__horScrollBg.offsetWidth - me._thumbnail_menu3__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu3.ggScrollPosX <= 0)) {
					me._thumbnail_menu3.ggScrollPosX = Math.max(me._thumbnail_menu3.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu3__horScrollFg.style.left = me._thumbnail_menu3.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu3.ggScrollPosX / (me._thumbnail_menu3__horScrollBg.offsetWidth - me._thumbnail_menu3__horScrollFg.offsetWidth);
			me._thumbnail_menu3__content.style.left = -(Math.round((me._thumbnail_menu3.ggContentWidth * (1.0 - me._thumbnail_menu3.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu3.ggContentLeftOffset + 'px';
			me._thumbnail_menu3.ggScrollPosXPercent = (me._thumbnail_menu3__horScrollFg.offsetLeft / me._thumbnail_menu3__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu3.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu3.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu3.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu3.ggScrollPosY = (me._thumbnail_menu3__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu3.ggScrollPosY = Math.max(me._thumbnail_menu3.ggScrollPosY, 0);
			me._thumbnail_menu3.ggScrollPosY = Math.min(me._thumbnail_menu3.ggScrollPosY, me._thumbnail_menu3__vertScrollBg.offsetHeight - me._thumbnail_menu3__vertScrollFg.offsetHeight);
			me._thumbnail_menu3__vertScrollFg.style.top = me._thumbnail_menu3.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu3.ggScrollPosY / (me._thumbnail_menu3__vertScrollBg.offsetHeight - me._thumbnail_menu3__vertScrollFg.offsetHeight);
			me._thumbnail_menu3__content.style.top = -(Math.round((me._thumbnail_menu3.ggContentHeight * (1.0 - me._thumbnail_menu3.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu3.ggContentTopOffset + 'px';
			me._thumbnail_menu3.ggScrollPosYPercent = (me._thumbnail_menu3__vertScrollFg.offsetTop / me._thumbnail_menu3__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu3.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu3.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu3.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu3.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu3.ggScrollPosY >= me._thumbnail_menu3__vertScrollBg.offsetHeight - me._thumbnail_menu3__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu3.ggScrollPosY = Math.min(me._thumbnail_menu3.ggScrollPosY, me._thumbnail_menu3__vertScrollBg.offsetHeight - me._thumbnail_menu3__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu3.ggScrollPosY <= 0)) {
					me._thumbnail_menu3.ggScrollPosY = Math.max(me._thumbnail_menu3.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu3__vertScrollFg.style.top = me._thumbnail_menu3.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu3.ggScrollPosY / (me._thumbnail_menu3__vertScrollBg.offsetHeight - me._thumbnail_menu3__vertScrollFg.offsetHeight);
			me._thumbnail_menu3__content.style.top = -(Math.round((me._thumbnail_menu3.ggContentHeight * (1.0 - me._thumbnail_menu3.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu3.ggContentTopOffset + 'px';
			me._thumbnail_menu3.ggScrollPosYPercent = (me._thumbnail_menu3__vertScrollFg.offsetTop / me._thumbnail_menu3__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu3.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu3.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu3.ggHPercentVisible);
					me._thumbnail_menu3.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu3.clientWidth - (me._thumbnail_menu3.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu3.clientWidth - (me._thumbnail_menu3.ggVertScrollVisible ? 5 : 0))) * me._thumbnail_menu3.ggHPercentVisible);
					me._thumbnail_menu3.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu3.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu3.ggVPercentVisible);
					me._thumbnail_menu3.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu3.clientHeight - (me._thumbnail_menu3.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu3.clientHeight - (me._thumbnail_menu3.ggHorScrollVisible ? 5 : 0))) * me._thumbnail_menu3.ggVPercentVisible);
					me._thumbnail_menu3.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu3.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu3.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu3__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu3.ggDragInertiaX *= 0.65;
					me._thumbnail_menu3.ggDragInertiaY *= 0.65;
					me._thumbnail_menu3.ggScrollByX(me._thumbnail_menu3.ggDragInertiaX);
					me._thumbnail_menu3.ggScrollByY(me._thumbnail_menu3.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu3.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu3.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._thumbnail_menu3__content.ontouchend = null;
				me._thumbnail_menu3__content.ontouchmove = null;
				me._thumbnail_menu3__content.onpointerup = null;
				me._thumbnail_menu3__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._thumbnail_menu3__content.onpointerup = me._thumbnail_menu3__content.ontouchend;
		}
			me._thumbnail_menu3__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._thumbnail_menu3.ggDragLastX) * me._thumbnail_menu3.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._thumbnail_menu3.ggDragLastY) * me._thumbnail_menu3.ggVPercentVisible;
				me._thumbnail_menu3.ggDragInertiaX = -diffX;
				me._thumbnail_menu3.ggDragInertiaY = -diffY;
				me._thumbnail_menu3.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu3.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu3.ggScrollByX(-diffX);
				me._thumbnail_menu3.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu3__content.onpointermove = me._thumbnail_menu3__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._thumbnail_menu3__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu3__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu3.ggScrollPosX = 0;
		me._thumbnail_menu3.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu3.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu3.ggDragInertiaX *= 0.65;
					me._thumbnail_menu3.ggScrollByX(me._thumbnail_menu3.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu3.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu3.ggDragLastX;
				me._thumbnail_menu3.ggDragInertiaX = diffX;
				me._thumbnail_menu3.ggDragLastX = e.clientX;
				me._thumbnail_menu3.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu3.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu3.ggDragInertiaX *= 0.65;
					me._thumbnail_menu3.ggScrollByX(me._thumbnail_menu3.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu3.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu3.ggDragLastX;
				me._thumbnail_menu3.ggDragInertiaX = diffX;
				me._thumbnail_menu3.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu3.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu3.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu3.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu3.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu3__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu3.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu3.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu3.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu3.ggScrollByXSmooth(30 * me._thumbnail_menu3.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu3__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0.3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='height : 84px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente5") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu3.style[domTransition]='';
				if (me._thumbnail_menu3.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu3.style.visibility=(Number(me._thumbnail_menu3.style.opacity)>0||!me._thumbnail_menu3.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu3.ggVisible=true;
				}
				else {
					me._thumbnail_menu3.style.visibility="hidden";
					me._thumbnail_menu3.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu3__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu3__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu3.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu3__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu3__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu3.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu3.ggHorScrollVisible) {
					me._thumbnail_menu3.ggAvailableHeight = me._thumbnail_menu3.clientHeight - 5;
					if (me._thumbnail_menu3.ggVertScrollVisible) {
						me._thumbnail_menu3.ggAvailableWidth = me._thumbnail_menu3.clientWidth - 5;
						me._thumbnail_menu3.ggAvailableWidthWithScale = me._thumbnail_menu3.getBoundingClientRect().width - me._thumbnail_menu3__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu3.ggAvailableWidth = me._thumbnail_menu3.clientWidth;
						me._thumbnail_menu3.ggAvailableWidthWithScale = me._thumbnail_menu3.getBoundingClientRect().width;
					}
					me._thumbnail_menu3__horScrollBg.style.width = me._thumbnail_menu3.ggAvailableWidth + 'px';
					me._thumbnail_menu3.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu3.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu3.ggHPercentVisible > 1.0) me._thumbnail_menu3.ggHPercentVisible = 1.0;
					me._thumbnail_menu3.ggScrollWidth = Math.round(me._thumbnail_menu3__horScrollBg.offsetWidth * me._thumbnail_menu3.ggHPercentVisible);
					me._thumbnail_menu3__horScrollFg.style.width = me._thumbnail_menu3.ggScrollWidth + 'px';
					me._thumbnail_menu3.ggScrollPosX = me._thumbnail_menu3.ggScrollPosXPercent * me._thumbnail_menu3.ggAvailableWidth;
					me._thumbnail_menu3.ggScrollPosX = Math.min(me._thumbnail_menu3.ggScrollPosX, me._thumbnail_menu3__horScrollBg.offsetWidth - me._thumbnail_menu3__horScrollFg.offsetWidth);
					me._thumbnail_menu3__horScrollFg.style.left = me._thumbnail_menu3.ggScrollPosX + 'px';
					if (me._thumbnail_menu3.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu3.ggScrollPosX / (me._thumbnail_menu3__horScrollBg.offsetWidth - me._thumbnail_menu3__horScrollFg.offsetWidth);
						me._thumbnail_menu3__content.style.left = -(Math.round((me._thumbnail_menu3.ggContentWidth * (1.0 - me._thumbnail_menu3.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu3.ggAvailableHeight = me._thumbnail_menu3.clientHeight;
					me._thumbnail_menu3.ggScrollPosX = 0;
					me._thumbnail_menu3.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu3.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu3.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu3);
					me._thumbnail_menu3.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner3=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 125;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner3.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner3.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner3.ggInstances.length; i++) {
					if (me._thumbnail_cloner3.ggInstances[i]._checkmark_tick3 && me._thumbnail_cloner3.ggInstances[i]._checkmark_tick3.logicBlock_alpha) {
						me._thumbnail_cloner3.ggInstances[i]._checkmark_tick3.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner3.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner3.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner3.ggInstances.length; i++) {
					if (me._thumbnail_cloner3.ggInstances[i]._thumbnail_active3 && me._thumbnail_cloner3.ggInstances[i]._thumbnail_active3.logicBlock_bordercolor) {
						me._thumbnail_cloner3.ggInstances[i]._thumbnail_active3.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner3.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner3.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner3.ggInstances.length; i++) {
					if (me._thumbnail_cloner3.ggInstances[i]._checkmark_tick3 && me._thumbnail_cloner3.ggInstances[i]._checkmark_tick3.logicBlock_alpha) {
						me._thumbnail_cloner3.ggInstances[i]._checkmark_tick3.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner3.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner3.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner3.ggInstances.length; i++) {
					if (me._thumbnail_cloner3.ggInstances[i]._thumbnail_active3 && me._thumbnail_cloner3.ggInstances[i]._thumbnail_active3.logicBlock_bordercolor) {
						me._thumbnail_cloner3.ggInstances[i]._thumbnail_active3.logicBlock_bordercolor();
					}
					if (me._thumbnail_cloner3.ggInstances[i]._checkmark_tick3 && me._thumbnail_cloner3.ggInstances[i]._checkmark_tick3.logicBlock_visible) {
						me._thumbnail_cloner3.ggInstances[i]._checkmark_tick3.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner3.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner3.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner3.ggInstances.length; i++) {
					if (me._thumbnail_cloner3.ggInstances[i]._checkmark_tick3 && me._thumbnail_cloner3.ggInstances[i]._checkmark_tick3.logicBlock_visible) {
						me._thumbnail_cloner3.ggInstances[i]._checkmark_tick3.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner3.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._thumbnail_cloner3.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner3.ggInstances.length; i++) {
					if (me._thumbnail_cloner3.ggInstances[i]._checkmark_tick3 && me._thumbnail_cloner3.ggInstances[i]._checkmark_tick3.logicBlock_alpha) {
						me._thumbnail_cloner3.ggInstances[i]._checkmark_tick3.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner3.ggUpdating == true) return;
			me._thumbnail_cloner3.ggUpdating = true;
			var el=me._thumbnail_cloner3;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner3.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner3.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner3.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner3.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner3.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner3_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner3.callChildLogicBlocks_changenode();
			me._thumbnail_cloner3.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner3.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner3.callChildLogicBlocks_active();
			me._thumbnail_cloner3.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner3.callChildLogicBlocks_activehotspotchanged();
			me._thumbnail_cloner3.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner3.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner3.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner3.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Ambiente5";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente5") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_cloner3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_cloner3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_cloner3.style[domTransition]='';
				if (me._thumbnail_cloner3.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_cloner3.style.visibility=(Number(me._thumbnail_cloner3.style.opacity)>0||!me._thumbnail_cloner3.style.opacity)?'inherit':'hidden';
					me._thumbnail_cloner3.ggVisible=true;
				}
				else {
					me._thumbnail_cloner3.style.visibility="hidden";
					me._thumbnail_cloner3.ggVisible=false;
				}
			}
		}
		me._thumbnail_cloner3.ggCurrentLogicStateVisible = -1;
		me._thumbnail_cloner3.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner3.childNodes.length; i++) {
				var child=me._thumbnail_cloner3.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner3.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner3.ggUpdate();
		}
		me._thumbnail_cloner3.ggNodeChange=function () {
			me._thumbnail_cloner3.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu3__content.appendChild(me._thumbnail_cloner3);
		me._thumb_ambiente_5.appendChild(me._thumbnail_menu3);
		me.divSkin.appendChild(me._thumb_ambiente_5);
		el=me._thumb_ambiente_4=document.createElement('div');
		el.ggId="Thumb Ambiente 4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 92px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='background: rgba( 255, 255, 255, 0.30 ); backdrop-filter: blur( 9px ); -webkit-backdrop-filter: blur( 9px ); border-radius: 0px; border: 1px solid rgba( 255, 255, 255, 0.18 );';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumb_ambiente_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumb_ambiente_4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_container1') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumb_ambiente_4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumb_ambiente_4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumb_ambiente_4.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_4.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumb_ambiente_4.style.bottom='-200px';
					me._thumb_ambiente_4.ggUpdatePosition(true);
				}
				else {
					me._thumb_ambiente_4.ggDx=0;
					me._thumb_ambiente_4.style.bottom='0px';
					me._thumb_ambiente_4.ggUpdatePosition(true);
				}
			}
		}
		me._thumb_ambiente_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente4") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumb_ambiente_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumb_ambiente_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumb_ambiente_4.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_4.ggCurrentLogicStateVisible == 0) {
					me._thumb_ambiente_4.style.visibility=(Number(me._thumb_ambiente_4.style.opacity)>0||!me._thumb_ambiente_4.style.opacity)?'inherit':'hidden';
					me._thumb_ambiente_4.ggVisible=true;
				}
				else {
					me._thumb_ambiente_4.style.visibility="hidden";
					me._thumb_ambiente_4.ggVisible=false;
				}
			}
		}
		me._thumb_ambiente_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._thumbnail_menu2=document.createElement('div');
		els=me._thumbnail_menu2__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 97px;';
		hs+='left : 50%;';
		hs+='margin-left : -78.25px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 156.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu2.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu2.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu2.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu2.ggScrollPosX = (me._thumbnail_menu2__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu2.ggScrollPosX = Math.max(me._thumbnail_menu2.ggScrollPosX, 0);
			me._thumbnail_menu2.ggScrollPosX = Math.min(me._thumbnail_menu2.ggScrollPosX, me._thumbnail_menu2__horScrollBg.offsetWidth - me._thumbnail_menu2__horScrollFg.offsetWidth);
			me._thumbnail_menu2__horScrollFg.style.left = me._thumbnail_menu2.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu2.ggScrollPosX / (me._thumbnail_menu2__horScrollBg.offsetWidth - me._thumbnail_menu2__horScrollFg.offsetWidth);
			me._thumbnail_menu2__content.style.left = -(Math.round((me._thumbnail_menu2.ggContentWidth * (1.0 - me._thumbnail_menu2.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu2.ggContentLeftOffset + 'px';
			me._thumbnail_menu2.ggScrollPosXPercent = (me._thumbnail_menu2__horScrollFg.offsetLeft / me._thumbnail_menu2__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu2.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu2.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu2.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu2.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu2.ggScrollPosX >= me._thumbnail_menu2__horScrollBg.offsetWidth - me._thumbnail_menu2__horScrollFg.offsetWidth)) {
					me._thumbnail_menu2.ggScrollPosX = Math.min(me._thumbnail_menu2.ggScrollPosX, me._thumbnail_menu2__horScrollBg.offsetWidth - me._thumbnail_menu2__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu2.ggScrollPosX <= 0)) {
					me._thumbnail_menu2.ggScrollPosX = Math.max(me._thumbnail_menu2.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu2__horScrollFg.style.left = me._thumbnail_menu2.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu2.ggScrollPosX / (me._thumbnail_menu2__horScrollBg.offsetWidth - me._thumbnail_menu2__horScrollFg.offsetWidth);
			me._thumbnail_menu2__content.style.left = -(Math.round((me._thumbnail_menu2.ggContentWidth * (1.0 - me._thumbnail_menu2.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu2.ggContentLeftOffset + 'px';
			me._thumbnail_menu2.ggScrollPosXPercent = (me._thumbnail_menu2__horScrollFg.offsetLeft / me._thumbnail_menu2__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu2.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu2.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu2.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu2.ggScrollPosY = (me._thumbnail_menu2__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu2.ggScrollPosY = Math.max(me._thumbnail_menu2.ggScrollPosY, 0);
			me._thumbnail_menu2.ggScrollPosY = Math.min(me._thumbnail_menu2.ggScrollPosY, me._thumbnail_menu2__vertScrollBg.offsetHeight - me._thumbnail_menu2__vertScrollFg.offsetHeight);
			me._thumbnail_menu2__vertScrollFg.style.top = me._thumbnail_menu2.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu2.ggScrollPosY / (me._thumbnail_menu2__vertScrollBg.offsetHeight - me._thumbnail_menu2__vertScrollFg.offsetHeight);
			me._thumbnail_menu2__content.style.top = -(Math.round((me._thumbnail_menu2.ggContentHeight * (1.0 - me._thumbnail_menu2.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu2.ggContentTopOffset + 'px';
			me._thumbnail_menu2.ggScrollPosYPercent = (me._thumbnail_menu2__vertScrollFg.offsetTop / me._thumbnail_menu2__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu2.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu2.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu2.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu2.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu2.ggScrollPosY >= me._thumbnail_menu2__vertScrollBg.offsetHeight - me._thumbnail_menu2__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu2.ggScrollPosY = Math.min(me._thumbnail_menu2.ggScrollPosY, me._thumbnail_menu2__vertScrollBg.offsetHeight - me._thumbnail_menu2__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu2.ggScrollPosY <= 0)) {
					me._thumbnail_menu2.ggScrollPosY = Math.max(me._thumbnail_menu2.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu2__vertScrollFg.style.top = me._thumbnail_menu2.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu2.ggScrollPosY / (me._thumbnail_menu2__vertScrollBg.offsetHeight - me._thumbnail_menu2__vertScrollFg.offsetHeight);
			me._thumbnail_menu2__content.style.top = -(Math.round((me._thumbnail_menu2.ggContentHeight * (1.0 - me._thumbnail_menu2.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu2.ggContentTopOffset + 'px';
			me._thumbnail_menu2.ggScrollPosYPercent = (me._thumbnail_menu2__vertScrollFg.offsetTop / me._thumbnail_menu2__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu2.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu2.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu2.ggHPercentVisible);
					me._thumbnail_menu2.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu2.clientWidth - (me._thumbnail_menu2.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu2.clientWidth - (me._thumbnail_menu2.ggVertScrollVisible ? 5 : 0))) * me._thumbnail_menu2.ggHPercentVisible);
					me._thumbnail_menu2.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu2.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu2.ggVPercentVisible);
					me._thumbnail_menu2.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu2.clientHeight - (me._thumbnail_menu2.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu2.clientHeight - (me._thumbnail_menu2.ggHorScrollVisible ? 5 : 0))) * me._thumbnail_menu2.ggVPercentVisible);
					me._thumbnail_menu2.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu2.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu2.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu2__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu2.ggDragInertiaX *= 0.65;
					me._thumbnail_menu2.ggDragInertiaY *= 0.65;
					me._thumbnail_menu2.ggScrollByX(me._thumbnail_menu2.ggDragInertiaX);
					me._thumbnail_menu2.ggScrollByY(me._thumbnail_menu2.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu2.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu2.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._thumbnail_menu2__content.ontouchend = null;
				me._thumbnail_menu2__content.ontouchmove = null;
				me._thumbnail_menu2__content.onpointerup = null;
				me._thumbnail_menu2__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._thumbnail_menu2__content.onpointerup = me._thumbnail_menu2__content.ontouchend;
		}
			me._thumbnail_menu2__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._thumbnail_menu2.ggDragLastX) * me._thumbnail_menu2.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._thumbnail_menu2.ggDragLastY) * me._thumbnail_menu2.ggVPercentVisible;
				me._thumbnail_menu2.ggDragInertiaX = -diffX;
				me._thumbnail_menu2.ggDragInertiaY = -diffY;
				me._thumbnail_menu2.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu2.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu2.ggScrollByX(-diffX);
				me._thumbnail_menu2.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu2__content.onpointermove = me._thumbnail_menu2__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._thumbnail_menu2__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu2__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu2.ggScrollPosX = 0;
		me._thumbnail_menu2.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu2.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu2.ggDragInertiaX *= 0.65;
					me._thumbnail_menu2.ggScrollByX(me._thumbnail_menu2.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu2.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu2.ggDragLastX;
				me._thumbnail_menu2.ggDragInertiaX = diffX;
				me._thumbnail_menu2.ggDragLastX = e.clientX;
				me._thumbnail_menu2.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu2.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu2.ggDragInertiaX *= 0.65;
					me._thumbnail_menu2.ggScrollByX(me._thumbnail_menu2.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu2.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu2.ggDragLastX;
				me._thumbnail_menu2.ggDragInertiaX = diffX;
				me._thumbnail_menu2.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu2.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu2.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu2.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu2.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu2__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu2.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu2.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu2.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu2.ggScrollByXSmooth(30 * me._thumbnail_menu2.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu2__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0.3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='height : 84px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente4") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu2.style[domTransition]='';
				if (me._thumbnail_menu2.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu2.style.visibility=(Number(me._thumbnail_menu2.style.opacity)>0||!me._thumbnail_menu2.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu2.ggVisible=true;
				}
				else {
					me._thumbnail_menu2.style.visibility="hidden";
					me._thumbnail_menu2.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu2__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu2__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu2.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu2__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu2__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu2.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu2.ggHorScrollVisible) {
					me._thumbnail_menu2.ggAvailableHeight = me._thumbnail_menu2.clientHeight - 5;
					if (me._thumbnail_menu2.ggVertScrollVisible) {
						me._thumbnail_menu2.ggAvailableWidth = me._thumbnail_menu2.clientWidth - 5;
						me._thumbnail_menu2.ggAvailableWidthWithScale = me._thumbnail_menu2.getBoundingClientRect().width - me._thumbnail_menu2__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu2.ggAvailableWidth = me._thumbnail_menu2.clientWidth;
						me._thumbnail_menu2.ggAvailableWidthWithScale = me._thumbnail_menu2.getBoundingClientRect().width;
					}
					me._thumbnail_menu2__horScrollBg.style.width = me._thumbnail_menu2.ggAvailableWidth + 'px';
					me._thumbnail_menu2.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu2.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu2.ggHPercentVisible > 1.0) me._thumbnail_menu2.ggHPercentVisible = 1.0;
					me._thumbnail_menu2.ggScrollWidth = Math.round(me._thumbnail_menu2__horScrollBg.offsetWidth * me._thumbnail_menu2.ggHPercentVisible);
					me._thumbnail_menu2__horScrollFg.style.width = me._thumbnail_menu2.ggScrollWidth + 'px';
					me._thumbnail_menu2.ggScrollPosX = me._thumbnail_menu2.ggScrollPosXPercent * me._thumbnail_menu2.ggAvailableWidth;
					me._thumbnail_menu2.ggScrollPosX = Math.min(me._thumbnail_menu2.ggScrollPosX, me._thumbnail_menu2__horScrollBg.offsetWidth - me._thumbnail_menu2__horScrollFg.offsetWidth);
					me._thumbnail_menu2__horScrollFg.style.left = me._thumbnail_menu2.ggScrollPosX + 'px';
					if (me._thumbnail_menu2.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu2.ggScrollPosX / (me._thumbnail_menu2__horScrollBg.offsetWidth - me._thumbnail_menu2__horScrollFg.offsetWidth);
						me._thumbnail_menu2__content.style.left = -(Math.round((me._thumbnail_menu2.ggContentWidth * (1.0 - me._thumbnail_menu2.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu2.ggAvailableHeight = me._thumbnail_menu2.clientHeight;
					me._thumbnail_menu2.ggScrollPosX = 0;
					me._thumbnail_menu2.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu2.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu2.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu2);
					me._thumbnail_menu2.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner2=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 125;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner2.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner2.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner2.ggInstances.length; i++) {
					if (me._thumbnail_cloner2.ggInstances[i]._checkmark_tick2 && me._thumbnail_cloner2.ggInstances[i]._checkmark_tick2.logicBlock_alpha) {
						me._thumbnail_cloner2.ggInstances[i]._checkmark_tick2.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner2.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner2.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner2.ggInstances.length; i++) {
					if (me._thumbnail_cloner2.ggInstances[i]._thumbnail_active2 && me._thumbnail_cloner2.ggInstances[i]._thumbnail_active2.logicBlock_bordercolor) {
						me._thumbnail_cloner2.ggInstances[i]._thumbnail_active2.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner2.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner2.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner2.ggInstances.length; i++) {
					if (me._thumbnail_cloner2.ggInstances[i]._checkmark_tick2 && me._thumbnail_cloner2.ggInstances[i]._checkmark_tick2.logicBlock_alpha) {
						me._thumbnail_cloner2.ggInstances[i]._checkmark_tick2.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner2.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner2.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner2.ggInstances.length; i++) {
					if (me._thumbnail_cloner2.ggInstances[i]._thumbnail_active2 && me._thumbnail_cloner2.ggInstances[i]._thumbnail_active2.logicBlock_bordercolor) {
						me._thumbnail_cloner2.ggInstances[i]._thumbnail_active2.logicBlock_bordercolor();
					}
					if (me._thumbnail_cloner2.ggInstances[i]._checkmark_tick2 && me._thumbnail_cloner2.ggInstances[i]._checkmark_tick2.logicBlock_visible) {
						me._thumbnail_cloner2.ggInstances[i]._checkmark_tick2.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner2.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner2.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner2.ggInstances.length; i++) {
					if (me._thumbnail_cloner2.ggInstances[i]._checkmark_tick2 && me._thumbnail_cloner2.ggInstances[i]._checkmark_tick2.logicBlock_visible) {
						me._thumbnail_cloner2.ggInstances[i]._checkmark_tick2.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner2.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._thumbnail_cloner2.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner2.ggInstances.length; i++) {
					if (me._thumbnail_cloner2.ggInstances[i]._checkmark_tick2 && me._thumbnail_cloner2.ggInstances[i]._checkmark_tick2.logicBlock_alpha) {
						me._thumbnail_cloner2.ggInstances[i]._checkmark_tick2.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner2.ggUpdating == true) return;
			me._thumbnail_cloner2.ggUpdating = true;
			var el=me._thumbnail_cloner2;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner2.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner2.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner2.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner2.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner2.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner2_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner2.callChildLogicBlocks_changenode();
			me._thumbnail_cloner2.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner2.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner2.callChildLogicBlocks_active();
			me._thumbnail_cloner2.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner2.callChildLogicBlocks_activehotspotchanged();
			me._thumbnail_cloner2.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner2.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner2.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner2.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Ambiente4";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente4") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_cloner2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_cloner2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_cloner2.style[domTransition]='';
				if (me._thumbnail_cloner2.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_cloner2.style.visibility=(Number(me._thumbnail_cloner2.style.opacity)>0||!me._thumbnail_cloner2.style.opacity)?'inherit':'hidden';
					me._thumbnail_cloner2.ggVisible=true;
				}
				else {
					me._thumbnail_cloner2.style.visibility="hidden";
					me._thumbnail_cloner2.ggVisible=false;
				}
			}
		}
		me._thumbnail_cloner2.ggCurrentLogicStateVisible = -1;
		me._thumbnail_cloner2.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner2.childNodes.length; i++) {
				var child=me._thumbnail_cloner2.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner2.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner2.ggUpdate();
		}
		me._thumbnail_cloner2.ggNodeChange=function () {
			me._thumbnail_cloner2.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu2__content.appendChild(me._thumbnail_cloner2);
		me._thumb_ambiente_4.appendChild(me._thumbnail_menu2);
		me.divSkin.appendChild(me._thumb_ambiente_4);
		el=me._thumb_ambiente_3=document.createElement('div');
		el.ggId="Thumb Ambiente 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 92px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='background: rgba( 255, 255, 255, 0.30 ); backdrop-filter: blur( 9px ); -webkit-backdrop-filter: blur( 9px ); border-radius: 0px; border: 1px solid rgba( 255, 255, 255, 0.18 );';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumb_ambiente_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumb_ambiente_3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_container1') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumb_ambiente_3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumb_ambiente_3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumb_ambiente_3.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_3.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumb_ambiente_3.style.bottom='-200px';
					me._thumb_ambiente_3.ggUpdatePosition(true);
				}
				else {
					me._thumb_ambiente_3.ggDx=0;
					me._thumb_ambiente_3.style.bottom='0px';
					me._thumb_ambiente_3.ggUpdatePosition(true);
				}
			}
		}
		me._thumb_ambiente_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente3") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumb_ambiente_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumb_ambiente_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumb_ambiente_3.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_3.ggCurrentLogicStateVisible == 0) {
					me._thumb_ambiente_3.style.visibility=(Number(me._thumb_ambiente_3.style.opacity)>0||!me._thumb_ambiente_3.style.opacity)?'inherit':'hidden';
					me._thumb_ambiente_3.ggVisible=true;
				}
				else {
					me._thumb_ambiente_3.style.visibility="hidden";
					me._thumb_ambiente_3.ggVisible=false;
				}
			}
		}
		me._thumb_ambiente_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._thumbnail_menu1=document.createElement('div');
		els=me._thumbnail_menu1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 97px;';
		hs+='left : 50%;';
		hs+='margin-left : -78.25px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 156.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu1.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu1.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu1.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu1.ggScrollPosX = (me._thumbnail_menu1__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu1.ggScrollPosX = Math.max(me._thumbnail_menu1.ggScrollPosX, 0);
			me._thumbnail_menu1.ggScrollPosX = Math.min(me._thumbnail_menu1.ggScrollPosX, me._thumbnail_menu1__horScrollBg.offsetWidth - me._thumbnail_menu1__horScrollFg.offsetWidth);
			me._thumbnail_menu1__horScrollFg.style.left = me._thumbnail_menu1.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu1.ggScrollPosX / (me._thumbnail_menu1__horScrollBg.offsetWidth - me._thumbnail_menu1__horScrollFg.offsetWidth);
			me._thumbnail_menu1__content.style.left = -(Math.round((me._thumbnail_menu1.ggContentWidth * (1.0 - me._thumbnail_menu1.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu1.ggContentLeftOffset + 'px';
			me._thumbnail_menu1.ggScrollPosXPercent = (me._thumbnail_menu1__horScrollFg.offsetLeft / me._thumbnail_menu1__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu1.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu1.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu1.ggScrollPosX >= me._thumbnail_menu1__horScrollBg.offsetWidth - me._thumbnail_menu1__horScrollFg.offsetWidth)) {
					me._thumbnail_menu1.ggScrollPosX = Math.min(me._thumbnail_menu1.ggScrollPosX, me._thumbnail_menu1__horScrollBg.offsetWidth - me._thumbnail_menu1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu1.ggScrollPosX <= 0)) {
					me._thumbnail_menu1.ggScrollPosX = Math.max(me._thumbnail_menu1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu1__horScrollFg.style.left = me._thumbnail_menu1.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu1.ggScrollPosX / (me._thumbnail_menu1__horScrollBg.offsetWidth - me._thumbnail_menu1__horScrollFg.offsetWidth);
			me._thumbnail_menu1__content.style.left = -(Math.round((me._thumbnail_menu1.ggContentWidth * (1.0 - me._thumbnail_menu1.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu1.ggContentLeftOffset + 'px';
			me._thumbnail_menu1.ggScrollPosXPercent = (me._thumbnail_menu1__horScrollFg.offsetLeft / me._thumbnail_menu1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu1.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu1.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu1.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu1.ggScrollPosY = (me._thumbnail_menu1__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu1.ggScrollPosY = Math.max(me._thumbnail_menu1.ggScrollPosY, 0);
			me._thumbnail_menu1.ggScrollPosY = Math.min(me._thumbnail_menu1.ggScrollPosY, me._thumbnail_menu1__vertScrollBg.offsetHeight - me._thumbnail_menu1__vertScrollFg.offsetHeight);
			me._thumbnail_menu1__vertScrollFg.style.top = me._thumbnail_menu1.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu1.ggScrollPosY / (me._thumbnail_menu1__vertScrollBg.offsetHeight - me._thumbnail_menu1__vertScrollFg.offsetHeight);
			me._thumbnail_menu1__content.style.top = -(Math.round((me._thumbnail_menu1.ggContentHeight * (1.0 - me._thumbnail_menu1.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu1.ggContentTopOffset + 'px';
			me._thumbnail_menu1.ggScrollPosYPercent = (me._thumbnail_menu1__vertScrollFg.offsetTop / me._thumbnail_menu1__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu1.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu1.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu1.ggScrollPosY >= me._thumbnail_menu1__vertScrollBg.offsetHeight - me._thumbnail_menu1__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu1.ggScrollPosY = Math.min(me._thumbnail_menu1.ggScrollPosY, me._thumbnail_menu1__vertScrollBg.offsetHeight - me._thumbnail_menu1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu1.ggScrollPosY <= 0)) {
					me._thumbnail_menu1.ggScrollPosY = Math.max(me._thumbnail_menu1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu1__vertScrollFg.style.top = me._thumbnail_menu1.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu1.ggScrollPosY / (me._thumbnail_menu1__vertScrollBg.offsetHeight - me._thumbnail_menu1__vertScrollFg.offsetHeight);
			me._thumbnail_menu1__content.style.top = -(Math.round((me._thumbnail_menu1.ggContentHeight * (1.0 - me._thumbnail_menu1.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu1.ggContentTopOffset + 'px';
			me._thumbnail_menu1.ggScrollPosYPercent = (me._thumbnail_menu1__vertScrollFg.offsetTop / me._thumbnail_menu1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu1.ggHPercentVisible);
					me._thumbnail_menu1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu1.clientWidth - (me._thumbnail_menu1.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu1.clientWidth - (me._thumbnail_menu1.ggVertScrollVisible ? 5 : 0))) * me._thumbnail_menu1.ggHPercentVisible);
					me._thumbnail_menu1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu1.ggVPercentVisible);
					me._thumbnail_menu1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu1.clientHeight - (me._thumbnail_menu1.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu1.clientHeight - (me._thumbnail_menu1.ggHorScrollVisible ? 5 : 0))) * me._thumbnail_menu1.ggVPercentVisible);
					me._thumbnail_menu1.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu1.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu1.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu1__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu1.ggDragInertiaX *= 0.65;
					me._thumbnail_menu1.ggDragInertiaY *= 0.65;
					me._thumbnail_menu1.ggScrollByX(me._thumbnail_menu1.ggDragInertiaX);
					me._thumbnail_menu1.ggScrollByY(me._thumbnail_menu1.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu1.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._thumbnail_menu1__content.ontouchend = null;
				me._thumbnail_menu1__content.ontouchmove = null;
				me._thumbnail_menu1__content.onpointerup = null;
				me._thumbnail_menu1__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._thumbnail_menu1__content.onpointerup = me._thumbnail_menu1__content.ontouchend;
		}
			me._thumbnail_menu1__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._thumbnail_menu1.ggDragLastX) * me._thumbnail_menu1.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._thumbnail_menu1.ggDragLastY) * me._thumbnail_menu1.ggVPercentVisible;
				me._thumbnail_menu1.ggDragInertiaX = -diffX;
				me._thumbnail_menu1.ggDragInertiaY = -diffY;
				me._thumbnail_menu1.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu1.ggScrollByX(-diffX);
				me._thumbnail_menu1.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu1__content.onpointermove = me._thumbnail_menu1__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._thumbnail_menu1__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu1__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu1.ggScrollPosX = 0;
		me._thumbnail_menu1.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu1.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu1.ggDragInertiaX *= 0.65;
					me._thumbnail_menu1.ggScrollByX(me._thumbnail_menu1.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu1.ggDragLastX;
				me._thumbnail_menu1.ggDragInertiaX = diffX;
				me._thumbnail_menu1.ggDragLastX = e.clientX;
				me._thumbnail_menu1.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu1.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu1.ggDragInertiaX *= 0.65;
					me._thumbnail_menu1.ggScrollByX(me._thumbnail_menu1.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu1.ggDragLastX;
				me._thumbnail_menu1.ggDragInertiaX = diffX;
				me._thumbnail_menu1.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu1.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu1.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu1.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu1__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu1.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu1.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu1.ggScrollByXSmooth(30 * me._thumbnail_menu1.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0.3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='height : 84px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente3") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu1.style[domTransition]='';
				if (me._thumbnail_menu1.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu1.style.visibility=(Number(me._thumbnail_menu1.style.opacity)>0||!me._thumbnail_menu1.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu1.ggVisible=true;
				}
				else {
					me._thumbnail_menu1.style.visibility="hidden";
					me._thumbnail_menu1.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu1__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu1__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu1.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu1__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu1__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu1.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu1.ggHorScrollVisible) {
					me._thumbnail_menu1.ggAvailableHeight = me._thumbnail_menu1.clientHeight - 5;
					if (me._thumbnail_menu1.ggVertScrollVisible) {
						me._thumbnail_menu1.ggAvailableWidth = me._thumbnail_menu1.clientWidth - 5;
						me._thumbnail_menu1.ggAvailableWidthWithScale = me._thumbnail_menu1.getBoundingClientRect().width - me._thumbnail_menu1__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu1.ggAvailableWidth = me._thumbnail_menu1.clientWidth;
						me._thumbnail_menu1.ggAvailableWidthWithScale = me._thumbnail_menu1.getBoundingClientRect().width;
					}
					me._thumbnail_menu1__horScrollBg.style.width = me._thumbnail_menu1.ggAvailableWidth + 'px';
					me._thumbnail_menu1.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu1.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu1.ggHPercentVisible > 1.0) me._thumbnail_menu1.ggHPercentVisible = 1.0;
					me._thumbnail_menu1.ggScrollWidth = Math.round(me._thumbnail_menu1__horScrollBg.offsetWidth * me._thumbnail_menu1.ggHPercentVisible);
					me._thumbnail_menu1__horScrollFg.style.width = me._thumbnail_menu1.ggScrollWidth + 'px';
					me._thumbnail_menu1.ggScrollPosX = me._thumbnail_menu1.ggScrollPosXPercent * me._thumbnail_menu1.ggAvailableWidth;
					me._thumbnail_menu1.ggScrollPosX = Math.min(me._thumbnail_menu1.ggScrollPosX, me._thumbnail_menu1__horScrollBg.offsetWidth - me._thumbnail_menu1__horScrollFg.offsetWidth);
					me._thumbnail_menu1__horScrollFg.style.left = me._thumbnail_menu1.ggScrollPosX + 'px';
					if (me._thumbnail_menu1.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu1.ggScrollPosX / (me._thumbnail_menu1__horScrollBg.offsetWidth - me._thumbnail_menu1__horScrollFg.offsetWidth);
						me._thumbnail_menu1__content.style.left = -(Math.round((me._thumbnail_menu1.ggContentWidth * (1.0 - me._thumbnail_menu1.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu1.ggAvailableHeight = me._thumbnail_menu1.clientHeight;
					me._thumbnail_menu1.ggScrollPosX = 0;
					me._thumbnail_menu1.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu1.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu1.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu1);
					me._thumbnail_menu1.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner1=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 125;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner1.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner1.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner1.ggInstances.length; i++) {
					if (me._thumbnail_cloner1.ggInstances[i]._checkmark_tick1 && me._thumbnail_cloner1.ggInstances[i]._checkmark_tick1.logicBlock_alpha) {
						me._thumbnail_cloner1.ggInstances[i]._checkmark_tick1.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner1.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner1.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner1.ggInstances.length; i++) {
					if (me._thumbnail_cloner1.ggInstances[i]._thumbnail_active1 && me._thumbnail_cloner1.ggInstances[i]._thumbnail_active1.logicBlock_bordercolor) {
						me._thumbnail_cloner1.ggInstances[i]._thumbnail_active1.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner1.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner1.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner1.ggInstances.length; i++) {
					if (me._thumbnail_cloner1.ggInstances[i]._checkmark_tick1 && me._thumbnail_cloner1.ggInstances[i]._checkmark_tick1.logicBlock_alpha) {
						me._thumbnail_cloner1.ggInstances[i]._checkmark_tick1.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner1.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner1.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner1.ggInstances.length; i++) {
					if (me._thumbnail_cloner1.ggInstances[i]._thumbnail_active1 && me._thumbnail_cloner1.ggInstances[i]._thumbnail_active1.logicBlock_bordercolor) {
						me._thumbnail_cloner1.ggInstances[i]._thumbnail_active1.logicBlock_bordercolor();
					}
					if (me._thumbnail_cloner1.ggInstances[i]._checkmark_tick1 && me._thumbnail_cloner1.ggInstances[i]._checkmark_tick1.logicBlock_visible) {
						me._thumbnail_cloner1.ggInstances[i]._checkmark_tick1.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner1.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner1.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner1.ggInstances.length; i++) {
					if (me._thumbnail_cloner1.ggInstances[i]._checkmark_tick1 && me._thumbnail_cloner1.ggInstances[i]._checkmark_tick1.logicBlock_visible) {
						me._thumbnail_cloner1.ggInstances[i]._checkmark_tick1.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner1.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._thumbnail_cloner1.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner1.ggInstances.length; i++) {
					if (me._thumbnail_cloner1.ggInstances[i]._checkmark_tick1 && me._thumbnail_cloner1.ggInstances[i]._checkmark_tick1.logicBlock_alpha) {
						me._thumbnail_cloner1.ggInstances[i]._checkmark_tick1.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner1.ggUpdating == true) return;
			me._thumbnail_cloner1.ggUpdating = true;
			var el=me._thumbnail_cloner1;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner1.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner1.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner1.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner1.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner1.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner1_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner1.callChildLogicBlocks_changenode();
			me._thumbnail_cloner1.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner1.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner1.callChildLogicBlocks_active();
			me._thumbnail_cloner1.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner1.callChildLogicBlocks_activehotspotchanged();
			me._thumbnail_cloner1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner1.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Ambiente3";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente3") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_cloner1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_cloner1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_cloner1.style[domTransition]='';
				if (me._thumbnail_cloner1.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_cloner1.style.visibility=(Number(me._thumbnail_cloner1.style.opacity)>0||!me._thumbnail_cloner1.style.opacity)?'inherit':'hidden';
					me._thumbnail_cloner1.ggVisible=true;
				}
				else {
					me._thumbnail_cloner1.style.visibility="hidden";
					me._thumbnail_cloner1.ggVisible=false;
				}
			}
		}
		me._thumbnail_cloner1.ggCurrentLogicStateVisible = -1;
		me._thumbnail_cloner1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner1.childNodes.length; i++) {
				var child=me._thumbnail_cloner1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner1.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner1.ggUpdate();
		}
		me._thumbnail_cloner1.ggNodeChange=function () {
			me._thumbnail_cloner1.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu1__content.appendChild(me._thumbnail_cloner1);
		me._thumb_ambiente_3.appendChild(me._thumbnail_menu1);
		me.divSkin.appendChild(me._thumb_ambiente_3);
		el=me._thumb_ambiente_2=document.createElement('div');
		el.ggId="Thumb Ambiente 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 92px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='background: rgba( 255, 255, 255, 0.30 ); backdrop-filter: blur( 9px ); -webkit-backdrop-filter: blur( 9px ); border-radius: 0px; border: 1px solid rgba( 255, 255, 255, 0.18 );';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumb_ambiente_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumb_ambiente_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_container1') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumb_ambiente_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumb_ambiente_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumb_ambiente_2.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_2.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumb_ambiente_2.style.bottom='-200px';
					me._thumb_ambiente_2.ggUpdatePosition(true);
				}
				else {
					me._thumb_ambiente_2.ggDx=0;
					me._thumb_ambiente_2.style.bottom='0px';
					me._thumb_ambiente_2.ggUpdatePosition(true);
				}
			}
		}
		me._thumb_ambiente_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente2") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumb_ambiente_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumb_ambiente_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumb_ambiente_2.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_2.ggCurrentLogicStateVisible == 0) {
					me._thumb_ambiente_2.style.visibility=(Number(me._thumb_ambiente_2.style.opacity)>0||!me._thumb_ambiente_2.style.opacity)?'inherit':'hidden';
					me._thumb_ambiente_2.ggVisible=true;
				}
				else {
					me._thumb_ambiente_2.style.visibility="hidden";
					me._thumb_ambiente_2.ggVisible=false;
				}
			}
		}
		me._thumb_ambiente_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._thumbnail_menu0=document.createElement('div');
		els=me._thumbnail_menu0__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 97px;';
		hs+='left : 50%;';
		hs+='margin-left : -78.25px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 156.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu0.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu0.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu0.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu0.ggScrollPosX = (me._thumbnail_menu0__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu0.ggScrollPosX = Math.max(me._thumbnail_menu0.ggScrollPosX, 0);
			me._thumbnail_menu0.ggScrollPosX = Math.min(me._thumbnail_menu0.ggScrollPosX, me._thumbnail_menu0__horScrollBg.offsetWidth - me._thumbnail_menu0__horScrollFg.offsetWidth);
			me._thumbnail_menu0__horScrollFg.style.left = me._thumbnail_menu0.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu0.ggScrollPosX / (me._thumbnail_menu0__horScrollBg.offsetWidth - me._thumbnail_menu0__horScrollFg.offsetWidth);
			me._thumbnail_menu0__content.style.left = -(Math.round((me._thumbnail_menu0.ggContentWidth * (1.0 - me._thumbnail_menu0.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu0.ggContentLeftOffset + 'px';
			me._thumbnail_menu0.ggScrollPosXPercent = (me._thumbnail_menu0__horScrollFg.offsetLeft / me._thumbnail_menu0__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu0.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu0.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu0.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu0.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu0.ggScrollPosX >= me._thumbnail_menu0__horScrollBg.offsetWidth - me._thumbnail_menu0__horScrollFg.offsetWidth)) {
					me._thumbnail_menu0.ggScrollPosX = Math.min(me._thumbnail_menu0.ggScrollPosX, me._thumbnail_menu0__horScrollBg.offsetWidth - me._thumbnail_menu0__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu0.ggScrollPosX <= 0)) {
					me._thumbnail_menu0.ggScrollPosX = Math.max(me._thumbnail_menu0.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu0__horScrollFg.style.left = me._thumbnail_menu0.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu0.ggScrollPosX / (me._thumbnail_menu0__horScrollBg.offsetWidth - me._thumbnail_menu0__horScrollFg.offsetWidth);
			me._thumbnail_menu0__content.style.left = -(Math.round((me._thumbnail_menu0.ggContentWidth * (1.0 - me._thumbnail_menu0.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu0.ggContentLeftOffset + 'px';
			me._thumbnail_menu0.ggScrollPosXPercent = (me._thumbnail_menu0__horScrollFg.offsetLeft / me._thumbnail_menu0__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu0.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu0.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu0.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu0.ggScrollPosY = (me._thumbnail_menu0__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu0.ggScrollPosY = Math.max(me._thumbnail_menu0.ggScrollPosY, 0);
			me._thumbnail_menu0.ggScrollPosY = Math.min(me._thumbnail_menu0.ggScrollPosY, me._thumbnail_menu0__vertScrollBg.offsetHeight - me._thumbnail_menu0__vertScrollFg.offsetHeight);
			me._thumbnail_menu0__vertScrollFg.style.top = me._thumbnail_menu0.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu0.ggScrollPosY / (me._thumbnail_menu0__vertScrollBg.offsetHeight - me._thumbnail_menu0__vertScrollFg.offsetHeight);
			me._thumbnail_menu0__content.style.top = -(Math.round((me._thumbnail_menu0.ggContentHeight * (1.0 - me._thumbnail_menu0.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu0.ggContentTopOffset + 'px';
			me._thumbnail_menu0.ggScrollPosYPercent = (me._thumbnail_menu0__vertScrollFg.offsetTop / me._thumbnail_menu0__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu0.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu0.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu0.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu0.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu0.ggScrollPosY >= me._thumbnail_menu0__vertScrollBg.offsetHeight - me._thumbnail_menu0__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu0.ggScrollPosY = Math.min(me._thumbnail_menu0.ggScrollPosY, me._thumbnail_menu0__vertScrollBg.offsetHeight - me._thumbnail_menu0__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu0.ggScrollPosY <= 0)) {
					me._thumbnail_menu0.ggScrollPosY = Math.max(me._thumbnail_menu0.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu0__vertScrollFg.style.top = me._thumbnail_menu0.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu0.ggScrollPosY / (me._thumbnail_menu0__vertScrollBg.offsetHeight - me._thumbnail_menu0__vertScrollFg.offsetHeight);
			me._thumbnail_menu0__content.style.top = -(Math.round((me._thumbnail_menu0.ggContentHeight * (1.0 - me._thumbnail_menu0.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu0.ggContentTopOffset + 'px';
			me._thumbnail_menu0.ggScrollPosYPercent = (me._thumbnail_menu0__vertScrollFg.offsetTop / me._thumbnail_menu0__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu0.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu0.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu0.ggHPercentVisible);
					me._thumbnail_menu0.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu0.clientWidth - (me._thumbnail_menu0.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu0.clientWidth - (me._thumbnail_menu0.ggVertScrollVisible ? 5 : 0))) * me._thumbnail_menu0.ggHPercentVisible);
					me._thumbnail_menu0.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu0.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu0.ggVPercentVisible);
					me._thumbnail_menu0.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu0.clientHeight - (me._thumbnail_menu0.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu0.clientHeight - (me._thumbnail_menu0.ggHorScrollVisible ? 5 : 0))) * me._thumbnail_menu0.ggVPercentVisible);
					me._thumbnail_menu0.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu0.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu0.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu0__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu0.ggDragInertiaX *= 0.65;
					me._thumbnail_menu0.ggDragInertiaY *= 0.65;
					me._thumbnail_menu0.ggScrollByX(me._thumbnail_menu0.ggDragInertiaX);
					me._thumbnail_menu0.ggScrollByY(me._thumbnail_menu0.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu0.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu0.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._thumbnail_menu0__content.ontouchend = null;
				me._thumbnail_menu0__content.ontouchmove = null;
				me._thumbnail_menu0__content.onpointerup = null;
				me._thumbnail_menu0__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._thumbnail_menu0__content.onpointerup = me._thumbnail_menu0__content.ontouchend;
		}
			me._thumbnail_menu0__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._thumbnail_menu0.ggDragLastX) * me._thumbnail_menu0.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._thumbnail_menu0.ggDragLastY) * me._thumbnail_menu0.ggVPercentVisible;
				me._thumbnail_menu0.ggDragInertiaX = -diffX;
				me._thumbnail_menu0.ggDragInertiaY = -diffY;
				me._thumbnail_menu0.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu0.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu0.ggScrollByX(-diffX);
				me._thumbnail_menu0.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu0__content.onpointermove = me._thumbnail_menu0__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._thumbnail_menu0__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu0__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu0.ggScrollPosX = 0;
		me._thumbnail_menu0.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu0.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu0.ggDragInertiaX *= 0.65;
					me._thumbnail_menu0.ggScrollByX(me._thumbnail_menu0.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu0.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu0.ggDragLastX;
				me._thumbnail_menu0.ggDragInertiaX = diffX;
				me._thumbnail_menu0.ggDragLastX = e.clientX;
				me._thumbnail_menu0.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu0.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu0.ggDragInertiaX *= 0.65;
					me._thumbnail_menu0.ggScrollByX(me._thumbnail_menu0.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu0.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu0.ggDragLastX;
				me._thumbnail_menu0.ggDragInertiaX = diffX;
				me._thumbnail_menu0.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu0.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu0.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu0.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu0.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu0__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu0.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu0.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu0.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu0.ggScrollByXSmooth(30 * me._thumbnail_menu0.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu0__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0.3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='height : 84px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente2") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu0.style[domTransition]='';
				if (me._thumbnail_menu0.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu0.style.visibility=(Number(me._thumbnail_menu0.style.opacity)>0||!me._thumbnail_menu0.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu0.ggVisible=true;
				}
				else {
					me._thumbnail_menu0.style.visibility="hidden";
					me._thumbnail_menu0.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu0__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu0__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu0.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu0__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu0__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu0.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu0.ggHorScrollVisible) {
					me._thumbnail_menu0.ggAvailableHeight = me._thumbnail_menu0.clientHeight - 5;
					if (me._thumbnail_menu0.ggVertScrollVisible) {
						me._thumbnail_menu0.ggAvailableWidth = me._thumbnail_menu0.clientWidth - 5;
						me._thumbnail_menu0.ggAvailableWidthWithScale = me._thumbnail_menu0.getBoundingClientRect().width - me._thumbnail_menu0__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu0.ggAvailableWidth = me._thumbnail_menu0.clientWidth;
						me._thumbnail_menu0.ggAvailableWidthWithScale = me._thumbnail_menu0.getBoundingClientRect().width;
					}
					me._thumbnail_menu0__horScrollBg.style.width = me._thumbnail_menu0.ggAvailableWidth + 'px';
					me._thumbnail_menu0.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu0.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu0.ggHPercentVisible > 1.0) me._thumbnail_menu0.ggHPercentVisible = 1.0;
					me._thumbnail_menu0.ggScrollWidth = Math.round(me._thumbnail_menu0__horScrollBg.offsetWidth * me._thumbnail_menu0.ggHPercentVisible);
					me._thumbnail_menu0__horScrollFg.style.width = me._thumbnail_menu0.ggScrollWidth + 'px';
					me._thumbnail_menu0.ggScrollPosX = me._thumbnail_menu0.ggScrollPosXPercent * me._thumbnail_menu0.ggAvailableWidth;
					me._thumbnail_menu0.ggScrollPosX = Math.min(me._thumbnail_menu0.ggScrollPosX, me._thumbnail_menu0__horScrollBg.offsetWidth - me._thumbnail_menu0__horScrollFg.offsetWidth);
					me._thumbnail_menu0__horScrollFg.style.left = me._thumbnail_menu0.ggScrollPosX + 'px';
					if (me._thumbnail_menu0.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu0.ggScrollPosX / (me._thumbnail_menu0__horScrollBg.offsetWidth - me._thumbnail_menu0__horScrollFg.offsetWidth);
						me._thumbnail_menu0__content.style.left = -(Math.round((me._thumbnail_menu0.ggContentWidth * (1.0 - me._thumbnail_menu0.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu0.ggAvailableHeight = me._thumbnail_menu0.clientHeight;
					me._thumbnail_menu0.ggScrollPosX = 0;
					me._thumbnail_menu0.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu0.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu0.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu0);
					me._thumbnail_menu0.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner0=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 125;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner0.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner0.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner0.ggInstances.length; i++) {
					if (me._thumbnail_cloner0.ggInstances[i]._checkmark_tick0 && me._thumbnail_cloner0.ggInstances[i]._checkmark_tick0.logicBlock_alpha) {
						me._thumbnail_cloner0.ggInstances[i]._checkmark_tick0.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner0.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner0.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner0.ggInstances.length; i++) {
					if (me._thumbnail_cloner0.ggInstances[i]._thumbnail_active0 && me._thumbnail_cloner0.ggInstances[i]._thumbnail_active0.logicBlock_bordercolor) {
						me._thumbnail_cloner0.ggInstances[i]._thumbnail_active0.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner0.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner0.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner0.ggInstances.length; i++) {
					if (me._thumbnail_cloner0.ggInstances[i]._checkmark_tick0 && me._thumbnail_cloner0.ggInstances[i]._checkmark_tick0.logicBlock_alpha) {
						me._thumbnail_cloner0.ggInstances[i]._checkmark_tick0.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner0.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner0.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner0.ggInstances.length; i++) {
					if (me._thumbnail_cloner0.ggInstances[i]._thumbnail_active0 && me._thumbnail_cloner0.ggInstances[i]._thumbnail_active0.logicBlock_bordercolor) {
						me._thumbnail_cloner0.ggInstances[i]._thumbnail_active0.logicBlock_bordercolor();
					}
					if (me._thumbnail_cloner0.ggInstances[i]._checkmark_tick0 && me._thumbnail_cloner0.ggInstances[i]._checkmark_tick0.logicBlock_visible) {
						me._thumbnail_cloner0.ggInstances[i]._checkmark_tick0.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner0.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner0.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner0.ggInstances.length; i++) {
					if (me._thumbnail_cloner0.ggInstances[i]._checkmark_tick0 && me._thumbnail_cloner0.ggInstances[i]._checkmark_tick0.logicBlock_visible) {
						me._thumbnail_cloner0.ggInstances[i]._checkmark_tick0.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner0.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._thumbnail_cloner0.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner0.ggInstances.length; i++) {
					if (me._thumbnail_cloner0.ggInstances[i]._checkmark_tick0 && me._thumbnail_cloner0.ggInstances[i]._checkmark_tick0.logicBlock_alpha) {
						me._thumbnail_cloner0.ggInstances[i]._checkmark_tick0.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner0.ggUpdating == true) return;
			me._thumbnail_cloner0.ggUpdating = true;
			var el=me._thumbnail_cloner0;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner0.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner0.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner0.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner0.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner0.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner0_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner0.callChildLogicBlocks_changenode();
			me._thumbnail_cloner0.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner0.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner0.callChildLogicBlocks_active();
			me._thumbnail_cloner0.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner0.callChildLogicBlocks_activehotspotchanged();
			me._thumbnail_cloner0.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner0.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner0.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner0.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Ambiente2";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente2") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_cloner0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_cloner0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_cloner0.style[domTransition]='';
				if (me._thumbnail_cloner0.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_cloner0.style.visibility=(Number(me._thumbnail_cloner0.style.opacity)>0||!me._thumbnail_cloner0.style.opacity)?'inherit':'hidden';
					me._thumbnail_cloner0.ggVisible=true;
				}
				else {
					me._thumbnail_cloner0.style.visibility="hidden";
					me._thumbnail_cloner0.ggVisible=false;
				}
			}
		}
		me._thumbnail_cloner0.ggCurrentLogicStateVisible = -1;
		me._thumbnail_cloner0.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner0.childNodes.length; i++) {
				var child=me._thumbnail_cloner0.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner0.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner0.ggUpdate();
		}
		me._thumbnail_cloner0.ggNodeChange=function () {
			me._thumbnail_cloner0.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu0__content.appendChild(me._thumbnail_cloner0);
		me._thumb_ambiente_2.appendChild(me._thumbnail_menu0);
		me.divSkin.appendChild(me._thumb_ambiente_2);
		el=me._thumb_ambiente_1=document.createElement('div');
		el.ggId="Thumb Ambiente 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 92px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='background: rgba( 255, 255, 255, 0.20 ); backdrop-filter: blur( 9px ); -webkit-backdrop-filter: blur( 9px ); border-radius: 0px; border: 1px solid rgba( 255, 255, 255, 0.18 );';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumb_ambiente_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumb_ambiente_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_container1') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumb_ambiente_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumb_ambiente_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumb_ambiente_1.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_1.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumb_ambiente_1.style.bottom='-200px';
					me._thumb_ambiente_1.ggUpdatePosition(true);
				}
				else {
					me._thumb_ambiente_1.ggDx=0;
					me._thumb_ambiente_1.style.bottom='0px';
					me._thumb_ambiente_1.ggUpdatePosition(true);
				}
			}
		}
		me._thumb_ambiente_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente1") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumb_ambiente_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumb_ambiente_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumb_ambiente_1.style[domTransition]='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._thumb_ambiente_1.ggCurrentLogicStateVisible == 0) {
					me._thumb_ambiente_1.style.visibility=(Number(me._thumb_ambiente_1.style.opacity)>0||!me._thumb_ambiente_1.style.opacity)?'inherit':'hidden';
					me._thumb_ambiente_1.ggVisible=true;
				}
				else {
					me._thumb_ambiente_1.style.visibility="hidden";
					me._thumb_ambiente_1.ggVisible=false;
				}
			}
		}
		me._thumb_ambiente_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 97px;';
		hs+='left : 50%;';
		hs+='margin-left : -78.25px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 156.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_menu.ggScrollPosY / (me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__content.style.top = -(Math.round((me._thumbnail_menu.ggContentHeight * (1.0 - me._thumbnail_menu.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 5 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 5 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._thumbnail_menu.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_menu__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggDragInertiaY *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					me._thumbnail_menu.ggScrollByY(me._thumbnail_menu.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._thumbnail_menu__content.ontouchend = null;
				me._thumbnail_menu__content.ontouchmove = null;
				me._thumbnail_menu__content.onpointerup = null;
				me._thumbnail_menu__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._thumbnail_menu__content.onpointerup = me._thumbnail_menu__content.ontouchend;
		}
			me._thumbnail_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._thumbnail_menu.ggDragLastX) * me._thumbnail_menu.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._thumbnail_menu.ggDragLastY) * me._thumbnail_menu.ggVPercentVisible;
				me._thumbnail_menu.ggDragInertiaX = -diffX;
				me._thumbnail_menu.ggDragInertiaY = -diffY;
				me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_menu.ggScrollByX(-diffX);
				me._thumbnail_menu.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_menu__content.onpointermove = me._thumbnail_menu__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1076px; height: 5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(30 * me._thumbnail_menu.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0.3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='height : 84px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente1") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu.style[domTransition]='';
				if (me._thumbnail_menu.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu.style.visibility=(Number(me._thumbnail_menu.style.opacity)>0||!me._thumbnail_menu.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu.ggVisible=true;
				}
				else {
					me._thumbnail_menu.style.visibility="hidden";
					me._thumbnail_menu.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 5;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (5/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (this.ggHorScrollVisible) containerHeight -= 5;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = ((contentHeight/-2) - (this.ggHorScrollVisible ? (5/2) : 0))  + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight - 5;
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth - 5;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width - me._thumbnail_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.offsetWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					if (me._thumbnail_menu.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_menu.ggScrollPosX / (me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
						me._thumbnail_menu__content.style.left = -(Math.round((me._thumbnail_menu.ggContentWidth * (1.0 - me._thumbnail_menu.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.clientHeight;
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu);
					me._thumbnail_menu.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 125;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_changenode();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "Ambiente1";
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Ambiente1") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_cloner.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_cloner.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_cloner.style[domTransition]='';
				if (me._thumbnail_cloner.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_cloner.style.visibility=(Number(me._thumbnail_cloner.style.opacity)>0||!me._thumbnail_cloner.style.opacity)?'inherit':'hidden';
					me._thumbnail_cloner.ggVisible=true;
				}
				else {
					me._thumbnail_cloner.style.visibility="hidden";
					me._thumbnail_cloner.ggVisible=false;
				}
			}
		}
		me._thumbnail_cloner.ggCurrentLogicStateVisible = -1;
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me._thumb_ambiente_1.appendChild(me._thumbnail_menu);
		me.divSkin.appendChild(me._thumb_ambiente_1);
		el=me._container_e_=document.createElement('div');
		el.ggId="Container+ e -";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 161px;';
		hs+='position : absolute;';
		hs+='right : -1px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_e_.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_e_.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_e_.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_e_.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_e_.style[domTransition]='';
				if (me._container_e_.ggCurrentLogicStateVisible == 0) {
					me._container_e_.style.visibility="hidden";
					me._container_e_.ggVisible=false;
				}
				else {
					me._container_e_.style.visibility=(Number(me._container_e_.style.opacity)>0||!me._container_e_.style.opacity)?'inherit':'hidden';
					me._container_e_.ggVisible=true;
				}
			}
		}
		me._container_e_.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._box0=document.createElement('div');
		el.ggId="Box-";
		el.ggDy=19;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle glass_inicial";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 0px 0px 5px 5px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaGVpZ2h0PSI4MDBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iODAwcHgiIHZpZXdCb3g9Ii03LjY4IC03LjY4IDQ3LjM2IDQ3LjM2IiB4bWxuczp4bGluaz0iaH'+
			'R0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IlVwbG9hZGVkIHRvIHN2Z3JlcG8uY29tIiBmaWxsPSIjMDAwMDAwIj4KIDxnIHN0cm9rZS13aWR0aD0iMCIgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIi8+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiLz4KIDxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiAuYmVudGJsb2Nrc19lZW57ZmlsbDojZmZmZmZmO30gPC9zdHlsZT4KICA8cGF0aCBjbGFzcz0iYmVudGJsb2Nrc19lZW4iIGQ9Ik0yNCwxN0g4'+
			'di0yaDE2VjE3eiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoomin";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseout=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._box0.appendChild(me._zoomin);
		me._container_e_.appendChild(me._box0);
		el=me._box=document.createElement('div');
		el.ggId="Box+";
		el.ggDy=-21;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle glass_inicial";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 5px 5px 0px 0px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._zoomout__img.setAttribute('src',basePath + 'images/zoomout.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoomout";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoomout.style[domTransition]='';
				if (me._zoomout.ggCurrentLogicStateVisible == 0) {
					me._zoomout.style.visibility="hidden";
					me._zoomout.ggVisible=false;
				}
				else {
					me._zoomout.style.visibility=(Number(me._zoomout.style.opacity)>0||!me._zoomout.style.opacity)?'inherit':'hidden';
					me._zoomout.ggVisible=true;
				}
			}
		}
		me._zoomout.onmouseout=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._box.appendChild(me._zoomout);
		me._container_e_.appendChild(me._box);
		me.divSkin.appendChild(me._container_e_);
		el=me._container_botoes_auxiliares=document.createElement('div');
		el.ggId="Container botoes auxiliares";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 83px;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 391px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_botoes_auxiliares.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_botoes_auxiliares.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_botoes_auxiliares.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_botoes_auxiliares.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_botoes_auxiliares.style[domTransition]='';
				if (me._container_botoes_auxiliares.ggCurrentLogicStateVisible == 0) {
					me._container_botoes_auxiliares.style.visibility="hidden";
					me._container_botoes_auxiliares.ggVisible=false;
				}
				else {
					me._container_botoes_auxiliares.style.visibility="hidden";
					me._container_botoes_auxiliares.ggVisible=false;
				}
			}
		}
		me._container_botoes_auxiliares.ggUpdatePosition=function (useTransition) {
		}
		el=me._box_planta_baixa0=document.createElement('div');
		el.ggId="box planta baixa";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle glass_inicial";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 47px;';
		hs+='position : absolute;';
		hs+='right : 16px;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 0px 20px 20px 0px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_planta_baixa0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box_planta_baixa0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._box_planta_baixa0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._box_planta_baixa0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._box_planta_baixa0.style[domTransition]='';
				if (me._box_planta_baixa0.ggCurrentLogicStateVisible == 0) {
					me._box_planta_baixa0.style.visibility="hidden";
					me._box_planta_baixa0.ggVisible=false;
				}
				else {
					me._box_planta_baixa0.style.visibility="hidden";
					me._box_planta_baixa0.ggVisible=false;
				}
			}
		}
		me._box_planta_baixa0.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_21=document.createElement('div');
		els=me._svg_21__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iMjA0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwNHB4IiBzdHJva2Utd2lkdGg9IjAuMDAwMjQwMDAwMDAwMDAwMDAwMDMiIHZpZXdCb3g9Ii01Ljc2IC01Ljc2IDM1LjUyIDM1LjUyIiBzdHJva2U9IiNmZm'+
			'ZmZmYiIHRyYW5zZm9ybT0icm90YXRlKDApbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApIiBmaWxsPSIjZmZmZmZmIj4KIDxnIHN0cm9rZS13aWR0aD0iMCIgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIi8+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMTA0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI0NDQ0NDQyIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxwYXRoIGQ9Ik0yIDJ2MThoM3YtMUgzdi02aDNWOWg1VjhINlYzaDE1djVoLTZ2MWg2djVoLTR2MWg0djZIMTF2LTdoLTF2NUg4'+
			'djFoMnYyaDEyVjJ6bTMgNEgzVjVoMnptLTIgNnYtMWgydjF6bTItMkgzVjloMnpNMyA4VjdoMnYxem0yLTRIM1YzaDJ6Ii8+CiAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_21__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_21.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_21.style[domTransition]='';
				if (me._svg_21.ggCurrentLogicStateVisible == 0) {
					me._svg_21.style.visibility="hidden";
					me._svg_21.ggVisible=false;
				}
				else {
					me._svg_21.style.visibility="hidden";
					me._svg_21.ggVisible=false;
				}
			}
		}
		me._svg_21.onclick=function (e) {
			player.setVariableValue('var_planta', !player.getVariableValue('var_planta'));
		}
		me._svg_21.ggUpdatePosition=function (useTransition) {
		}
		me._box_planta_baixa0.appendChild(me._svg_21);
		me._container_botoes_auxiliares.appendChild(me._box_planta_baixa0);
		el=me._box_exit_fuulscreen0=document.createElement('div');
		el.ggId="box exit fuulscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle glass_inicial";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='position : absolute;';
		hs+='right : 61px;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_exit_fuulscreen0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box_exit_fuulscreen0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._box_exit_fuulscreen0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._box_exit_fuulscreen0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._box_exit_fuulscreen0.style[domTransition]='';
				if (me._box_exit_fuulscreen0.ggCurrentLogicStateVisible == 0) {
					me._box_exit_fuulscreen0.style.visibility=(Number(me._box_exit_fuulscreen0.style.opacity)>0||!me._box_exit_fuulscreen0.style.opacity)?'inherit':'hidden';
					me._box_exit_fuulscreen0.ggVisible=true;
				}
				else if (me._box_exit_fuulscreen0.ggCurrentLogicStateVisible == 1) {
					me._box_exit_fuulscreen0.style.visibility="hidden";
					me._box_exit_fuulscreen0.ggVisible=false;
				}
				else {
					me._box_exit_fuulscreen0.style.visibility="hidden";
					me._box_exit_fuulscreen0.ggVisible=false;
				}
			}
		}
		me._box_exit_fuulscreen0.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_60=document.createElement('div');
		els=me._svg_60__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iODAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjgwMHB4IiB2aWV3Qm94PSItMy42IC0zLjYgMjIuMjAgMjIuMjAiIGZpbGw9Im5vbmUiPgogPGcgc3Ryb2tlLXdpZHRoPSIwIiBpZD0iU1ZHUmVwb19iZ0Nhcn'+
			'JpZXIiLz4KIDxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNSAyQzUuNzc2MTQgMiA2IDIuMjIzODYgNiAyLjVWNS41QzYgNS43NzYxNCA1Ljc3NjE0IDYgNS41IDZIMi41QzIuMjIzODYgNiAyIDUuNzc2MTQgMiA1LjVDMiA1LjIyMzg2IDIuMjIzODYgNSAyLjUgNUg1VjIuNUM1IDIuMjIzODYgNS4yMjM4NiAyIDUuNSAyWk05LjUgMkM5Ljc3NjE0IDIgMTAgMi4yMjM4NiAxMCAyLjVWNUgx'+
			'Mi41QzEyLjc3NjEgNSAxMyA1LjIyMzg2IDEzIDUuNUMxMyA1Ljc3NjE0IDEyLjc3NjEgNiAxMi41IDZIOS41QzkuMjIzODYgNiA5IDUuNzc2MTQgOSA1LjVWMi41QzkgMi4yMjM4NiA5LjIyMzg2IDIgOS41IDJaTTIgOS41QzIgOS4yMjM4NiAyLjIyMzg2IDkgMi41IDlINS41QzUuNzc2MTQgOSA2IDkuMjIzODYgNiA5LjVWMTIuNUM2IDEyLjc3NjEgNS43NzYxNCAxMyA1LjUgMTNDNS4yMjM4NiAxMyA1IDEyLjc3NjEgNSAxMi41VjEwSDIuNUMyLjIyMzg2IDEwIDIgOS43NzYxNCAyIDkuNVpNOSA5LjVDOSA5LjIyMzg2IDkuMjIzODYgOSA5LjUgOUgxMi41QzEyLjc3NjEgOSAxMyA5LjIyMzg2ID'+
			'EzIDkuNUMxMyA5Ljc3NjE0IDEyLjc3NjEgMTAgMTIuNSAxMEgxMFYxMi41QzEwIDEyLjc3NjEgOS43NzYxNCAxMyA5LjUgMTNDOS4yMjM4NiAxMyA5IDEyLjc3NjEgOSAxMi41VjkuNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZmZmZiIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_60__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_60.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_60.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_60.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_60.style[domTransition]='';
				if (me._svg_60.ggCurrentLogicStateVisible == 0) {
					me._svg_60.style.visibility=(Number(me._svg_60.style.opacity)>0||!me._svg_60.style.opacity)?'inherit':'hidden';
					me._svg_60.ggVisible=true;
				}
				else if (me._svg_60.ggCurrentLogicStateVisible == 1) {
					me._svg_60.style.visibility="hidden";
					me._svg_60.ggVisible=false;
				}
				else {
					me._svg_60.style.visibility="hidden";
					me._svg_60.ggVisible=false;
				}
			}
		}
		me._svg_60.onclick=function (e) {
			player.exitFullscreen();
			me._svg_50.style[domTransition]='none';
			me._svg_50.style.visibility=(Number(me._svg_50.style.opacity)>0||!me._svg_50.style.opacity)?'inherit':'hidden';
			me._svg_50.ggVisible=true;
			me._box_fuulscreen0.style[domTransition]='none';
			me._box_fuulscreen0.style.visibility=(Number(me._box_fuulscreen0.style.opacity)>0||!me._box_fuulscreen0.style.opacity)?'inherit':'hidden';
			me._box_fuulscreen0.ggVisible=true;
			me._svg_60.style[domTransition]='none';
			me._svg_60.style.visibility='hidden';
			me._svg_60.ggVisible=false;
			me._box_exit_fuulscreen0.style[domTransition]='none';
			me._box_exit_fuulscreen0.style.visibility='hidden';
			me._box_exit_fuulscreen0.ggVisible=false;
		}
		me._svg_60.ggUpdatePosition=function (useTransition) {
		}
		me._box_exit_fuulscreen0.appendChild(me._svg_60);
		me._container_botoes_auxiliares.appendChild(me._box_exit_fuulscreen0);
		el=me._box_fuulscreen0=document.createElement('div');
		el.ggId="box  fuulscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle glass_inicial";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='position : absolute;';
		hs+='right : 61px;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_fuulscreen0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box_fuulscreen0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._box_fuulscreen0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._box_fuulscreen0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._box_fuulscreen0.style[domTransition]='';
				if (me._box_fuulscreen0.ggCurrentLogicStateVisible == 0) {
					me._box_fuulscreen0.style.visibility="hidden";
					me._box_fuulscreen0.ggVisible=false;
				}
				else if (me._box_fuulscreen0.ggCurrentLogicStateVisible == 1) {
					me._box_fuulscreen0.style.visibility="hidden";
					me._box_fuulscreen0.ggVisible=false;
				}
				else {
					me._box_fuulscreen0.style.visibility="hidden";
					me._box_fuulscreen0.ggVisible=false;
				}
			}
		}
		me._box_fuulscreen0.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_50=document.createElement('div');
		els=me._svg_50__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iODAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjgwMHB4IiB2aWV3Qm94PSItMjQ1Ljc2IC0yNDUuNzYgMTUxNS41MiAxNTE1LjUyIiBjbGFzcz0iaWNvbiIgc3Ryb2tlPSIjZmNmY2ZjIiBmaWxsPSIjZmNmY2'+
			'ZjIj4KIDxnIHN0cm9rZS13aWR0aD0iMCIgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIi8+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiLz4KIDxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4KICA8cGF0aCBkPSJNMTYwIDk2LjA2NGwxOTIgLjE5MmEzMiAzMiAwIDAxMCA2NGwtMTkyLS4xOTJWMzUyYTMyIDMyIDAgMDEtNjQgMFY5Nmg2NHYuMDY0em0wIDgzMS44NzJWOTI4SDk2VjY3MmEzMiAzMiAwIDExNjQgMHYxOTEuOTM2bDE5Mi0uMTkyYTMyIDMyIDAgMTEwIDY0bC0xOTIgLjE5MnpNODY0IDk2LjA2'+
			'NFY5Nmg2NHYyNTZhMzIgMzIgMCAxMS02NCAwVjE2MC4wNjRsLTE5MiAuMTkyYTMyIDMyIDAgMTEwLTY0bDE5Mi0uMTkyem0wIDgzMS44NzJsLTE5Mi0uMTkyYTMyIDMyIDAgMDEwLTY0bDE5MiAuMTkyVjY3MmEzMiAzMiAwIDExNjQgMHYyNTZoLTY0di0uMDY0eiIgZmlsbD0iI2ZmZmZmZiIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_50__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_50.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_50.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_50.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_50.style[domTransition]='';
				if (me._svg_50.ggCurrentLogicStateVisible == 0) {
					me._svg_50.style.visibility="hidden";
					me._svg_50.ggVisible=false;
				}
				else if (me._svg_50.ggCurrentLogicStateVisible == 1) {
					me._svg_50.style.visibility="hidden";
					me._svg_50.ggVisible=false;
				}
				else {
					me._svg_50.style.visibility=(Number(me._svg_50.style.opacity)>0||!me._svg_50.style.opacity)?'inherit':'hidden';
					me._svg_50.ggVisible=true;
				}
			}
		}
		me._svg_50.onclick=function (e) {
			player.enterFullscreen();
			me._svg_60.style[domTransition]='none';
			me._svg_60.style.visibility=(Number(me._svg_60.style.opacity)>0||!me._svg_60.style.opacity)?'inherit':'hidden';
			me._svg_60.ggVisible=true;
			me._box_exit_fuulscreen0.style[domTransition]='none';
			me._box_exit_fuulscreen0.style.visibility=(Number(me._box_exit_fuulscreen0.style.opacity)>0||!me._box_exit_fuulscreen0.style.opacity)?'inherit':'hidden';
			me._box_exit_fuulscreen0.ggVisible=true;
			me._svg_50.style[domTransition]='none';
			me._svg_50.style.visibility='hidden';
			me._svg_50.ggVisible=false;
			me._box_fuulscreen0.style[domTransition]='none';
			me._box_fuulscreen0.style.visibility='hidden';
			me._box_fuulscreen0.ggVisible=false;
		}
		me._svg_50.ggUpdatePosition=function (useTransition) {
		}
		me._box_fuulscreen0.appendChild(me._svg_50);
		me._container_botoes_auxiliares.appendChild(me._box_fuulscreen0);
		el=me._box_audio0=document.createElement('div');
		el.ggId="box audio";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle glass_inicial";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='position : absolute;';
		hs+='right : 108px;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_audio0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box_audio0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._box_audio0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._box_audio0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._box_audio0.style[domTransition]='';
				if (me._box_audio0.ggCurrentLogicStateVisible == 0) {
					me._box_audio0.style.visibility="hidden";
					me._box_audio0.ggVisible=false;
				}
				else {
					me._box_audio0.style.visibility="hidden";
					me._box_audio0.ggVisible=false;
				}
			}
		}
		me._box_audio0.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_30=document.createElement('div');
		els=me._svg_30__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iODAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjgwMHB4IiB2aWV3Qm94PSItNC41NiAtNC41NiAyOC4xMiAyOC4xMiIgY2xhc3M9ImNmLWljb24tc3ZnIiBmaWxsPSIjZmFmOWY5Ij4KIDxnIHN0cm9rZS13aW'+
			'R0aD0iMCIgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIi8+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiLz4KIDxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4KICA8cGF0aCBkPSJNNy4wOTggNC43Njl2OS42M2MwIC42MS0uMzUzLjc1Ni0uNzg0LjMyNUwzLjQyIDExLjgyOEgxLjQ0MkExLjExMiAxLjExMiAwIDAgMSAuMzMzIDEwLjcyVjguNDQ4QTEuMTEyIDEuMTEyIDAgMCAxIDEuNDQyIDcuMzRoMS45NzdsMi44OTUtMi44OTZjLjQzMS0uNDMuNzg0LS4yODUuNzg0LjMyNXptMi4wNzYgNy40NzRhLjU1'+
			'My41NTMgMCAwIDAgLjM5Mi0uMTYzIDMuNTMgMy41MyAwIDAgMCAwLTQuOTkyLjU1NC41NTQgMCAxIDAtLjc4NC43ODQgMi40MjIgMi40MjIgMCAwIDEgMCAzLjQyNS41NTQuNTU0IDAgMCAwIC4zOTIuOTQ2em0yLjE4NCAxLjYyOWE2LjA1OSA2LjA1OSAwIDAgMCAwLTguNTc1LjU1NC41NTQgMCAwIDAtLjc4NC43ODMgNC45NTUgNC45NTUgMCAwIDEgMCA3LjAwOC41NTQuNTU0IDAgMCAwIC43ODQuNzg0em0xLjc5IDEuNzlhOC41OSA4LjU5IDAgMCAwIDAtMTIuMTU3LjU1NC41NTQgMCAwIDAtLjc4My43ODQgNy40ODEgNy40ODEgMCAwIDEgMCAxMC41OS41NTQuNTU0IDAgMSAwIC43ODQuNzg0ei'+
			'IvPgogPC9nPgo8L3N2Zz4K';
		me._svg_30__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_30.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_30.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_30.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_30.style[domTransition]='';
				if (me._svg_30.ggCurrentLogicStateVisible == 0) {
					me._svg_30.style.visibility="hidden";
					me._svg_30.ggVisible=false;
				}
				else {
					me._svg_30.style.visibility="hidden";
					me._svg_30.ggVisible=false;
				}
			}
		}
		me._svg_30.onclick=function (e) {
			player.setVolume("_main",1);
			me._svg_30.style[domTransition]='none';
			me._svg_30.style.visibility='hidden';
			me._svg_30.ggVisible=false;
			me._box_mute0.style[domTransition]='none';
			me._box_mute0.style.visibility=(Number(me._box_mute0.style.opacity)>0||!me._box_mute0.style.opacity)?'inherit':'hidden';
			me._box_mute0.ggVisible=true;
			me._svg_40.style[domTransition]='none';
			me._svg_40.style.visibility=(Number(me._svg_40.style.opacity)>0||!me._svg_40.style.opacity)?'inherit':'hidden';
			me._svg_40.ggVisible=true;
		}
		me._svg_30.ggUpdatePosition=function (useTransition) {
		}
		me._box_audio0.appendChild(me._svg_30);
		me._container_botoes_auxiliares.appendChild(me._box_audio0);
		el=me._box_mute0=document.createElement('div');
		el.ggId="Box mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle glass_inicial";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='position : absolute;';
		hs+='right : 108px;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_mute0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box_mute0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._box_mute0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._box_mute0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._box_mute0.style[domTransition]='';
				if (me._box_mute0.ggCurrentLogicStateVisible == 0) {
					me._box_mute0.style.visibility="hidden";
					me._box_mute0.ggVisible=false;
				}
				else {
					me._box_mute0.style.visibility="hidden";
					me._box_mute0.ggVisible=false;
				}
			}
		}
		me._box_mute0.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_40=document.createElement('div');
		els=me._svg_40__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iMjA0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwNHB4IiB2aWV3Qm94PSItNC41NiAtNC41NiAyOC4xMiAyOC4xMiIgY2xhc3M9ImNmLWljb24tc3ZnIiBmaWxsPSIjZmFmYWZhIj4KIDxnIHN0cm9rZS13aW'+
			'R0aD0iMCIgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIi8+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiLz4KIDxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4KICA8cGF0aCBkPSJNNy42NzYgNC45Mzh2OS42M2MwIC42MS0uMzUzLjc1Ni0uNzg0LjMyNWwtMi44OTYtMi44OTZIMi4wMkExLjExMSAxLjExMSAwIDAgMSAuOTExIDEwLjg5VjguNjE4YTEuMTEyIDEuMTEyIDAgMCAxIDEuMTA4LTEuMTA5aDEuOTc3bDIuODk2LTIuODk2Yy40My0uNDMuNzg0LS4yODQuNzg0LjMyNXptNy4yNTEgNi44ODhhLjU1'+
			'NC41NTQgMCAxIDEtLjc4NC43ODRsLTIuMDcyLTIuMDczLTIuMDczIDIuMDczYS41NTQuNTU0IDAgMSAxLS43ODQtLjc4NGwyLjA3My0yLjA3M0w5LjIxNCA3LjY4YS41NTQuNTU0IDAgMCAxIC43ODQtLjc4M0wxMi4wNyA4Ljk3bDIuMDcyLTIuMDczYS41NTQuNTU0IDAgMCAxIC43ODQuNzgzbC0yLjA3MiAyLjA3M3oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_40__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_40.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_40.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_40.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_40.style[domTransition]='';
				if (me._svg_40.ggCurrentLogicStateVisible == 0) {
					me._svg_40.style.visibility="hidden";
					me._svg_40.ggVisible=false;
				}
				else {
					me._svg_40.style.visibility="hidden";
					me._svg_40.ggVisible=false;
				}
			}
		}
		me._svg_40.onclick=function (e) {
			player.setVolume("_main",0);
			me._box_mute0.style[domTransition]='none';
			me._box_mute0.style.visibility='hidden';
			me._box_mute0.ggVisible=false;
			me._svg_40.style[domTransition]='none';
			me._svg_40.style.visibility='hidden';
			me._svg_40.ggVisible=false;
			me._box_audio0.style[domTransition]='none';
			me._box_audio0.style.visibility=(Number(me._box_audio0.style.opacity)>0||!me._box_audio0.style.opacity)?'inherit':'hidden';
			me._box_audio0.ggVisible=true;
			me._svg_30.style[domTransition]='none';
			me._svg_30.style.visibility=(Number(me._svg_30.style.opacity)>0||!me._svg_30.style.opacity)?'inherit':'hidden';
			me._svg_30.ggVisible=true;
		}
		me._svg_40.ggUpdatePosition=function (useTransition) {
		}
		me._box_mute0.appendChild(me._svg_40);
		me._container_botoes_auxiliares.appendChild(me._box_mute0);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text glass_inicial";
		el.ggType='text';
		hs ='';
		hs+='height : 47px;';
		hs+='position : absolute;';
		hs+='right : 154px;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 118px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 20px 0px 0px 20px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 118px;';
		hs+='height: 47px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="padding:15px 0px;";
		els.setAttribute('style',hs);
		els.innerHTML="        Modo VR";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1.style[domTransition]='';
				if (me._text_1.ggCurrentLogicStateVisible == 0) {
					me._text_1.style.visibility="hidden";
					me._text_1.ggVisible=false;
				}
				else {
					me._text_1.style.visibility="hidden";
					me._text_1.ggVisible=false;
				}
			}
		}
		me._text_1.onclick=function (e) {
			player.enterVR();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_70=document.createElement('div');
		els=me._svg_70__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxODhweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTg4cHgiIHZpZXdCb3g9Ii0xNS4wNCAtMTUuMDQgNjIuMDggNjIuMDgiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iSWNvbnMiIGZpbGw9IiMwMDAwMDAiPgogPGcgc3Ryb2tlLXdpZHRoPSIwIiBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiLz4KIDxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+IC5zdDB7ZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0'+
			'ZXJsaW1pdDoxMDt9IDwvc3R5bGU+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTMsMTF2MTBjMCwxLjEsMC45LDIsMiwyaDYuMmMwLjUsMCwxLTAuMiwxLjQtMC42bDItMmMwLjgtMC44LDItMC44LDIuOCwwbDIsMmMwLjQsMC40LDAuOSwwLjYsMS40LDAuNkgyNyBjMS4xLDAsMi0wLjksMi0yVjExYzAtMS4xLTAuOS0yLTItMkg1QzMuOSw5LDMsOS45LDMsMTF6Ii8+CiAgPGNpcmNsZSByPSIzIiBjbGFzcz0ic3QwIiBjeT0iMTYiIGN4PSI5Ii8+CiAgPGNpcmNsZSByPSIzIiBjbGFzcz0ic3QwIiBjeT0iMTYiIGN4PSIyMyIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_70__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_70.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_70.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_70.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_70.style[domTransition]='';
				if (me._svg_70.ggCurrentLogicStateVisible == 0) {
					me._svg_70.style.visibility="hidden";
					me._svg_70.ggVisible=false;
				}
				else {
					me._svg_70.style.visibility="hidden";
					me._svg_70.ggVisible=false;
				}
			}
		}
		me._svg_70.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._text_1.appendChild(me._svg_70);
		me._container_botoes_auxiliares.appendChild(me._text_1);
		me.divSkin.appendChild(me._container_botoes_auxiliares);
		el=me._container_botoes_mobile=document.createElement('div');
		el.ggId="Container botoes mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 83px;';
		hs+='position : absolute;';
		hs+='right : -6px;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 242px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_botoes_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_botoes_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._box_planta_baixa=document.createElement('div');
		el.ggId="box planta baixa";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle glass_inicial";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 16px;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 0px 20px 20px 0px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_planta_baixa.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box_planta_baixa.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_20=document.createElement('div');
		els=me._svg_20__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iMjA0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwNHB4IiBzdHJva2Utd2lkdGg9IjAuMDAwMjQwMDAwMDAwMDAwMDAwMDMiIHZpZXdCb3g9Ii01Ljc2IC01Ljc2IDM1LjUyIDM1LjUyIiBzdHJva2U9IiNmZm'+
			'ZmZmYiIHRyYW5zZm9ybT0icm90YXRlKDApbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApIiBmaWxsPSIjZmZmZmZmIj4KIDxnIHN0cm9rZS13aWR0aD0iMCIgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIi8+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMTA0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI0NDQ0NDQyIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxwYXRoIGQ9Ik0yIDJ2MThoM3YtMUgzdi02aDNWOWg1VjhINlYzaDE1djVoLTZ2MWg2djVoLTR2MWg0djZIMTF2LTdoLTF2NUg4'+
			'djFoMnYyaDEyVjJ6bTMgNEgzVjVoMnptLTIgNnYtMWgydjF6bTItMkgzVjloMnpNMyA4VjdoMnYxem0yLTRIM1YzaDJ6Ii8+CiAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_20__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_20.onclick=function (e) {
			player.setVariableValue('var_planta', !player.getVariableValue('var_planta'));
		}
		me._svg_20.ggUpdatePosition=function (useTransition) {
		}
		me._box_planta_baixa.appendChild(me._svg_20);
		me._container_botoes_mobile.appendChild(me._box_planta_baixa);
		el=me._box_exit_fuulscreen=document.createElement('div');
		el.ggId="box exit fuulscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle glass_inicial";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_exit_fuulscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box_exit_fuulscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._box_exit_fuulscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._box_exit_fuulscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._box_exit_fuulscreen.style[domTransition]='';
				if (me._box_exit_fuulscreen.ggCurrentLogicStateVisible == 0) {
					me._box_exit_fuulscreen.style.visibility=(Number(me._box_exit_fuulscreen.style.opacity)>0||!me._box_exit_fuulscreen.style.opacity)?'inherit':'hidden';
					me._box_exit_fuulscreen.ggVisible=true;
				}
				else {
					me._box_exit_fuulscreen.style.visibility="hidden";
					me._box_exit_fuulscreen.ggVisible=false;
				}
			}
		}
		me._box_exit_fuulscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iODAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjgwMHB4IiB2aWV3Qm94PSItMy42IC0zLjYgMjIuMjAgMjIuMjAiIGZpbGw9Im5vbmUiPgogPGcgc3Ryb2tlLXdpZHRoPSIwIiBpZD0iU1ZHUmVwb19iZ0Nhcn'+
			'JpZXIiLz4KIDxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNSAyQzUuNzc2MTQgMiA2IDIuMjIzODYgNiAyLjVWNS41QzYgNS43NzYxNCA1Ljc3NjE0IDYgNS41IDZIMi41QzIuMjIzODYgNiAyIDUuNzc2MTQgMiA1LjVDMiA1LjIyMzg2IDIuMjIzODYgNSAyLjUgNUg1VjIuNUM1IDIuMjIzODYgNS4yMjM4NiAyIDUuNSAyWk05LjUgMkM5Ljc3NjE0IDIgMTAgMi4yMjM4NiAxMCAyLjVWNUgx'+
			'Mi41QzEyLjc3NjEgNSAxMyA1LjIyMzg2IDEzIDUuNUMxMyA1Ljc3NjE0IDEyLjc3NjEgNiAxMi41IDZIOS41QzkuMjIzODYgNiA5IDUuNzc2MTQgOSA1LjVWMi41QzkgMi4yMjM4NiA5LjIyMzg2IDIgOS41IDJaTTIgOS41QzIgOS4yMjM4NiAyLjIyMzg2IDkgMi41IDlINS41QzUuNzc2MTQgOSA2IDkuMjIzODYgNiA5LjVWMTIuNUM2IDEyLjc3NjEgNS43NzYxNCAxMyA1LjUgMTNDNS4yMjM4NiAxMyA1IDEyLjc3NjEgNSAxMi41VjEwSDIuNUMyLjIyMzg2IDEwIDIgOS43NzYxNCAyIDkuNVpNOSA5LjVDOSA5LjIyMzg2IDkuMjIzODYgOSA5LjUgOUgxMi41QzEyLjc3NjEgOSAxMyA5LjIyMzg2ID'+
			'EzIDkuNUMxMyA5Ljc3NjE0IDEyLjc3NjEgMTAgMTIuNSAxMEgxMFYxMi41QzEwIDEyLjc3NjEgOS43NzYxNCAxMyA5LjUgMTNDOS4yMjM4NiAxMyA5IDEyLjc3NjEgOSAxMi41VjkuNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZmZmZiIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_6.style[domTransition]='';
				if (me._svg_6.ggCurrentLogicStateVisible == 0) {
					me._svg_6.style.visibility=(Number(me._svg_6.style.opacity)>0||!me._svg_6.style.opacity)?'inherit':'hidden';
					me._svg_6.ggVisible=true;
				}
				else {
					me._svg_6.style.visibility="hidden";
					me._svg_6.ggVisible=false;
				}
			}
		}
		me._svg_6.onclick=function (e) {
			player.exitFullscreen();
			me._svg_50.style[domTransition]='none';
			me._svg_50.style.visibility=(Number(me._svg_50.style.opacity)>0||!me._svg_50.style.opacity)?'inherit':'hidden';
			me._svg_50.ggVisible=true;
			me._box_fuulscreen0.style[domTransition]='none';
			me._box_fuulscreen0.style.visibility=(Number(me._box_fuulscreen0.style.opacity)>0||!me._box_fuulscreen0.style.opacity)?'inherit':'hidden';
			me._box_fuulscreen0.ggVisible=true;
			me._svg_6.style[domTransition]='none';
			me._svg_6.style.visibility='hidden';
			me._svg_6.ggVisible=false;
			me._box_exit_fuulscreen0.style[domTransition]='none';
			me._box_exit_fuulscreen0.style.visibility='hidden';
			me._box_exit_fuulscreen0.ggVisible=false;
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
		}
		me._box_exit_fuulscreen.appendChild(me._svg_6);
		me._container_botoes_mobile.appendChild(me._box_exit_fuulscreen);
		el=me._box_fuulscreen=document.createElement('div');
		el.ggId="box  fuulscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle glass_inicial";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_fuulscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box_fuulscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._box_fuulscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._box_fuulscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._box_fuulscreen.style[domTransition]='';
				if (me._box_fuulscreen.ggCurrentLogicStateVisible == 0) {
					me._box_fuulscreen.style.visibility="hidden";
					me._box_fuulscreen.ggVisible=false;
				}
				else {
					me._box_fuulscreen.style.visibility="hidden";
					me._box_fuulscreen.ggVisible=false;
				}
			}
		}
		me._box_fuulscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iODAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjgwMHB4IiB2aWV3Qm94PSItMjQ1Ljc2IC0yNDUuNzYgMTUxNS41MiAxNTE1LjUyIiBjbGFzcz0iaWNvbiIgc3Ryb2tlPSIjZmNmY2ZjIiBmaWxsPSIjZmNmY2'+
			'ZjIj4KIDxnIHN0cm9rZS13aWR0aD0iMCIgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIi8+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiLz4KIDxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4KICA8cGF0aCBkPSJNMTYwIDk2LjA2NGwxOTIgLjE5MmEzMiAzMiAwIDAxMCA2NGwtMTkyLS4xOTJWMzUyYTMyIDMyIDAgMDEtNjQgMFY5Nmg2NHYuMDY0em0wIDgzMS44NzJWOTI4SDk2VjY3MmEzMiAzMiAwIDExNjQgMHYxOTEuOTM2bDE5Mi0uMTkyYTMyIDMyIDAgMTEwIDY0bC0xOTIgLjE5MnpNODY0IDk2LjA2'+
			'NFY5Nmg2NHYyNTZhMzIgMzIgMCAxMS02NCAwVjE2MC4wNjRsLTE5MiAuMTkyYTMyIDMyIDAgMTEwLTY0bDE5Mi0uMTkyem0wIDgzMS44NzJsLTE5Mi0uMTkyYTMyIDMyIDAgMDEwLTY0bDE5MiAuMTkyVjY3MmEzMiAzMiAwIDExNjQgMHYyNTZoLTY0di0uMDY0eiIgZmlsbD0iI2ZmZmZmZiIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_5.style[domTransition]='';
				if (me._svg_5.ggCurrentLogicStateVisible == 0) {
					me._svg_5.style.visibility="hidden";
					me._svg_5.ggVisible=false;
				}
				else {
					me._svg_5.style.visibility="hidden";
					me._svg_5.ggVisible=false;
				}
			}
		}
		me._svg_5.onclick=function (e) {
			player.enterFullscreen();
			me._svg_60.style[domTransition]='none';
			me._svg_60.style.visibility=(Number(me._svg_60.style.opacity)>0||!me._svg_60.style.opacity)?'inherit':'hidden';
			me._svg_60.ggVisible=true;
			me._box_exit_fuulscreen0.style[domTransition]='none';
			me._box_exit_fuulscreen0.style.visibility=(Number(me._box_exit_fuulscreen0.style.opacity)>0||!me._box_exit_fuulscreen0.style.opacity)?'inherit':'hidden';
			me._box_exit_fuulscreen0.ggVisible=true;
			me._svg_5.style[domTransition]='none';
			me._svg_5.style.visibility='hidden';
			me._svg_5.ggVisible=false;
			me._box_fuulscreen0.style[domTransition]='none';
			me._box_fuulscreen0.style.visibility='hidden';
			me._box_fuulscreen0.ggVisible=false;
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
		}
		me._box_fuulscreen.appendChild(me._svg_5);
		me._container_botoes_mobile.appendChild(me._box_fuulscreen);
		el=me._box_audio=document.createElement('div');
		el.ggId="box audio";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle glass_inicial";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 84px;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_audio.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box_audio.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iODAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjgwMHB4IiB2aWV3Qm94PSItNC41NiAtNC41NiAyOC4xMiAyOC4xMiIgY2xhc3M9ImNmLWljb24tc3ZnIiBmaWxsPSIjZmFmOWY5Ij4KIDxnIHN0cm9rZS13aW'+
			'R0aD0iMCIgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIi8+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiLz4KIDxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4KICA8cGF0aCBkPSJNNy4wOTggNC43Njl2OS42M2MwIC42MS0uMzUzLjc1Ni0uNzg0LjMyNUwzLjQyIDExLjgyOEgxLjQ0MkExLjExMiAxLjExMiAwIDAgMSAuMzMzIDEwLjcyVjguNDQ4QTEuMTEyIDEuMTEyIDAgMCAxIDEuNDQyIDcuMzRoMS45NzdsMi44OTUtMi44OTZjLjQzMS0uNDMuNzg0LS4yODUuNzg0LjMyNXptMi4wNzYgNy40NzRhLjU1'+
			'My41NTMgMCAwIDAgLjM5Mi0uMTYzIDMuNTMgMy41MyAwIDAgMCAwLTQuOTkyLjU1NC41NTQgMCAxIDAtLjc4NC43ODQgMi40MjIgMi40MjIgMCAwIDEgMCAzLjQyNS41NTQuNTU0IDAgMCAwIC4zOTIuOTQ2em0yLjE4NCAxLjYyOWE2LjA1OSA2LjA1OSAwIDAgMCAwLTguNTc1LjU1NC41NTQgMCAwIDAtLjc4NC43ODMgNC45NTUgNC45NTUgMCAwIDEgMCA3LjAwOC41NTQuNTU0IDAgMCAwIC43ODQuNzg0em0xLjc5IDEuNzlhOC41OSA4LjU5IDAgMCAwIDAtMTIuMTU3LjU1NC41NTQgMCAwIDAtLjc4My43ODQgNy40ODEgNy40ODEgMCAwIDEgMCAxMC41OS41NTQuNTU0IDAgMSAwIC43ODQuNzg0ei'+
			'IvPgogPC9nPgo8L3N2Zz4K';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_3.style[domTransition]='';
				if (me._svg_3.ggCurrentLogicStateVisible == 0) {
					me._svg_3.style.visibility=(Number(me._svg_3.style.opacity)>0||!me._svg_3.style.opacity)?'inherit':'hidden';
					me._svg_3.ggVisible=true;
				}
				else {
					me._svg_3.style.visibility="hidden";
					me._svg_3.ggVisible=false;
				}
			}
		}
		me._svg_3.onclick=function (e) {
			player.setVolume("_main",1);
			me._svg_3.style[domTransition]='none';
			me._svg_3.style.visibility='hidden';
			me._svg_3.ggVisible=false;
			me._box_mute0.style[domTransition]='none';
			me._box_mute0.style.visibility=(Number(me._box_mute0.style.opacity)>0||!me._box_mute0.style.opacity)?'inherit':'hidden';
			me._box_mute0.ggVisible=true;
			me._svg_40.style[domTransition]='none';
			me._svg_40.style.visibility=(Number(me._svg_40.style.opacity)>0||!me._svg_40.style.opacity)?'inherit':'hidden';
			me._svg_40.ggVisible=true;
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._box_audio.appendChild(me._svg_3);
		me._container_botoes_mobile.appendChild(me._box_audio);
		el=me._box_mute=document.createElement('div');
		el.ggId="Box mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle glass_inicial";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 84px;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._box_mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._box_mute.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iMjA0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwNHB4IiB2aWV3Qm94PSItNC41NiAtNC41NiAyOC4xMiAyOC4xMiIgY2xhc3M9ImNmLWljb24tc3ZnIiBmaWxsPSIjZmFmYWZhIj4KIDxnIHN0cm9rZS13aW'+
			'R0aD0iMCIgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIi8+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiLz4KIDxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4KICA8cGF0aCBkPSJNNy42NzYgNC45Mzh2OS42M2MwIC42MS0uMzUzLjc1Ni0uNzg0LjMyNWwtMi44OTYtMi44OTZIMi4wMkExLjExMSAxLjExMSAwIDAgMSAuOTExIDEwLjg5VjguNjE4YTEuMTEyIDEuMTEyIDAgMCAxIDEuMTA4LTEuMTA5aDEuOTc3bDIuODk2LTIuODk2Yy40My0uNDMuNzg0LS4yODQuNzg0LjMyNXptNy4yNTEgNi44ODhhLjU1'+
			'NC41NTQgMCAxIDEtLjc4NC43ODRsLTIuMDcyLTIuMDczLTIuMDczIDIuMDczYS41NTQuNTU0IDAgMSAxLS43ODQtLjc4NGwyLjA3My0yLjA3M0w5LjIxNCA3LjY4YS41NTQuNTU0IDAgMCAxIC43ODQtLjc4M0wxMi4wNyA4Ljk3bDIuMDcyLTIuMDczYS41NTQuNTU0IDAgMCAxIC43ODQuNzgzbC0yLjA3MiAyLjA3M3oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -1px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.onclick=function (e) {
			player.setVolume("_main",0);
			me._box_mute0.style[domTransition]='none';
			me._box_mute0.style.visibility='hidden';
			me._box_mute0.ggVisible=false;
			me._svg_4.style[domTransition]='none';
			me._svg_4.style.visibility='hidden';
			me._svg_4.ggVisible=false;
			me._box_audio0.style[domTransition]='none';
			me._box_audio0.style.visibility=(Number(me._box_audio0.style.opacity)>0||!me._box_audio0.style.opacity)?'inherit':'hidden';
			me._box_audio0.ggVisible=true;
			me._svg_30.style[domTransition]='none';
			me._svg_30.style.visibility=(Number(me._svg_30.style.opacity)>0||!me._svg_30.style.opacity)?'inherit':'hidden';
			me._svg_30.ggVisible=true;
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
		}
		me._box_mute.appendChild(me._svg_4);
		me._container_botoes_mobile.appendChild(me._box_mute);
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle glass_inicial";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 120px;';
		hs+='top : 28px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 20px 0px 0px 20px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxODhweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTg4cHgiIHZpZXdCb3g9Ii0xNS4wNCAtMTUuMDQgNjIuMDggNjIuMDgiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iSWNvbnMiIGZpbGw9IiMwMDAwMDAiPgogPGcgc3Ryb2tlLXdpZHRoPSIwIiBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiLz4KIDxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+IC5zdDB7ZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0'+
			'ZXJsaW1pdDoxMDt9IDwvc3R5bGU+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTMsMTF2MTBjMCwxLjEsMC45LDIsMiwyaDYuMmMwLjUsMCwxLTAuMiwxLjQtMC42bDItMmMwLjgtMC44LDItMC44LDIuOCwwbDIsMmMwLjQsMC40LDAuOSwwLjYsMS40LDAuNkgyNyBjMS4xLDAsMi0wLjksMi0yVjExYzAtMS4xLTAuOS0yLTItMkg1QzMuOSw5LDMsOS45LDMsMTF6Ii8+CiAgPGNpcmNsZSByPSIzIiBjbGFzcz0ic3QwIiBjeT0iMTYiIGN4PSI5Ii8+CiAgPGNpcmNsZSByPSIzIiBjbGFzcz0ic3QwIiBjeT0iMTYiIGN4PSIyMyIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_7.onclick=function (e) {
			player.enterVR();
		}
		me._svg_7.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me._svg_7);
		me._container_botoes_mobile.appendChild(me._rectangle_3);
		me.divSkin.appendChild(me._container_botoes_mobile);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 940px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.ggActivate=function () {
			player.setVariableValue('Var_hotanimation', true);
		}
		me._timer_1.ggDeactivate=function () {
			player.setVariableValue('Var_hotanimation', false);
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._barra_superior=document.createElement('div');
		el.ggId="Barra superior";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='background: rgba( 255, 255, 255, 1 );';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._barra_superior.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._barra_superior.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._barra_superior);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.jpg';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;border-radius: 0px 0px 30px 0px;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		el=me._caixa_de_texto_instrues_desktop=document.createElement('div');
		els=me._caixa_de_texto_instrues_desktop__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Caixa de texto instru\xe7\xf5es desktop";
		el.ggDx=-0.23;
		el.ggDy=-3.25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 325px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 653px;';
		hs+='pointer-events:auto;';
		hs+='background: rgba( 0, 0, 0, 0.55 ); backdrop-filter: blur( 12px ); -webkit-backdrop-filter: blur( 12px ); border-radius: 5px; text-align: justify;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 653px;';
		hs+='height: 325px;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: lighter;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding: 12px;";
		els.setAttribute('style',hs);
		els.innerHTML="<br\/>BEM VINDO AO SHOWROOM 360\xba<br\/><br\/>Nosso showroom abrange 850m\xb2, oferecendo uma experi\xeancia excepcional aos clientes. Explore-o virtualmente para descobrir a magia da Nordecor Ilumina\xe7\xe3o.<br\/><br\/><br\/>INFORMA\xc7\xd5ES IMPORTANTES PARA SUA NAVEGA\xc7\xc3O:<br\/><br\/>Para navegar pelos ambientes basta deslizar o dedo pela tela se estiver utilizando<br\/>um celular, em desktops clique no bot\xe3o esquerdo do mouse para olhar ao redor enquanto a navega\xe7\xe3o ocorre. Na Parte inferior da tela voc\xea tem a possibilidade de navegar atrav\xe9s da lista de panor\xe2micas que disponibilizamos.Na Parte superior direita da tela, h\xe1 um \xedcone de planta baixa que lhe dar\xe1 op\xe7\xe3o de acessar a planta do showroom Nordecor inteira, e navegar por outros ambientes.";
		el.appendChild(els);
		me._caixa_de_texto_instrues_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._caixa_de_texto_instrues_desktop.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_instrucao') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._caixa_de_texto_instrues_desktop.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._caixa_de_texto_instrues_desktop.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._caixa_de_texto_instrues_desktop.style[domTransition]='left 3500ms ease 0ms, top 3500ms ease 0ms';
				if (me._caixa_de_texto_instrues_desktop.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -1000;
					me._caixa_de_texto_instrues_desktop.ggUpdatePosition(true);
				}
				else {
					me._caixa_de_texto_instrues_desktop.ggDx=-0.23;
					me._caixa_de_texto_instrues_desktop.ggDy=-3.25;
					me._caixa_de_texto_instrues_desktop.ggUpdatePosition(true);
				}
			}
		}
		me._caixa_de_texto_instrues_desktop.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._caixa_de_texto_instrues_desktop.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._caixa_de_texto_instrues_desktop.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._caixa_de_texto_instrues_desktop.style[domTransition]='left 3500ms ease 0ms, top 3500ms ease 0ms';
				if (me._caixa_de_texto_instrues_desktop.ggCurrentLogicStateVisible == 0) {
					me._caixa_de_texto_instrues_desktop.style.visibility="hidden";
					me._caixa_de_texto_instrues_desktop.ggVisible=false;
				}
				else {
					me._caixa_de_texto_instrues_desktop.style.visibility=(Number(me._caixa_de_texto_instrues_desktop.style.opacity)>0||!me._caixa_de_texto_instrues_desktop.style.opacity)?'inherit':'hidden';
					me._caixa_de_texto_instrues_desktop.ggVisible=true;
				}
			}
		}
		me._caixa_de_texto_instrues_desktop.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._svg_80=document.createElement('div');
		els=me._svg_80__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iODAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjgwMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiPgogPGcgc3Ryb2tlLXdpZHRoPSIwIiBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiLz4KIDxnIH'+
			'N0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxwYXRoIGQ9Ik0xMC4wMzAzIDguOTY5NjVDOS43Mzc0MSA4LjY3Njc2IDkuMjYyNTMgOC42NzY3NiA4Ljk2OTY0IDguOTY5NjVDOC42NzY3NSA5LjI2MjU1IDguNjc2NzUgOS43Mzc0MiA4Ljk2OTY0IDEwLjAzMDNMMTAuOTM5MyAxMkw4Ljk2OTY2IDEzLjk2OTdDOC42NzY3NyAxNC4yNjI1IDguNjc2NzcgMTQuNzM3NCA4Ljk2OTY2IDE1LjAzMDNDOS4yNjI1NSAxNS4zMjMyIDkuNzM3NDMgMTUuMzIzMiAx'+
			'MC4wMzAzIDE1LjAzMDNMMTIgMTMuMDYwN0wxMy45Njk2IDE1LjAzMDNDMTQuMjYyNSAxNS4zMjMyIDE0LjczNzQgMTUuMzIzMiAxNS4wMzAzIDE1LjAzMDNDMTUuMzIzMiAxNC43Mzc0IDE1LjMyMzIgMTQuMjYyNSAxNS4wMzAzIDEzLjk2OTZMMTMuMDYwNiAxMkwxNS4wMzAzIDEwLjAzMDNDMTUuMzIzMiA5LjczNzQ0IDE1LjMyMzIgOS4yNjI1NyAxNS4wMzAzIDguOTY5NjhDMTQuNzM3NCA4LjY3Njc4IDE0LjI2MjUgOC42NzY3OCAxMy45Njk2IDguOTY5NjhMMTIgMTAuOTM5M0wxMC4wMzAzIDguOTY5NjVaIiBmaWxsPSIjZmZmZmZmIi8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPS'+
			'JNMTIgMS4yNUM2LjA2Mjk0IDEuMjUgMS4yNSA2LjA2Mjk0IDEuMjUgMTJDMS4yNSAxNy45MzcxIDYuMDYyOTQgMjIuNzUgMTIgMjIuNzVDMTcuOTM3MSAyMi43NSAyMi43NSAxNy45MzcxIDIyLjc1IDEyQzIyLjc1IDYuMDYyOTQgMTcuOTM3MSAxLjI1IDEyIDEuMjVaTTIuNzUgMTJDMi43NSA2Ljg5MTM3IDYuODkxMzcgMi43NSAxMiAyLjc1QzE3LjEwODYgMi43NSAyMS4yNSA2Ljg5MTM3IDIxLjI1IDEyQzIxLjI1IDE3LjEwODYgMTcuMTA4NiAyMS4yNSAxMiAyMS4yNUM2Ljg5MTM3IDIxLjI1IDIuNzUgMTcuMTA4NiAyLjc1IDEyWiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmZmZmZm'+
			'Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_80__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_80.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_80.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['svg_80'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_80.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_80.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_80.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_80.ggCurrentLogicStateAngle == 0) {
					me._svg_80.ggParameter.a = 90;
					me._svg_80.style[domTransform]=parameterToTransform(me._svg_80.ggParameter);
				}
				else {
					me._svg_80.ggParameter.a = 0;
					me._svg_80.style[domTransform]=parameterToTransform(me._svg_80.ggParameter);
				}
			}
		}
		me._svg_80.onclick=function (e) {
			player.setVariableValue('var_instrucao', true);
		}
		me._svg_80.onmouseover=function (e) {
			me.elementMouseOver['svg_80']=true;
			me._svg_80.logicBlock_angle();
		}
		me._svg_80.onmouseout=function (e) {
			me.elementMouseOver['svg_80']=false;
			me._svg_80.logicBlock_angle();
		}
		me._svg_80.ontouchend=function (e) {
			me.elementMouseOver['svg_80']=false;
			me._svg_80.logicBlock_angle();
		}
		me._svg_80.ggUpdatePosition=function (useTransition) {
		}
		me._caixa_de_texto_instrues_desktop.appendChild(me._svg_80);
		me.divSkin.appendChild(me._caixa_de_texto_instrues_desktop);
		el=me._caixa_de_texto_instrues_mobile=document.createElement('div');
		els=me._caixa_de_texto_instrues_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Caixa de texto instru\xe7\xf5es mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 419px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 53.5316%;';
		hs+='pointer-events:auto;';
		hs+='background: rgba( 0, 0, 0, 0.55 ); backdrop-filter: blur( 12px ); -webkit-backdrop-filter: blur( 12px ); border-radius: 5px; text-align: justify;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 419px;';
		hs+='border: 0px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: 100;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+="padding: 14px;";
		els.setAttribute('style',hs);
		els.innerHTML="<br\/><br\/>BEM VINDO AO SHOWROOM 360\xba<br\/><br\/>Nosso showroom abrange 850m\xb2,oferecendo uma experi\xeancia excepcional aos clientes.Explore virtualmente para descobrir a magia da Nordecor Ilumina\xe7\xe3o.<br\/><br\/><br\/>INFORMA\xc7\xd5ES IMPORTANTES PARA SUA NAVEGA\xc7\xc3O:<br\/><br\/>Para navegar pelos ambientes basta deslizar o dedo pela tela se estiver utilizando um celular,em desktops clique no bot\xe3o esquerdo do mouse para olhar ao redor enquanto a navega\xe7\xe3o ocorre.Na Parte inferior da tela voc\xea tem a possibilidade de navegar atrav\xe9s da lista de panor\xe2micas que disponibilizamos.Na Parte superior direita da tela,h\xe1 um \xedcone de planta baixa que lhe dar\xe1 op\xe7\xe3o de acessar a planta do showroom Nordecor inteira,e navegar por outros ambientes.<br\/><br\/><br\/><br\/><br\/><br\/><br\/><br\/><br\/><br\/><br\/>";
		el.appendChild(els);
		me._caixa_de_texto_instrues_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._caixa_de_texto_instrues_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_instrucao') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._caixa_de_texto_instrues_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._caixa_de_texto_instrues_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._caixa_de_texto_instrues_mobile.style[domTransition]='left 3500ms ease 0ms, top 3500ms ease 0ms, width 0s, height 0s';
				if (me._caixa_de_texto_instrues_mobile.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -1000;
					me._caixa_de_texto_instrues_mobile.ggUpdatePosition(true);
				}
				else {
					me._caixa_de_texto_instrues_mobile.ggDx=0;
					me._caixa_de_texto_instrues_mobile.ggDy=0;
					me._caixa_de_texto_instrues_mobile.ggUpdatePosition(true);
				}
			}
		}
		me._caixa_de_texto_instrues_mobile.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._caixa_de_texto_instrues_mobile.ggCurrentLogicStateSize != newLogicStateSize) {
				me._caixa_de_texto_instrues_mobile.ggCurrentLogicStateSize = newLogicStateSize;
				me._caixa_de_texto_instrues_mobile.style[domTransition]='left 3500ms ease 0ms, top 3500ms ease 0ms, width 0s, height 0s';
				me._caixa_de_texto_instrues_mobile__text.style[domTransition]='left 3500ms ease 0ms, top 3500ms ease 0ms, width 0s, height 0s';
				if (me._caixa_de_texto_instrues_mobile.ggCurrentLogicStateSize == 0) {
					me._caixa_de_texto_instrues_mobile.style.width='95%';
					me._caixa_de_texto_instrues_mobile__text.style.height='394px';
					skin.updateSize(me._caixa_de_texto_instrues_mobile);
				}
				else {
					me._caixa_de_texto_instrues_mobile.style.width='53.5316%';
					me._caixa_de_texto_instrues_mobile__text.style.height='419px';
					skin.updateSize(me._caixa_de_texto_instrues_mobile);
				}
			}
		}
		me._caixa_de_texto_instrues_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._caixa_de_texto_instrues_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._caixa_de_texto_instrues_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._caixa_de_texto_instrues_mobile.style[domTransition]='left 3500ms ease 0ms, top 3500ms ease 0ms, width 0s, height 0s';
				if (me._caixa_de_texto_instrues_mobile.ggCurrentLogicStateVisible == 0) {
					me._caixa_de_texto_instrues_mobile.style.visibility=(Number(me._caixa_de_texto_instrues_mobile.style.opacity)>0||!me._caixa_de_texto_instrues_mobile.style.opacity)?'inherit':'hidden';
					me._caixa_de_texto_instrues_mobile.ggVisible=true;
				}
				else {
					me._caixa_de_texto_instrues_mobile.style.visibility="hidden";
					me._caixa_de_texto_instrues_mobile.ggVisible=false;
				}
			}
		}
		me._caixa_de_texto_instrues_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iODAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjgwMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiPgogPGcgc3Ryb2tlLXdpZHRoPSIwIiBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiLz4KIDxnIH'+
			'N0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxwYXRoIGQ9Ik0xMC4wMzAzIDguOTY5NjVDOS43Mzc0MSA4LjY3Njc2IDkuMjYyNTMgOC42NzY3NiA4Ljk2OTY0IDguOTY5NjVDOC42NzY3NSA5LjI2MjU1IDguNjc2NzUgOS43Mzc0MiA4Ljk2OTY0IDEwLjAzMDNMMTAuOTM5MyAxMkw4Ljk2OTY2IDEzLjk2OTdDOC42NzY3NyAxNC4yNjI1IDguNjc2NzcgMTQuNzM3NCA4Ljk2OTY2IDE1LjAzMDNDOS4yNjI1NSAxNS4zMjMyIDkuNzM3NDMgMTUuMzIzMiAx'+
			'MC4wMzAzIDE1LjAzMDNMMTIgMTMuMDYwN0wxMy45Njk2IDE1LjAzMDNDMTQuMjYyNSAxNS4zMjMyIDE0LjczNzQgMTUuMzIzMiAxNS4wMzAzIDE1LjAzMDNDMTUuMzIzMiAxNC43Mzc0IDE1LjMyMzIgMTQuMjYyNSAxNS4wMzAzIDEzLjk2OTZMMTMuMDYwNiAxMkwxNS4wMzAzIDEwLjAzMDNDMTUuMzIzMiA5LjczNzQ0IDE1LjMyMzIgOS4yNjI1NyAxNS4wMzAzIDguOTY5NjhDMTQuNzM3NCA4LjY3Njc4IDE0LjI2MjUgOC42NzY3OCAxMy45Njk2IDguOTY5NjhMMTIgMTAuOTM5M0wxMC4wMzAzIDguOTY5NjVaIiBmaWxsPSIjZmZmZmZmIi8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPS'+
			'JNMTIgMS4yNUM2LjA2Mjk0IDEuMjUgMS4yNSA2LjA2Mjk0IDEuMjUgMTJDMS4yNSAxNy45MzcxIDYuMDYyOTQgMjIuNzUgMTIgMjIuNzVDMTcuOTM3MSAyMi43NSAyMi43NSAxNy45MzcxIDIyLjc1IDEyQzIyLjc1IDYuMDYyOTQgMTcuOTM3MSAxLjI1IDEyIDEuMjVaTTIuNzUgMTJDMi43NSA2Ljg5MTM3IDYuODkxMzcgMi43NSAxMiAyLjc1QzE3LjEwODYgMi43NSAyMS4yNSA2Ljg5MTM3IDIxLjI1IDEyQzIxLjI1IDE3LjEwODYgMTcuMTA4NiAyMS4yNSAxMiAyMS4yNUM2Ljg5MTM3IDIxLjI1IDIuNzUgMTcuMTA4NiAyLjc1IDEyWiIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjZmZmZmZm'+
			'Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_8__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_8.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((me.elementMouseOver['svg_8'] == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_8.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_8.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_8.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._svg_8.ggCurrentLogicStateAngle == 0) {
					me._svg_8.ggParameter.a = 90;
					me._svg_8.style[domTransform]=parameterToTransform(me._svg_8.ggParameter);
				}
				else {
					me._svg_8.ggParameter.a = 0;
					me._svg_8.style[domTransform]=parameterToTransform(me._svg_8.ggParameter);
				}
			}
		}
		me._svg_8.onclick=function (e) {
			player.setVariableValue('var_instrucao', true);
		}
		me._svg_8.onmouseover=function (e) {
			me.elementMouseOver['svg_8']=true;
			me._svg_8.logicBlock_angle();
		}
		me._svg_8.onmouseout=function (e) {
			me.elementMouseOver['svg_8']=false;
			me._svg_8.logicBlock_angle();
		}
		me._svg_8.ontouchend=function (e) {
			me.elementMouseOver['svg_8']=false;
			me._svg_8.logicBlock_angle();
		}
		me._svg_8.ggUpdatePosition=function (useTransition) {
		}
		me._caixa_de_texto_instrues_mobile.appendChild(me._svg_8);
		me.divSkin.appendChild(me._caixa_de_texto_instrues_mobile);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 42px;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iODAwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iODAwcHgiIHZpZXdCb3g9Ii00LjggLTQuOCAyOS42MCAyOS42MCIgc3Ryb2tlPSIjZmZmZmZmIiB4bWxuczp4bGluaz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMTk5OS94bGluayIgZmlsbD0iI2ZmZmZmZiI+CiA8ZyBzdHJva2Utd2lkdGg9IjAiIGlkPSJTVkdSZXBvX2JnQ2FycmllciIvPgogPGcgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIi8+CiA8ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI+CiAgPHRpdGxlPmV4aXRfZnVsbF9zY3JlZW4gWyNmZmZmZmZdPC90aXRsZT4KICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICA8ZGVmcy8+CiAgPGcgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9k'+
			'ZCIgaWQ9IlBhZ2UtMSIgZmlsbD0ibm9uZSI+CiAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNjAuMDAwMDAwLCAtNDE5OS4wMDAwMDApIiBpZD0iRHJpYmJibGUtTGlnaHQtUHJldmlldyIgZmlsbD0iI2ZmZmZmZiI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Ni4wMDAwMDAsIDE2MC4wMDAwMDApIiBpZD0iaWNvbnMiPgogICAgIDxwYXRoIGQ9Ik0yMTgsNDA0NyBMMjI0LDQwNDcgTDIyNCw0MDQ1IEwyMTgsNDA0NSBMMjE4LDQwMzkgTDIxNiw0MDM5IEwyMTYsNDA0My45NTkgTDIxNiw0MDQ3IEwyMTgsNDA0NyBaIE0yMTgsNDA1MyBMMjI0LDQwNTMgTDIyNCw0MDUxIEwyMTgsND'+
			'A1MSBMMjE2LDQwNTEgTDIxNiw0MDUxLjk1OSBMMjE2LDQwNTkgTDIxOCw0MDU5IEwyMTgsNDA1MyBaIE0yMTAsNDA1OSBMMjEyLDQwNTkgTDIxMiw0MDUxLjk1OSBMMjEyLDQwNTEgTDIxMCw0MDUxIEwyMDQsNDA1MSBMMjA0LDQwNTMgTDIxMCw0MDUzIEwyMTAsNDA1OSBaIE0yMTAsNDAzOSBMMjEyLDQwMzkgTDIxMiw0MDQzLjk1OSBMMjEyLDQwNDcgTDIxMCw0MDQ3IEwyMDQsNDA0NyBMMjA0LDQwNDUgTDIxMCw0MDQ1IEwyMTAsNDAzOSBaIiBpZD0iZXhpdF9mdWxsX3NjcmVlbi1bI2ZmZmZmZl0iLz4KICAgIDwvZz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="button_image_normalscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glass_inicial";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iODAwcHgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iODAwcHgiIHZpZXdCb3g9Ii00LjggLTQuOCAyOS42MCAyOS42MCIgc3Ryb2tlPSIjZmZmZmZmIiB4bWxuczp4bGluaz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMTk5OS94bGluayIgZmlsbD0iI2ZmZmZmZiI+CiA8ZyBzdHJva2Utd2lkdGg9IjAiIGlkPSJTVkdSZXBvX2JnQ2FycmllciIvPgogPGcgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIi8+CiA8ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI+CiAgPHRpdGxlPmZ1bGxfc2NyZWVuIFsjZmZmZmZmXTwvdGl0bGU+CiAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgPGRlZnMvPgogIDxnIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlk'+
			'PSJQYWdlLTEiIGZpbGw9Im5vbmUiPgogICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAwLjAwMDAwMCwgLTQxOTkuMDAwMDAwKSIgaWQ9IkRyaWJiYmxlLUxpZ2h0LVByZXZpZXciIGZpbGw9IiNmZmZmZmYiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTYuMDAwMDAwLCAxNjAuMDAwMDAwKSIgaWQ9Imljb25zIj4KICAgICA8cGF0aCBkPSJNMjYyLjQ0NDUsNDAzOSBMMjU2LjAwMDUsNDAzOSBMMjU2LjAwMDUsNDA0MSBMMjYyLjAwMDUsNDA0MSBMMjYyLjAwMDUsNDA0NyBMMjY0LjAwMDUsNDA0NyBMMjY0LjAwMDUsNDAzOS45NTUgTDI2NC4wMDA1LDQwMzkgTDI2Mi40NDQ1LDQwMz'+
			'kgWiBNMjYyLjAwMDUsNDA1NyBMMjU2LjAwMDUsNDA1NyBMMjU2LjAwMDUsNDA1OSBMMjYyLjQ0NDUsNDA1OSBMMjY0LjAwMDUsNDA1OSBMMjY0LjAwMDUsNDA1NS45NTUgTDI2NC4wMDA1LDQwNTEgTDI2Mi4wMDA1LDQwNTEgTDI2Mi4wMDA1LDQwNTcgWiBNMjQ2LjAwMDUsNDA1MSBMMjQ0LjAwMDUsNDA1MSBMMjQ0LjAwMDUsNDA1NS45NTUgTDI0NC4wMDA1LDQwNTkgTDI0Ni40NDQ1LDQwNTkgTDI1Mi4wMDA1LDQwNTkgTDI1Mi4wMDA1LDQwNTcgTDI0Ni4wMDA1LDQwNTcgTDI0Ni4wMDA1LDQwNTEgWiBNMjQ2LjAwMDUsNDA0NyBMMjQ0LjAwMDUsNDA0NyBMMjQ0LjAwMDUsNDAzOS45NTUgTDI0'+
			'NC4wMDA1LDQwMzkgTDI0Ni40NDQ1LDQwMzkgTDI1Mi4wMDA1LDQwMzkgTDI1Mi4wMDA1LDQwNDEgTDI0Ni4wMDA1LDQwNDEgTDI0Ni4wMDA1LDQwNDcgWiIgaWQ9ImZ1bGxfc2NyZWVuLVsjZmZmZmZmXSIvPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="button_image_fullscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg glass_inicial";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		me.divSkin.appendChild(me._button_fullscreen);
		el=me._button_mute=document.createElement('div');
		el.ggId="button_mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 7px;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_mute.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_mute.ggUpdatePosition=function (useTransition) {
		}
		el=me._unmute=document.createElement('div');
		els=me._unmute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iODAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjgwMHB4IiB2aWV3Qm94PSItNC41NiAtNC41NiAyOC4xMiAyOC4xMiIgY2xhc3M9ImNmLWljb24tc3ZnIiBmaWxsPSIjZmFmOWY5Ij4KIDxnIHN0cm9rZS13aW'+
			'R0aD0iMCIgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIi8+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiLz4KIDxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4KICA8cGF0aCBkPSJNNy4wOTggNC43Njl2OS42M2MwIC42MS0uMzUzLjc1Ni0uNzg0LjMyNUwzLjQyIDExLjgyOEgxLjQ0MkExLjExMiAxLjExMiAwIDAgMSAuMzMzIDEwLjcyVjguNDQ4QTEuMTEyIDEuMTEyIDAgMCAxIDEuNDQyIDcuMzRoMS45NzdsMi44OTUtMi44OTZjLjQzMS0uNDMuNzg0LS4yODUuNzg0LjMyNXptMi4wNzYgNy40NzRhLjU1'+
			'My41NTMgMCAwIDAgLjM5Mi0uMTYzIDMuNTMgMy41MyAwIDAgMCAwLTQuOTkyLjU1NC41NTQgMCAxIDAtLjc4NC43ODQgMi40MjIgMi40MjIgMCAwIDEgMCAzLjQyNS41NTQuNTU0IDAgMCAwIC4zOTIuOTQ2em0yLjE4NCAxLjYyOWE2LjA1OSA2LjA1OSAwIDAgMCAwLTguNTc1LjU1NC41NTQgMCAwIDAtLjc4NC43ODMgNC45NTUgNC45NTUgMCAwIDEgMCA3LjAwOC41NTQuNTU0IDAgMCAwIC43ODQuNzg0em0xLjc5IDEuNzlhOC41OSA4LjU5IDAgMCAwIDAtMTIuMTU3LjU1NC41NTQgMCAwIDAtLjc4My43ODQgNy40ODEgNy40ODEgMCAwIDEgMCAxMC41OS41NTQuNTU0IDAgMSAwIC43ODQuNzg0ei'+
			'IvPgogPC9nPgo8L3N2Zz4K';
		me._unmute__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="unmute";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg glass_inicial";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 0px 5px 5px 0px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._unmute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmute.onclick=function (e) {
			player.setVolume("_main",1);
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility='hidden';
			me._unmute.ggVisible=false;
			me._mute.style[domTransition]='none';
			me._mute.style.visibility=(Number(me._mute.style.opacity)>0||!me._mute.style.opacity)?'inherit':'hidden';
			me._mute.ggVisible=true;
		}
		me._unmute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._button_mute.appendChild(me._unmute);
		el=me._mute=document.createElement('div');
		els=me._mute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iMjA0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIwNHB4IiB2aWV3Qm94PSItNC41NiAtNC41NiAyOC4xMiAyOC4xMiIgY2xhc3M9ImNmLWljb24tc3ZnIiBmaWxsPSIjZmFmYWZhIj4KIDxnIHN0cm9rZS13aW'+
			'R0aD0iMCIgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIi8+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiLz4KIDxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4KICA8cGF0aCBkPSJNNy42NzYgNC45Mzh2OS42M2MwIC42MS0uMzUzLjc1Ni0uNzg0LjMyNWwtMi44OTYtMi44OTZIMi4wMkExLjExMSAxLjExMSAwIDAgMSAuOTExIDEwLjg5VjguNjE4YTEuMTEyIDEuMTEyIDAgMCAxIDEuMTA4LTEuMTA5aDEuOTc3bDIuODk2LTIuODk2Yy40My0uNDMuNzg0LS4yODQuNzg0LjMyNXptNy4yNTEgNi44ODhhLjU1'+
			'NC41NTQgMCAxIDEtLjc4NC43ODRsLTIuMDcyLTIuMDczLTIuMDczIDIuMDczYS41NTQuNTU0IDAgMSAxLS43ODQtLjc4NGwyLjA3My0yLjA3M0w5LjIxNCA3LjY4YS41NTQuNTU0IDAgMCAxIC43ODQtLjc4M0wxMi4wNyA4Ljk3bDIuMDcyLTIuMDczYS41NTQuNTU0IDAgMCAxIC43ODQuNzgzbC0yLjA3MiAyLjA3M3oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._mute__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mute";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg glass_inicial";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 0px 5px 5px 0px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute.onclick=function (e) {
			player.setVolume("_main",0);
			me._mute.style[domTransition]='none';
			me._mute.style.visibility='hidden';
			me._mute.ggVisible=false;
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility=(Number(me._unmute.style.opacity)>0||!me._unmute.style.opacity)?'inherit':'hidden';
			me._unmute.ggVisible=true;
		}
		me._mute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._button_mute.appendChild(me._mute);
		me.divSkin.appendChild(me._button_mute);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 34px;';
		hs+='position : absolute;';
		hs+='right : 76px;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._container_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._container_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._container_1.style[domTransition]='right 0s, top 0s';
				if (me._container_1.ggCurrentLogicStatePosition == 0) {
					me._container_1.style.right='75px';
					me._container_1.style.top='33px';
				}
				else {
					me._container_1.style.right='76px';
					me._container_1.style.top='33px';
				}
			}
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaGVpZ2h0PSI4MDBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iODAwcHgiIHZpZXdCb3g9Ii0yLjg4IC0yLjg4IDM3Ljc2IDM3Ljc2IiBzdHJva2U9IiNmZmZmZm'+
			'YiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iSWNvbnMiIGZpbGw9IiNmZmZmZmYiPgogPGcgc3Ryb2tlLXdpZHRoPSIwIiBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiLz4KIDxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+IC5zdDB7ZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjk2O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9p'+
			'bjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9IC5zdDF7ZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjk2O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9IC5zdDJ7ZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDowLjk2O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30gPC9zdHlsZT4KICA8cmVjdCBoZWlnaHQ9IjI2IiB3aWR0aD0iMjYiIHg9IjMiIGNsYXNzPSJzdDAiIHk9IjMiLz4KICA8cmVjdCBoZWlnaHQ9IjkiIHdpZHRoPSIxMSIgeD0iMTgiIGNsYXNzPSJzdDAiIHk9IjIwIi'+
			'8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTQsMyAyOSwzIDI5LDE1IDIwLDE1ICIgY2xhc3M9InN0MCIvPgogIDxsaW5lIHgxPSIxNCIgeDI9IjE0IiBjbGFzcz0ic3QwIiB5Mj0iMyIgeTE9IjE1Ii8+CiAgPHJlY3QgaGVpZ2h0PSI2IiB3aWR0aD0iMTEiIHg9IjE4IiBjbGFzcz0ic3QwIiB5PSIyMyIvPgogIDxyZWN0IGhlaWdodD0iMyIgd2lkdGg9IjExIiB4PSIxOCIgY2xhc3M9InN0MCIgeT0iMjYiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIxMSwyOSAxMSwyMCA3LDIwICIgY2xhc3M9InN0MCIvPgogIDxwb2x5bGluZSBwb2ludHM9IjE0LDE1IDMsMTUgMywzIDE0LDMgIiBjbGFzcz0ic3QwIi8+'+
			'CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg glass_inicial";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 5px 0px 0px 5px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.onclick=function (e) {
			player.setVariableValue('var_planta', !player.getVariableValue('var_planta'));
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._container_1.appendChild(me._svg_2);
		me.divSkin.appendChild(me._container_1);
		el=me._map_duplicado_para_teste_no_mobile=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggId="Map duplicado para teste no mobile";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 338px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -750px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_duplicado_para_teste_no_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_duplicado_para_teste_no_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_planta') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_duplicado_para_teste_no_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_duplicado_para_teste_no_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_duplicado_para_teste_no_mobile.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._map_duplicado_para_teste_no_mobile.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._map_duplicado_para_teste_no_mobile.style.top='122px';
					me._map_duplicado_para_teste_no_mobile.ggUpdatePosition(true);
				}
				else {
					me._map_duplicado_para_teste_no_mobile.ggDx=0;
					me._map_duplicado_para_teste_no_mobile.style.top='-750px';
					me._map_duplicado_para_teste_no_mobile.ggUpdatePosition(true);
				}
			}
		}
		me._map_duplicado_para_teste_no_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_duplicado_para_teste_no_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_duplicado_para_teste_no_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_duplicado_para_teste_no_mobile.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._map_duplicado_para_teste_no_mobile.ggCurrentLogicStateVisible == 0) {
					me._map_duplicado_para_teste_no_mobile.style.visibility=(Number(me._map_duplicado_para_teste_no_mobile.style.opacity)>0||!me._map_duplicado_para_teste_no_mobile.style.opacity)?'inherit':'hidden';
					if (me._map_duplicado_para_teste_no_mobile.ggMapNotLoaded) {
						me._map_duplicado_para_teste_no_mobile.ggInitMap(false);
						me._map_duplicado_para_teste_no_mobile.ggInitMapMarkers(true);
					}
					me._map_duplicado_para_teste_no_mobile.ggVisible=true;
				}
				else {
					me._map_duplicado_para_teste_no_mobile.style.visibility="hidden";
					me._map_duplicado_para_teste_no_mobile.ggClearMap();
					me._map_duplicado_para_teste_no_mobile.ggVisible=false;
				}
			}
		}
		me._map_duplicado_para_teste_no_mobile.ggCurrentLogicStatePosition = -1;
		me._map_duplicado_para_teste_no_mobile.ggCurrentLogicStateVisible = -1;
		me._map_duplicado_para_teste_no_mobile.ggUpdateConditionResize=function () {
			if (me._map_duplicado_para_teste_no_mobile.ggMapNotLoaded == false) {
				me._map_duplicado_para_teste_no_mobile.ggMap.invalidateSize(false);
			}
		}
		me._map_duplicado_para_teste_no_mobile.ggUpdateConditionTimer=function () {
			me._map_duplicado_para_teste_no_mobile.ggRadar.update();
		}
		me._map_duplicado_para_teste_no_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			me._map_duplicado_para_teste_no_mobile.ggUpdateConditionResize();
		}
		me._map_duplicado_para_teste_no_mobile.ggNodeChange=function () {
			if (me._map_duplicado_para_teste_no_mobile.ggLastActivMarker) {
				if (me._map_duplicado_para_teste_no_mobile.ggLastActivMarker._div.ggDeactivate) me._map_duplicado_para_teste_no_mobile.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map_duplicado_para_teste_no_mobile.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map_duplicado_para_teste_no_mobile.ggLastActivMarker=marker;
			}
			if (player.getMapType(me._map_duplicado_para_teste_no_mobile.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_duplicado_para_teste_no_mobile.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_duplicado_para_teste_no_mobile.ggChangeMap(mapId);
					}
				}
			}
			me._map_duplicado_para_teste_no_mobile.ggLastNodeId = id;
		}
		me.divSkin.appendChild(me._map_duplicado_para_teste_no_mobile);
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggId="Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 336px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : -700px;';
		hs+='visibility : inherit;';
		hs+='width : 603px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var_planta') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_1.style[domTransition]='right 500ms ease 0ms, top 500ms ease 0ms';
				if (me._map_1.ggCurrentLogicStatePosition == 0) {
					me._map_1.style.right='6px';
					me._map_1.style.top='80px';
				}
				else {
					me._map_1.style.right='5px';
					me._map_1.style.top='-700px';
				}
			}
		}
		me._map_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_1.style[domTransition]='right 500ms ease 0ms, top 500ms ease 0ms';
				if (me._map_1.ggCurrentLogicStateVisible == 0) {
					me._map_1.style.visibility="hidden";
					me._map_1.ggClearMap();
					me._map_1.ggVisible=false;
				}
				else {
					me._map_1.style.visibility=(Number(me._map_1.style.opacity)>0||!me._map_1.style.opacity)?'inherit':'hidden';
					if (me._map_1.ggMapNotLoaded) {
						me._map_1.ggInitMap(false);
						me._map_1.ggInitMapMarkers(true);
					}
					me._map_1.ggVisible=true;
				}
			}
		}
		me._map_1.ggCurrentLogicStatePosition = -1;
		me._map_1.ggCurrentLogicStateVisible = -1;
		me._map_1.ggUpdateConditionResize=function () {
			if (me._map_1.ggMapNotLoaded == false) {
				me._map_1.ggMap.invalidateSize(false);
			}
		}
		me._map_1.ggUpdateConditionTimer=function () {
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			me._map_1.ggUpdateConditionResize();
		}
		me._map_1.ggNodeChange=function () {
			if (me._map_1.ggLastActivMarker) {
				if (me._map_1.ggLastActivMarker._div.ggDeactivate) me._map_1.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map_1.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map_1.ggLastActivMarker=marker;
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
		}
		me.divSkin.appendChild(me._map_1);
		me._map_duplicado_para_teste_no_mobile.ggMarkerInstances=[];
		me._map_duplicado_para_teste_no_mobile.ggMapId = 'PlantaNordecor';
		me._map_duplicado_para_teste_no_mobile.ggLastNodeId=null;
		me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_changenode = function(){
			if(me._map_duplicado_para_teste_no_mobile.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_duplicado_para_teste_no_mobile.ggMarkerInstances.length; i++) {
					if (me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_tt && me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_configloaded = function(){
			if(me._map_duplicado_para_teste_no_mobile.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_duplicado_para_teste_no_mobile.ggMarkerInstances.length; i++) {
					if (me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_tt && me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_tt.logicBlock_position) {
						me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_tt.logicBlock_position();
					}
				}
			}
		}
		me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_mouseover = function(){
			if(me._map_duplicado_para_teste_no_mobile.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_duplicado_para_teste_no_mobile.ggMarkerInstances.length; i++) {
					if (me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_active && me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_active.logicBlock_scaling) {
						me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_active.logicBlock_scaling();
					}
					if (me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_normal && me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_normal.logicBlock_scaling) {
						me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_normal.logicBlock_scaling();
					}
				}
			}
		}
		me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_mouseover = function(){
			if(me._map_duplicado_para_teste_no_mobile.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_duplicado_para_teste_no_mobile.ggMarkerInstances.length; i++) {
					if (me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_tt && me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_active = function(){
			if(me._map_duplicado_para_teste_no_mobile.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_duplicado_para_teste_no_mobile.ggMarkerInstances.length; i++) {
					if (me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_active && me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_active.logicBlock_alpha) {
						me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_active.logicBlock_alpha();
					}
					if (me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_normal && me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_normal.logicBlock_alpha) {
						me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_normal.logicBlock_alpha();
					}
				}
			}
		}
		me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_hastouch = function(){
			if(me._map_duplicado_para_teste_no_mobile.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_duplicado_para_teste_no_mobile.ggMarkerInstances.length; i++) {
					if (me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_tt && me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_tt.logicBlock_position) {
						me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_tt.logicBlock_position();
					}
				}
			}
		}
		me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_activehotspotchanged = function(){
			if(me._map_duplicado_para_teste_no_mobile.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_duplicado_para_teste_no_mobile.ggMarkerInstances.length; i++) {
					if (me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_tt && me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._map_duplicado_para_teste_no_mobile.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._map_duplicado_para_teste_no_mobile.ggMarkerArray=[];
		me._map_duplicado_para_teste_no_mobile.ggGoogleMarkerArray=[];
		me._map_duplicado_para_teste_no_mobile.ggLastZoom = -1;
		me._map_duplicado_para_teste_no_mobile.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map_duplicado_para_teste_no_mobile.ggRadar.update=function() {
			var radar=me._map_duplicado_para_teste_no_mobile.ggRadar;
			var map=me._map_duplicado_para_teste_no_mobile.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map_duplicado_para_teste_no_mobile.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_duplicado_para_teste_no_mobile.ggMapId);
				pan -= me._map_duplicado_para_teste_no_mobile.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_duplicado_para_teste_no_mobile.ggFilteredIds.length > 0 && me._map_duplicado_para_teste_no_mobile.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.234375;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=5;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#969696',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#969696',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me._map_duplicado_para_teste_no_mobile.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map_duplicado_para_teste_no_mobile.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map_duplicado_para_teste_no_mobile.ggInitMap=function(keepZoom) {
			me._map_duplicado_para_teste_no_mobile.ggMapNotLoaded = false;
			var mapType = player.getMapType(me._map_duplicado_para_teste_no_mobile.ggMapId);
			var mapDetails = player.getMapDetails(me._map_duplicado_para_teste_no_mobile.ggMapId);
			if (mapType == 'file') {
				me._map_duplicado_para_teste_no_mobile.style.backgroundColor = mapDetails['bgcolor'];
				me._map_duplicado_para_teste_no_mobile.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map_duplicado_para_teste_no_mobile.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map_duplicado_para_teste_no_mobile.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_duplicado_para_teste_no_mobile.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(0,0);
			}
			if (mapType == 'web') {
				if (me._map_duplicado_para_teste_no_mobile.ggLastZoom == -1) me._map_duplicado_para_teste_no_mobile.ggLastZoom = 1;
				var initZoom = keepZoom ? me._map_duplicado_para_teste_no_mobile.ggLastZoom : 1;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me._map_duplicado_para_teste_no_mobile.ggMap = L.map(me._map_duplicado_para_teste_no_mobile, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me._map_duplicado_para_teste_no_mobile.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me._map_duplicado_para_teste_no_mobile.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails['styleurl'] == '') {
						if (mapDetails['mapstyle'] == 'satellite') {
							L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{}).addTo(me._map_duplicado_para_teste_no_mobile.ggMap);
						} else {
							L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails['mapkey'],{ tileSize: 512, zoomOffset: -1 }).addTo(me._map_duplicado_para_teste_no_mobile.ggMap);
						}
					} else {
						var styleurlstring = mapDetails['styleurl'];
						styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
						L.tileLayer('https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails['mapkey'],{}).addTo(me._map_duplicado_para_teste_no_mobile.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me._map_duplicado_para_teste_no_mobile.ggMap);
				}
			} else if (mapType == 'file') {
				me._map_duplicado_para_teste_no_mobile.ggCalculateFloorplanDimInDeg(mapDetails);
				var mapCenter = activeNodeLatLng;
				if (mapCenter.lat == 0.0 && mapCenter.lng == 0.0) {
					mapCenter.lat = -me._map_duplicado_para_teste_no_mobile.mapHeightInDeg / 2;
					mapCenter.lng = me._map_duplicado_para_teste_no_mobile.mapWidthInDeg / 2;
				}
				if (me._map_duplicado_para_teste_no_mobile.ggLastZoom == -1) me._map_duplicado_para_teste_no_mobile.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map_duplicado_para_teste_no_mobile.ggLastZoom : 8;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: mapCenter,
					zoomControls: true,
					attributionControl: false
				};
				me._map_duplicado_para_teste_no_mobile.ggMap = L.map(me._map_duplicado_para_teste_no_mobile, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me._map_duplicado_para_teste_no_mobile.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me._map_duplicado_para_teste_no_mobile.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me._map_duplicado_para_teste_no_mobile.ggMap);
				me._map_duplicado_para_teste_no_mobile.ggMap.on('move zoom', function() {
					me._map_duplicado_para_teste_no_mobile.ggCheckBounds(mapDetails);
				});
				me._map_duplicado_para_teste_no_mobile.ggCheckBounds(mapDetails);
			}
		}
		me._map_duplicado_para_teste_no_mobile.ggClearMap=function() {
		if (me._map_duplicado_para_teste_no_mobile.ggMap) me._map_duplicado_para_teste_no_mobile.ggMap.remove();
		me._map_duplicado_para_teste_no_mobile.ggMap = null;
		me._map_duplicado_para_teste_no_mobile.ggClearMapMarkers();
		me._map_duplicado_para_teste_no_mobile.ggMapNotLoaded = true;
		}
		me._map_duplicado_para_teste_no_mobile.ggClearMapMarkers=function() {
			me._map_duplicado_para_teste_no_mobile.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map_duplicado_para_teste_no_mobile.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me._map_duplicado_para_teste_no_mobile.ggMap);
				}
			}
			me._map_duplicado_para_teste_no_mobile.ggMarkerArray=[];
			me._map_duplicado_para_teste_no_mobile.ggMarkerInstances=[];
			me._map_duplicado_para_teste_no_mobile.ggLastActivMarker = null;
		}
		me._map_duplicado_para_teste_no_mobile.ggCenterNode=function() {
			if (!me._map_duplicado_para_teste_no_mobile.ggMap) return;
			var gps;
			if (player.getMapType(me._map_duplicado_para_teste_no_mobile.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_duplicado_para_teste_no_mobile.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me._map_duplicado_para_teste_no_mobile.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me._map_duplicado_para_teste_no_mobile.ggFitBounds=function(force) {
			if (me._map_duplicado_para_teste_no_mobile.ggMapNotLoaded) return;
			if (me._map_duplicado_para_teste_no_mobile.ggMarkerBounds.isValid()) {
				if (me._map_duplicado_para_teste_no_mobile.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map_duplicado_para_teste_no_mobile.ggGoogleMarkerArray).length > 1) {
					if (force) {
					me._map_duplicado_para_teste_no_mobile.ggMap.zoomOut(1, {animate: false});
					me._map_duplicado_para_teste_no_mobile.ggMap.fitBounds(me._map_duplicado_para_teste_no_mobile.ggMarkerBounds, {padding: [30, 30], animate: false});
					} else {
						if (player.getMapType(me._map_duplicado_para_teste_no_mobile.ggMapId) == 'web') {
							me._map_duplicado_para_teste_no_mobile.ggMap.setZoom(1);
						} else {
							me._map_duplicado_para_teste_no_mobile.ggMap.setZoom(7 + 1);
						}
					}
				} else {
					me._map_duplicado_para_teste_no_mobile.ggMap.setView(me._map_duplicado_para_teste_no_mobile.ggMarkerBounds.getCenter(), me._map_duplicado_para_teste_no_mobile.ggMap.getZoom());
					if (player.getMapType(me._map_duplicado_para_teste_no_mobile.ggMapId) == 'web') {
						if (force) {
						me._map_duplicado_para_teste_no_mobile.ggMap.setZoom(18);
						} else {
							me._map_duplicado_para_teste_no_mobile.ggMap.setZoom(1);
						}
					} else {
						if (force) {
						me._map_duplicado_para_teste_no_mobile.ggMap.setZoom(7);
						} else {
							me._map_duplicado_para_teste_no_mobile.ggMap.setZoom(7 + 1);
						}
					}
				}
			}
		}
		me._map_duplicado_para_teste_no_mobile.ggInitMapMarkers=function(updateMapBounds) {
			L.SkinMarkerLayer = L.Layer.extend({
				initialize: function(div, pos) {
					this._div = div;
					this._pos = pos;
				},
				onAdd: function(map) {
					this.options.pane = 'markerPane';
					var pane = map.getPane(this.options.pane);
					pane.appendChild(this._div);
					this._div.style.left = -12 + 'px';
					this._div.style.top = -41 + 'px';
					this._update();
					map.on('zoomstart', this._zoomStart, this);
					map.on('zoomend', this._zoomEnd, this);
					map.on('zoomend viewreset', this._update, this);
				},
				onRemove : function(map) {
					L.DomUtil.remove(this._div);
					map.off('zoomend viewreset', this._update, this);
				},
				_zoomStart: function() {
						this._div.style.visibility = 'hidden';
				},
				_zoomEnd: function() {
						this._div.style.visibility = 'inherit';
				},
				_update : function() {
					var point = this._map.latLngToLayerPoint(this._pos);
					L.DomUtil.setPosition(this._div, point);
				}
			});
			me._map_duplicado_para_teste_no_mobile.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_duplicado_para_teste_no_mobile.ggFilteredIds = [];
			if (me._map_duplicado_para_teste_no_mobile.ggFilter != '') {
				var filter = me._map_duplicado_para_teste_no_mobile.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_duplicado_para_teste_no_mobile.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_duplicado_para_teste_no_mobile.ggFilteredIds.length > 0) ids = me._map_duplicado_para_teste_no_mobile.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map_duplicado_para_teste_no_mobile.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map_duplicado_para_teste_no_mobile.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map_duplicado_para_teste_no_mobile.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement_map_pin_Class(me, markerParent);
					marker=new L.SkinMarkerLayer(div._map_pin,markerLocation);
					marker.addTo(me._map_duplicado_para_teste_no_mobile.ggMap);
					me._map_duplicado_para_teste_no_mobile.ggMarkerArray[id]=marker;
					me._map_duplicado_para_teste_no_mobile.ggMarkerInstances.push(div);
					me._map_duplicado_para_teste_no_mobile.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me._map_duplicado_para_teste_no_mobile.ggMarkerBounds.isValid() && updateMapBounds) {
				me._map_duplicado_para_teste_no_mobile.ggFitBounds(false);
			}
			skin.updateSize(me._map_duplicado_para_teste_no_mobile);
		me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_changenode();
		me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_configloaded();
		me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_mouseover();
		me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_mouseover();
		me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_active();
		me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_hastouch();
		me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_activehotspotchanged();
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		me._map_duplicado_para_teste_no_mobile.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_duplicado_para_teste_no_mobile.ggMapId = mapId;
			if (!me._map_duplicado_para_teste_no_mobile.ggMapNotLoaded) {
				if (me._map_duplicado_para_teste_no_mobile.ggMap) {
					me._map_duplicado_para_teste_no_mobile.ggLastZoom = me._map_duplicado_para_teste_no_mobile.ggMap.getZoom();
				}
				me._map_duplicado_para_teste_no_mobile.ggClearMap();
				me._map_duplicado_para_teste_no_mobile.ggInitMap(true);
				me._map_duplicado_para_teste_no_mobile.ggInitMapMarkers(false);
				var mapDetails = player.getMapDetails(me._map_duplicado_para_teste_no_mobile.ggMapId);
				me._map_duplicado_para_teste_no_mobile.ggCalculateFloorplanDimInDeg(mapDetails);
				me._map_duplicado_para_teste_no_mobile.ggCheckBounds(mapDetails);
			}
		}
		me._map_duplicado_para_teste_no_mobile.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._map_duplicado_para_teste_no_mobile.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._map_duplicado_para_teste_no_mobile.mapHeightInDeg = me._map_duplicado_para_teste_no_mobile.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._map_duplicado_para_teste_no_mobile.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._map_duplicado_para_teste_no_mobile.mapWidthInDeg = me._map_duplicado_para_teste_no_mobile.mapHeightInDeg * mapAR;
			}
		}
		me._map_duplicado_para_teste_no_mobile.ggInCheckBounds=false;
		me._map_duplicado_para_teste_no_mobile.ggCheckBounds=function(mapDetails) {
			if (me._map_duplicado_para_teste_no_mobile.ggInCheckBounds) return;
			me._map_duplicado_para_teste_no_mobile.ggInCheckBounds = true;
			var mapCenter = me._map_duplicado_para_teste_no_mobile.ggMap.getCenter();
			var currentZoom = me._map_duplicado_para_teste_no_mobile.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map_duplicado_para_teste_no_mobile.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map_duplicado_para_teste_no_mobile.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			var xTemp = x;
			var yTemp = y;
			if (me._map_duplicado_para_teste_no_mobile.mapWidthInDeg < me._map_duplicado_para_teste_no_mobile.clientWidth * pixelInDeg) {
				var xMargin = (me._map_duplicado_para_teste_no_mobile.clientWidth * pixelInDeg - me._map_duplicado_para_teste_no_mobile.mapWidthInDeg) / 2;
				if (x < me._map_duplicado_para_teste_no_mobile.mapWidthInDeg / 2 - xMargin) x = me._map_duplicado_para_teste_no_mobile.mapWidthInDeg / 2 - xMargin;
				if (x > me._map_duplicado_para_teste_no_mobile.mapWidthInDeg / 2 + xMargin) x = me._map_duplicado_para_teste_no_mobile.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._map_duplicado_para_teste_no_mobile.mapWidthInDeg - xOffset) x = me._map_duplicado_para_teste_no_mobile.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._map_duplicado_para_teste_no_mobile.mapHeightInDeg < me._map_duplicado_para_teste_no_mobile.clientHeight * pixelInDeg) {
				var yMargin = (me._map_duplicado_para_teste_no_mobile.clientHeight * pixelInDeg - me._map_duplicado_para_teste_no_mobile.mapHeightInDeg) / 2;
				if (y < -me._map_duplicado_para_teste_no_mobile.mapHeightInDeg / 2 - yMargin) y = -me._map_duplicado_para_teste_no_mobile.mapHeightInDeg / 2 - yMargin;
				if (y > -me._map_duplicado_para_teste_no_mobile.mapHeightInDeg / 2 + yMargin) y = -me._map_duplicado_para_teste_no_mobile.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._map_duplicado_para_teste_no_mobile.mapHeightInDeg + yOffset) y = -me._map_duplicado_para_teste_no_mobile.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				var newCenter = L.latLng(y, x);
				me._map_duplicado_para_teste_no_mobile.ggMap.setView(newCenter, me._map_duplicado_para_teste_no_mobile.ggMap.getZoom(), {animate: false});
			}
			me._map_duplicado_para_teste_no_mobile.ggInCheckBounds = false;
		}
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggMapId = 'PlantaNordecor';
		me._map_1.ggLastNodeId=null;
		me._map_1.callChildLogicBlocksHotspot_map_pin_changenode = function(){
			if(me._map_1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_1.ggMarkerInstances.length; i++) {
					if (me._map_1.ggMarkerInstances[i]._map_pin_tt && me._map_1.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._map_1.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._map_1.callChildLogicBlocksHotspot_map_pin_configloaded = function(){
			if(me._map_1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_1.ggMarkerInstances.length; i++) {
					if (me._map_1.ggMarkerInstances[i]._map_pin_tt && me._map_1.ggMarkerInstances[i]._map_pin_tt.logicBlock_position) {
						me._map_1.ggMarkerInstances[i]._map_pin_tt.logicBlock_position();
					}
				}
			}
		}
		me._map_1.callChildLogicBlocksHotspot_map_pin_mouseover = function(){
			if(me._map_1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_1.ggMarkerInstances.length; i++) {
					if (me._map_1.ggMarkerInstances[i]._map_pin_active && me._map_1.ggMarkerInstances[i]._map_pin_active.logicBlock_scaling) {
						me._map_1.ggMarkerInstances[i]._map_pin_active.logicBlock_scaling();
					}
					if (me._map_1.ggMarkerInstances[i]._map_pin_normal && me._map_1.ggMarkerInstances[i]._map_pin_normal.logicBlock_scaling) {
						me._map_1.ggMarkerInstances[i]._map_pin_normal.logicBlock_scaling();
					}
				}
			}
		}
		me._map_1.callChildLogicBlocksHotspot_map_pin_mouseover = function(){
			if(me._map_1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_1.ggMarkerInstances.length; i++) {
					if (me._map_1.ggMarkerInstances[i]._map_pin_tt && me._map_1.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._map_1.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._map_1.callChildLogicBlocksHotspot_map_pin_active = function(){
			if(me._map_1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_1.ggMarkerInstances.length; i++) {
					if (me._map_1.ggMarkerInstances[i]._map_pin_active && me._map_1.ggMarkerInstances[i]._map_pin_active.logicBlock_alpha) {
						me._map_1.ggMarkerInstances[i]._map_pin_active.logicBlock_alpha();
					}
					if (me._map_1.ggMarkerInstances[i]._map_pin_normal && me._map_1.ggMarkerInstances[i]._map_pin_normal.logicBlock_alpha) {
						me._map_1.ggMarkerInstances[i]._map_pin_normal.logicBlock_alpha();
					}
				}
			}
		}
		me._map_1.callChildLogicBlocksHotspot_map_pin_hastouch = function(){
			if(me._map_1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_1.ggMarkerInstances.length; i++) {
					if (me._map_1.ggMarkerInstances[i]._map_pin_tt && me._map_1.ggMarkerInstances[i]._map_pin_tt.logicBlock_position) {
						me._map_1.ggMarkerInstances[i]._map_pin_tt.logicBlock_position();
					}
				}
			}
		}
		me._map_1.callChildLogicBlocksHotspot_map_pin_activehotspotchanged = function(){
			if(me._map_1.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._map_1.ggMarkerInstances.length; i++) {
					if (me._map_1.ggMarkerInstances[i]._map_pin_tt && me._map_1.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha) {
						me._map_1.ggMarkerInstances[i]._map_pin_tt.logicBlock_alpha();
					}
				}
			}
		}
		me._map_1.ggMarkerArray=[];
		me._map_1.ggGoogleMarkerArray=[];
		me._map_1.ggLastZoom = -1;
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var map=me._map_1.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
				pan -= me._map_1.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat) && (gps[1]==radar.activeNodeLatLng.lng)) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = L.latLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.234375;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=5;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng;
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat;
					radar_path.push(L.latLng(y, x));
				}
				if (radar.poly) {
					radar.poly.removeFrom(map);
					radar.poly = null;
				}
				radar.poly = L.polygon(radar_path, {
					color: '#969696',
					opacity: 0.8,
					weight: 1,
					fill: true,
					fillColor: '#969696',
					fillOpacity: 0.35
				}).addTo(map);
			} else {
				if (radar) {
					activeNodeLatLng = L.latLng(0,0);
					if (radar.poly) {
						radar.poly.removeFrom(map);
						radar.poly = null;
					}
				}
			}
		}
		me._map_1.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map_1.ggInitMap=function(keepZoom) {
			me._map_1.ggMapNotLoaded = false;
			var mapType = player.getMapType(me._map_1.ggMapId);
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapType == 'file') {
				me._map_1.style.backgroundColor = mapDetails['bgcolor'];
				me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map_1.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = L.latLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = L.latLng(0,0);
			}
			if (mapType == 'web') {
				if (me._map_1.ggLastZoom == -1) me._map_1.ggLastZoom = 1;
				var initZoom = keepZoom ? me._map_1.ggLastZoom : 1;
				var maxZoom = ((mapDetails['mapprovider'] == 'openstreetmap') && (mapDetails['mapstyle'] == 'outdoors')) ? 17 : 18;
				if (mapDetails['mapprovider'] == 'custom') maxZoom = mapDetails['mapmaxzoom'];
				var mapOptions = {
					zoom: initZoom,
					zoomControl: true,
					attributionControl: false,
					maxZoom: maxZoom
				};
				me._map_1.ggMap = L.map(me._map_1, mapOptions).setView(activeNodeLatLng, initZoom);
				if (mapDetails['mapprovider'] == 'openstreetmap') {
					if (mapDetails['mapstyle'] == 'streets') {
						L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{}).addTo(me._map_1.ggMap);
					} else if (mapDetails['mapstyle'] == 'outdoors') {
						L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{}).addTo(me._map_1.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'mapbox') {
					if (mapDetails['styleurl'] == '') {
						if (mapDetails['mapstyle'] == 'satellite') {
							L.tileLayer('https://api.mapbox.com/v4/mapbox.' + mapDetails['mapstyle'] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails['mapkey'],{}).addTo(me._map_1.ggMap);
						} else {
							L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/' + mapDetails['mapstyle'] +  '-v11/tiles/{z}/{x}/{y}@2x?access_token=' + mapDetails['mapkey'],{ tileSize: 512, zoomOffset: -1 }).addTo(me._map_1.ggMap);
						}
					} else {
						var styleurlstring = mapDetails['styleurl'];
						styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
						L.tileLayer('https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails['mapkey'],{}).addTo(me._map_1.ggMap);
					}
				} else if (mapDetails['mapprovider'] == 'custom') {
					L.tileLayer(mapDetails['mapurltemplate'],{ maxZoom: mapDetails['mapmaxzoom']}).addTo(me._map_1.ggMap);
				}
			} else if (mapType == 'file') {
				me._map_1.ggCalculateFloorplanDimInDeg(mapDetails);
				var mapCenter = activeNodeLatLng;
				if (mapCenter.lat == 0.0 && mapCenter.lng == 0.0) {
					mapCenter.lat = -me._map_1.mapHeightInDeg / 2;
					mapCenter.lng = me._map_1.mapWidthInDeg / 2;
				}
				if (me._map_1.ggLastZoom == -1) me._map_1.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map_1.ggLastZoom : 8;
				var mapOptions = {
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: mapCenter,
					zoomControls: true,
					attributionControl: false
				};
				me._map_1.ggMap = L.map(me._map_1, mapOptions).setView(activeNodeLatLng, initZoom);
				var MapLayer = L.TileLayer.extend({
					getTileUrl: function(coords){
						if (me._map_1.ggTileAvailable(coords.x, coords.y, coords.z)) {
							return basePath + 'images/maptiles/' + me._map_1.ggMapId + '/' + coords.z + '/' + coords.x + '_' + coords.y + '.' + mapDetails['tileformat'];
						} else {
							return '';
						}
					}
				});
				var mapLayer = new MapLayer();
				mapLayer.addTo(me._map_1.ggMap);
				me._map_1.ggMap.on('move zoom', function() {
					me._map_1.ggCheckBounds(mapDetails);
				});
				me._map_1.ggCheckBounds(mapDetails);
			}
		}
		me._map_1.ggClearMap=function() {
		if (me._map_1.ggMap) me._map_1.ggMap.remove();
		me._map_1.ggMap = null;
		me._map_1.ggClearMapMarkers();
		me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggClearMapMarkers=function() {
			me._map_1.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map_1.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					marker.removeFrom(me._map_1.ggMap);
				}
			}
			me._map_1.ggMarkerArray=[];
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggLastActivMarker = null;
		}
		me._map_1.ggCenterNode=function() {
			if (!me._map_1.ggMap) return;
			var gps;
			if (player.getMapType(me._map_1.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map_1.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = L.latLng(gps[0], gps[1]);
				me._map_1.ggMap.panTo(markerLocation, {animate: false});
			}
		}
		me._map_1.ggFitBounds=function(force) {
			if (me._map_1.ggMapNotLoaded) return;
			if (me._map_1.ggMarkerBounds.isValid()) {
				if (me._map_1.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map_1.ggGoogleMarkerArray).length > 1) {
					if (force) {
					me._map_1.ggMap.zoomOut(1, {animate: false});
					me._map_1.ggMap.fitBounds(me._map_1.ggMarkerBounds, {padding: [30, 30], animate: false});
					} else {
						if (player.getMapType(me._map_1.ggMapId) == 'web') {
							me._map_1.ggMap.setZoom(1);
						} else {
							me._map_1.ggMap.setZoom(7 + 1);
						}
					}
				} else {
					me._map_1.ggMap.setView(me._map_1.ggMarkerBounds.getCenter(), me._map_1.ggMap.getZoom());
					if (player.getMapType(me._map_1.ggMapId) == 'web') {
						if (force) {
						me._map_1.ggMap.setZoom(18);
						} else {
							me._map_1.ggMap.setZoom(1);
						}
					} else {
						if (force) {
						me._map_1.ggMap.setZoom(7);
						} else {
							me._map_1.ggMap.setZoom(7 + 1);
						}
					}
				}
			}
		}
		me._map_1.ggInitMapMarkers=function(updateMapBounds) {
			L.SkinMarkerLayer = L.Layer.extend({
				initialize: function(div, pos) {
					this._div = div;
					this._pos = pos;
				},
				onAdd: function(map) {
					this.options.pane = 'markerPane';
					var pane = map.getPane(this.options.pane);
					pane.appendChild(this._div);
					this._div.style.left = -12 + 'px';
					this._div.style.top = -41 + 'px';
					this._update();
					map.on('zoomstart', this._zoomStart, this);
					map.on('zoomend', this._zoomEnd, this);
					map.on('zoomend viewreset', this._update, this);
				},
				onRemove : function(map) {
					L.DomUtil.remove(this._div);
					map.off('zoomend viewreset', this._update, this);
				},
				_zoomStart: function() {
						this._div.style.visibility = 'hidden';
				},
				_zoomEnd: function() {
						this._div.style.visibility = 'inherit';
				},
				_update : function() {
					var point = this._map.latLngToLayerPoint(this._pos);
					L.DomUtil.setPosition(this._div, point);
				}
			});
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map_1.ggMarkerBounds = L.latLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map_1.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map_1.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = L.latLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement_map_pin_Class(me, markerParent);
					marker=new L.SkinMarkerLayer(div._map_pin,markerLocation);
					marker.addTo(me._map_1.ggMap);
					me._map_1.ggMarkerArray[id]=marker;
					me._map_1.ggMarkerInstances.push(div);
					me._map_1.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && me._map_1.ggMarkerBounds.isValid() && updateMapBounds) {
				me._map_1.ggFitBounds(false);
			}
			skin.updateSize(me._map_1);
		me._map_1.callChildLogicBlocksHotspot_map_pin_changenode();
		me._map_1.callChildLogicBlocksHotspot_map_pin_configloaded();
		me._map_1.callChildLogicBlocksHotspot_map_pin_mouseover();
		me._map_1.callChildLogicBlocksHotspot_map_pin_mouseover();
		me._map_1.callChildLogicBlocksHotspot_map_pin_active();
		me._map_1.callChildLogicBlocksHotspot_map_pin_hastouch();
		me._map_1.callChildLogicBlocksHotspot_map_pin_activehotspotchanged();
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				if (me._map_1.ggMap) {
					me._map_1.ggLastZoom = me._map_1.ggMap.getZoom();
				}
				me._map_1.ggClearMap();
				me._map_1.ggInitMap(true);
				me._map_1.ggInitMapMarkers(false);
				var mapDetails = player.getMapDetails(me._map_1.ggMapId);
				me._map_1.ggCalculateFloorplanDimInDeg(mapDetails);
				me._map_1.ggCheckBounds(mapDetails);
			}
		}
		me._map_1.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._map_1.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._map_1.mapHeightInDeg = me._map_1.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._map_1.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._map_1.mapWidthInDeg = me._map_1.mapHeightInDeg * mapAR;
			}
		}
		me._map_1.ggInCheckBounds=false;
		me._map_1.ggCheckBounds=function(mapDetails) {
			if (me._map_1.ggInCheckBounds) return;
			me._map_1.ggInCheckBounds = true;
			var mapCenter = me._map_1.ggMap.getCenter();
			var currentZoom = me._map_1.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map_1.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map_1.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng;
			var y = mapCenter.lat;
			var xTemp = x;
			var yTemp = y;
			if (me._map_1.mapWidthInDeg < me._map_1.clientWidth * pixelInDeg) {
				var xMargin = (me._map_1.clientWidth * pixelInDeg - me._map_1.mapWidthInDeg) / 2;
				if (x < me._map_1.mapWidthInDeg / 2 - xMargin) x = me._map_1.mapWidthInDeg / 2 - xMargin;
				if (x > me._map_1.mapWidthInDeg / 2 + xMargin) x = me._map_1.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._map_1.mapWidthInDeg - xOffset) x = me._map_1.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._map_1.mapHeightInDeg < me._map_1.clientHeight * pixelInDeg) {
				var yMargin = (me._map_1.clientHeight * pixelInDeg - me._map_1.mapHeightInDeg) / 2;
				if (y < -me._map_1.mapHeightInDeg / 2 - yMargin) y = -me._map_1.mapHeightInDeg / 2 - yMargin;
				if (y > -me._map_1.mapHeightInDeg / 2 + yMargin) y = -me._map_1.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._map_1.mapHeightInDeg + yOffset) y = -me._map_1.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				var newCenter = L.latLng(y, x);
				me._map_1.ggMap.setView(newCenter, me._map_1.ggMap.getZoom(), {animate: false});
			}
			me._map_1.ggInCheckBounds = false;
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._thumbnail_cloner7.ggUpdate();
			me._thumbnail_cloner6.ggUpdate();
			me._thumbnail_cloner5.ggUpdate();
			me._thumbnail_cloner4.ggUpdate();
			me._thumbnail_cloner3.ggUpdate();
			me._thumbnail_cloner2.ggUpdate();
			me._thumbnail_cloner1.ggUpdate();
			me._thumbnail_cloner0.ggUpdate();
			me._thumbnail_cloner.ggUpdate();
			if (me._map_duplicado_para_teste_no_mobile.ggMapNotLoaded == false) {
				me._map_duplicado_para_teste_no_mobile.ggClearMap();
				me._map_duplicado_para_teste_no_mobile.ggInitMap(false);
				me._map_duplicado_para_teste_no_mobile.ggInitMapMarkers(true);
			}
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
		});
		player.addListener('imagesready', function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
			me._thumbnail_menu7.ggUpdatePosition();
			me._thumbnail_menu6.ggUpdatePosition();
			me._thumbnail_menu5.ggUpdatePosition();
			me._thumbnail_menu4.ggUpdatePosition();
			me._thumbnail_menu3.ggUpdatePosition();
			me._thumbnail_menu2.ggUpdatePosition();
			me._thumbnail_menu1.ggUpdatePosition();
			me._thumbnail_menu0.ggUpdatePosition();
			me._thumbnail_menu.ggUpdatePosition();
		});
		player.addListener('beforechangenode', function() {
			if (
				(
					((player.getVariableValue('vis_loader') == true))
				)
			) {
				me._loading.style[domTransition]='none';
				me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
				me._loading.ggVisible=true;
			}
		});
		player.addListener('tilesrequested', function() {
			player.setVariableValue('vis_loader', false);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_hotspot_sizechanged = function(){
		if(hotspotTemplates['hotspot']) {
			var i;
			for(i = 0; i < hotspotTemplates['hotspot'].length; i++) {
				if (hotspotTemplates['hotspot'][i]._hotspot.logicBlock_visible) {
					hotspotTemplates['hotspot'][i]._hotspot.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_changenode = function(){
		if(hotspotTemplates['hotspot']) {
			var i;
			for(i = 0; i < hotspotTemplates['hotspot'].length; i++) {
				if (hotspotTemplates['hotspot'][i]._hotspot.logicBlock_visible) {
					hotspotTemplates['hotspot'][i]._hotspot.logicBlock_visible();
				}
				if (hotspotTemplates['hotspot'][i]._hotspot_preview && hotspotTemplates['hotspot'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['hotspot'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['hotspot'][i]._ht_node_customimage && hotspotTemplates['hotspot'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['hotspot'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['hotspot'][i]._rectangle_1 && hotspotTemplates['hotspot'][i]._rectangle_1.logicBlock_scaling) {
					hotspotTemplates['hotspot'][i]._rectangle_1.logicBlock_scaling();
				}
				if (hotspotTemplates['hotspot'][i]._tt_ht_node && hotspotTemplates['hotspot'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['hotspot'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_configloaded = function(){
		if(hotspotTemplates['hotspot']) {
			var i;
			for(i = 0; i < hotspotTemplates['hotspot'].length; i++) {
				if (hotspotTemplates['hotspot'][i]._hotspot_preview && hotspotTemplates['hotspot'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['hotspot'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['hotspot'][i]._tt_ht_node && hotspotTemplates['hotspot'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['hotspot'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_mouseover = function(){
		if(hotspotTemplates['hotspot']) {
			var i;
			for(i = 0; i < hotspotTemplates['hotspot'].length; i++) {
				if (hotspotTemplates['hotspot'][i]._hotspot_preview && hotspotTemplates['hotspot'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['hotspot'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['hotspot'][i]._tt_ht_node && hotspotTemplates['hotspot'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['hotspot'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_active = function(){
		if(hotspotTemplates['hotspot']) {
			var i;
			for(i = 0; i < hotspotTemplates['hotspot'].length; i++) {
				if (hotspotTemplates['hotspot'][i]._ht_checkmark_tick && hotspotTemplates['hotspot'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['hotspot'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_changevisitednodes = function(){
		if(hotspotTemplates['hotspot']) {
			var i;
			for(i = 0; i < hotspotTemplates['hotspot'].length; i++) {
				if (hotspotTemplates['hotspot'][i]._ht_checkmark_tick && hotspotTemplates['hotspot'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['hotspot'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_activehotspotchanged = function(){
		if(hotspotTemplates['hotspot']) {
			var i;
			for(i = 0; i < hotspotTemplates['hotspot'].length; i++) {
				if (hotspotTemplates['hotspot'][i]._ht_node_customimage && hotspotTemplates['hotspot'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['hotspot'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['hotspot'][i]._tt_ht_node && hotspotTemplates['hotspot'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['hotspot'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['hotspot']) {
			var i;
			for(i = 0; i < hotspotTemplates['hotspot'].length; i++) {
				if (hotspotTemplates['hotspot'][i]._hotspot.logicBlock_visible) {
					hotspotTemplates['hotspot'][i]._hotspot.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_varchanged_opt_hotspot_preview = function(){
		if(hotspotTemplates['hotspot']) {
			var i;
			for(i = 0; i < hotspotTemplates['hotspot'].length; i++) {
				if (hotspotTemplates['hotspot'][i]._hotspot_preview && hotspotTemplates['hotspot'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['hotspot'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['hotspot'][i]._tt_ht_node && hotspotTemplates['hotspot'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['hotspot'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_varchanged_Var_hotanimation = function(){
		if(hotspotTemplates['hotspot']) {
			var i;
			for(i = 0; i < hotspotTemplates['hotspot'].length; i++) {
				if (hotspotTemplates['hotspot'][i]._rectangle_1 && hotspotTemplates['hotspot'][i]._rectangle_1.logicBlock_scaling) {
					hotspotTemplates['hotspot'][i]._rectangle_1.logicBlock_scaling();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(-0.5,true);
		}
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('Var_hotanimation', true);
			} else {
				player.setVariableValue('Var_hotanimation', false);
			}
		}
		me._map_duplicado_para_teste_no_mobile.ggUpdateConditionTimer();
		me._map_1.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_hotspot(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot=document.createElement('div');
		el.ggId="hotspot";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 74px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot.style[domTransition]='';
				if (me._hotspot.ggCurrentLogicStateVisible == 0) {
					me._hotspot.style.visibility="hidden";
					me._hotspot.ggVisible=false;
				}
				else {
					me._hotspot.style.visibility=(Number(me._hotspot.style.opacity)>0||!me._hotspot.style.opacity)?'inherit':'hidden';
					me._hotspot.ggVisible=true;
				}
			}
		}
		me._hotspot.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['hotspot']=true;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['hotspot']=false;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot.ontouchend=function (e) {
			me.elementMouseOver['hotspot']=false;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
		}
		me._hotspot.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_preview=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['hotspot'] == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview.style[domTransition]='';
				if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
					me._hotspot_preview.ggVisible=true;
				}
				else {
					me._hotspot_preview.style.visibility="hidden";
					me._hotspot_preview.ggVisible=false;
				}
			}
		}
		me._hotspot_preview.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._ht_preview_picture_frame_=document.createElement('div');
		el.ggId="ht_preview_picture_frame ";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.666667);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 92px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 142px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_preview_picture_frame_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_preview_picture_frame_.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._ht_preview_picture_frame_);
		el=me._ht_preview_nodeimage=document.createElement('div');
		els=me._ht_preview_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/ht_preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_preview_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._ht_preview_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_preview_nodeimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._ht_preview_nodeimage);
		el=me._ht_checkmark_tick=document.createElement('div');
		els=me._ht_checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iMTkxcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE5MXB4IiB2aWV3Qm94PSItMy4xMiAtMy4xMiAzMC4yNCAzMC4yNCIgZmlsbD0ibm9uZSI+CiA8ZyBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbn'+
			'NsYXRlKDUuMjc5OTk5OTk5OTk5OTk5LDUuMjc5OTk5OTk5OTk5OTk5KSwgc2NhbGUoMC41NikiIGlkPSJTVkdSZXBvX2JnQ2FycmllciI+CiAgPHBhdGggc3Ryb2tld2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjEyLCAtMy4xMiksIHNjYWxlKDEuODkwMDAwMDAwMDAwMDAwMSkiIGQ9Ik05LjE2Ni4zM2EyLjI1IDIuMjUgMCAwMC0yLjMzMiAwbC01LjI1IDMuMTgyQTIuMjUgMi4yNSAwIDAwLjUgNS40MzZ2NS4xMjhhMi4yNSAyLjI1IDAgMDAxLjA4NCAxLjkyNGw1LjI1IDMuMTgyYTIuMjUgMi4yNSAwIDAwMi4zMzIgMGw1LjI1LTMuMTgyYTIuMjUgMi4yNSAwIDAwMS4wODQtMS45'+
			'MjRWNS40MzZhMi4yNSAyLjI1IDAgMDAtMS4wODQtMS45MjRMOS4xNjYuMzN6IiBmaWxsPSIjZmZmZmZmIi8+CiA8L2c+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjAuMDk2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI0NDQ0NDQyIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYgM0M0LjM0MzE1IDMgMyA0LjM0MzE1IDMgNlYxOEMzIDE5LjY1NjkgNC4zNDMxNSAyMSA2IDIxSDE4QzE5LjY1NjkgMjEgMjEgMTkuNjU2OSAyMSAxOF'+
			'Y2QzIxIDQuMzQzMTUgMTkuNjU2OSAzIDE4IDNINlpNMTcuOCA4LjZDMTguMTMxNCA4LjE1ODE3IDE4LjA0MTggNy41MzEzNyAxNy42IDcuMkMxNy4xNTgyIDYuODY4NjMgMTYuNTMxNCA2Ljk1ODE3IDE2LjIgNy40TDEwLjg5MTggMTQuNDc3Nkw4LjcwNzExIDEyLjI5MjlDOC4zMTY1OCAxMS45MDI0IDcuNjgzNDIgMTEuOTAyNCA3LjI5Mjg5IDEyLjI5MjlDNi45MDIzNyAxMi42ODM0IDYuOTAyMzcgMTMuMzE2NiA3LjI5Mjg5IDEzLjcwNzFMMTAuMjkyOSAxNi43MDcxQzEwLjQ5NzkgMTYuOTEyMSAxMC43ODE3IDE3LjAxOCAxMS4wNzA5IDE2Ljk5NzVDMTEuMzYwMSAxNi45NzY5IDExLjYyNjEg'+
			'MTYuODMxOSAxMS44IDE2LjZMMTcuOCA4LjZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwMDdiZmYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 27px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_checkmark_tick.ggElementNodeId()) == true)) || 
				((me._ht_checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick.style[domTransition]='';
				if (me._ht_checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick.style.visibility=(Number(me._ht_checkmark_tick.style.opacity)>0||!me._ht_checkmark_tick.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick.style.visibility="hidden";
					me._ht_checkmark_tick.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_checkmark_tick);
		me._hotspot.appendChild(me._hotspot_preview);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style[domTransition]='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage__img.src = '';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._hotspot.appendChild(me._ht_node_customimage);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 4px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -22px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('Var_hotanimation') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_1.ggParameter.sx = 1;
					me._rectangle_1.ggParameter.sy = 1;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
				else {
					me._rectangle_1.ggParameter.sx = 0.5;
					me._rectangle_1.ggParameter.sy = 0.5;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
			}
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot.appendChild(me._rectangle_1);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iODAwcHgiIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iODAwcHgiIHN0cm9rZS13aWR0aD0iMC45MDk5OTk5OTk5OTk5OTk5IiB2aWV3Qm94PSItMS40IC0xLjQgMT'+
			'YuODAgMTYuODAiIGFyaWEtaGlkZGVuPSJ0cnVlIiBzdHJva2U9IiNkN2M4YWMiIGZpbGw9IiNkN2M4YWMiPgogPGcgc3Ryb2tlLXdpZHRoPSIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjUsMy41KSwgc2NhbGUoMC41KSIgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIj4KICA8cmVjdCBoZWlnaHQ9IjE2LjgwIiByeD0iMCIgd2lkdGg9IjE2LjgwIiB4PSItMS40IiBzdHJva2V3aWR0aD0iMCIgZmlsbD0iI2ZmZmZmZiIgeT0iLTEuNCIvPgogPC9nPgogPGcgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIi8+CiA8ZyBp'+
			'ZD0iU1ZHUmVwb19pY29uQ2FycmllciI+CiAgPHBhdGggZD0iTTExLjAzMTI1IDYuOTkyMnEwLS4yMTA5LS4xNDA2My0uMzUxNkw4LjA2MjUgMy44MTI1bC0uNzEwOTQtLjcxMDlRNy4yMTA5NCAyLjk2MDkgNyAyLjk2MDl0LS4zNTE1Ni4xNDA3bC0uNzEwOTQuNzEwOS0yLjgyODEzIDIuODI4MXEtLjE0MDYyLjE0MDctLjE0MDYyLjM1MTYgMCAuMjEwOS4xNDA2Mi4zNTE2bC43MTA5NC43MTA5cS4xNDA2My4xNDA2LjM1MTU2LjE0MDYuMjEwOTQgMCAuMzUxNTctLjE0MDZMNiA2LjU3ODFWMTAuNXEwIC4yMDMxLjE0ODQ0LjM1MTZRNi4yOTY4NyAxMSA2LjUgMTFoMXEuMjAzMTIgMCAuMzUxNTYtLj'+
			'E0ODRROCAxMC43MDMxIDggMTAuNVY2LjU3ODFsMS40NzY1NiAxLjQ3NjZxLjE0ODQ0LjE0ODQuMzUxNTYuMTQ4NC4yMDMxMyAwIC4zNTE1Ny0uMTQ4NGwuNzEwOTMtLjcxMDlxLjE0MDYzLS4xNDA3LjE0MDYzLS4zNTE2ek0xMyA3cTAgMS42MzI4LS44MDQ2OSAzLjAxMTctLjgwNDY5IDEuMzc4OS0yLjE4MzU5IDIuMTgzNlE4LjYzMjgxIDEzIDcgMTNxLTEuNjMyODEgMC0zLjAxMTcyLS44MDQ3LTEuMzc4OTEtLjgwNDctMi4xODM1OS0yLjE4MzZRMSA4LjYzMjggMSA3cTAtMS42MzI4LjgwNDY5LTMuMDExNy44MDQ2OC0xLjM3ODkgMi4xODM1OS0yLjE4MzZRNS4zNjcxOSAxIDcgMXExLjYzMjgx'+
			'IDAgMy4wMTE3Mi44MDQ3IDEuMzc4OS44MDQ3IDIuMTgzNTkgMi4xODM2UTEzIDUuMzY3MiAxMyA3eiIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=1;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot.appendChild(me._svg_1);
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 17px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['hotspot'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['hotspot'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.elementMouseOver['hotspot'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style[domTransition]='';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
			}
		}
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._hotspot.appendChild(me._tt_ht_node);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._hotspot;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'hotspot';
			hsinst = new SkinHotspotClass_hotspot(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hotspot_sizechanged();;
			me.callChildLogicBlocksHotspot_hotspot_changenode();;
			me.callChildLogicBlocksHotspot_hotspot_configloaded();;
			me.callChildLogicBlocksHotspot_hotspot_mouseover();;
			me.callChildLogicBlocksHotspot_hotspot_active();;
			me.callChildLogicBlocksHotspot_hotspot_changevisitednodes();;
			me.callChildLogicBlocksHotspot_hotspot_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_hotspot_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_hotspot_varchanged_opt_hotspot_preview();;
			me.callChildLogicBlocksHotspot_hotspot_varchanged_Var_hotanimation();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['hotspot']) {
			var i;
			for(i = 0; i < hotspotTemplates['hotspot'].length; i++) {
				hotspotTemplates['hotspot'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-308;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 439px;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.onmouseover=function (e) {
			me.elementMouseOver['map_pin']=true;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.onmouseout=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ontouchend=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAYAAAAWy4frAAATIUlEQVR4nMWba3Bcx3Xnf6e77wxmQFLiA5Yl0SQlK5JsQpJtWCJVVhKwnCwp26mkolBVydbWVqKqPKryIZ9clVQSM0pixS57vYmTKEqZ5Yo363VZeViJYlMVe4lNLJESRclLgqHEOLT4BgmAIDDPe293n3y4M8AIJEGAguSDupiZO7cf/z6nz/n36R7hOuTrO7EAjz5NAFAwz2299wNC/EiEB1DuBt1kRNYqCICARtVJkDcQXjPwkmKe377/0PcE4pXqXYrIUh5WMCPDw2bbyIgH2HP/+zeLMf9VhZ8xIu/rdxYAr5DHSFB9U3krQmIMrtNqwwei6lFRvqEx/u8dB/7tCMDe4WE3PDISuwCXFchTQ0PJrxw8mAP80wODHzaG3xL4mZXOSY6ShqgxBO'+
			'+9F9UgghgRI7MtKKhGVTSKWHXOqbHWla2RBKHmvSp8I0Y+/fGXRl+e3+ZyAJG9w8N228iI/8ehO9clSemzVuQXK9bQjEoIIc/z1AjG9q9YwapVN7ByxQoq5RIll4B0mlAl8zmtNKNWrzMzM02jXkeJIUnK0VqbVI3QCpGg+uU8zz75UwePTewdHnbbRkZCMRTXCWQXmE+BCuieLff8NKK7Vzq7thFUYww+S1NX6e+Xd990E+9as5ZV/VVKzmGMKfp+lcZijGTeM9NocuHiJGPnz9NqNrRUKntjrOu3IjUfJlF5bMeLh59RkN8D2bWAqV0ViILp2uhzWwY/3efMb3oFr5qlabtUqVTZ9J4N3DKwjkq53OmgoqrowoOHIIgIxhTNt9KUs+MTvHHyJK12k3K5L3MiJSfQ9vGJ7S+O/tb8Pi0KSG+BPVvu+eoNifn5magh'+
			'hojPU7thw0beu3491b4+YoyEWNQtsiTfgXacgTUGYwzNdpv/OH2akydP4JJyMNawyoidzuP/2fHi4V9YCMxlLWth1QqwZ+vg39zg7CMzIWbe50niEnn/nXdx89q1RJTYBbA053c5IOYACcK5yUn+7djr5D5X55J8lTWlaR/+dsf+0Z+b38eumPmVPr2zuPfc1sEv3eDsI7WoaZ7npWp1hTxw333csm4tPgRiiMjsSOhburr1hBDxwXPLurU8cN99VKsrJM/zUi1qeoOzjzy3dfBLvX3sFdv74eWhoeQnv33O73lw82+scu43a0HzPM9KK/r7uX/zIP2VCrn3GOkC6PGtl32Wea+93zPvOTqACt36EKiUy7xrzRomLl2i1W47LyZf6eyHd966bvqnnxvf9/LQUPKX587NmthszR035/c8uPkBi3kxAsF77euryP2Dg1'+
			'TLZXwIS54H1yuqirOWZppyYHSUdrul1jkxQCBu2bHvyEvdPkPHtBSkewOV3YkRVNWLEbnvrruolsvkwXdCwlszo0Wbm0AePNVymXvvuhMREVX1iRFQ2Q2wbWTEdymQAfjLoSEHsGfr5k+ucnYwjWRZlrq7b7+D1StWFOaELKkvqoU77r10iXgMgveeNStWcvd77yDLUpdGslXODu7ZuvmTvX2XXWB2QXz2oXtWO6//nhiztpmm8V3rBsyH7ryT2JmMizeJwgtZMTgz5w5A8VEJGjtxZAl1UoB65dgxLkyMx2q5bPIYJ72TH/nEdw9P7QJjfnx42AA4r7+20tm1PmpurTF3rF+PEYGoix7BGBUnQtk6fIycrTc5MT3DiekZztab+BgpW4cTIS6hXqJiRLhj/XqsNcZHzVc6u9Z5/TWAHx8eLkLrNx++o2ymyq+VrdtU'+
			'b7fCe25Zb+/ZtAkfw6JjRFSl7BxT7TYjp87yT8dPsPvYDwoVAYjw2J238fHbNzL8nltY3ddH6n0xWIvSiuKM5fAbb3Dq7Omwoq9i0+DfiKvTuz/2re+nDsBcrOyoOtnUitEbY9yt69YVJtLrHRdqRJWytXzvwgS//p3v8vz45Ox3a2zh8i+GyO7Xj7P79eN8ZGAtf/rRh/jAwFrSRXrCbn9uXbeOM2NnbRajr1q7qXmxsgN4phNY9GetMeR5zpobV7OqUiHEUGDo1nCVK8ZI2VqePzPGB7/2DM+PT3J3f4UBZymJMB0i0yFSEmHAWe7ur/D8+GTx7JkxytYWDOEa7QgQYmBVpcKaG1eT5znWGEB/FsC88OCDFYThrKDkZuDGNThjCh50rTmhSp+1fH9qmof+7psAbCyXeK3RYtwHclUiBTHKVRn3gdcaLTaWSwjw0N'+
			'99k3+fmqbPWuIi2lNVnDEM3LiGEILJooIw/MKDD1ZMLdbfb0Q2pCFQShJZ3V9d1AihigFSH/iTVw8DcFtfiRNp9qb43nvRsdQTacamvhIAX3z1MKkPnYB27TZjjKzur1JKEklDwIhs6GDgnqo1xBh9pVKRSqmEql6TQ0WNlIzhtYtTfPHIMW4rl/hBO8P0dPqKtk4RvH7QzritXOKLR47x2sUpSsYQNS7YplBopVIqUalUJMboq9Ygwj0mwvuMCCFGqn0VEmvRK7nG3p50w6kqr1yYeFNHF7PInv/MKxcmZufBZe313lPQqCTWUu2rEGLEiBDhfU7RDcXDqtVSaRb1ZY5kXuVCkWA4OjkFgNeF9HBl6ZY5OjlFHmOPFVwBTLcbWiwbqqUS3QWNohucwE2hmEhSTkpznmpR8UNJvZ99v3QpyqTed+bAYooUmisnJVRV'+
			'QmEdNzlFk+4zZna5sshKL+/T9ZdZLJBO33oDqaKJE5lXXAtyJ3L1WrvfWAwDlT5g6cvc3jIDlb6CINJdcS4AQ7v/eupR1KHiu6VDjJ34odekilEV64R7160FILkOIN0y965bixUhCwWnWlAxWiQ4QoxziEWCQ2XMCIiIplk6mxCYj3o+riLSRj44sAaAsSwjEcHrtXIoRVknwliWAfDBgTWE7mSf5WYUqr/CAlNVSbMUEdFOIua8QfS4UNhcM02JehVdzHPHAmQhsL6/ypd/bAsNhburfbNtLwRCKZ5tKHz5x7awvr9KFsKby+m81573qkoryxApKK0ox40gR6MqxlhppG1y72dd8GL4jw+RR27fyGN3bOJwo8W9/RVKC5hZSYR7+yscbrR47I5NPHL7Rnzo0cYi2ETuPY20jRhrYmEBR11UPVz3ASPi2mmqrSyTUq'+
			'XSddgLiiD4GKlayxNbPwQou79/AgfcXk6I82zMCJxMcw41Wjx2x0ae2PohqtaSdQLbtdyWdrxVO89pp6laEdvwgWjiqNM17ddlqu8HJWtum8kzrbVasrpS6WTSrzWBixHKQmBNucT//MgDPPTum/jF5w9wPL1K7lmEL3/kfn7uvRupOEtW8KXL5+RVkAhQa7XIvdcV5bKkMZ6xDXfMfexb30/3bB08UBJzmzEmTjXqZv3q1XNDsAgxImQhUjaG/37Xe/mJ9TdzaOIiR6YuMZMWE3pVucTm1Tdy77o13NpfxcdIFuLiQfSAmWo2EJFYMsZkGl7efuhQw3W+/WdFH7XGcqlRJ81zStZxbf8zV7kBgirBe26uVli/cT3bN9w66wVFBCtC0A4bEJljvIuUgm17LtXrOGu1cNTm2wAOIDGyt+6Dd8a4ZprqdKspN61chY9L'+
			'Szx0n81DIFO9LEh2773JzS5SlCKlWm+3aaZtdc4lNR8QY0YAjIJ89IXR/wD291kDQhiv1eYC47UdyWUXHWJ3ucsu7l1Pnd2F3kS9RtAY+4xB0Ve3v3BoFIqtNAsgyjMWsMYyWa/RznNEpGNeP9xLUQxC6nPGazMk1sVEBFGehSJLasYHRrQwi/BMrWNerTTVqWazZ9XW+9p9r/Pam/95Md/pFeqb307xagSmWy0a7ZYaMUk9BBD7DYDxgQEVKHamdkHcs3Xzt/ud++h0mvl3rbrB3XfresLVIv07KN21+pGxc5yemgyrSmXbjOHlh/eN3t99xkCR4AIQ+F8COFuYVz1NsXTt84dzqRZEspXnTNRrJMZFJyCRr0GxYToLZLjYbKTqzD/Ucj+RGOPy4OOFWq0zQRcym7f7KubHRL1OK0ujNZLUfGgHG/4G4NzBg2EWiI'+
			'DuHR52P/rdw1Mi8nSfMSTWhbGZaTKfFwnsHxKS7n7JuZlprLGxYg0K3/r4C0dPfH0ndlcnBTC78zM+MFBMepXdjRCwYlwtbTHZbBZrhB+CVlQVK8J0q8WlVgNnrQRVUPkSwMD48Oz0nc+cjUDcs3Xw//Zbu20mz/2aar/74C23LjV+LYsoYI0wen6MszNTYWVSsu0Qj27fP7p5wT3Ekc6kNyJPKsWO0WSzwaVWC9vVyjukjkIbUE9TxjuTPClyCrsFtDvJrwikO+mT8tq/b4ZwrGzEKTGcmZmhw/vfOYcFgHCuViPzPjpjknoeLjn4a5ib5FcE0kW6bWTEC+YvEhFKxsUL9RlqaYoV5rQyXzvLqa0OCW3nOWO1aRJrQ6XYgf3qT7w4en7v8LDbNS/Pd9k27y8fPOgBVOJf1byfcMYkeQzxXG0G0R7+xLz2539ehkl+'+
			'vl6jlWdqjElqPpCb8CRAl40sCKSrlR37jlxU4UsVI5SsC2P1GZp5NqeVtzkAZt5ztjaDM9b3W4PA33/ihaOjX9+5017pPNdlQDpaKYKMlz+fyUPDiiRtn8cztZmetfXyaeDNV2FWFxoNamlbjYhNY0Sj+QLAwPj4FRnTFYEIxL3Dw277gdFTCF+pWkPJuHC2Nk0rzzu5p7cHSTehcbo2jTEmVK01edSRHS8d+tddMHvobVFAAIZHRiKAWvPHNR+CMZKkPtdzjXpxXOJt0Ep3bky0mkynLZwx4lVB9DMwxwmXBKSrlYefP/Q68JV+a3DG+dMz0zTzgrYst1YE8DFyauYSRoyvGGPTGF/ase/IHu091LAUIDDnHaLq52o+RGskaflcz9Zr2CL5tayT3Iow2WwyVWijA5DPA3QXgAsM/MIyd0Zl8Csrrf1vNR9yKya5/6'+
			'abi41MfXN2cynSLdNb9tXxMS5laVjhrG2F+P937B/9wGLqWlAj0OOzTfxMzQc1hQfTs406QkFbuia21L/ZMh2Xe6HV5GLaIjFGO2cmnugO5rX6uahBnNXKlsHdKxP7SzUfciOS3D9wM2U3p5W3Kq9MnKeWpb7fWdcK8cCO/aMP9PRTFyp7TY3AnFbUmc/WfAhGJEmD1zONWk9uSudee9/3zgXm3WOOHF5oNbiUtjqn6AAtPFVHGwuC6CJdlHTP4O7ZOvjkSmd/teZDLpB8eODdVK0r1vbXeZZLVXll8gK1POvOjZd27B/dolc48nc1WZRGAFbffrCIK7jP1HxoW5EkiyGertfmRuN6PBVwvtXkUtbueCoQ4ffh2p7quoA8+jThqaGh5OH933tD0Cer1pAYG862GtTybC5JsYS4YYAsBk42ZnCduNHy8V+27xt9dtcC'+
			'UfwtAYG5NYAPfHbGh5oTSXwMerLRq5XFXV1tjDWbxUAYI0EVY8zjsHAUf8tAdkF8amgo+fiBI2Oi+oWKNZSM9YVpLD51pJ3MSDt4TjVrOLG+aoxNY/jWf9l36Dtf34ldijaWDATmtGJ963/UfDjvjEmCajzZqMFi3XBHG2eaTZo+VyfYNEai2sfhzUmFxcqSgeyC+PLQUPKTB49PK/qZPiOUjA0X0haTaRtDseOrC1xGhIbPOd2qkxjrq85Krvq1j714aH/vydG3FQjAUGcVWavxZzN5OF4ykggSTjRrhKjI/MX3PLMShVPNBmkomELdhxjgcbjy6u9tA9JdRT565EhmRB93IjgxejFLmUi7GZfu03P9UgWLUPMZZ9tNEmN8vzUg8uQn9o8e3Ts87K7n1zzXDQSg8wMV2b7/yF81Qnilz4ozRsKJVmPugMz8id5xWS'+
			'ebDXyM6kSSmg91nP9DgP/XWQO9o0AA9nb3VoRPATgxTOcZ59utnoxLIarFIYFLWcb5tEXJmOKsFXxux78ePffy0FCyawk/RVpWINtGRvwuMNv3jT7bCvHbVWOsM8afbDVIQ+gcei60IRSn30606iiExEgy4/3ZUp9+HuDZeXmqdxQIzAUuNfK7aYxYMI3gOdsuNoq6nsoijGcpE3lKSUwsGQPI728bOVJ/6i1qA5aHfffQ/Hu+uiIxP1/3ITeQDK1aQ58xs87r1doUtRhCvzG2FePhh/eP3rsc7cMyaATmXKYYHq93aX6MerrdRBSswFja4lLIcVIcJxeV34HFLZoWI8sCpEsot+87/Brok/3WkBjjz2YtGsGTx8gbaZNEjK8aY1shfGfHi4ef2bVEYriQLAsQmKMu5cAfzhFKjafTFqfSFu0Y1DBLRX4b4P07dy7b'+
			'9uSyAdnVIZTbDhwZAz5fEEoTxvKUU2mLkhjf76wE1b/uUpFHn376LXmqXlk2IDCXADdN87m6D2ecSCLFYWwFkroPWR7kU3D9VORqsqxABPTloaFk+6FDDVV9onOSIgr4lc4C+oVPHDh8/KmhoeR6qcjVZFmBwByhnNlw5C9mvD+WiDgRkhkfLpT7kj+CyzdplkOWHcgsoXyaICp/YI3QZwwon9428r1LyxH83mkRgD1bBl/bs3Xw1Pz7yy3LrpGuzBFKfQKV3+3cW1SO6nrkPwHZ1w2h+2jlNgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style[domTransform]=parameterToTransform(me._map_pin_active.ggParameter);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style[domTransform]=parameterToTransform(me._map_pin_active.ggParameter);
				}
			}
		}
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAYAAAAWy4frAAAP30lEQVR4nN2bfYzlV1nHP+f8Xu/bzOy87U53ZrdtcFugFiwhrRKhDcY/uhL5x0b5xxDDHyZq1Eg0DUEgQqRGXpoK0WBM1ShgAikRTa0KVAi02KYYaLsF2i47szs7L3dm7vvv5ZzHP87vzu7s7tw7L3dq4rM5yeTe3z3n+Z7vc56381v1S7/5e/x/EH/UE16auGfeC0sntR/OCzKPyAJoDyWvKtSizdNFk3aXSpWtSxNLL5hRrTsSICuz992tPP9XgAcCpRbcp4ICUAoQ+p9pP0D7AbmM1VfnTn7ZWPP52F/+2mFBqYOa1qWJe+b9Uu13gQcULOycVRF4Hn4QEAZur9IsJ88yMmNAhGuer4vYL0uePzS7+vWXXhMgy9U3VSiN/6H2gj/QSpf6n5dKJW'+
			'qVMrValcDXA+fIjdBqd2i3OzRbre3PrdiuUvozSbv+sfnGM/UjA3Jp/J73+uXahxG7ABAGIccmxqnVqvje9cqLCLb4WwNKqeueMSK0Wh3W1+ukWdr/3ary/I8G6sIjezW5PZ2R82NviMqVm/7Ct/Y3sAalPWanp5gYr+1QOjNCkluMFXIrmGtMyCuARL4m8jSBr9DAWLXMWLXM5laTlbV1EDODyT+VyOwvLlfDB060vtcepuNQRhbH3jIZxtUvKeW9A2BsbJzZmSk87ZQyVuhm1gG41vb3IJGnqUbejvnW1utsbm4CYK35H5slZ+c2v7M4aJ6Bxrwyc++ZMB77Lqh3iFiOz85y/Pg0SiusQCsxrLUz2qkht4II+x693LLWztjq5hgrKK2YmZlibm4OAKXUnV5UfnZl9r67DwTk0sQ982j9TZBblfY4tXCKscKU0lRY'+
			'a6e0UoPASEY3t6x3MjqJOxLVapmF+Xm0F4DYGbT+2sXqXXfsC8hy9U0VHURfReyM9gJuOX2KOI5AoNnN2Uwy7P6taKhYgVZqaHQMCMRxxM2n5omCEKwp+eXxxxbH3jK5ZyCE1b/XYu/0EeZvmsP3fYwV6u2MTmoRy5GObmaotzOMFXzf58TcTSilUTa/NYyrX9o8+XpvKJDlmbd/RCn1bivC9PE5oih0IDoZqbHIa/QvNZZ6x4EJQ5+5uTmsCGLMO9J0+s8GAlmZufeMsvZBgMnpWSrVKlag0cvJzf4Ps6eVc7W+xtNq37/PjbDVzbHiAu7k9CwAYuV3VmbuPXO17jviiDXZx5VSXhxFTE46U+ykhm5m2YtoBZXQudJAa/S1fAtkuZCJpZPuzV33covq5YzFPpOTk3RaLXq9jidKPgmcvY6Rldn77kZ4t1jh2NSMWz'+
			'QTmj2zJ7cTac1UOaQceESeRhe5Ypam9Hrpdt4Y+Ipy4DFZDoh9vae5u6mLUwhMzcwgVpAsv3/5+H2/0Nd/mxHJep8CKJVrlMrOpJqJuS6/u1aUgmrkUwrcnmRZytbGBr0kIU26GJO757RHHEXEcZnK2BhRVKIW+YTa0kjyoes0e4agrImiEqXqGN3WJsraPwfetM3Iyux9dwvcAzA9ewKAJLP0jMXCrkMpmCwF2yCaW1ucf/VlNjbW6HaaO0CINXS7HTY21lg8/zL1+joiEAWa6UqI76mBa6VGtk18enrGbX6e3tkPlD6AFXNWRCiXKwRBiAg0knzwFuGY0FphTc7ypYt02g0ATk/XOPvmBd6wMM0dC1MEnuaFpTrPL23wn99f5Lnza9RXL9FtbDFz0zxBEFILfda72cD1WklO7IcEQUipVKbTaWOSzq8CT3ln3vqz'+
			'NLyZzyqlpmvHpimVyiTG0E0HH/DY96hGzp0vL52n026CUrznbWf4+Ht+jre+7gTzU1VC38P3NCcmKvz0qSne9ZZbqJUCvvvKOmnao91qMj4+ged5gJDlu68r4s6YrzVWhE6rgVhzrJZefERfrN51h9LebQDVag1rhV5uEVG7DoBKrLFW2Nqq02m3UFrzyHvfzu+ffTNRcF282hal4D1vO8Pnf+ud1OKAPEtZX13FWqHse2i1+7oiil5u3bPlqptPe7ddrN51h0bkLCJEUYznBQB0E8HK7qMceGhRGJOxvnIJRPj1nz/DPT91YiCLV8vNs2O8/10/AyJsbaySJi5Tr4X+wLW7ifMKnhcQRXE/6JzVyg9PAHhRGYDcuh8MkqAIEJvrq4gx3DxT433v3DWf21Xuv+sW7r3dga+vrADge9cXX1eLFSEtEr0odjoL3KKV59'+
			'8sYomL2tra4RG3v1jS6yBiefdbbx1oToPk197+ekQs3Z5jRCsK89p9/X7Z6fs+IhZgQdu05xoHngOS2cGH3NMKrVymmvS6ANxxavpAIABuu8llEGINed5zCg7Zk20dC52V0sc1yEmsJfB8rEC/ybF7/uRA5GkbKeLE60/eMLPek1TjgPnJClhLt9vFijPdQToY43QIPN+ZEHJSi7UVB8u5NCMgIrsOjXsuz1wBVAnUgc2qLxPlCACbZVgRtBqsgxF3VlDurIq1Fa08/6KIkOWug+GpwalPn9aoVEJEaPVyXl1pHBiECJy7tIWIEBQOp5fbgTpozx32LE8REZTnX9RizY8VgkkdkGEHrR+wRPmEYYhCeH5x/cBAzq82yNIEhRDFjplsSMngiWPCpCkKQaz5sQYuWCtkeYa1MKS35s5HLlgLQVTBWuGpc0sHBvLNF5ew'+
			'VgjCCCM+1rpUf5BoRfFchnWu+IJW8AoIaeI8kC7aMoN2JDVuodLYOCD88zMv88zLl/cNYqne4q/+7TlAKI85h7GXAq7v/p3OgoJXdN7rfBsgaW1hcueFAn+webVSd9BLlWOUx45hreWP/+FJkmzvfWgR+NDn/4tmJyGKS1QnXGBsJ3bg2oFfbLQVktYWAKbXfU6PndDfUlo3wQU4gMgb7IWyXGgXSeWx2dNoz2ep3uZ9n/nXPR38eqvH+x/9Ov/9I8fi1NzNKK1Ic6EzZDPiIsh0O83+lnRsRX/du/O218mmTNytlLpda01cGQcUnXTwhGkuRL7G15qwFNNpbLCy2eKfvv0Sge9xemaMUrizI9vqZTzx3Cv89uf+gxcvrALCsePzxJVjiMBaO0OGpEfjsY8CWvVl0l4LkCdOdZ7/Wx8gqEw8lnebv9xpbTJx/DS+dh'+
			'SmAw6diLDVy5gqB0SlCY7f/EY2l1+m12nx8Fee4uGvPMX89Bi3z89QiXx+cH6FH1/e3FbUCyIm524lLtcQYDNxncZBEvouqxCg03Jzic2/Cv1SV/EEgMkSep0mYalGyfNIssHFVZIJ9W7OROzjBTFTC2+gWV+iub6MWMPiWoPFtZ2mppSiOjHL+Mw8ojysuHPRSYY3OMqhyz7SbhOTJQAE1WNfYbMAMrf5ncXF6I3/Itbe39y8zFSpRhho6DG0lu4mll6aMhH7xKGmNnmS2uRJTNYj6XXIu02sGOJSlSCqbmfZgvNQG13XahomSkFUeKutjWUQi4g81m9uX2k+5OZhtLq/t7WGmTmN5weUIk2nN3ynRGCjm1MzPuXYdVC8IKYcxFC7Pg+zAp2epZkOL6f7UoucqibPSBsuACvhs/3vt4HUTqh/byyb88DpTmOFyrGT'+
			'lLRHW/bW0wJX5zcS0Bpiz8PXirBwl5kVslxIrSE/wG1h5LsbgHb9ImINoM6dMuce73+/Hccnll4wUiBsrju36PvKxRT21H7aHsZCOzNsJTmr7YzVdsZmN6edGbK9tcl2jChUrslhhdamK8BQPHw10B0JiS/qb4DEZl16rfp2WTsoE30tRsX3XJnbvIzNUwQaYRw/uiuQk3JuBcUXAZr1SyCOUq2GpMRHOHxPuZREoF2/XJDB3117HXddiqhEHgHI2ptkRf5VDrz/KxxU+yV42iLvtQCsUvpT1+p9HZAF88OngWcBOlsXHZBQo3De5rUcnlbEoXMWm+suwxZ4YiF/8UdDgQCI4pMA3Y3L26xUo5G/7TFUxqIirU+6V1wu6mM3evaGQMaPe/8I6gewkxWv/zbGazAC74rrbqy96hQT9Y1T5tyTewbiLunlg+BYMVnBSu'+
			'gPrRVGNfpnI+m2yVobFHR88Eb67goE4JR56UsUZ6VZX8SKEIcKT8NRX7uFgSIMXIOhXX/FkQGP78bGQCBuA/SDAGljlayoVWrR0bNSLroySbtJ3nFJp1X80SBdBwJZMC8+DnwLoLP5EwDHirf/aL/XEfqKOHBno7v1k2JH9WO35C89d2AgxSwPAmStjW1WxiP/yA553ztexYb14/IHhmk5FMgpc+5JgccBOhvnMQJB4KLtqONGWOR2RqBTnA3gCze1nv3+oYG4h5wHy9qb5EWtPB6PPq7UijmT5gbGXTNYpfSunmqnjnuQBfPDp1H6MXB2K9blQIGnRpYYxoHC1wqxkGxdcAuLevRGUfzAQAAKO7V5p0Hadn59fITRvl84pe1tNhKlbxzFbyR7BlLY6Rfgyo4FgSL0B3fO9zKiQG833Xob5/tLfm6vbOwLCEBhr9Yk'+
			'bdL2BtYW+dAhD/lY6HKq7tYK1mURSVCb/NP96LYvIAv5iz9C1KNwZed8T1EK9zXNDimFGs9TWISsWfSQRT0y7I25a2XfGgRjxz5IUUXm3Q1EHCsHMSlw50wEsuYqNush0PCEh/ar176BFDv1OXCsCIKnFeVo/6yUQo3WCkFIiyiu4NMn5dzKfuc6kE14Vn2EgpWstYogVIPB18rXDiiYREgay4jJEGjoSu266u/IgJyUcyuIciVx4wJi3d2ia1Tszaxi31WdYiEvzoaCT+/3xeVDAQHQ1erHBBo2T0lbywhQjTxu8I7ydaIUjMU+Au63JgNYCUuljx9Yn4P+cL7xTF3Bp+HKjvqe2hMr5cBDa7AmJ2+4mCTCJ/byovLIgQAUO7giJiNrLQPDWemzAZA1LxddQ1aicumRw+hyKCAnWt9ri/AJgLxxAWtytFJUwt1ZqY'+
			'SuaLImx3ZcPwClPnwYNg4NBKDYyRWxhqzpGmj915+ujeBXf5c1L/XZOC9l768Pq8ehgZxofa+NUh8G3A5LwUp0/fVdLfaKrmWO7ThTRKmHTjeeTw6rx6GBABQ7et6xcgkrQi0qXtDsL6SgErq3JpLNC9tsjB3XfzkKHUYC5HTj+QSlHgKwnWVMnqGuYaUSeSilMHmGdJ0JiuIDo/p/ViMBAuB2Vp0Ta7CtpR0HG9h2ALbVf7lAnXONwNHIyIBMLL1gRMmfAEj3MtYFOWqxRy3ue6orbIA8OMr/9TYyILCz1drf+UroXXG522zwbNEAHJmMFMjVrVbpXkby3nabR/LeVWzw0VGuCyMGAjtbrbZ95WWbq/4eORtwBEDgSquV3ho262CzDvTWdn43YjkSIFe3WqW9iLSLqlXUN4rvRi5HAsSJa7WSbrgBA68FDitHBuTq'+
			'Visw9FrgsHKEjFxptV7791HIkV4MLpgfPv0T//bHABbyF58+yrWO/IbTYD901GsA/C9GVYNNoq0j2AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style[domTransform]=parameterToTransform(me._map_pin_normal.ggParameter);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style[domTransform]=parameterToTransform(me._map_pin_normal.ggParameter);
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
			}
		}
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin.appendChild(me._map_pin_normal);
		el=me._map_pin_tt=document.createElement('div');
		els=me._map_pin_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_pin_tt";
		el.ggDx=0;
		el.ggDy=38;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #5e5e5e;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 3px 1px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._map_pin_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_tt.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_pin_tt.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_pin_tt.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -38;
					me._map_pin_tt.ggUpdatePosition(true);
				}
				else {
					me._map_pin_tt.ggDx=0;
					me._map_pin_tt.ggDy=38;
					me._map_pin_tt.ggUpdatePosition(true);
				}
			}
		}
		me._map_pin_tt.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['map_pin'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_tt.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_tt.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_tt.style.visibility=me._map_pin_tt.ggVisible?'inherit':'hidden';
					me._map_pin_tt.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_tt.style.opacity == 0.0) { me._map_pin_tt.style.visibility="hidden"; } }, 505);
					me._map_pin_tt.style.opacity=0;
				}
			}
		}
		me._map_pin_tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._map_pin.appendChild(me._map_pin_tt);
	};
	function SkinCloner_thumbnail_cloner7_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 125px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_active7=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggDx=6;
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #d1d1d1;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active7.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active7.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active7'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active7.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active7.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active7.style[domTransition]='border-color 0s';
				if (me._thumbnail_active7.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active7.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active7.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active7.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active7.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active7.onclick=function (e) {
			if (
				(
					((me._thumbnail_active7.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active7.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active7']=true;
			me._checkmark_tick7.logicBlock_alpha();
			me._thumbnail_active7.logicBlock_bordercolor();
		}
		me._thumbnail_active7.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active7']=false;
			me._checkmark_tick7.logicBlock_alpha();
			me._thumbnail_active7.logicBlock_bordercolor();
		}
		me._thumbnail_active7.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active7']=false;
			me._checkmark_tick7.logicBlock_alpha();
			me._thumbnail_active7.logicBlock_bordercolor();
		}
		me._thumbnail_active7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._thumbnail_nodeimage7=document.createElement('div');
		els=me._thumbnail_nodeimage7__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='bottom : -27px;';
		hs+='cursor : pointer;';
		hs+='height : 124px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage7.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active7.appendChild(me._thumbnail_nodeimage7);
		el=me._thumbnail_title7=document.createElement('div');
		els=me._thumbnail_title7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100%;';
		hs+='height: 18px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+="padding: 4px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active7.appendChild(me._thumbnail_title7);
		el=me._checkmark_tick7=document.createElement('div');
		els=me._checkmark_tick7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iMTkxcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE5MXB4IiB2aWV3Qm94PSItMy4xMiAtMy4xMiAzMC4yNCAzMC4yNCIgZmlsbD0ibm9uZSI+CiA8ZyBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbn'+
			'NsYXRlKDUuMjc5OTk5OTk5OTk5OTk5LDUuMjc5OTk5OTk5OTk5OTk5KSwgc2NhbGUoMC41NikiIGlkPSJTVkdSZXBvX2JnQ2FycmllciI+CiAgPHBhdGggc3Ryb2tld2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjEyLCAtMy4xMiksIHNjYWxlKDEuODkwMDAwMDAwMDAwMDAwMSkiIGQ9Ik05LjE2Ni4zM2EyLjI1IDIuMjUgMCAwMC0yLjMzMiAwbC01LjI1IDMuMTgyQTIuMjUgMi4yNSAwIDAwLjUgNS40MzZ2NS4xMjhhMi4yNSAyLjI1IDAgMDAxLjA4NCAxLjkyNGw1LjI1IDMuMTgyYTIuMjUgMi4yNSAwIDAwMi4zMzIgMGw1LjI1LTMuMTgyYTIuMjUgMi4yNSAwIDAwMS4wODQtMS45'+
			'MjRWNS40MzZhMi4yNSAyLjI1IDAgMDAtMS4wODQtMS45MjRMOS4xNjYuMzN6IiBmaWxsPSIjZmZmZmZmIi8+CiA8L2c+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjAuMDk2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI0NDQ0NDQyIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYgM0M0LjM0MzE1IDMgMyA0LjM0MzE1IDMgNlYxOEMzIDE5LjY1NjkgNC4zNDMxNSAyMSA2IDIxSDE4QzE5LjY1NjkgMjEgMjEgMTkuNjU2OSAyMSAxOF'+
			'Y2QzIxIDQuMzQzMTUgMTkuNjU2OSAzIDE4IDNINlpNMTcuOCA4LjZDMTguMTMxNCA4LjE1ODE3IDE4LjA0MTggNy41MzEzNyAxNy42IDcuMkMxNy4xNTgyIDYuODY4NjMgMTYuNTMxNCA2Ljk1ODE3IDE2LjIgNy40TDEwLjg5MTggMTQuNDc3Nkw4LjcwNzExIDEyLjI5MjlDOC4zMTY1OCAxMS45MDI0IDcuNjgzNDIgMTEuOTAyNCA3LjI5Mjg5IDEyLjI5MjlDNi45MDIzNyAxMi42ODM0IDYuOTAyMzcgMTMuMzE2NiA3LjI5Mjg5IDEzLjcwNzFMMTAuMjkyOSAxNi43MDcxQzEwLjQ5NzkgMTYuOTEyMSAxMC43ODE3IDE3LjAxOCAxMS4wNzA5IDE2Ljk5NzVDMTEuMzYwMSAxNi45NzY5IDExLjYyNjEg'+
			'MTYuODMxOSAxMS44IDE2LjZMMTcuOCA4LjZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwMDdiZmYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._checkmark_tick7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 27px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick7.ggElementNodeId()) == true)) || 
				((me._checkmark_tick7.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick7.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick7.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick7.style.visibility=(Number(me._checkmark_tick7.style.opacity)>0||!me._checkmark_tick7.style.opacity)?'inherit':'hidden';
					me._checkmark_tick7.ggVisible=true;
				}
				else {
					me._checkmark_tick7.style.visibility="hidden";
					me._checkmark_tick7.ggVisible=false;
				}
			}
		}
		me._checkmark_tick7.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active7'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick7.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick7.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick7.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick7.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick7.style.opacity == 0.0) { me._checkmark_tick7.style.visibility="hidden"; } }, 505);
					me._checkmark_tick7.style.opacity=0;
				}
				else {
					me._checkmark_tick7.style.visibility=me._checkmark_tick7.ggVisible?'inherit':'hidden';
					me._checkmark_tick7.style.opacity=1;
				}
			}
		}
		me._checkmark_tick7.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active7.appendChild(me._checkmark_tick7);
		me.__div.appendChild(me._thumbnail_active7);
	};
	function SkinCloner_thumbnail_cloner6_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 125px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_active6=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggDx=6;
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #d1d1d1;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active6.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active6.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active6'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active6.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active6.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active6.style[domTransition]='border-color 0s';
				if (me._thumbnail_active6.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active6.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active6.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active6.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active6.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active6.onclick=function (e) {
			if (
				(
					((me._thumbnail_active6.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active6.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active6']=true;
			me._checkmark_tick6.logicBlock_alpha();
			me._thumbnail_active6.logicBlock_bordercolor();
		}
		me._thumbnail_active6.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active6']=false;
			me._checkmark_tick6.logicBlock_alpha();
			me._thumbnail_active6.logicBlock_bordercolor();
		}
		me._thumbnail_active6.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active6']=false;
			me._checkmark_tick6.logicBlock_alpha();
			me._thumbnail_active6.logicBlock_bordercolor();
		}
		me._thumbnail_active6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._thumbnail_nodeimage6=document.createElement('div');
		els=me._thumbnail_nodeimage6__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='bottom : -27px;';
		hs+='cursor : pointer;';
		hs+='height : 124px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage6.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active6.appendChild(me._thumbnail_nodeimage6);
		el=me._thumbnail_title6=document.createElement('div');
		els=me._thumbnail_title6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100%;';
		hs+='height: 18px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+="padding: 4px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active6.appendChild(me._thumbnail_title6);
		el=me._checkmark_tick6=document.createElement('div');
		els=me._checkmark_tick6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iMTkxcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE5MXB4IiB2aWV3Qm94PSItMy4xMiAtMy4xMiAzMC4yNCAzMC4yNCIgZmlsbD0ibm9uZSI+CiA8ZyBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbn'+
			'NsYXRlKDUuMjc5OTk5OTk5OTk5OTk5LDUuMjc5OTk5OTk5OTk5OTk5KSwgc2NhbGUoMC41NikiIGlkPSJTVkdSZXBvX2JnQ2FycmllciI+CiAgPHBhdGggc3Ryb2tld2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjEyLCAtMy4xMiksIHNjYWxlKDEuODkwMDAwMDAwMDAwMDAwMSkiIGQ9Ik05LjE2Ni4zM2EyLjI1IDIuMjUgMCAwMC0yLjMzMiAwbC01LjI1IDMuMTgyQTIuMjUgMi4yNSAwIDAwLjUgNS40MzZ2NS4xMjhhMi4yNSAyLjI1IDAgMDAxLjA4NCAxLjkyNGw1LjI1IDMuMTgyYTIuMjUgMi4yNSAwIDAwMi4zMzIgMGw1LjI1LTMuMTgyYTIuMjUgMi4yNSAwIDAwMS4wODQtMS45'+
			'MjRWNS40MzZhMi4yNSAyLjI1IDAgMDAtMS4wODQtMS45MjRMOS4xNjYuMzN6IiBmaWxsPSIjZmZmZmZmIi8+CiA8L2c+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjAuMDk2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI0NDQ0NDQyIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYgM0M0LjM0MzE1IDMgMyA0LjM0MzE1IDMgNlYxOEMzIDE5LjY1NjkgNC4zNDMxNSAyMSA2IDIxSDE4QzE5LjY1NjkgMjEgMjEgMTkuNjU2OSAyMSAxOF'+
			'Y2QzIxIDQuMzQzMTUgMTkuNjU2OSAzIDE4IDNINlpNMTcuOCA4LjZDMTguMTMxNCA4LjE1ODE3IDE4LjA0MTggNy41MzEzNyAxNy42IDcuMkMxNy4xNTgyIDYuODY4NjMgMTYuNTMxNCA2Ljk1ODE3IDE2LjIgNy40TDEwLjg5MTggMTQuNDc3Nkw4LjcwNzExIDEyLjI5MjlDOC4zMTY1OCAxMS45MDI0IDcuNjgzNDIgMTEuOTAyNCA3LjI5Mjg5IDEyLjI5MjlDNi45MDIzNyAxMi42ODM0IDYuOTAyMzcgMTMuMzE2NiA3LjI5Mjg5IDEzLjcwNzFMMTAuMjkyOSAxNi43MDcxQzEwLjQ5NzkgMTYuOTEyMSAxMC43ODE3IDE3LjAxOCAxMS4wNzA5IDE2Ljk5NzVDMTEuMzYwMSAxNi45NzY5IDExLjYyNjEg'+
			'MTYuODMxOSAxMS44IDE2LjZMMTcuOCA4LjZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwMDdiZmYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._checkmark_tick6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 27px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick6.ggElementNodeId()) == true)) || 
				((me._checkmark_tick6.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick6.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick6.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick6.style.visibility=(Number(me._checkmark_tick6.style.opacity)>0||!me._checkmark_tick6.style.opacity)?'inherit':'hidden';
					me._checkmark_tick6.ggVisible=true;
				}
				else {
					me._checkmark_tick6.style.visibility="hidden";
					me._checkmark_tick6.ggVisible=false;
				}
			}
		}
		me._checkmark_tick6.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active6'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick6.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick6.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick6.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick6.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick6.style.opacity == 0.0) { me._checkmark_tick6.style.visibility="hidden"; } }, 505);
					me._checkmark_tick6.style.opacity=0;
				}
				else {
					me._checkmark_tick6.style.visibility=me._checkmark_tick6.ggVisible?'inherit':'hidden';
					me._checkmark_tick6.style.opacity=1;
				}
			}
		}
		me._checkmark_tick6.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active6.appendChild(me._checkmark_tick6);
		me.__div.appendChild(me._thumbnail_active6);
	};
	function SkinCloner_thumbnail_cloner5_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 125px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_active5=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggDx=6;
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #d1d1d1;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active5.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active5.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active5'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active5.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active5.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active5.style[domTransition]='border-color 0s';
				if (me._thumbnail_active5.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active5.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active5.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active5.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active5.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active5.onclick=function (e) {
			if (
				(
					((me._thumbnail_active5.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active5.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active5']=true;
			me._checkmark_tick5.logicBlock_alpha();
			me._thumbnail_active5.logicBlock_bordercolor();
		}
		me._thumbnail_active5.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active5']=false;
			me._checkmark_tick5.logicBlock_alpha();
			me._thumbnail_active5.logicBlock_bordercolor();
		}
		me._thumbnail_active5.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active5']=false;
			me._checkmark_tick5.logicBlock_alpha();
			me._thumbnail_active5.logicBlock_bordercolor();
		}
		me._thumbnail_active5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._thumbnail_nodeimage5=document.createElement('div');
		els=me._thumbnail_nodeimage5__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='bottom : -27px;';
		hs+='cursor : pointer;';
		hs+='height : 124px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage5.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active5.appendChild(me._thumbnail_nodeimage5);
		el=me._thumbnail_title5=document.createElement('div');
		els=me._thumbnail_title5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100%;';
		hs+='height: 18px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+="padding: 4px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active5.appendChild(me._thumbnail_title5);
		el=me._checkmark_tick5=document.createElement('div');
		els=me._checkmark_tick5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iMTkxcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE5MXB4IiB2aWV3Qm94PSItMy4xMiAtMy4xMiAzMC4yNCAzMC4yNCIgZmlsbD0ibm9uZSI+CiA8ZyBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbn'+
			'NsYXRlKDUuMjc5OTk5OTk5OTk5OTk5LDUuMjc5OTk5OTk5OTk5OTk5KSwgc2NhbGUoMC41NikiIGlkPSJTVkdSZXBvX2JnQ2FycmllciI+CiAgPHBhdGggc3Ryb2tld2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjEyLCAtMy4xMiksIHNjYWxlKDEuODkwMDAwMDAwMDAwMDAwMSkiIGQ9Ik05LjE2Ni4zM2EyLjI1IDIuMjUgMCAwMC0yLjMzMiAwbC01LjI1IDMuMTgyQTIuMjUgMi4yNSAwIDAwLjUgNS40MzZ2NS4xMjhhMi4yNSAyLjI1IDAgMDAxLjA4NCAxLjkyNGw1LjI1IDMuMTgyYTIuMjUgMi4yNSAwIDAwMi4zMzIgMGw1LjI1LTMuMTgyYTIuMjUgMi4yNSAwIDAwMS4wODQtMS45'+
			'MjRWNS40MzZhMi4yNSAyLjI1IDAgMDAtMS4wODQtMS45MjRMOS4xNjYuMzN6IiBmaWxsPSIjZmZmZmZmIi8+CiA8L2c+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjAuMDk2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI0NDQ0NDQyIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYgM0M0LjM0MzE1IDMgMyA0LjM0MzE1IDMgNlYxOEMzIDE5LjY1NjkgNC4zNDMxNSAyMSA2IDIxSDE4QzE5LjY1NjkgMjEgMjEgMTkuNjU2OSAyMSAxOF'+
			'Y2QzIxIDQuMzQzMTUgMTkuNjU2OSAzIDE4IDNINlpNMTcuOCA4LjZDMTguMTMxNCA4LjE1ODE3IDE4LjA0MTggNy41MzEzNyAxNy42IDcuMkMxNy4xNTgyIDYuODY4NjMgMTYuNTMxNCA2Ljk1ODE3IDE2LjIgNy40TDEwLjg5MTggMTQuNDc3Nkw4LjcwNzExIDEyLjI5MjlDOC4zMTY1OCAxMS45MDI0IDcuNjgzNDIgMTEuOTAyNCA3LjI5Mjg5IDEyLjI5MjlDNi45MDIzNyAxMi42ODM0IDYuOTAyMzcgMTMuMzE2NiA3LjI5Mjg5IDEzLjcwNzFMMTAuMjkyOSAxNi43MDcxQzEwLjQ5NzkgMTYuOTEyMSAxMC43ODE3IDE3LjAxOCAxMS4wNzA5IDE2Ljk5NzVDMTEuMzYwMSAxNi45NzY5IDExLjYyNjEg'+
			'MTYuODMxOSAxMS44IDE2LjZMMTcuOCA4LjZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwMDdiZmYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._checkmark_tick5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 27px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick5.ggElementNodeId()) == true)) || 
				((me._checkmark_tick5.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick5.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick5.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick5.style.visibility=(Number(me._checkmark_tick5.style.opacity)>0||!me._checkmark_tick5.style.opacity)?'inherit':'hidden';
					me._checkmark_tick5.ggVisible=true;
				}
				else {
					me._checkmark_tick5.style.visibility="hidden";
					me._checkmark_tick5.ggVisible=false;
				}
			}
		}
		me._checkmark_tick5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active5'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick5.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick5.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick5.style.opacity == 0.0) { me._checkmark_tick5.style.visibility="hidden"; } }, 505);
					me._checkmark_tick5.style.opacity=0;
				}
				else {
					me._checkmark_tick5.style.visibility=me._checkmark_tick5.ggVisible?'inherit':'hidden';
					me._checkmark_tick5.style.opacity=1;
				}
			}
		}
		me._checkmark_tick5.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active5.appendChild(me._checkmark_tick5);
		me.__div.appendChild(me._thumbnail_active5);
	};
	function SkinCloner_thumbnail_cloner4_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 125px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_active4=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggDx=6;
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #d1d1d1;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active4.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active4.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active4'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active4.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active4.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active4.style[domTransition]='border-color 0s';
				if (me._thumbnail_active4.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active4.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active4.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active4.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active4.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active4.onclick=function (e) {
			if (
				(
					((me._thumbnail_active4.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active4.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active4']=true;
			me._checkmark_tick4.logicBlock_alpha();
			me._thumbnail_active4.logicBlock_bordercolor();
		}
		me._thumbnail_active4.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active4']=false;
			me._checkmark_tick4.logicBlock_alpha();
			me._thumbnail_active4.logicBlock_bordercolor();
		}
		me._thumbnail_active4.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active4']=false;
			me._checkmark_tick4.logicBlock_alpha();
			me._thumbnail_active4.logicBlock_bordercolor();
		}
		me._thumbnail_active4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._thumbnail_nodeimage4=document.createElement('div');
		els=me._thumbnail_nodeimage4__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='bottom : -27px;';
		hs+='cursor : pointer;';
		hs+='height : 124px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage4.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active4.appendChild(me._thumbnail_nodeimage4);
		el=me._thumbnail_title4=document.createElement('div');
		els=me._thumbnail_title4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100%;';
		hs+='height: 18px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+="padding: 4px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active4.appendChild(me._thumbnail_title4);
		el=me._checkmark_tick4=document.createElement('div');
		els=me._checkmark_tick4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iMTkxcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE5MXB4IiB2aWV3Qm94PSItMy4xMiAtMy4xMiAzMC4yNCAzMC4yNCIgZmlsbD0ibm9uZSI+CiA8ZyBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbn'+
			'NsYXRlKDUuMjc5OTk5OTk5OTk5OTk5LDUuMjc5OTk5OTk5OTk5OTk5KSwgc2NhbGUoMC41NikiIGlkPSJTVkdSZXBvX2JnQ2FycmllciI+CiAgPHBhdGggc3Ryb2tld2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjEyLCAtMy4xMiksIHNjYWxlKDEuODkwMDAwMDAwMDAwMDAwMSkiIGQ9Ik05LjE2Ni4zM2EyLjI1IDIuMjUgMCAwMC0yLjMzMiAwbC01LjI1IDMuMTgyQTIuMjUgMi4yNSAwIDAwLjUgNS40MzZ2NS4xMjhhMi4yNSAyLjI1IDAgMDAxLjA4NCAxLjkyNGw1LjI1IDMuMTgyYTIuMjUgMi4yNSAwIDAwMi4zMzIgMGw1LjI1LTMuMTgyYTIuMjUgMi4yNSAwIDAwMS4wODQtMS45'+
			'MjRWNS40MzZhMi4yNSAyLjI1IDAgMDAtMS4wODQtMS45MjRMOS4xNjYuMzN6IiBmaWxsPSIjZmZmZmZmIi8+CiA8L2c+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjAuMDk2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI0NDQ0NDQyIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYgM0M0LjM0MzE1IDMgMyA0LjM0MzE1IDMgNlYxOEMzIDE5LjY1NjkgNC4zNDMxNSAyMSA2IDIxSDE4QzE5LjY1NjkgMjEgMjEgMTkuNjU2OSAyMSAxOF'+
			'Y2QzIxIDQuMzQzMTUgMTkuNjU2OSAzIDE4IDNINlpNMTcuOCA4LjZDMTguMTMxNCA4LjE1ODE3IDE4LjA0MTggNy41MzEzNyAxNy42IDcuMkMxNy4xNTgyIDYuODY4NjMgMTYuNTMxNCA2Ljk1ODE3IDE2LjIgNy40TDEwLjg5MTggMTQuNDc3Nkw4LjcwNzExIDEyLjI5MjlDOC4zMTY1OCAxMS45MDI0IDcuNjgzNDIgMTEuOTAyNCA3LjI5Mjg5IDEyLjI5MjlDNi45MDIzNyAxMi42ODM0IDYuOTAyMzcgMTMuMzE2NiA3LjI5Mjg5IDEzLjcwNzFMMTAuMjkyOSAxNi43MDcxQzEwLjQ5NzkgMTYuOTEyMSAxMC43ODE3IDE3LjAxOCAxMS4wNzA5IDE2Ljk5NzVDMTEuMzYwMSAxNi45NzY5IDExLjYyNjEg'+
			'MTYuODMxOSAxMS44IDE2LjZMMTcuOCA4LjZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwMDdiZmYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._checkmark_tick4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 27px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick4.ggElementNodeId()) == true)) || 
				((me._checkmark_tick4.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick4.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick4.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick4.style.visibility=(Number(me._checkmark_tick4.style.opacity)>0||!me._checkmark_tick4.style.opacity)?'inherit':'hidden';
					me._checkmark_tick4.ggVisible=true;
				}
				else {
					me._checkmark_tick4.style.visibility="hidden";
					me._checkmark_tick4.ggVisible=false;
				}
			}
		}
		me._checkmark_tick4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active4'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick4.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick4.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick4.style.opacity == 0.0) { me._checkmark_tick4.style.visibility="hidden"; } }, 505);
					me._checkmark_tick4.style.opacity=0;
				}
				else {
					me._checkmark_tick4.style.visibility=me._checkmark_tick4.ggVisible?'inherit':'hidden';
					me._checkmark_tick4.style.opacity=1;
				}
			}
		}
		me._checkmark_tick4.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active4.appendChild(me._checkmark_tick4);
		me.__div.appendChild(me._thumbnail_active4);
	};
	function SkinCloner_thumbnail_cloner3_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 125px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_active3=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggDx=6;
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #d1d1d1;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active3.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active3.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active3'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active3.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active3.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active3.style[domTransition]='border-color 0s';
				if (me._thumbnail_active3.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active3.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active3.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active3.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active3.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active3.onclick=function (e) {
			if (
				(
					((me._thumbnail_active3.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active3.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active3']=true;
			me._checkmark_tick3.logicBlock_alpha();
			me._thumbnail_active3.logicBlock_bordercolor();
		}
		me._thumbnail_active3.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active3']=false;
			me._checkmark_tick3.logicBlock_alpha();
			me._thumbnail_active3.logicBlock_bordercolor();
		}
		me._thumbnail_active3.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active3']=false;
			me._checkmark_tick3.logicBlock_alpha();
			me._thumbnail_active3.logicBlock_bordercolor();
		}
		me._thumbnail_active3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._thumbnail_nodeimage3=document.createElement('div');
		els=me._thumbnail_nodeimage3__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='bottom : -27px;';
		hs+='cursor : pointer;';
		hs+='height : 124px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active3.appendChild(me._thumbnail_nodeimage3);
		el=me._thumbnail_title3=document.createElement('div');
		els=me._thumbnail_title3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100%;';
		hs+='height: 18px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+="padding: 4px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active3.appendChild(me._thumbnail_title3);
		el=me._checkmark_tick3=document.createElement('div');
		els=me._checkmark_tick3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iMTkxcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE5MXB4IiB2aWV3Qm94PSItMy4xMiAtMy4xMiAzMC4yNCAzMC4yNCIgZmlsbD0ibm9uZSI+CiA8ZyBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbn'+
			'NsYXRlKDUuMjc5OTk5OTk5OTk5OTk5LDUuMjc5OTk5OTk5OTk5OTk5KSwgc2NhbGUoMC41NikiIGlkPSJTVkdSZXBvX2JnQ2FycmllciI+CiAgPHBhdGggc3Ryb2tld2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjEyLCAtMy4xMiksIHNjYWxlKDEuODkwMDAwMDAwMDAwMDAwMSkiIGQ9Ik05LjE2Ni4zM2EyLjI1IDIuMjUgMCAwMC0yLjMzMiAwbC01LjI1IDMuMTgyQTIuMjUgMi4yNSAwIDAwLjUgNS40MzZ2NS4xMjhhMi4yNSAyLjI1IDAgMDAxLjA4NCAxLjkyNGw1LjI1IDMuMTgyYTIuMjUgMi4yNSAwIDAwMi4zMzIgMGw1LjI1LTMuMTgyYTIuMjUgMi4yNSAwIDAwMS4wODQtMS45'+
			'MjRWNS40MzZhMi4yNSAyLjI1IDAgMDAtMS4wODQtMS45MjRMOS4xNjYuMzN6IiBmaWxsPSIjZmZmZmZmIi8+CiA8L2c+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjAuMDk2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI0NDQ0NDQyIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYgM0M0LjM0MzE1IDMgMyA0LjM0MzE1IDMgNlYxOEMzIDE5LjY1NjkgNC4zNDMxNSAyMSA2IDIxSDE4QzE5LjY1NjkgMjEgMjEgMTkuNjU2OSAyMSAxOF'+
			'Y2QzIxIDQuMzQzMTUgMTkuNjU2OSAzIDE4IDNINlpNMTcuOCA4LjZDMTguMTMxNCA4LjE1ODE3IDE4LjA0MTggNy41MzEzNyAxNy42IDcuMkMxNy4xNTgyIDYuODY4NjMgMTYuNTMxNCA2Ljk1ODE3IDE2LjIgNy40TDEwLjg5MTggMTQuNDc3Nkw4LjcwNzExIDEyLjI5MjlDOC4zMTY1OCAxMS45MDI0IDcuNjgzNDIgMTEuOTAyNCA3LjI5Mjg5IDEyLjI5MjlDNi45MDIzNyAxMi42ODM0IDYuOTAyMzcgMTMuMzE2NiA3LjI5Mjg5IDEzLjcwNzFMMTAuMjkyOSAxNi43MDcxQzEwLjQ5NzkgMTYuOTEyMSAxMC43ODE3IDE3LjAxOCAxMS4wNzA5IDE2Ljk5NzVDMTEuMzYwMSAxNi45NzY5IDExLjYyNjEg'+
			'MTYuODMxOSAxMS44IDE2LjZMMTcuOCA4LjZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwMDdiZmYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._checkmark_tick3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 27px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick3.ggElementNodeId()) == true)) || 
				((me._checkmark_tick3.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick3.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick3.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick3.style.visibility=(Number(me._checkmark_tick3.style.opacity)>0||!me._checkmark_tick3.style.opacity)?'inherit':'hidden';
					me._checkmark_tick3.ggVisible=true;
				}
				else {
					me._checkmark_tick3.style.visibility="hidden";
					me._checkmark_tick3.ggVisible=false;
				}
			}
		}
		me._checkmark_tick3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active3'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick3.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick3.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick3.style.opacity == 0.0) { me._checkmark_tick3.style.visibility="hidden"; } }, 505);
					me._checkmark_tick3.style.opacity=0;
				}
				else {
					me._checkmark_tick3.style.visibility=me._checkmark_tick3.ggVisible?'inherit':'hidden';
					me._checkmark_tick3.style.opacity=1;
				}
			}
		}
		me._checkmark_tick3.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active3.appendChild(me._checkmark_tick3);
		me.__div.appendChild(me._thumbnail_active3);
	};
	function SkinCloner_thumbnail_cloner2_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 125px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_active2=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggDx=6;
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #d1d1d1;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active2.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active2.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active2'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active2.style[domTransition]='border-color 0s';
				if (me._thumbnail_active2.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active2.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active2.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active2.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active2.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active2.onclick=function (e) {
			if (
				(
					((me._thumbnail_active2.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active2.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active2']=true;
			me._checkmark_tick2.logicBlock_alpha();
			me._thumbnail_active2.logicBlock_bordercolor();
		}
		me._thumbnail_active2.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active2']=false;
			me._checkmark_tick2.logicBlock_alpha();
			me._thumbnail_active2.logicBlock_bordercolor();
		}
		me._thumbnail_active2.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active2']=false;
			me._checkmark_tick2.logicBlock_alpha();
			me._thumbnail_active2.logicBlock_bordercolor();
		}
		me._thumbnail_active2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._thumbnail_nodeimage2=document.createElement('div');
		els=me._thumbnail_nodeimage2__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='bottom : -27px;';
		hs+='cursor : pointer;';
		hs+='height : 124px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active2.appendChild(me._thumbnail_nodeimage2);
		el=me._thumbnail_title2=document.createElement('div');
		els=me._thumbnail_title2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100%;';
		hs+='height: 18px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+="padding: 4px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active2.appendChild(me._thumbnail_title2);
		el=me._checkmark_tick2=document.createElement('div');
		els=me._checkmark_tick2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iMTkxcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE5MXB4IiB2aWV3Qm94PSItMy4xMiAtMy4xMiAzMC4yNCAzMC4yNCIgZmlsbD0ibm9uZSI+CiA8ZyBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbn'+
			'NsYXRlKDUuMjc5OTk5OTk5OTk5OTk5LDUuMjc5OTk5OTk5OTk5OTk5KSwgc2NhbGUoMC41NikiIGlkPSJTVkdSZXBvX2JnQ2FycmllciI+CiAgPHBhdGggc3Ryb2tld2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjEyLCAtMy4xMiksIHNjYWxlKDEuODkwMDAwMDAwMDAwMDAwMSkiIGQ9Ik05LjE2Ni4zM2EyLjI1IDIuMjUgMCAwMC0yLjMzMiAwbC01LjI1IDMuMTgyQTIuMjUgMi4yNSAwIDAwLjUgNS40MzZ2NS4xMjhhMi4yNSAyLjI1IDAgMDAxLjA4NCAxLjkyNGw1LjI1IDMuMTgyYTIuMjUgMi4yNSAwIDAwMi4zMzIgMGw1LjI1LTMuMTgyYTIuMjUgMi4yNSAwIDAwMS4wODQtMS45'+
			'MjRWNS40MzZhMi4yNSAyLjI1IDAgMDAtMS4wODQtMS45MjRMOS4xNjYuMzN6IiBmaWxsPSIjZmZmZmZmIi8+CiA8L2c+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjAuMDk2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI0NDQ0NDQyIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYgM0M0LjM0MzE1IDMgMyA0LjM0MzE1IDMgNlYxOEMzIDE5LjY1NjkgNC4zNDMxNSAyMSA2IDIxSDE4QzE5LjY1NjkgMjEgMjEgMTkuNjU2OSAyMSAxOF'+
			'Y2QzIxIDQuMzQzMTUgMTkuNjU2OSAzIDE4IDNINlpNMTcuOCA4LjZDMTguMTMxNCA4LjE1ODE3IDE4LjA0MTggNy41MzEzNyAxNy42IDcuMkMxNy4xNTgyIDYuODY4NjMgMTYuNTMxNCA2Ljk1ODE3IDE2LjIgNy40TDEwLjg5MTggMTQuNDc3Nkw4LjcwNzExIDEyLjI5MjlDOC4zMTY1OCAxMS45MDI0IDcuNjgzNDIgMTEuOTAyNCA3LjI5Mjg5IDEyLjI5MjlDNi45MDIzNyAxMi42ODM0IDYuOTAyMzcgMTMuMzE2NiA3LjI5Mjg5IDEzLjcwNzFMMTAuMjkyOSAxNi43MDcxQzEwLjQ5NzkgMTYuOTEyMSAxMC43ODE3IDE3LjAxOCAxMS4wNzA5IDE2Ljk5NzVDMTEuMzYwMSAxNi45NzY5IDExLjYyNjEg'+
			'MTYuODMxOSAxMS44IDE2LjZMMTcuOCA4LjZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwMDdiZmYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._checkmark_tick2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 27px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick2.ggElementNodeId()) == true)) || 
				((me._checkmark_tick2.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick2.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick2.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick2.style.visibility=(Number(me._checkmark_tick2.style.opacity)>0||!me._checkmark_tick2.style.opacity)?'inherit':'hidden';
					me._checkmark_tick2.ggVisible=true;
				}
				else {
					me._checkmark_tick2.style.visibility="hidden";
					me._checkmark_tick2.ggVisible=false;
				}
			}
		}
		me._checkmark_tick2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active2'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick2.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick2.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick2.style.opacity == 0.0) { me._checkmark_tick2.style.visibility="hidden"; } }, 505);
					me._checkmark_tick2.style.opacity=0;
				}
				else {
					me._checkmark_tick2.style.visibility=me._checkmark_tick2.ggVisible?'inherit':'hidden';
					me._checkmark_tick2.style.opacity=1;
				}
			}
		}
		me._checkmark_tick2.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active2.appendChild(me._checkmark_tick2);
		me.__div.appendChild(me._thumbnail_active2);
	};
	function SkinCloner_thumbnail_cloner1_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 125px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_active1=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggDx=6;
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #d1d1d1;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active1.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active1'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active1.style[domTransition]='border-color 0s';
				if (me._thumbnail_active1.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active1.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active1.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active1.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active1.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active1.onclick=function (e) {
			if (
				(
					((me._thumbnail_active1.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active1.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active1']=true;
			me._checkmark_tick1.logicBlock_alpha();
			me._thumbnail_active1.logicBlock_bordercolor();
		}
		me._thumbnail_active1.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active1']=false;
			me._checkmark_tick1.logicBlock_alpha();
			me._thumbnail_active1.logicBlock_bordercolor();
		}
		me._thumbnail_active1.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active1']=false;
			me._checkmark_tick1.logicBlock_alpha();
			me._thumbnail_active1.logicBlock_bordercolor();
		}
		me._thumbnail_active1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._thumbnail_nodeimage1=document.createElement('div');
		els=me._thumbnail_nodeimage1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='bottom : -27px;';
		hs+='cursor : pointer;';
		hs+='height : 124px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active1.appendChild(me._thumbnail_nodeimage1);
		el=me._thumbnail_title1=document.createElement('div');
		els=me._thumbnail_title1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100%;';
		hs+='height: 18px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+="padding: 4px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active1.appendChild(me._thumbnail_title1);
		el=me._checkmark_tick1=document.createElement('div');
		els=me._checkmark_tick1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iMTkxcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE5MXB4IiB2aWV3Qm94PSItMy4xMiAtMy4xMiAzMC4yNCAzMC4yNCIgZmlsbD0ibm9uZSI+CiA8ZyBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbn'+
			'NsYXRlKDUuMjc5OTk5OTk5OTk5OTk5LDUuMjc5OTk5OTk5OTk5OTk5KSwgc2NhbGUoMC41NikiIGlkPSJTVkdSZXBvX2JnQ2FycmllciI+CiAgPHBhdGggc3Ryb2tld2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjEyLCAtMy4xMiksIHNjYWxlKDEuODkwMDAwMDAwMDAwMDAwMSkiIGQ9Ik05LjE2Ni4zM2EyLjI1IDIuMjUgMCAwMC0yLjMzMiAwbC01LjI1IDMuMTgyQTIuMjUgMi4yNSAwIDAwLjUgNS40MzZ2NS4xMjhhMi4yNSAyLjI1IDAgMDAxLjA4NCAxLjkyNGw1LjI1IDMuMTgyYTIuMjUgMi4yNSAwIDAwMi4zMzIgMGw1LjI1LTMuMTgyYTIuMjUgMi4yNSAwIDAwMS4wODQtMS45'+
			'MjRWNS40MzZhMi4yNSAyLjI1IDAgMDAtMS4wODQtMS45MjRMOS4xNjYuMzN6IiBmaWxsPSIjZmZmZmZmIi8+CiA8L2c+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjAuMDk2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI0NDQ0NDQyIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYgM0M0LjM0MzE1IDMgMyA0LjM0MzE1IDMgNlYxOEMzIDE5LjY1NjkgNC4zNDMxNSAyMSA2IDIxSDE4QzE5LjY1NjkgMjEgMjEgMTkuNjU2OSAyMSAxOF'+
			'Y2QzIxIDQuMzQzMTUgMTkuNjU2OSAzIDE4IDNINlpNMTcuOCA4LjZDMTguMTMxNCA4LjE1ODE3IDE4LjA0MTggNy41MzEzNyAxNy42IDcuMkMxNy4xNTgyIDYuODY4NjMgMTYuNTMxNCA2Ljk1ODE3IDE2LjIgNy40TDEwLjg5MTggMTQuNDc3Nkw4LjcwNzExIDEyLjI5MjlDOC4zMTY1OCAxMS45MDI0IDcuNjgzNDIgMTEuOTAyNCA3LjI5Mjg5IDEyLjI5MjlDNi45MDIzNyAxMi42ODM0IDYuOTAyMzcgMTMuMzE2NiA3LjI5Mjg5IDEzLjcwNzFMMTAuMjkyOSAxNi43MDcxQzEwLjQ5NzkgMTYuOTEyMSAxMC43ODE3IDE3LjAxOCAxMS4wNzA5IDE2Ljk5NzVDMTEuMzYwMSAxNi45NzY5IDExLjYyNjEg'+
			'MTYuODMxOSAxMS44IDE2LjZMMTcuOCA4LjZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwMDdiZmYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._checkmark_tick1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 27px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick1.ggElementNodeId()) == true)) || 
				((me._checkmark_tick1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick1.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick1.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick1.style.visibility=(Number(me._checkmark_tick1.style.opacity)>0||!me._checkmark_tick1.style.opacity)?'inherit':'hidden';
					me._checkmark_tick1.ggVisible=true;
				}
				else {
					me._checkmark_tick1.style.visibility="hidden";
					me._checkmark_tick1.ggVisible=false;
				}
			}
		}
		me._checkmark_tick1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active1'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick1.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick1.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick1.style.opacity == 0.0) { me._checkmark_tick1.style.visibility="hidden"; } }, 505);
					me._checkmark_tick1.style.opacity=0;
				}
				else {
					me._checkmark_tick1.style.visibility=me._checkmark_tick1.ggVisible?'inherit':'hidden';
					me._checkmark_tick1.style.opacity=1;
				}
			}
		}
		me._checkmark_tick1.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active1.appendChild(me._checkmark_tick1);
		me.__div.appendChild(me._thumbnail_active1);
	};
	function SkinCloner_thumbnail_cloner0_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 125px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_active0=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggDx=6;
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #d1d1d1;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active0.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active0.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active0'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active0.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active0.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active0.style[domTransition]='border-color 0s';
				if (me._thumbnail_active0.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active0.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active0.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active0.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active0.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active0.onclick=function (e) {
			if (
				(
					((me._thumbnail_active0.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active0.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active0']=true;
			me._checkmark_tick0.logicBlock_alpha();
			me._thumbnail_active0.logicBlock_bordercolor();
		}
		me._thumbnail_active0.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active0']=false;
			me._checkmark_tick0.logicBlock_alpha();
			me._thumbnail_active0.logicBlock_bordercolor();
		}
		me._thumbnail_active0.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active0']=false;
			me._checkmark_tick0.logicBlock_alpha();
			me._thumbnail_active0.logicBlock_bordercolor();
		}
		me._thumbnail_active0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._thumbnail_nodeimage0=document.createElement('div');
		els=me._thumbnail_nodeimage0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='bottom : -27px;';
		hs+='cursor : pointer;';
		hs+='height : 124px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active0.appendChild(me._thumbnail_nodeimage0);
		el=me._thumbnail_title0=document.createElement('div');
		els=me._thumbnail_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100%;';
		hs+='height: 18px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+="padding: 4px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active0.appendChild(me._thumbnail_title0);
		el=me._checkmark_tick0=document.createElement('div');
		els=me._checkmark_tick0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iMTkxcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE5MXB4IiB2aWV3Qm94PSItMy4xMiAtMy4xMiAzMC4yNCAzMC4yNCIgZmlsbD0ibm9uZSI+CiA8ZyBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbn'+
			'NsYXRlKDUuMjc5OTk5OTk5OTk5OTk5LDUuMjc5OTk5OTk5OTk5OTk5KSwgc2NhbGUoMC41NikiIGlkPSJTVkdSZXBvX2JnQ2FycmllciI+CiAgPHBhdGggc3Ryb2tld2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjEyLCAtMy4xMiksIHNjYWxlKDEuODkwMDAwMDAwMDAwMDAwMSkiIGQ9Ik05LjE2Ni4zM2EyLjI1IDIuMjUgMCAwMC0yLjMzMiAwbC01LjI1IDMuMTgyQTIuMjUgMi4yNSAwIDAwLjUgNS40MzZ2NS4xMjhhMi4yNSAyLjI1IDAgMDAxLjA4NCAxLjkyNGw1LjI1IDMuMTgyYTIuMjUgMi4yNSAwIDAwMi4zMzIgMGw1LjI1LTMuMTgyYTIuMjUgMi4yNSAwIDAwMS4wODQtMS45'+
			'MjRWNS40MzZhMi4yNSAyLjI1IDAgMDAtMS4wODQtMS45MjRMOS4xNjYuMzN6IiBmaWxsPSIjZmZmZmZmIi8+CiA8L2c+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjAuMDk2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI0NDQ0NDQyIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYgM0M0LjM0MzE1IDMgMyA0LjM0MzE1IDMgNlYxOEMzIDE5LjY1NjkgNC4zNDMxNSAyMSA2IDIxSDE4QzE5LjY1NjkgMjEgMjEgMTkuNjU2OSAyMSAxOF'+
			'Y2QzIxIDQuMzQzMTUgMTkuNjU2OSAzIDE4IDNINlpNMTcuOCA4LjZDMTguMTMxNCA4LjE1ODE3IDE4LjA0MTggNy41MzEzNyAxNy42IDcuMkMxNy4xNTgyIDYuODY4NjMgMTYuNTMxNCA2Ljk1ODE3IDE2LjIgNy40TDEwLjg5MTggMTQuNDc3Nkw4LjcwNzExIDEyLjI5MjlDOC4zMTY1OCAxMS45MDI0IDcuNjgzNDIgMTEuOTAyNCA3LjI5Mjg5IDEyLjI5MjlDNi45MDIzNyAxMi42ODM0IDYuOTAyMzcgMTMuMzE2NiA3LjI5Mjg5IDEzLjcwNzFMMTAuMjkyOSAxNi43MDcxQzEwLjQ5NzkgMTYuOTEyMSAxMC43ODE3IDE3LjAxOCAxMS4wNzA5IDE2Ljk5NzVDMTEuMzYwMSAxNi45NzY5IDExLjYyNjEg'+
			'MTYuODMxOSAxMS44IDE2LjZMMTcuOCA4LjZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwMDdiZmYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._checkmark_tick0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 27px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick0.ggElementNodeId()) == true)) || 
				((me._checkmark_tick0.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick0.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick0.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick0.style.visibility=(Number(me._checkmark_tick0.style.opacity)>0||!me._checkmark_tick0.style.opacity)?'inherit':'hidden';
					me._checkmark_tick0.ggVisible=true;
				}
				else {
					me._checkmark_tick0.style.visibility="hidden";
					me._checkmark_tick0.ggVisible=false;
				}
			}
		}
		me._checkmark_tick0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active0'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick0.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick0.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick0.style.opacity == 0.0) { me._checkmark_tick0.style.visibility="hidden"; } }, 505);
					me._checkmark_tick0.style.opacity=0;
				}
				else {
					me._checkmark_tick0.style.visibility=me._checkmark_tick0.ggVisible?'inherit':'hidden';
					me._checkmark_tick0.style.opacity=1;
				}
			}
		}
		me._checkmark_tick0.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active0.appendChild(me._checkmark_tick0);
		me.__div.appendChild(me._thumbnail_active0);
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 125px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggDx=6;
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #d1d1d1;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		me._thumbnail_active.onclick=function (e) {
			if (
				(
					((me._thumbnail_active.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._checkmark_tick.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='bottom : -27px;';
		hs+='cursor : pointer;';
		hs+='height : 124px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active.appendChild(me._thumbnail_nodeimage);
		el=me._thumbnail_title=document.createElement('div');
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100%;';
		hs+='height: 18px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+="padding: 4px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_active.appendChild(me._thumbnail_title);
		el=me._checkmark_tick=document.createElement('div');
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgVHJhbnNmb3JtZWQgYnk6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGhlaWdodD0iMTkxcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE5MXB4IiB2aWV3Qm94PSItMy4xMiAtMy4xMiAzMC4yNCAzMC4yNCIgZmlsbD0ibm9uZSI+CiA8ZyBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbn'+
			'NsYXRlKDUuMjc5OTk5OTk5OTk5OTk5LDUuMjc5OTk5OTk5OTk5OTk5KSwgc2NhbGUoMC41NikiIGlkPSJTVkdSZXBvX2JnQ2FycmllciI+CiAgPHBhdGggc3Ryb2tld2lkdGg9IjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zLjEyLCAtMy4xMiksIHNjYWxlKDEuODkwMDAwMDAwMDAwMDAwMSkiIGQ9Ik05LjE2Ni4zM2EyLjI1IDIuMjUgMCAwMC0yLjMzMiAwbC01LjI1IDMuMTgyQTIuMjUgMi4yNSAwIDAwLjUgNS40MzZ2NS4xMjhhMi4yNSAyLjI1IDAgMDAxLjA4NCAxLjkyNGw1LjI1IDMuMTgyYTIuMjUgMi4yNSAwIDAwMi4zMzIgMGw1LjI1LTMuMTgyYTIuMjUgMi4yNSAwIDAwMS4wODQtMS45'+
			'MjRWNS40MzZhMi4yNSAyLjI1IDAgMDAtMS4wODQtMS45MjRMOS4xNjYuMzN6IiBmaWxsPSIjZmZmZmZmIi8+CiA8L2c+CiA8ZyBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjAuMDk2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI0NDQ0NDQyIgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIvPgogPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYgM0M0LjM0MzE1IDMgMyA0LjM0MzE1IDMgNlYxOEMzIDE5LjY1NjkgNC4zNDMxNSAyMSA2IDIxSDE4QzE5LjY1NjkgMjEgMjEgMTkuNjU2OSAyMSAxOF'+
			'Y2QzIxIDQuMzQzMTUgMTkuNjU2OSAzIDE4IDNINlpNMTcuOCA4LjZDMTguMTMxNCA4LjE1ODE3IDE4LjA0MTggNy41MzEzNyAxNy42IDcuMkMxNy4xNTgyIDYuODY4NjMgMTYuNTMxNCA2Ljk1ODE3IDE2LjIgNy40TDEwLjg5MTggMTQuNDc3Nkw4LjcwNzExIDEyLjI5MjlDOC4zMTY1OCAxMS45MDI0IDcuNjgzNDIgMTEuOTAyNCA3LjI5Mjg5IDEyLjI5MjlDNi45MDIzNyAxMi42ODM0IDYuOTAyMzcgMTMuMzE2NiA3LjI5Mjg5IDEzLjcwNzFMMTAuMjkyOSAxNi43MDcxQzEwLjQ5NzkgMTYuOTEyMSAxMC43ODE3IDE3LjAxOCAxMS4wNzA5IDE2Ljk5NzVDMTEuMzYwMSAxNi45NzY5IDExLjYyNjEg'+
			'MTYuODMxOSAxMS44IDE2LjZMMTcuOCA4LjZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwMDdiZmYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 27px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true)) || 
				((me._checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		me._checkmark_tick.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) && 
				((me.ggUserdata.title != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._checkmark_tick.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._checkmark_tick.style[domTransition]='opacity 500ms ease 0ms';
				if (me._checkmark_tick.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._checkmark_tick.style.opacity == 0.0) { me._checkmark_tick.style.visibility="hidden"; } }, 505);
					me._checkmark_tick.style.opacity=0;
				}
				else {
					me._checkmark_tick.style.visibility=me._checkmark_tick.ggVisible?'inherit':'hidden';
					me._checkmark_tick.style.opacity=1;
				}
			}
		}
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active.appendChild(me._checkmark_tick);
		me.__div.appendChild(me._thumbnail_active);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; } .glass_inicial { background: rgba( 255, 255, 255, 0.18 ); backdrop-filter: blur( 9px ); -webkit-backdrop-filter: blur( 9px ); border-radius: 0px; transition: 500ms linear; } .glass_inicial:hover { background: rgba( 0, 146, 139, 1 ); backdrop-filter: blur( 9px ); -webkit-backdrop-filter: blur( 9px ); border-radius: 0px; transition: 500ms linear; }'));
	document.head.appendChild(style);
	me._box_exit_fuulscreen0.logicBlock_visible();
	me._svg_60.logicBlock_visible();
	me._box_fuulscreen0.logicBlock_visible();
	me._svg_50.logicBlock_visible();
	me._box_exit_fuulscreen.logicBlock_visible();
	me._svg_6.logicBlock_visible();
	me._box_fuulscreen.logicBlock_visible();
	me._svg_5.logicBlock_visible();
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen.logicBlock_visible();
	me._loading.logicBlock_visible();
	me._rectangle_2.logicBlock_position();
	me._rectangle_2.logicBlock_angle();
	me._rectangle_2.logicBlock_visible();
	me._button_1.logicBlock_visible();
	me._thumb_ambiente_9.logicBlock_position();
	me._thumb_ambiente_9.logicBlock_visible();
	me._thumbnail_menu7.logicBlock_visible();
	me._thumbnail_cloner7.logicBlock_visible();
	me._thumb_ambiente_8.logicBlock_position();
	me._thumb_ambiente_8.logicBlock_visible();
	me._thumbnail_menu6.logicBlock_visible();
	me._thumbnail_cloner6.logicBlock_visible();
	me._thumb_ambiente_7.logicBlock_position();
	me._thumb_ambiente_7.logicBlock_visible();
	me._thumbnail_menu5.logicBlock_visible();
	me._thumbnail_cloner5.logicBlock_visible();
	me._thumb_ambiente_6.logicBlock_position();
	me._thumb_ambiente_6.logicBlock_visible();
	me._thumbnail_menu4.logicBlock_visible();
	me._thumbnail_cloner4.logicBlock_visible();
	me._thumb_ambiente_5.logicBlock_position();
	me._thumb_ambiente_5.logicBlock_visible();
	me._thumbnail_menu3.logicBlock_visible();
	me._thumbnail_cloner3.logicBlock_visible();
	me._thumb_ambiente_4.logicBlock_position();
	me._thumb_ambiente_4.logicBlock_visible();
	me._thumbnail_menu2.logicBlock_visible();
	me._thumbnail_cloner2.logicBlock_visible();
	me._thumb_ambiente_3.logicBlock_position();
	me._thumb_ambiente_3.logicBlock_visible();
	me._thumbnail_menu1.logicBlock_visible();
	me._thumbnail_cloner1.logicBlock_visible();
	me._thumb_ambiente_2.logicBlock_position();
	me._thumb_ambiente_2.logicBlock_visible();
	me._thumbnail_menu0.logicBlock_visible();
	me._thumbnail_cloner0.logicBlock_visible();
	me._thumb_ambiente_1.logicBlock_position();
	me._thumb_ambiente_1.logicBlock_visible();
	me._thumbnail_menu.logicBlock_visible();
	me._thumbnail_cloner.logicBlock_visible();
	me._caixa_de_texto_instrues_desktop.logicBlock_position();
	me._caixa_de_texto_instrues_mobile.logicBlock_position();
	me._map_duplicado_para_teste_no_mobile.logicBlock_position();
	me._map_1.logicBlock_position();
	me._container_e_.logicBlock_visible();
	me._zoomout.logicBlock_visible();
	me._container_botoes_auxiliares.logicBlock_visible();
	me._box_planta_baixa0.logicBlock_visible();
	me._svg_21.logicBlock_visible();
	me._box_audio0.logicBlock_visible();
	me._svg_30.logicBlock_visible();
	me._box_mute0.logicBlock_visible();
	me._svg_40.logicBlock_visible();
	me._text_1.logicBlock_visible();
	me._svg_70.logicBlock_visible();
	me._svg_3.logicBlock_visible();
	me._caixa_de_texto_instrues_desktop.logicBlock_visible();
	me._caixa_de_texto_instrues_mobile.logicBlock_size();
	me._caixa_de_texto_instrues_mobile.logicBlock_visible();
	me._container_1.logicBlock_position();
	me._map_duplicado_para_teste_no_mobile.logicBlock_visible();
	me._map_1.logicBlock_visible();
	player.addListener('fullscreenenter', function(args) { me._box_exit_fuulscreen0.logicBlock_visible();me._svg_60.logicBlock_visible();me._box_fuulscreen0.logicBlock_visible();me._svg_50.logicBlock_visible();me._box_exit_fuulscreen.logicBlock_visible();me._svg_6.logicBlock_visible();me._box_fuulscreen.logicBlock_visible();me._svg_5.logicBlock_visible();me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('fullscreenexit', function(args) { me._box_exit_fuulscreen0.logicBlock_visible();me._svg_60.logicBlock_visible();me._box_fuulscreen0.logicBlock_visible();me._svg_50.logicBlock_visible();me._box_exit_fuulscreen.logicBlock_visible();me._svg_6.logicBlock_visible();me._box_fuulscreen.logicBlock_visible();me._svg_5.logicBlock_visible();me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._loading.logicBlock_visible();me._rectangle_2.logicBlock_position();me._rectangle_2.logicBlock_angle();me._rectangle_2.logicBlock_visible();me._button_1.logicBlock_visible();me._thumb_ambiente_9.logicBlock_position();me._thumb_ambiente_9.logicBlock_visible();me._thumbnail_menu7.logicBlock_visible();me._thumbnail_cloner7.logicBlock_visible();me._thumb_ambiente_8.logicBlock_position();me._thumb_ambiente_8.logicBlock_visible();me._thumbnail_menu6.logicBlock_visible();me._thumbnail_cloner6.logicBlock_visible();me._thumb_ambiente_7.logicBlock_position();me._thumb_ambiente_7.logicBlock_visible();me._thumbnail_menu5.logicBlock_visible();me._thumbnail_cloner5.logicBlock_visible();me._thumb_ambiente_6.logicBlock_position();me._thumb_ambiente_6.logicBlock_visible();me._thumbnail_menu4.logicBlock_visible();me._thumbnail_cloner4.logicBlock_visible();me._thumb_ambiente_5.logicBlock_position();me._thumb_ambiente_5.logicBlock_visible();me._thumbnail_menu3.logicBlock_visible();me._thumbnail_cloner3.logicBlock_visible();me._thumb_ambiente_4.logicBlock_position();me._thumb_ambiente_4.logicBlock_visible();me._thumbnail_menu2.logicBlock_visible();me._thumbnail_cloner2.logicBlock_visible();me._thumb_ambiente_3.logicBlock_position();me._thumb_ambiente_3.logicBlock_visible();me._thumbnail_menu1.logicBlock_visible();me._thumbnail_cloner1.logicBlock_visible();me._thumb_ambiente_2.logicBlock_position();me._thumb_ambiente_2.logicBlock_visible();me._thumbnail_menu0.logicBlock_visible();me._thumbnail_cloner0.logicBlock_visible();me._thumb_ambiente_1.logicBlock_position();me._thumb_ambiente_1.logicBlock_visible();me._thumbnail_menu.logicBlock_visible();me._thumbnail_cloner.logicBlock_visible();me._caixa_de_texto_instrues_desktop.logicBlock_position();me._caixa_de_texto_instrues_mobile.logicBlock_position();me._map_duplicado_para_teste_no_mobile.logicBlock_position();me._map_1.logicBlock_position(); });
	player.addListener('configloaded', function(args) { me._container_e_.logicBlock_visible();me._zoomout.logicBlock_visible();me._container_botoes_auxiliares.logicBlock_visible();me._box_planta_baixa0.logicBlock_visible();me._svg_21.logicBlock_visible();me._box_exit_fuulscreen0.logicBlock_visible();me._svg_60.logicBlock_visible();me._box_fuulscreen0.logicBlock_visible();me._svg_50.logicBlock_visible();me._box_audio0.logicBlock_visible();me._svg_30.logicBlock_visible();me._box_mute0.logicBlock_visible();me._svg_40.logicBlock_visible();me._text_1.logicBlock_visible();me._svg_70.logicBlock_visible();me._svg_3.logicBlock_visible();me._caixa_de_texto_instrues_desktop.logicBlock_visible();me._caixa_de_texto_instrues_mobile.logicBlock_size();me._caixa_de_texto_instrues_mobile.logicBlock_visible();me._container_1.logicBlock_position();me._map_duplicado_para_teste_no_mobile.logicBlock_visible();me._map_1.logicBlock_visible(); });
	player.addListener('hastouch', function(args) { me._zoomout.logicBlock_visible(); });
	player.addListener('varchanged_opt_loader', function(args) { me._loading.logicBlock_visible(); });
	player.addListener('varchanged_varbotap', function(args) { me._rectangle_2.logicBlock_position();me._rectangle_2.logicBlock_angle(); });
	player.addListener('varchanged_vis_container1', function(args) { me._thumb_ambiente_9.logicBlock_position();me._thumb_ambiente_8.logicBlock_position();me._thumb_ambiente_7.logicBlock_position();me._thumb_ambiente_6.logicBlock_position();me._thumb_ambiente_5.logicBlock_position();me._thumb_ambiente_4.logicBlock_position();me._thumb_ambiente_3.logicBlock_position();me._thumb_ambiente_2.logicBlock_position();me._thumb_ambiente_1.logicBlock_position(); });
	player.addListener('varchanged_var_instrucao', function(args) { me._caixa_de_texto_instrues_desktop.logicBlock_position();me._caixa_de_texto_instrues_mobile.logicBlock_position(); });
	player.addListener('varchanged_var_planta', function(args) { me._map_duplicado_para_teste_no_mobile.logicBlock_position();me._map_1.logicBlock_position(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner7.callChildLogicBlocks_changenode();me._thumbnail_cloner6.callChildLogicBlocks_changenode();me._thumbnail_cloner5.callChildLogicBlocks_changenode();me._thumbnail_cloner4.callChildLogicBlocks_changenode();me._thumbnail_cloner3.callChildLogicBlocks_changenode();me._thumbnail_cloner2.callChildLogicBlocks_changenode();me._thumbnail_cloner1.callChildLogicBlocks_changenode();me._thumbnail_cloner0.callChildLogicBlocks_changenode();me._thumbnail_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner7.callChildLogicBlocks_mouseover();me._thumbnail_cloner6.callChildLogicBlocks_mouseover();me._thumbnail_cloner5.callChildLogicBlocks_mouseover();me._thumbnail_cloner4.callChildLogicBlocks_mouseover();me._thumbnail_cloner3.callChildLogicBlocks_mouseover();me._thumbnail_cloner2.callChildLogicBlocks_mouseover();me._thumbnail_cloner1.callChildLogicBlocks_mouseover();me._thumbnail_cloner0.callChildLogicBlocks_mouseover();me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner7.callChildLogicBlocks_mouseover();me._thumbnail_cloner6.callChildLogicBlocks_mouseover();me._thumbnail_cloner5.callChildLogicBlocks_mouseover();me._thumbnail_cloner4.callChildLogicBlocks_mouseover();me._thumbnail_cloner3.callChildLogicBlocks_mouseover();me._thumbnail_cloner2.callChildLogicBlocks_mouseover();me._thumbnail_cloner1.callChildLogicBlocks_mouseover();me._thumbnail_cloner0.callChildLogicBlocks_mouseover();me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner7.callChildLogicBlocks_active();me._thumbnail_cloner6.callChildLogicBlocks_active();me._thumbnail_cloner5.callChildLogicBlocks_active();me._thumbnail_cloner4.callChildLogicBlocks_active();me._thumbnail_cloner3.callChildLogicBlocks_active();me._thumbnail_cloner2.callChildLogicBlocks_active();me._thumbnail_cloner1.callChildLogicBlocks_active();me._thumbnail_cloner0.callChildLogicBlocks_active();me._thumbnail_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._thumbnail_cloner7.callChildLogicBlocks_changevisitednodes();me._thumbnail_cloner6.callChildLogicBlocks_changevisitednodes();me._thumbnail_cloner5.callChildLogicBlocks_changevisitednodes();me._thumbnail_cloner4.callChildLogicBlocks_changevisitednodes();me._thumbnail_cloner3.callChildLogicBlocks_changevisitednodes();me._thumbnail_cloner2.callChildLogicBlocks_changevisitednodes();me._thumbnail_cloner1.callChildLogicBlocks_changevisitednodes();me._thumbnail_cloner0.callChildLogicBlocks_changevisitednodes();me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me._thumbnail_cloner7.callChildLogicBlocks_activehotspotchanged();me._thumbnail_cloner6.callChildLogicBlocks_activehotspotchanged();me._thumbnail_cloner5.callChildLogicBlocks_activehotspotchanged();me._thumbnail_cloner4.callChildLogicBlocks_activehotspotchanged();me._thumbnail_cloner3.callChildLogicBlocks_activehotspotchanged();me._thumbnail_cloner2.callChildLogicBlocks_activehotspotchanged();me._thumbnail_cloner1.callChildLogicBlocks_activehotspotchanged();me._thumbnail_cloner0.callChildLogicBlocks_activehotspotchanged();me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged(); });
	player.addListener('changenode', function(args) { me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_changenode();me._map_1.callChildLogicBlocksHotspot_map_pin_changenode(); });
	player.addListener('configloaded', function(args) { me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_configloaded();me._map_1.callChildLogicBlocksHotspot_map_pin_configloaded(); });
	player.addListener('mouseover', function(args) { me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_mouseover();me._map_1.callChildLogicBlocksHotspot_map_pin_mouseover(); });
	player.addListener('mouseover', function(args) { me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_mouseover();me._map_1.callChildLogicBlocksHotspot_map_pin_mouseover(); });
	player.addListener('changenode', function(args) { me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_active();me._map_1.callChildLogicBlocksHotspot_map_pin_active(); });
	player.addListener('hastouch', function(args) { me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_hastouch();me._map_1.callChildLogicBlocksHotspot_map_pin_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me._map_duplicado_para_teste_no_mobile.callChildLogicBlocksHotspot_map_pin_activehotspotchanged();me._map_1.callChildLogicBlocksHotspot_map_pin_activehotspotchanged(); });
	player.addListener('sizechanged', function(args) { me.callChildLogicBlocksHotspot_hotspot_sizechanged(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_hotspot_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_hotspot_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_hotspot_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_hotspot_active(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_hotspot_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_hotspot_activehotspotchanged(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me.callChildLogicBlocksHotspot_hotspot_varchanged_vis_info_popup(); });
	player.addListener('varchanged_opt_hotspot_preview', function(args) { me.callChildLogicBlocksHotspot_hotspot_varchanged_opt_hotspot_preview(); });
	player.addListener('varchanged_Var_hotanimation', function(args) { me.callChildLogicBlocksHotspot_hotspot_varchanged_Var_hotanimation(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};