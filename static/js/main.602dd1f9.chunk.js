(this["webpackJsonpstar-runner"]=this["webpackJsonpstar-runner"]||[]).push([[0],{1493:function(e,t,a){var i={"./ion-phaser.entry.js":[1497,3]};function s(e){if(!a.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],s=t[0];return a.e(t[1]).then((function(){return a(s)}))}s.keys=function(){return Object.keys(i)},s.id=1493,e.exports=s},1494:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),n=a(552),r=a.n(n),l=(a(585),a(33)),o=a(34),c=a(37),h=a(35),m=a(36),d=a(72),u=a(81);a(586);function p(){return s.a.createElement("div",{id:"star_field"},s.a.createElement("div",{className:"stars"}),s.a.createElement("div",{className:"stars"}),s.a.createElement("div",{className:"stars"}),s.a.createElement("div",{className:"stars"}),s.a.createElement("div",{className:"stars"}))}var A=a(553),g=a.n(A),E=a(554),f=a.n(E),b=a(555),y=a.n(b),S=a(556),v=a.n(S),x=a(557),O=a.n(x),D=a(558),M=a.n(D),I=[{url:y.a,cover:"",title:"On The Run",artist:["Wolf And Raven"]},{url:v.a,cover:"",title:"1989",artist:["M.A.D.E.S"]},{url:O.a,cover:"",title:"See You Soon",artist:["Stilz"]},{url:M.a,cover:"",title:"Jacked In",artist:["Neuroc"]}],N=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("nav",{id:"nav_bar"},s.a.createElement(d.b,{id:"star_runner_logo",to:"/"},"STAR RUNNER"),s.a.createElement(d.b,{className:"brk-btn",to:"/"},"Home"),s.a.createElement(d.b,{className:"brk-btn",to:"/game"},"Fly"),s.a.createElement(d.b,{className:"brk-btn",to:"/scores"},"Rank"),s.a.createElement(g.a,{playlist:I,width:100,btnColor:"red",progressColor:"red",autoplay:!0}),s.a.createElement("a",{href:"https://github.com/Seanhetzel/star-runner",target:"_blank",rel:"noopener noreferrer",id:"github_logo"},s.a.createElement("img",{src:f.a,alt:"github",width:"50px",height:"50px"})),s.a.createElement("div",{id:"red_line_top"}))}}]),t}(s.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.showStars()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h4",{className:"home_info"},"STAR DATE: JULY 2, 2154"),s.a.createElement("h4",{className:"home_info"},"LOGS: PRE-FLIGHT BRIEF"),s.a.createElement("h4",{className:"home_info"},"STATUS: URGENT"),s.a.createElement("h4",{className:"home_info"},">_"),s.a.createElement("br",null),s.a.createElement("h1",null,"WELCOME PILOT"),s.a.createElement("h2",null,"The off-world colonies need your help. A group of replicants have cut off supply lines and destroyed one of our transport ships. Your mission is to deliver critical relief supplies to Arcadia 234 and eliminate any replicants along the way. This uprising must be silenced before it gets out of hand. Time is of the essence."),s.a.createElement("br",null),s.a.createElement("h1",null,"CONTROLS:"),s.a.createElement("h2",{id:"cont_desc_1"},"FLY UP "),s.a.createElement("h2",{id:"up_arrow"},"\u25b2"),s.a.createElement("h2",{id:"cont_desc_2"}," | FLY DOWN "),s.a.createElement("h2",{id:"down_arrow"},"\u25bc"),s.a.createElement("h2",{id:"cont_desc_3"}," | FLY BACKWARD "),s.a.createElement("h2",{id:"left_arrow"},"\u25c4"),s.a.createElement("h2",{id:"cont_desc_4"}," | FLY FORWARD "),s.a.createElement("h2",{id:"right_arrow"},"\u25ba"),s.a.createElement("h2",{id:"cont_desc_5"}," | SHOOT"),s.a.createElement("h2",{id:"space_bar"}," \u23b5"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h1",null,"Good luck out there. You'll need it."),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(d.b,{className:"brk-btn",to:"/game"},"Fly"))}}]),t}(s.a.Component),C=a(29),R=a.n(C),G=a(578),w=a(173),B=a(561),F=a.n(B),j=a(562),T=a.n(j),Y=a(563),V=a.n(Y),X=a(564),L=a.n(X),H=a(565),Z=a.n(H),W=a(566),Q=a.n(W),U=a(567),P=a.n(U),q=a(568),z=a.n(q),K=a(569),J=a.n(K),_=a(570),$=a.n(_),ee=a(571),te=a.n(ee),ae=a(572),ie=a.n(ae),se=a(573),ne=a.n(se),re=a(574),le=a.n(re),oe=a(575),ce=a.n(oe),he=a(576),me=a.n(he),de=a(131),ue=a(577),pe=a.n(ue),Ae=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(h.a)(t).call(this))).state={time:0,damage:0,penalty:0,score:0,pilotName:""},e.handleChange=e.handleChange.bind(Object(de.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(de.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({pilotName:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.postScore(this.state),this.props.history.push("/scores")}},{key:"render",value:function(){var e=this;return w.EventEmitter.subscribe("updateScore",(function(t){return e.setState({time:t.time,damage:t.damage,penalty:t.penalty,score:t.score})})),s.a.createElement("div",{id:"mission_report"},s.a.createElement("h1",{className:"report-text"},"MISSION COMPLETE"),s.a.createElement("img",{src:pe.a,alt:"wings",height:50,width:"auto"}),s.a.createElement("table",{id:"report_table"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{className:"report_td"}," TIME"),s.a.createElement("td",{className:"report_td"}," ",this.state.time)),s.a.createElement("tr",null,s.a.createElement("td",{className:"report_td"}," DAMAGE"),s.a.createElement("td",{className:"report_td"},this.state.damage.toLocaleString())),s.a.createElement("tr",null,s.a.createElement("td",{className:"report_td"}," PENALTY"),s.a.createElement("td",{className:"report_td"},this.state.penalty.toLocaleString())),s.a.createElement("tr",null,s.a.createElement("td",{className:"report_td"}," SCORE"),s.a.createElement("td",{className:"report_td"},this.state.score.toLocaleString())))),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{id:"report_input",type:"text",required:!0,placeholder:"ENTER PILOT NAME",value:this.state.pilotName,onChange:this.handleChange}),s.a.createElement("button",{id:"submit_button",className:"brk-btn",type:"submit",value:"Submit"},"ENTER")))}}]),t}(s.a.Component),ge=6e4,Ee=700,fe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={redirect:!1,initialize:!0,game:{type:R.a.AUTO,width:"100%",height:Ee,physics:{default:"impact",impact:{setBounds:{x:0,y:0,width:ge,height:700,thickness:32}}},scene:{extend:{player:null,cursors:null,thrust:null,flares:null,bullets:null,lastFired:0,text:null,timer:0,damage:0,penalty:0,isFlying:!1,firingGun:!1,gameOver:!1},preload:function(){var e=this.cameras.main.width,t=this.cameras.main.height,a=this.add.graphics(),i=this.make.text({x:e/2,y:t/2-100,text:"Loading...",style:{font:"20px Orbitron",fill:"#ff0000"}});i.setOrigin(.5,.5);var s=this.make.text({x:e/2,y:t/2-5,text:"0%",style:{font:"18px Orbitron",fill:"#ff0000"}});s.setOrigin(.5,.5),this.load.on("progress",(function(t){s.setText(parseInt(100*t)+"%"),a.clear(),a.fillStyle(16711680,1),a.fillRect(e/2-250,280,500*t,30)})),this.load.on("complete",(function(){a.destroy(),i.destroy(),s.destroy()})),this.load.image("star","assets/star-1.png"),this.textures.addBase64("star",F.a),this.load.image("redGiant","assets/star-2.png"),this.textures.addBase64("redGiant",T.a),this.load.image("ship","assets/star-fighter.png"),this.textures.addBase64("ship",V.a),this.load.image("bullet","assets/bullet6.png"),this.textures.addBase64("bullet",L.a),this.load.image("jets","assets/blue.png"),this.textures.addBase64("jets",Z.a),this.load.image("flares","assets/yellow.png"),this.textures.addBase64("flares",Q.a),this.load.image("asteroid","assets/asteroid.png"),this.textures.addBase64("asteroid",P.a),this.load.image("mars","assets/mars.png"),this.textures.addBase64("mars",te.a),this.load.image("saturn","assets/saturn.png"),this.textures.addBase64("saturn",ie.a),this.load.image("arcadia","assets/arcadia-234.png"),this.textures.addBase64("arcadia",ne.a),this.load.image("arcadiaStationInside","assets/arcadia-station-inside.png"),this.textures.addBase64("arcadiaStationInside",J.a),this.load.spritesheet("marsStation",z.a,{frameWidth:3372,frameHeight:700}),this.load.spritesheet("arcadiaStation",$.a,{frameWidth:2947,frameHeight:700}),this.load.audio("rocket",le.a),this.load.audio("gun",ce.a),this.load.audio("crash",me.a)},create:function(){var e=this;this.missionReport=document.getElementById("mission_report"),this.missionReport.style.display="none";var t=new R.a.Class({Extends:R.a.GameObjects.Image,initialize:function(e){R.a.GameObjects.Image.call(this,e,0,0,"bullet"),this.speed=0,this.born=0},fire:function(e){e.flipX?(this.setPosition(e.x-120,e.y+10),this.speed=R.a.Math.GetSpeed(-2e3+e.vel.x,1)):(this.setPosition(e.x+120,e.y+10),this.speed=R.a.Math.GetSpeed(2e3+e.vel.x,1)),this.born=0},update:function(e,t){this.x+=this.speed*t,this.born+=t,this.born>2e3&&(this.setActive(!1),this.setVisible(!1))}});this.cameras.main.setBounds(0,0,ge,Ee),this.cursors=this.input.keyboard.createCursorKeys(),this.player=this.impact.add.sprite(200,350,"ship").setBodyScale(.7).setDepth(4),this.player.setMaxVelocity(1e3).setFriction(300,300).setPassiveCollision(),this.bullets=this.add.group({classType:t,runChildUpdate:!0});var a={key:"marsStationLights",frames:this.anims.generateFrameNumbers("marsStation",{start:0,end:6}),frameRate:3,repeat:-1};this.anims.create(a),this.marsStation=this.impact.add.sprite(1686,350,"marsStation").play("marsStationLights").setDepth(2);var i={key:"arcadiaStationLights",frames:this.anims.generateFrameNumbers("arcadiaStation",{start:0,end:4}),frameRate:3,repeat:-1};this.anims.create(i),this.arcadiaStation=this.impact.add.sprite(ge-1474,350,"arcadiaStation").play("arcadiaStationLights").setDepth(5),this.arcadiaStationInside=this.impact.add.sprite(ge-1474,350,"arcadiaStationInside").setDepth(3),this.mars=this.impact.add.sprite(1500,250,"mars").setDepth(1).setScrollFactor(.25).angle=180,this.saturn=this.impact.add.sprite(6e3,500,"saturn").setScale(.1).setDepth(1).setScrollFactor(.25).angle=350,this.arcadia=this.impact.add.sprite(15e3,800,"arcadia").setScale(1).setDepth(1).setScrollFactor(.25).angle=0;var s={font:"20px Orbitron",fill:"#ff0000"};this.timeText=this.add.text(20,10,"",s).setDepth(6).setScrollFactor(0),this.accelerationText=this.add.text(this.cameras.main.width-350,10,"",s).setDepth(6).setScrollFactor(0),this.damageText=this.add.text(20,660,"",s).setDepth(6).setScrollFactor(0),this.penaltyText=this.add.text(this.cameras.main.width-350,660,"",s).setDepth(6).setScrollFactor(0),this.distanceText=this.add.text(this.cameras.main.width/2-50,660,"DISTANCE",s).setDepth(6).setScrollFactor(0);var n=function(t,a,i,s){var n=new R.a.Geom.Line(t,a,i,s);e.add.graphics({lineStyle:{width:4,color:16711680}}).strokeLineShape(n).setDepth(6).setScrollFactor(0)},r=this.add.graphics({lineStyle:{width:2,color:65280},fillStyle:{color:16711680}}),l=new R.a.Geom.Triangle(this.cameras.main.width/2-210,620,this.cameras.main.width/2-200,635,this.cameras.main.width/2-190,620);r.fillTriangleShape(l).setDepth(6).setScrollFactor(-.007),n(0,50,350,50),n(this.cameras.main.width-350,50,this.cameras.main.width,50),n(0,645,350,645),n(this.cameras.main.width-350,645,this.cameras.main.width,645),n(350,50,400,0),n(this.cameras.main.width-400,0,this.cameras.main.width-350,50),n(350,645,400,705),n(this.cameras.main.width-400,705,this.cameras.main.width-350,645),n(this.cameras.main.width/2-200,645,this.cameras.main.width/2+200,645);this.player.setCollideCallback((function(t,a,i){!1===e.gameOver&&(e.damage+=1e3,e.cameras.main.flash(500,"25","000","000",!0),e.crashSound.play())}),this),this.rocketSound=this.sound.add("rocket",{volume:1,loop:!0}),this.gunSound=this.sound.add("gun",{volume:1,loop:!0}),this.crashSound=this.sound.add("crash",{volume:1,loop:!1}),this.timer=this.time.addEvent({delay:1e6,callbackScope:this}),function(){var t=e.add.group({key:"star",frameQuantity:ge/4});t.createMultiple({key:"redGiant",frameQuantity:ge/200});var a=new R.a.Geom.Rectangle(0,0,ge,1e3);R.a.Actions.RandomRectangle(t.getChildren(),a),t.children.iterate((function(e,t){var a=Math.max(.3,Math.random());"redGiant"===e.texture.key&&(a=.1),e.setScrollFactor(a)}),e)}(),function(){for(var t=0;t<ge/500;t++){var a=R.a.Math.Between(4e3,ge-4e3),i=R.a.Math.Between(100,300),s=R.a.Math.Between(0,360),n=R.a.Math.Between(1,2),r=e.impact.add.sprite(a,i,"asteroid").setTypeA().setCheckAgainstA().setActiveCollision().setMaxVelocity(300);r.setActiveCollision().setBounce(1).setDepth(3).setBodyScale(.25*n),r.setVelocity(R.a.Math.Between(20,60),R.a.Math.Between(20,60)),r.angle=s,Math.random()>.5?r.vel.x*=-1:r.vel.y*=-1}}(),e.thrust=e.add.particles("jets").setDepth(3).createEmitter({x:200,y:350,angle:{min:160,max:200},scale:{start:.2,end:0},blendMode:"ADD",lifespan:600,on:!1}),e.flares=e.add.particles("flares").setDepth(3).createEmitter({x:200,y:350,angle:{min:170,max:190},scale:{start:.4,end:.2},blendMode:"ADD",lifespan:20,on:!1})},update:function(e,t){if(!this.gameOver){(this.player.vel.x>0||this.player.vel.x<0)&&!1===this.isFlying&&(this.rocketSound.play(),this.isFlying=!0),0===this.player.vel.x&&(this.rocketSound.stop(),this.isFlying=!1);var a=Math.floor(this.timer.getElapsed());if(this.penalty=a+this.damage,this.timeText.setText("TIME >> ".concat(r(a))),this.accelerationText.setText("ACCELERATION >> ".concat((50*this.player.vel.x).toLocaleString())),this.damageText.setText("DAMAGE >> ".concat(this.damage.toLocaleString())),this.penaltyText.setText("PENALTY >> ".concat(this.penalty.toLocaleString())),this.player.x>ge-1e3){this.gameOver=!0,this.sound.stopAll(),this.missionReport.style.display="block";var i=1e6-this.penalty,s={time:r(a),damage:this.damage,penalty:this.penalty,score:i};w.EventEmitter.dispatch("updateScore",s),this.missionReport.style.display="block"}if(this.thrust.setPosition(this.player.x-80,this.player.y+4),this.cursors.left.isDown?(this.thrust.setPosition(this.player.x+80,this.player.y+4),this.player.setAccelerationX(-1200),this.player.flipX=!0):this.cursors.right.isDown?(this.player.setAccelerationX(1200),this.player.flipX=!1):this.player.setAccelerationX(0),this.cursors.up.isDown?this.player.setAccelerationY(-2e3):this.cursors.down.isDown?this.player.setAccelerationY(2e3):this.player.setAccelerationY(0),this.player.vel.x<0?(this.thrust.setPosition(this.thrust.x.propertyValue+=this.player.flipX?16:-16,this.thrust.y.propertyValue),this.thrust.setSpeed(this.player.vel.x/2),this.thrust.emitParticle(16)):this.player.vel.x>0&&(this.thrust.setPosition(this.thrust.x.propertyValue+=this.player.flipX?16:-16,this.thrust.y.propertyValue),this.thrust.setSpeed(this.player.vel.x/2),this.thrust.emitParticle(16)),this.cursors.space.isDown&&e>this.lastFired){var n=this.bullets.get();n.setActive(!0),n.setVisible(!0),n.setDepth(3).setScale(.75),n&&(n.fire(this.player),this.lastFired=e+100),!1===this.firingGun&&(this.gunSound.play(),this.firingGun=!0)}this.cursors.space.isDown||(this.gunSound.stop(),this.firingGun=!1),this.bullets.children.each((function(e){e.active&&(this.flares.setPosition(e.x,e.y),this.flares.setSpeed(e.speed+-500),this.flares.emitParticle(1))}),this),this.cameras.main.scrollX=this.player.x-400}function r(e){var t=Math.floor(e/1e3),a=e%1e3;return"".concat(t.toLocaleString(),":").concat(a.toLocaleString().substr(0,2))}}}}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.hideStars()}},{key:"render",value:function(){var e=this.state,t=e.initialize,a=e.game;return s.a.createElement(s.a.Fragment,null,s.a.createElement(G.a,{id:"phaserGame",game:a,initialize:t}),s.a.createElement(Ae,Object.assign({},this.props,{postScore:this.props.postScore})),s.a.createElement("div",{id:"red_line_button"}))}}]),t}(i.Component);function be(){return s.a.createElement("div",{className:"sk-wave",id:"pre_loader"},s.a.createElement("div",{className:"sk-rect sk-rect1"}),s.a.createElement("div",{className:"sk-rect sk-rect2"}),s.a.createElement("div",{className:"sk-rect sk-rect3"}),s.a.createElement("div",{className:"sk-rect sk-rect4"}),s.a.createElement("div",{className:"sk-rect sk-rect5"}))}var ye=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.showStars()}},{key:"renderTableData",value:function(e){return this.props.scores.map((function(t){var a=t.id,i=t.display_name,n=t.high_score;return s.a.createElement("tr",{key:a},s.a.createElement("td",{className:"rank"},e),s.a.createElement("td",null,i),s.a.createElement("td",null,n.toLocaleString()),e++)}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"HIGH SCORES"),";",s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",null,"RANK"),s.a.createElement("th",null,"PILOT"),s.a.createElement("th",null,"HIGHEST SCORE")),this.renderTableData(1))),this.props.scores.length>0?null:s.a.createElement(be,null))}}]),t}(s.a.Component);function Se(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{id:"not_found"},"404"),s.a.createElement("h1",{id:"lost"},"LOST IN SPACE"))}var ve="https://agile-atoll-75530.herokuapp.com/api/v1/scores",xe=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(h.a)(t).call(this))).hideStars=function(){document.getElementById("star_field").style.visibility="hidden"},e.showStars=function(){document.getElementById("star_field").style.visibility="visible"},e.postScore=function(t){var a=t.pilotName,i=t.score;fetch(ve,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({display_name:a,high_score:i})}),fetch(ve).then((function(e){return e.json()})).then((function(t){return e.setState({scores:t})}))},e.state={scores:[]},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(ve).then((function(e){return e.json()})).then((function(t){return e.setState({scores:t})}))}},{key:"render",value:function(){var e=this;return s.a.createElement(d.a,null,s.a.createElement(p,null),s.a.createElement(N,null),s.a.createElement(u.c,null,s.a.createElement(u.a,{path:"/",exact:!0,render:function(t){return s.a.createElement(k,Object.assign({},t,{showStars:e.showStars}))}}),s.a.createElement(u.a,{path:"/game",exact:!0,render:function(t){return s.a.createElement(fe,Object.assign({},t,{hideStars:e.hideStars,postScore:e.postScore}))}}),s.a.createElement(u.a,{path:"/scores",exact:!0,render:function(t){return s.a.createElement(ye,Object.assign({},t,{scores:e.state.scores,showStars:e.showStars}))}}),s.a.createElement(u.a,{path:"*",component:Se})))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},173:function(e,t){e.exports={EventEmitter:{events:{},dispatch:function(e,t){this.events[e]&&this.events[e].forEach((function(e){return e(t)}))},subscribe:function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}}}},554:function(e,t,a){e.exports=a.p+"static/media/github-logo-red.fddd4e2e.png"},555:function(e,t,a){e.exports=a.p+"static/media/Wolf-and-Raven-On-the-Run.05dd50b3.mp3"},556:function(e,t,a){e.exports=a.p+"static/media/M.A.D.E.S-1989.7b114201.mp3"},557:function(e,t,a){e.exports=a.p+"static/media/Stilz-See-You-Soon.ae822974.mp3"},558:function(e,t,a){e.exports=a.p+"static/media/Neuroc-Jacked-In.39ebdd62.mp3"},561:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAMFBMVEUICAhMaXFYWFgmJiYWFhYDAwMLCws1NTWVlZVnZ2ctLS26uroGBgYDAwMGBgb////RvF0IAAAAD3RSTlMIAFgmFgMLNZVnLboGAgUL6Sr1AAAACXBIWXMAAAsSAAALEgHS3X78AAAAQklEQVQImVWMSQrAMAwDJW+JszT//21poYbqNIhhwNqDjoC/uEyH2iLo1iSlmYNQ6bOLAoyR88wc8Xs/d1fhqu4mb1IqAa0GNR90AAAAAElFTkSuQmCC"},562:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAMFBMVEVcNjZMaXHEdHQ3ICAXDg4JBQUeEhJ9SkprPz/khoYSCgoXDg4JBQUJBQUSCgr/lpbhhkLCAAAAD3RSTlNcAMQ3FwkefWvkEhYFCA9MMLC7AAAACXBIWXMAAAsSAAALEgHS3X78AAAARElEQVQImUWMSQ4AIQzDkrYUyjL9/2/RcICcrMgyePdjMbdysCsatBMsWiWk6gINkpkCA71FZkbz947nzlv4TneZj0luWuAB51qT3osAAAAASUVORK5CYII="},563:function(e,t){e.exports="data:image/png;base64,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"},564:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAMCAYAAAADFL+5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ0MThCMTAzQkE5NDExRTRBNTFGQ0ZFOTA4ODE1MzMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ0MThCMTA0QkE5NDExRTRBNTFGQ0ZFOTA4ODE1MzMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDQxOEIxMDFCQTk0MTFFNEE1MUZDRkU5MDg4MTUzMzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDQxOEIxMDJCQTk0MTFFNEE1MUZDRkU5MDg4MTUzMzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz71S4pLAAAAmklEQVR42sRU2w3AIAgE4yB0M0dxFDerm9BSNal9aGo13o8mKHegHDIzCBbEsHmAgTa4QmxlRllRBAi5uZJZgq6wPhPlogh9q1SIjRz2p4hvZKU8uSMwu5BzZ3SqPif/S3y9H4UcuYOI9OyqfrkH3nOp8eTlnAomQ1U/TzfQ1w7QcPKbDzxPQqcxhDCGEMcw+cB0I8LZVrwJMAClH0mN0fmMWQAAAABJRU5ErkJggg=="},565:function(e,t,a){e.exports=a.p+"static/media/blue.431b99d2.png"},566:function(e,t,a){e.exports=a.p+"static/media/yellow.11752848.png"},567:function(e,t,a){e.exports=a.p+"static/media/asteroid.3eae963b.png"},568:function(e,t,a){e.exports=a.p+"static/media/mars-station-sprite-sheet.4943b72e.png"},569:function(e,t,a){e.exports=a.p+"static/media/arcadia-station-interior.6b3a1bff.png"},570:function(e,t,a){e.exports=a.p+"static/media/arcadia-station-sprite-sheet.38105075.png"},571:function(e,t,a){e.exports=a.p+"static/media/mars.caf029d2.png"},572:function(e,t,a){e.exports=a.p+"static/media/saturn.4f6e485a.png"},573:function(e,t,a){e.exports=a.p+"static/media/arcadia-234.293d4f28.png"},574:function(e,t,a){e.exports=a.p+"static/media/rocket.8870999c.mp3"},575:function(e,t,a){e.exports=a.p+"static/media/gun.fba73273.mp3"},576:function(e,t,a){e.exports=a.p+"static/media/crash.6fd30c28.mp3"},577:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAB9CAMAAABjwGEcAAAAZlBMVEVMaXH/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AACK/aJ9AAAAIXRSTlMAMPz54NBgQO+gahCy4vv4kL951O4g3IDz+v7YcLC1mFCu8hf/AAAACXBIWXMAAAsSAAALEgHS3X78AAACpUlEQVR4nO3di07bQBRFUQdKoHVKUl59l87//2TVqggFEs+dGUf4nNn7D+Il0JFiuAMREZFT4y6tAe2ry7vrhHpXjZ/O0t9Q76ebbfof6p20ur1OCfWeGndpL9T9+zfgUO+ppwGHej89DzjUO2lvwKHeQy8HHOr+vR5wqJt3cMChbt2RAYe6b8cHHOqmTQ441C3LDDjU/coPONTdigw41K0KDjjUfYoPONRdKhlwqFtUOOBQN6h4wKGuXs2AQ126ygGHunDVAw511VoGHOqatQ041AVrHnCoy/V5RnHUNVs3q9/3/ggFa1XnJ12xNnXMNWtRx1y1enXMdatVx1y5OnXMtatRx1y9cnXM9StVx9yhMnXMPSpRx9yluDrmPkXVMXcqpt6z+Xgp2Gr6M0XUp83vFZ9K+Ovh8eOXK72+fmhVnzZfbQUfytU287PwbB76Vbi4zhrVM+bnmk/lPKSuat6q7mkeU9c1b1N3NY+oK5u3qPua59W1zevVnc1z6urmtere5tPq+uZ16u7mU+oO5jXq/ubH1T3My9V7MD+m7mJeqt6H+WF1H/My9V7MD6k7mZeo92P+Wt3LPK7ek/lLdTfzqHpf5vvqfuYppYB6b+Z76r8f3/u1G3Pqmfdkfl0Y9nP6M9vH/xwgIiIiIiIiIiIiIiIiItXW39/5dcG3uNNtvi3gBZOZy7zEQ8NmpntLiyn3uh75qWMeykod82BG6piHs1HHvCATdcyLslDHvDADdcyLk1fHvCJxdcyrklbHvDJhdcyrk1XHvCFRdcyb2iyAsDzMiYiIiIiIiIiIiIiIiIhoia0eZvob94fg+XF682a8yRA7P05O5qiLNPPtFdQFmv3eDuqL7wQ3llBfeCe5q4X6svtxklNjmWNeREREb90wDH8AyikgRt97dHcAAAAASUVORK5CYII="},580:function(e,t,a){e.exports=a(1494)},585:function(e,t,a){},586:function(e,t,a){}},[[580,1,2]]]);
//# sourceMappingURL=main.602dd1f9.chunk.js.map