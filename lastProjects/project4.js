// document.querySelector('.kh').style.color = 'white';
// let  a = document.querySelector('.bu1').addEventListener('click', salam);
// function salam(){
//     alert("salam")
//     document.querySelector('.t1').innerHTML = document.querySelector('.in1').innerHTML;
// }
// document.querySelector('button').addEventListener('click', refresh);
// function refresh(){
//     // let a  = String(document.querySelector('.in1').value);
//     document.querySelector('.t1').innerHTML= 

// }
// document.querySelector('button').addEventListener('click', refresh);
// function refresh(){
//     let b = document.createElement('td');
//     b.innerHTML = 'ehite';
//     document.querySelector('.tb1').appendChild(b);

// }
//  let aa  = document.querySelector('.in1');
// document.querySelector('button').addEventListener('click', refresh);
// function refresh(){

//     for (var i = 0; i < 6; i++) {

//         let b = document.createElement('td');
//             b.innerHTML =  aa.value;
//             document.querySelector('.tb1').appendChild(b);
//     }
//         let b = document.createElement('tr');
//         document.querySelector('.tb1').appendChild(b);






//     // let b = document.createElement('tr');
//     // let a = document.createElement('td');
//     // b.innerHTML = 'ehite';
//     // document.querySelector('.tb1').appendChild(b);
//     // document.querySelector('tr').appendChild(a);


// }
// let aa  = document.querySelector('.in1');
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  }

  const setg1 = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('tr').style.backgroundColor = "#" + randomColor;
  }
  
 

document.querySelector('button').addEventListener('click', refresh);
function refresh(){
    setBg();
    setg1();
    const randomColor = Math.floor(Math.random()*16777215).toString(16);



    let studentId = document.createElement('td');
    studentId.innerHTML =  document.querySelector('.i1').value;
    document.querySelector('.tb1').appendChild(studentId);
    studentId.style.backgroundColor = "#" + randomColor;
    document.querySelector('.i1').value = " ";

      


    // document.querySelector('td').style['background-color']= 'rgb(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255))';
    // document.querySelector('td').style['background-color']= 'rgb()';






    let meliId = document.createElement('td');
    meliId.innerHTML =  document.querySelector('.i2').value;
    document.querySelector('.tb1').appendChild(meliId);
    meliId.style.backgroundColor = "#" + randomColor;
    document.querySelector('.i2').value = " ";


    let name = document.createElement('td');
    name.innerHTML =  document.querySelector('.i3').value;
    document.querySelector('.tb1').appendChild(name);
    name.style.backgroundColor = "#" + randomColor;
    document.querySelector('.i3').value = " ";

 

    let lastName = document.createElement('td');
    lastName.innerHTML =  document.querySelector('.i4').value;
    document.querySelector('.tb1').appendChild(lastName);
    lastName.style.backgroundColor = "#" + randomColor;
    document.querySelector('.i4').value = " ";


    let picture = document.createElement('td');
    picture.innerHTML =  document.querySelector('.i5').value;
    document.querySelector('.tb1').appendChild(picture);
    picture.style.backgroundColor = "#" + randomColor;
    let n = document.querySelector('#ask');
    // function inputToURL(inputElement) {
    //     var file = inputElement.files[0];
    //     return window.URL.createObjectURL(file);
    // }
    
    // let url = inputToURL(document.querySelector('.i5'));
    // createImage(url);
    // console.log(url);
    // console.log('url');
    n.setAttribute('src', document.querySelector('.i5').files[0]);
    // document.querySelector('.i5').value = " ";



    let avrage = document.createElement('td');
    avrage.innerHTML =  document.querySelector('.i6').value;
    document.querySelector('.tb1').appendChild(avrage);
    avrage.style.backgroundColor = "#" + randomColor;
    document.querySelector('.i6').value = " ";


    let ostan = document.createElement('td');
    ostan.innerHTML =  String( document.querySelector('.i7').value );
    document.querySelector('.tb1').appendChild(ostan);
    ostan.style.backgroundColor = "#" + randomColor;
    document.querySelector('.i7').value = "city";



    let city = document.createElement('td');
    city.innerHTML =  String( document.querySelector('.i8').value);
    document.querySelector('.tb1').appendChild(city);
    city.style.backgroundColor = "#" + randomColor;
    document.querySelector('.i8').value = "city";



    let location = document.createElement('td');
    location.innerHTML =  document.querySelector('.i9').value;
    document.querySelector('.tb1').appendChild(location);
    location.style.backgroundColor = "#" + randomColor;
    document.querySelector('.i9').value = " ";


    let newTr = document.createElement('tr');
     document.querySelector('.tb1').appendChild(newTr);
     



  


}