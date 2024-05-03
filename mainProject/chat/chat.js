let i = 3;
//تابع فرستادن پیام اینپوت به داخل صفحه چت
function sendText()
{
  document.getElementById('send').addEventListener('click',sendMessage);
  function sendMessage(){
      if(document.querySelector('.textInput').value!=''){
          let textMessage = document.querySelector('.textInput').value;
      
          let creatDiv = document.createElement('div');
          creatDiv.setAttribute('class', ' fs-bold border border-dark w-25 m-3 text-center rounded shadow');
  
          let text = document.createElement('p');
          text.setAttribute('class', 'm-2');
      
          text.innerHTML = textMessage;
          creatDiv.appendChild(text);
          document.querySelector('.textInput').value = "";
      
          let chat = document.querySelector('.chat');
          chat.appendChild(creatDiv);
      }
      else{
          alert('Please say something');
      }
     
  }
}
sendText();


//تایع اینکه دیو اضافه کردن مخاطب که داخل اچ تی ام ال ساخته شده رو نشون بده
document.getElementById('addContactIcon').addEventListener('click',addContact);
function addContact()
{
    document.querySelector('.addContact').classList.toggle('d-none');
}


 //تایع اینکه دیو ویرایش کردن مخاطب که داخل اچ تی ام ال ساخته شده رو نشون بده
function showEdit()
{
  document.getElementById('editContactIcon').addEventListener('click',editContact);
  function editContact()
  {
      document.querySelector('.editContact').classList.toggle('d-none');
  }

}
showEdit();



console.log(document.getElementById('2'));
function realEditName()
{
  document.getElementById('1').addEventListener('click',fu);
  function fu(){
    let value  = document.querySelector('.newUserName').value;
    document.getElementById(`${i}`).innerHTML = value;
    document.querySelector('.personName').innerHTML = value;
  }
}
realEditName();





//تایع اینکه وقتی روی دکمه اد مخاطب داخل دیو (اضافه کردن مخاطب) کلید شد مخاطب بسازه  و صفحه چت مخاطب رو بسازه 

document.getElementById('addContactPage').addEventListener('click',addContactPage);
function addContactPage(){
    if(document.querySelector('.userName').value!=''&& document.querySelector('.userphone').value!='')
    {
      //گرفتن مقادیر اینپوت ها و ساختن مخاطب
    let userName = document.querySelector('.userName').value;

    let creatDiv = document.createElement('div');
    creatDiv.setAttribute('class', ' fContact mt-3 h-15 d-flex align-items-center  justify-content-center bg-light border border-dark rounded-2 shadow');

    let creatI = document.createElement('i');
    creatI.setAttribute('class', 'bi bi-person-circle mx-2 fs-2');

    let creatP = document.createElement('p');
    creatP.setAttribute('class', 'fw-bold mt-3 pn');
    creatP.setAttribute('id',`${++i}`);
    


    creatP.innerHTML = userName;

    creatDiv.appendChild(creatI);
    creatDiv.appendChild(creatP);

    document.querySelector('.contact').appendChild(creatDiv);

    document.querySelector('.userName').value = "";
    document.querySelector('.userphone').value = "";

    //ساختن صفحه چت برای هر مخاطب هنگام کلیک کردن
	creatDiv.addEventListener('click',() => {

		let divLeft = document.querySelector('.left');
		divLeft.innerHTML = `<div class="editContact d-none   p-5 addContact border border-2  border-dark d-flex align-items-center justify-content-center  flex-column ms-3 rounded">
    <p class="fs-5 text-light"><i class="fs-5 m-2 bi bi-pencil"></i>Edit Contact </p>
    <form action="">
        <p><input class=" p-3 text-center m-2 rounded shadow" type="text" name="" id="" placeholder=" type your phone number"></p>
        <p><input class=" newUserName p-3 text-center m-2 rounded shadow" type="text" name="" id="" placeholder=" type your full name"></p>
    </form>
    <button id="1" class=" bg-info mt-3 btn text-center m-2 shadow fw-bold " >Edit Contact</button>
    </div>
    <div class=" mt- chatup  h-15 d-flex align-items-center  justify-content-between bg-light border border-dark rounded shadow">
		<i id="editContactIcon" class="bi bi-pencil-square fs-3 mx-3"></i>
		<div class="center d-flex align-items-center  justify-content-center">
		<img src="" alt="">
		<i class="bi bi-person-circle mx-2 fs-2"></i>
		<p class=" personName fw-bold mt-3">person Name</p>
		<img src="" alt="">
	   </div>
	   <i class="bi bi-arrow-clockwise fs-3 mx-3"></i>
	</div>
	<div class="wrapper">
		<div  class= "chat">
			<div class="chatPm fs-bold border border-dark w-25 m-3 text-center rounded shadow ">
				<p class="m-2">Hellow world</p>
			</div>
			
		</div>
	</div>
	<div class="downchat mt-3 h-15 d-flex align-items-center  border border-dark justify-content-between bg-light rounded shadow">
		<input id="textMessage" type="text" class=" textInput border border-none ">
		<button id="startRecording" class="btn  mx-2" ><i class="bi bi-mic-fill fs-5"></i></button>
		<button id="emoji" class="btn  mx-2 "><i  class="bi bi-emoji-neutral-fill fs-5"></i></button>
		<button id="send" class="btn  mx-2  " ><i class="bi bi-send-fill fs-5"></i></button>
	</div>
`;
//ریختن اسم مخاطب به بالای صفحه چت 
document.querySelector('.personName').innerText = creatP.innerText ;
i = creatP.id ;
console.log(creatP.id);
//عملیات کار کردن دکمه هایی که جدید ساخته می شود
//دکمه های جدیدمون که ساخته میشه با فراخوانی تابع ها هماهنگ میکنیم با کدهاشون 
sendAudio();
senEmojis();
sendText();
showEdit();
realEditName();



	});

    }
    else{
        alert('Please add something');
    }

}





//داخل تابع ریخیتم که وقتی صفحه چت جدید می سازیم تابع ها رو با دکمه ها ست کنیم 
function sendAudio()
{
  document.getElementById("startRecording").addEventListener("click", initFunction);
  let isRecording = document.getElementById("isRecording");
  function initFunction() {
  
  let chat = document.querySelector('.chat');
  let audioFile = document.createElement('audio');
  audioFile.setAttribute('id','audioElement');
  audioFile.setAttribute('class','m-3');
  audioFile.controls = true;
  
  // audioFile.setAttribute('controls');
  
  // creatDiv.appendChild(audioFile);
  // chat.appendChild(creatDiv);
  
  
    // Display recording
    async function getUserMedia(constraints) {
      if (window.navigator.mediaDevices) {
        return window.navigator.mediaDevices.getUserMedia(constraints);
      }
      let legacyApi =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;
      if (legacyApi) {
        return new Promise(function (resolve, reject) {
          legacyApi.bind(window.navigator)(constraints, resolve, reject);
        });
      } else {
        alert("user api not supported");
      }
    }
    //
    let audioChunks = [];
    let rec;
    function handlerFunction(stream) {
      rec = new MediaRecorder(stream);
      rec.start();
      rec.ondataavailable = (e) => {
        audioChunks.push(e.data);
        if (rec.state == "inactive") {
          let blob = new Blob(audioChunks, { type: "audio/mp3" });
          console.log(blob);
          document.getElementById("audioElement").src = URL.createObjectURL(blob);
        }
      };
    }
    function startusingBrowserMicrophone(boolean) {
      getUserMedia({ audio: boolean }).then((stream) => {
        handlerFunction(stream);
      });
    }
    startusingBrowserMicrophone(true);
    // Stoping handler
    document.getElementById("startRecording").addEventListener("click", (e) => {
      rec.stop();
      chat.appendChild(audioFile);
  
    });
  
  }
  
}
sendAudio();

//داخل تابع ریخیتم که وقتی صفحه چت جدید می سازیم تابع ها رو با دکمه ها ست کنیم 
function senEmojis()
{
  document.getElementById('emoji').addEventListener("click", emojiHandler);
  function emojiHandler(){
      document.getElementById('emojiList').classList.toggle("d-none");
  }
}
senEmojis();
  
  
  function creatEmoji(){
  
    const emojiez = [
      '&#128512;',
      '&#128512;',
      '&#128512;',
      '&#128512;',
      '&#128512;',
      '&#128512;',
      '&#128512;',
      '&#128512;',
      '&#128512;',
      '&#128512;',
      '&#128512;',
      '&#128512;',
      '&#128513;',
      '&#128514;',
      '&#128515;',
      '&#128516;',
      '&#128517;',
      '&#128518;',
      '&#128519;',
      '&#128520;',
      '&#128521;',
      '&#128522;',
      '&#128523;',
      '&#128524;',
      '&#128525;',
      '&#128526;',
      '&#128527;',
      '&#128528;',
      '&#128529;',
      '&#128530;',
      ]
    let econtainer = document.getElementById('emojiList');
    
    for (let x of emojiez){
      let newEmoji = document.createElement('p');
      newEmoji.classList.add('fs-5', 'mx-1','cursor');
      newEmoji.innerHTML = x;
  
      newEmoji.addEventListener('click', () => {
        let inputField = document.getElementById('textMessage');
        inputField.value += newEmoji.textContent;
      })
  
      econtainer.appendChild(newEmoji);
  
    }
  }
  
  creatEmoji();
  

