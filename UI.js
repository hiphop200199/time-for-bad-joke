document.addEventListener("DOMContentLoaded",function(){
      let jokes=["老鼠站不穩叫什麼?-->滑鼠","我知道大家都很想我，因為他們每天都會說中午要吃什麼...","i have a key,you have a value,oh, it`s Cookie!","你知道電腦怎麼句點人家嗎?他們分號人家...","你知道哪間科技公司最有邏輯嗎?羅技唷，因為他們是'logi''tech' ...","012345678...無nine..."]; 
      let bgm=new Audio("cyberpunk.ogg");
      let soundEffect=new Audio("typing.ogg");
      let computer=document.querySelector(".computer");
      let screenPage=document.querySelector(".screen-up");
      let startBtn=document.querySelector(".web-button");
      let playstage=document.getElementById("playstage");
      let offstage=document.getElementById("offstage");
      let radio=document.getElementById("radio");
      startBtn.addEventListener("click",function(){

          soundEffect.play();
          screenPage.innerHTML=jokes[Math.floor(Math.random()*(jokes.length-1))];
         
      })
      playstage.addEventListener("drop",dropAndPlay);
      playstage.addEventListener("dragover",allowDrop);
      offstage.addEventListener("drop",dropAndPause);
      offstage.addEventListener("dragover",allowDrop);
      radio.addEventListener("dragstart",drag);
      function drag(event) {
        event.dataTransfer.setData("text", event.target.id);
      }
      function dropAndPlay(event) {
        event.preventDefault();
        let data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
        document.getElementById(data).style.left = "calc(1.5vmax - 3px)";
        document.getElementById(data).style.top = "calc(1.5vmax - 3px)";
        bgm.autoplay=true;
        bgm.loop=true;
        bgm.load();
        bgm.play();
        computer.style.animation="beatsOhYeah 2.6s infinite";
       
      }
      function dropAndPause(event) {
        event.preventDefault();
        let data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
        document.getElementById(data).style.left = "calc(1.5vmax - 3px)";
        document.getElementById(data).style.top = "calc(1.5vmax - 3px)";
        bgm.pause();
        computer.style.animation="none";
      }
      function allowDrop(event) {
        event.preventDefault();
      }
});  