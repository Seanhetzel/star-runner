(window["webpackJsonpstar-runner"]=window["webpackJsonpstar-runner"]||[]).push([[0],{1479:function(e,t,a){var s={"./ion-phaser.entry.js":[1483,3]};function i(e){if(!a.o(s,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=s[e],i=t[0];return a.e(t[1]).then(function(){return a(i)})}i.keys=function(){return Object.keys(s)},i.id=1479,e.exports=i},1480:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),n=a(550),r=a.n(n),l=(a(575),a(38)),o=a(39),c=a(41),h=a(40),d=a(42),m=a(72),u=a(81);a(576);function p(){return i.a.createElement("div",{id:"star_field"},i.a.createElement("div",{className:"stars"}),i.a.createElement("div",{className:"stars"}),i.a.createElement("div",{className:"stars"}),i.a.createElement("div",{className:"stars"}),i.a.createElement("div",{className:"stars"}))}var A=a(551),g=a.n(A),E=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{id:"nav_bar"},i.a.createElement(m.b,{id:"star_runner_logo",to:"/"},"STAR RUNNER"),i.a.createElement(m.b,{className:"brk-btn",to:"/"},"Home"),i.a.createElement(m.b,{className:"brk-btn",to:"/game"},"Fly"),i.a.createElement(m.b,{className:"brk-btn",to:"/scores"},"Rank"),i.a.createElement("iframe",{id:"soundcloud",width:"300",height:"105",scrolling:"no",frameBorder:"no",allow:"off",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/862763829&color=%23000000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}),i.a.createElement("a",{href:"https://github.com/Seanhetzel/star-runner",target:"_blank",rel:"noopener noreferrer",id:"github_logo"},i.a.createElement("img",{src:g.a,alt:"github",width:"50px",height:"50px"})),i.a.createElement("div",{id:"red_line_top"}))}}]),t}(i.a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.showStars()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h4",{className:"home_info"},"STAR DATE: JULY 2, 2154"),i.a.createElement("h4",{className:"home_info"},"LOGS: PRE-FLIGHT BREIF"),i.a.createElement("h4",{className:"home_info"},"STATUS: URGENT"),i.a.createElement("h4",{className:"home_info"},">_"),i.a.createElement("br",null),i.a.createElement("h1",null,"WELCOME PILOT"),i.a.createElement("h2",null,"The off-world colonies need your help. A group of replicants have cut off supply lines and destroyed one of our transport ships. Your mission is to deliver critical relief supplies to Arcadia 234 and eliminate any replicants along the way. This uprising must be silenced before it gets out of hand. Time is of the essence."),i.a.createElement("br",null),i.a.createElement("h1",null,"CONTROLS:"),i.a.createElement("h2",{id:"cont_desc_1"},"FLY UP "),i.a.createElement("h2",{id:"up_arrow"},"\u25b2"),i.a.createElement("h2",{id:"cont_desc_2"}," | FLY DOWN "),i.a.createElement("h2",{id:"down_arrow"},"\u25bc"),i.a.createElement("h2",{id:"cont_desc_3"}," | FLY BACKWARD "),i.a.createElement("h2",{id:"left_arrow"},"\u25c4"),i.a.createElement("h2",{id:"cont_desc_4"}," | FLY FORWARD "),i.a.createElement("h2",{id:"right_arrow"},"\u25ba"),i.a.createElement("h2",{id:"cont_desc_5"}," | SHOOT"),i.a.createElement("h2",{id:"space_bar"}," \u23b5"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h1",null,"Good luck out there. You'll need it."),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(m.b,{className:"brk-btn",to:"/game"},"Fly"))}}]),t}(i.a.Component),y=a(29),b=a.n(y),S=a(568),v=a(554),x=a.n(v),w=a(555),M=a.n(w),k=a(556),G=a.n(k),O=a(557),I=a.n(O),B=a(558),C=a.n(B),F=a(559),R=a.n(F),Y=a(560),N=a.n(Y),D=a(561),T=a.n(D),j=a(562),V=a.n(j),Z=a(563),L=a.n(Z),W=a(564),X=a.n(W),Q=a(565),H=a.n(Q),U=a(566),P=a.n(U),z=a(567),q=a.n(z),J=4e4,K=700;console.log("map width: ",J),console.log("map height: ",K);var _=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={redirect:!1,initialize:!0,game:{type:b.a.AUTO,width:"100%",height:K,physics:{default:"impact",impact:{setBounds:{x:0,y:0,width:J,height:700,thickness:32}}},scene:{extend:{minimap:null,player:null,cursors:null,thrust:null,flares:null,bullets:null,lastFired:0,text:null,timer:0,damage:0,penalty:0,gameOver:!1,endZone:null},init:function(){console.log(this.scene),console.log(this.game),console.log("this",this)},preload:function(){var e=this.cameras.main.width,t=this.cameras.main.height,a=this.add.graphics(),s=this.make.text({x:e/2,y:t/2-100,text:"Loading...",style:{font:"20px Orbitron",fill:"#ff0000"}});s.setOrigin(.5,.5);var i=this.make.text({x:e/2,y:t/2-5,text:"0%",style:{font:"18px Orbitron",fill:"#ff0000"}});i.setOrigin(.5,.5),this.load.on("progress",function(t){i.setText(parseInt(100*t)+"%"),a.clear(),a.fillStyle(16711680,1),a.fillRect(e/2-250,280,500*t,30)}),this.load.on("complete",function(){a.destroy(),s.destroy(),i.destroy()}),this.load.image("star","assets/star-1.png"),this.textures.addBase64("star",x.a),this.load.image("redGiant","assets/star-2.png"),this.textures.addBase64("redGiant",M.a),this.load.image("ship","assets/star-fighter.png"),this.textures.addBase64("ship",G.a),this.load.image("bullet","assets/bullet6.png"),this.textures.addBase64("bullet",I.a),this.load.image("jets","assets/blue.png"),this.textures.addBase64("jets",C.a),this.load.image("flares","assets/yellow.png"),this.textures.addBase64("flares",R.a),this.load.image("asteroid","assets/asteroid.png"),this.textures.addBase64("asteroid",N.a),this.load.image("mars","assets/mars.png"),this.textures.addBase64("mars",V.a),this.load.image("saturn","assets/saturn.png"),this.textures.addBase64("saturn",L.a),this.load.image("arcadia","assets/arcadia-234.png"),this.textures.addBase64("arcadia",X.a),this.load.spritesheet("spaceStation",T.a,{frameWidth:3372,frameHeight:700}),this.load.audio("rocket",q.a),this.load.audio("gun",P.a),this.load.audio("crash",H.a)},create:function(){var e=this,t=new b.a.Class({Extends:b.a.GameObjects.Image,initialize:function(e){b.a.GameObjects.Image.call(this,e,0,0,"bullet"),this.speed=0,this.born=0},fire:function(e){e.flipX?(this.setPosition(e.x-120,e.y+10),this.speed=b.a.Math.GetSpeed(-2e3+e.vel.x,1)):(this.setPosition(e.x+120,e.y+10),this.speed=b.a.Math.GetSpeed(2e3+e.vel.x,1)),this.born=0},update:function(e,t){this.x+=this.speed*t,this.born+=t,this.born>2e3&&(this.setActive(!1),this.setVisible(!1))}});this.cameras.main.setBounds(0,0,J,K),this.cursors=this.input.keyboard.createCursorKeys(),this.player=this.impact.add.sprite(200,350,"ship").setBodyScale(.7).setDepth(4),this.player.setMaxVelocity(1e3).setFriction(400,300).setPassiveCollision(),this.bullets=this.add.group({classType:t,runChildUpdate:!0});var a={key:"lights",frames:this.anims.generateFrameNumbers("spaceStation",{start:0,end:6}),frameRate:3,repeat:-1};this.anims.create(a),this.spaceStation=this.impact.add.sprite(1686,350,"spaceStation").play("lights").setDepth(2),this.finishLine=this.impact.add.sprite(J-1686,350,"spaceStation").play("lights").setDepth(2),this.mars=this.impact.add.sprite(1500,200,"mars").setDepth(1).setScrollFactor(.25).angle=180,this.saturn=this.impact.add.sprite(6e3,600,"saturn").setScale(.1).setDepth(1).setScrollFactor(.25).angle=350,this.arcadia=this.impact.add.sprite(1e4,800,"arcadia").setScale(1).setDepth(1).setScrollFactor(.25).angle=0;var s={font:"20px Orbitron",fill:"#ff0000"};this.timeText=this.add.text(20,10,"",s).setDepth(5).setScrollFactor(0),this.accelerationText=this.add.text(this.cameras.main.width-350,10,"",s).setDepth(5).setScrollFactor(0),this.damageText=this.add.text(20,660,"",s).setDepth(5).setScrollFactor(0),this.penaltyText=this.add.text(this.cameras.main.width-350,660,"",s).setDepth(5).setScrollFactor(0),this.distanceText=this.add.text(this.cameras.main.width/2-50,660,"DISTANCE",s).setDepth(5).setScrollFactor(0),this.levelComplete=this.add.text(this.cameras.main.width/2-100,250,"",s).setDepth(5).setScrollFactor(0);var i=function(t,a,s,i){var n=new b.a.Geom.Line(t,a,s,i);e.add.graphics({lineStyle:{width:4,color:16711680}}).strokeLineShape(n).setDepth(5).setScrollFactor(0)},n=this.add.graphics({lineStyle:{width:2,color:65280},fillStyle:{color:16711680}}),r=new b.a.Geom.Triangle(this.cameras.main.width/2-210,620,this.cameras.main.width/2-200,635,this.cameras.main.width/2-190,620);n.fillTriangleShape(r).setDepth(5).setScrollFactor(-.0105),i(0,50,350,50),i(this.cameras.main.width-350,50,this.cameras.main.width,50),i(0,645,350,645),i(this.cameras.main.width-350,645,this.cameras.main.width,645),i(350,50,400,0),i(this.cameras.main.width-400,0,this.cameras.main.width-350,50),i(350,645,400,705),i(this.cameras.main.width-400,705,this.cameras.main.width-350,645),i(this.cameras.main.width/2-200,645,this.cameras.main.width/2+200,645);this.player.setCollideCallback(function(t,a,s){!1===e.gameOver&&(e.damage+=1e3,e.cameras.main.flash(500,"25","000","000",!0),e.crashSound.play())},this),this.rocketSound=this.sound.add("rocket",{volume:.75,loop:!0}),this.gunSound=this.sound.add("gun",{volume:.25,loop:!1}),this.crashSound=this.sound.add("crash"),this.timer=this.time.addEvent({delay:1e6,callbackScope:this}),this.flying=this.time.addEvent({duration:1e4,repeat:-1,callbackScope:this,callback:function(){this.player.isFlying&&this.rocketSound.play()}}),function(){var t=e.add.group({key:"star",frameQuantity:J/4});t.createMultiple({key:"redGiant",frameQuantity:J/200});var a=new b.a.Geom.Rectangle(0,0,J,1e3);b.a.Actions.RandomRectangle(t.getChildren(),a),t.children.iterate(function(e,t){var a=Math.max(.3,Math.random());"redGiant"===e.texture.key&&(a=.1),e.setScrollFactor(a)},e)}(),function(){for(var t=0;t<J/400;t++){var a=b.a.Math.Between(4e3,J),s=b.a.Math.Between(100,300),i=b.a.Math.Between(0,360),n=b.a.Math.Between(1,2),r=e.impact.add.sprite(a,s,"asteroid").setTypeA().setCheckAgainstA().setActiveCollision().setMaxVelocity(300);r.setActiveCollision().setBounce(1).setDepth(3).setBodyScale(.25*n),r.setVelocity(b.a.Math.Between(20,60),b.a.Math.Between(20,60)),r.angle=i,Math.random()>.5?r.vel.x*=-1:r.vel.y*=-1}}(),e.thrust=e.add.particles("jets").setDepth(3).createEmitter({x:200,y:350,angle:{min:160,max:200},scale:{start:.2,end:0},blendMode:"ADD",lifespan:600,on:!1}),e.flares=e.add.particles("flares").setDepth(3).createEmitter({x:200,y:350,angle:{min:170,max:190},scale:{start:.4,end:.2},blendMode:"ADD",lifespan:20,on:!1})},update:function(e,t){if(!this.gameOver){var a=Math.floor(this.timer.getElapsed());if(this.penalty=a+this.damage,this.timeText.setText("TIME >> ".concat(i(a))),this.accelerationText.setText("ACCELERATION >> ".concat((50*this.player.vel.x).toLocaleString())),this.damageText.setText("DAMAGE >> ".concat(this.damage.toLocaleString())),this.penaltyText.setText("PENALTY >> ".concat(this.penalty.toLocaleString())),this.player.x>J-2e3&&(this.gameOver=!0,this.levelComplete.setText("> Mission Acomplished <\n\n1,000,000\n- TIME >> "+"".concat(i(a),"\n- DAMAGE >> ")+"".concat(this.damage.toLocaleString(),"\n- PENALTY >> ")+"".concat(this.penalty.toLocaleString(),"\n")+"------------------------\n"+"Score >> ".concat((1e6-this.penalty).toLocaleString(),"\n")+"\nEnter Your Name: __________Submit")),this.thrust.setPosition(this.player.x-80,this.player.y+4),this.cursors.left.isDown?(this.thrust.setPosition(this.player.x+80,this.player.y+4),this.player.setAccelerationX(-1200),this.player.flipX=!0):this.cursors.right.isDown?(this.rocketSound.play(),this.player.isFlying=!0,this.player.setAccelerationX(1200),this.player.flipX=!1):(this.player.isFlying=!1,this.player.setAccelerationX(0)),this.cursors.up.isDown?this.player.setAccelerationY(-1200):this.cursors.down.isDown?this.player.setAccelerationY(1200):this.player.setAccelerationY(0),this.player.vel.x<0?(this.thrust.setPosition(this.thrust.x.propertyValue+=this.player.flipX?16:-16,this.thrust.y.propertyValue),this.thrust.setSpeed(this.player.vel.x/2),this.thrust.emitParticle(16)):this.player.vel.x>0&&(this.thrust.setPosition(this.thrust.x.propertyValue+=this.player.flipX?16:-16,this.thrust.y.propertyValue),this.thrust.setSpeed(this.player.vel.x/2),this.thrust.emitParticle(16)),this.cursors.space.isDown&&e>this.lastFired){var s=this.bullets.get();s.setActive(!0),s.setVisible(!0),s.setDepth(3),s&&(this.gunSound.play(),s.fire(this.player),this.lastFired=e+100)}this.bullets.children.each(function(e){e.active&&(this.flares.setPosition(e.x,e.y),this.flares.setSpeed(e.speed+-500),this.flares.emitParticle(1))},this),this.cameras.main.scrollX=this.player.x-400}function i(e){var t=Math.floor(e/1e3),a=e%1e3;return"".concat(t.toLocaleString(),":").concat(a.toLocaleString().substr(0,2))}}}}},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.hideStars()}},{key:"render",value:function(){var e=this.state,t=e.initialize,a=e.game;return i.a.createElement(i.a.Fragment,null,i.a.createElement(S.a,{id:"phaserGame",game:a,initialize:t}),i.a.createElement("div",{id:"red_line_button"}))}}]),t}(s.Component);function $(){return i.a.createElement("div",{className:"sk-wave",id:"pre_loader"},i.a.createElement("div",{className:"sk-rect sk-rect1"}),i.a.createElement("div",{className:"sk-rect sk-rect2"}),i.a.createElement("div",{className:"sk-rect sk-rect3"}),i.a.createElement("div",{className:"sk-rect sk-rect4"}),i.a.createElement("div",{className:"sk-rect sk-rect5"}))}var ee=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.showStars(),!0===this.props.loaded&&(document.getElementById("pre_loader").style.display="none")}},{key:"renderTableData",value:function(e){return this.props.scores.map(function(t){var a=t.id,s=t.display_name,n=t.high_score;return i.a.createElement("tr",{key:a},i.a.createElement("td",{className:"rank"},e),i.a.createElement("td",null,s),i.a.createElement("td",null,n.toLocaleString()),e++)})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"HIGH SCORES"),";",i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"RANK"),i.a.createElement("th",null,"PILOT"),i.a.createElement("th",null,"HIGHEST SCORE")),this.renderTableData(1))),i.a.createElement($,null))}}]),t}(i.a.Component);function te(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{id:"not_found"},"404"),i.a.createElement("h1",{id:"lost"},"LOST IN SPACE"))}var ae=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(h.a)(t).call(this))).hideStars=function(){document.getElementById("star_field").style.visibility="hidden"},e.showStars=function(){document.getElementById("star_field").style.visibility="visible"},e.state={scores:[],loaded:!1},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://agile-atoll-75530.herokuapp.com/api/v1/scores").then(function(e){return e.json()}).then(function(t){return e.setState({scores:t},console.log(t))},this.setState({loaded:!0}))}},{key:"render",value:function(){var e=this;return console.log("app state",this.state),i.a.createElement(m.a,null,i.a.createElement(p,null),i.a.createElement(E,null),i.a.createElement(u.c,null,i.a.createElement(u.a,{path:"/",exact:!0,render:function(t){return i.a.createElement(f,Object.assign({},t,{showStars:e.showStars}))}}),i.a.createElement(u.a,{path:"/game",exact:!0,render:function(t){return i.a.createElement(_,Object.assign({},t,{hideStars:e.hideStars}))}}),i.a.createElement(u.a,{path:"/scores",exact:!0,render:function(t){return i.a.createElement(ee,Object.assign({},t,{loaded:e.state.loaded,scores:e.state.scores,showStars:e.showStars}))}}),i.a.createElement(u.a,{path:"*",component:te})))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},551:function(e,t,a){e.exports=a.p+"static/media/github-logo-red.fddd4e2e.png"},554:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAMFBMVEUICAhMaXFYWFgmJiYWFhYDAwMLCws1NTWVlZVnZ2ctLS26uroGBgYDAwMGBgb////RvF0IAAAAD3RSTlMIAFgmFgMLNZVnLboGAgUL6Sr1AAAACXBIWXMAAAsSAAALEgHS3X78AAAAQklEQVQImVWMSQrAMAwDJW+JszT//21poYbqNIhhwNqDjoC/uEyH2iLo1iSlmYNQ6bOLAoyR88wc8Xs/d1fhqu4mb1IqAa0GNR90AAAAAElFTkSuQmCC"},555:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAMFBMVEVcNjZMaXHEdHQ3ICAXDg4JBQUeEhJ9SkprPz/khoYSCgoXDg4JBQUJBQUSCgr/lpbhhkLCAAAAD3RSTlNcAMQ3FwkefWvkEhYFCA9MMLC7AAAACXBIWXMAAAsSAAALEgHS3X78AAAARElEQVQImUWMSQ4AIQzDkrYUyjL9/2/RcICcrMgyePdjMbdysCsatBMsWiWk6gINkpkCA71FZkbz947nzlv4TneZj0luWuAB51qT3osAAAAASUVORK5CYII="},556:function(e,t){e.exports="data:image/png;base64,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"},557:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAMCAYAAAADFL+5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ0MThCMTAzQkE5NDExRTRBNTFGQ0ZFOTA4ODE1MzMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ0MThCMTA0QkE5NDExRTRBNTFGQ0ZFOTA4ODE1MzMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDQxOEIxMDFCQTk0MTFFNEE1MUZDRkU5MDg4MTUzMzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDQxOEIxMDJCQTk0MTFFNEE1MUZDRkU5MDg4MTUzMzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz71S4pLAAAAmklEQVR42sRU2w3AIAgE4yB0M0dxFDerm9BSNal9aGo13o8mKHegHDIzCBbEsHmAgTa4QmxlRllRBAi5uZJZgq6wPhPlogh9q1SIjRz2p4hvZKU8uSMwu5BzZ3SqPif/S3y9H4UcuYOI9OyqfrkH3nOp8eTlnAomQ1U/TzfQ1w7QcPKbDzxPQqcxhDCGEMcw+cB0I8LZVrwJMAClH0mN0fmMWQAAAABJRU5ErkJggg=="},558:function(e,t,a){e.exports=a.p+"static/media/blue.431b99d2.png"},559:function(e,t,a){e.exports=a.p+"static/media/yellow.11752848.png"},560:function(e,t,a){e.exports=a.p+"static/media/asteroid.3eae963b.png"},561:function(e,t,a){e.exports=a.p+"static/media/space-station-sprite-sheet.40c18833.png"},562:function(e,t,a){e.exports=a.p+"static/media/mars.ee263858.png"},563:function(e,t,a){e.exports=a.p+"static/media/saturn.c6987c22.png"},564:function(e,t,a){e.exports=a.p+"static/media/arcadia-234.e6413e3f.png"},565:function(e,t,a){e.exports=a.p+"static/media/crash.f5f8c8eb.wav"},566:function(e,t,a){e.exports=a.p+"static/media/gun.24184c82.wav"},567:function(e,t,a){e.exports=a.p+"static/media/rocket.ab06dbcb.wav"},570:function(e,t,a){e.exports=a(1480)},575:function(e,t,a){},576:function(e,t,a){}},[[570,1,2]]]);
//# sourceMappingURL=main.e0329320.chunk.js.map