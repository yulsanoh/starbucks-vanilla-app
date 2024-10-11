var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // 아래의 player는 우리가 html에서 id로 'player'라고 설정한 요소를 자동으로 찾아줌
  // 이는 '#player'와 같이 표기하지 않아도 됨
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", // 최초 재생할 영상 ID
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8",
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
