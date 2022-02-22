(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(67),c=a.n(i),r=(a(80),a(81),a(82),a(68)),s=a(69),l=a(73),d=a(70),h=a(5),m=a(74),u=a(32),v=a.n(u),k=a(184),p=a(185),f=a(186),S=a(187),g=a(188),T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={worker:"",token:"",identity:"",roomName:"",roomNameErr:!1,previewTracks:null,localMediaAvailable:!1,hasJoinedRoom:!1,activeRoom:null,screenTrack:null},a.joinRoom=a.joinRoom.bind(Object(h.a)(a)),a.handleRoomNameChange=a.handleRoomNameChange.bind(Object(h.a)(a)),a.roomJoined=a.roomJoined.bind(Object(h.a)(a)),a.onPreviewVideo=a.onPreviewVideo.bind(Object(h.a)(a)),a.onPreviewStop=a.onPreviewStop.bind(Object(h.a)(a)),a.onLeaveRoom=a.onLeaveRoom.bind(Object(h.a)(a)),a.onShareScreen=a.onShareScreen.bind(Object(h.a)(a)),a.onStopShareScreen=a.onStopShareScreen.bind(Object(h.a)(a)),a.detachParticipantTracks=a.detachParticipantTracks.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleRoomNameChange",value:function(e){var t=e.target.value;this.setState({identity:t})}},{key:"joinRoom",value:function(){console.log("Joining room '"+this.state.roomName+"'...");var e={name:this.state.roomName};this.state.previewTracks&&(e.tracks=this.state.previewTracks),v.a.connect(this.state.token,e).then(this.roomJoined,function(e){alert("Could not connect to Twilio: "+e.message)})}},{key:"getScreenShare",value:function(){return navigator.getDisplayMedia?navigator.getDisplayMedia({video:!0}):navigator.mediaDevices.getDisplayMedia?navigator.mediaDevices.getDisplayMedia({video:!0}):navigator.mediaDevices.getUserMedia({video:{mediaSource:"screen"}})}},{key:"attachTracks",value:function(e,t){e.forEach(function(e){t.appendChild(e.track.attach())})}},{key:"attachParticipantTracks",value:function(e,t){var a=Array.from(e.tracks.values());this.attachTracks(a,t)}},{key:"detachTracks",value:function(e){e.forEach(function(e){e.detach().forEach(function(e){e.remove()})})}},{key:"detachParticipantTracks",value:function(e){var t=Array.from(e.tracks.values()),a=this.refs.localMedia;a.querySelector("video")||this.detachParticipantTracks({tracks:t},a)}},{key:"onPreviewVideo",value:function(){var e=this;(this.state.previewTracks?Promise.resolve(this.state.previewTracks):v.a.createLocalTracks()).then(function(t){e.setState({previewTracks:t});var a=e.refs.localMedia;a.querySelector("video")||e.attachParticipantTracks({tracks:t},a)},function(e){console.error("Unable to access local media",e)})}},{key:"onPreviewStop",value:function(){this.detachTracks(this.state.previewTracks),this.setState({previewTracks:null})}},{key:"onShareScreen",value:function(){var e=this;this.getScreenShare().then(function(t){e.setState({screenTrack:t.getVideoTracks()[0]}),e.state.activeRoom.localParticipant.publishTrack(t.getVideoTracks()[0])})}},{key:"onStopShareScreen",value:function(){this.state.activeRoom.localParticipant.unpublishTrack(this.state.screenTrack),this.setState({screenTrack:null})}},{key:"onCreateTask",value:function(e,t,a,n){fetch("https://".concat("videotesting-8801.twil.io","/createvideotask?worker=").concat(encodeURIComponent(a),"&customerName=").concat(t,"&roomName=").concat(e,"&phoneNumber=").concat(n)).then(function(e){return e.json()}).then(function(e){console.log("task data",e)})}},{key:"roomJoined",value:function(e){var t=this;console.log("Joined as '"+this.state.identity+"'"),this.setState({activeRoom:e,localMediaAvailable:!0,hasJoinedRoom:!0}),this.onCreateTask(this.state.roomName,this.state.roomName,localStorage.worker,localStorage.number);var a=this.refs.localMedia;a.querySelector("video")||this.attachParticipantTracks(e.localParticipant,a),a.querySelector("video")||this.attachParticipantTracks(e.localParticipant,a),e.participants.forEach(function(e){console.log("Already in Room: '"+e.identity+"'");var a=t.refs.remoteMedia;t.attachParticipantTracks(e,a)}),e.on("participantConnected",function(e){console.log("Joining: '"+e.identity+"'")}),e.on("trackAdded",function(e,a){console.log(a.identity+" added track: "+e.kind);var n=t.refs.remoteMedia;t.attachTracks([e],n)}),e.on("trackRemoved",function(e,a){console.log(a.identity+" removed track: "+e.kind),t.detachTracks([e])}),e.on("participantDisconnected",function(e){console.log("Participant '"+e.identity+"' left the room"),t.detachParticipantTracks(e)}),e.on("disconnected",function(){t.state.previewTracks&&t.state.previewTracks.forEach(function(e){e.stop()}),t.detachParticipantTracks(e.localParticipant),e.participants.forEach(t.detachParticipantTracks),t.setState({activeRoom:null,hasJoinedRoom:!1,previewTracks:null,localMediaAvailable:!1})})}},{key:"onLeaveRoom",value:function(){this.state.activeRoom.disconnect()}},{key:"componentDidMount",value:function(){var e=this;fetch("https://".concat("videotesting-8801.twil.io","/flexvideotokenizer?Identity=").concat(this.state.identity)).then(function(e){return e.json()}).then(function(t){console.log("data:",t),e.setState({token:t.token,identity:t.identity,roomName:Date.now()})})}},{key:"render",value:function(){var e,t,a=this.state.hasJoinedRoom?o.a.createElement(k.a,{color:"danger",onClick:this.onLeaveRoom},"Hang Up"):o.a.createElement("div",null,o.a.createElement(k.a,{color:"success",onClick:this.joinRoom},"Start Video"));return e=this.state.hasJoinedRoom&&!this.state.screenTrack?o.a.createElement(k.a,{color:"success",onClick:this.onShareScreen},"Share Screen"):this.state.hasJoinedRoom&&this.state.screenTrack?o.a.createElement(k.a,{color:"danger",onClick:this.onStopShareScreen},"Stop Sharing"):null,t=this.state.previewTracks&&!this.state.hasJoinedRoom?o.a.createElement(k.a,{onClick:this.onPreviewStop},"Stop Preview"):this.state.hasJoinedRoom?null:o.a.createElement(k.a,{onClick:this.onPreviewVideo},"Preview Video"),o.a.createElement("div",null,o.a.createElement(p.a,{style:{marginTop:10}},o.a.createElement(f.a,{md:"12"},o.a.createElement("div",{className:"remoteContainer",ref:"remoteMedia",id:"remote-media"}))),o.a.createElement(p.a,null,o.a.createElement(f.a,{md:"6",className:"text-center"},o.a.createElement("div",{className:"preview"},o.a.createElement("div",{ref:"localMedia"})),t)),o.a.createElement(S.a,null,o.a.createElement(p.a,null,o.a.createElement(f.a,{md:"4"},o.a.createElement("br",null),this.state.hasJoinedRoom?null:o.a.createElement(g.a,{value:this.state.identity?this.state.identity:"",placeholder:"Customer Name",onChange:this.handleRoomNameChange}),o.a.createElement("br",null),o.a.createElement(p.a,null,a,o.a.createElement("span",null,"\xa0"),e)))))}}]),t}(n.Component);var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,t,a){e.exports=a(182)},80:function(e,t,a){},81:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},82:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.f427b94d.chunk.js.map