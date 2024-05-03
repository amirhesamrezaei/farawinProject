class students{

    constructor(name,lname,age,id)
    {
        this.name = name;
        this.lname = lname;
        this.age = age;
        this.id = id;
    }
    
    
    getmoadel()
    {
        let arr = [];
        for(let i=0; i<2;i++){
            let a  = +prompt("nomre dars ro bzn");
            let b  = +prompt("zarib ro bzn");
            arr.push(a*b);
            console.log(arr.map(i=>i*2));
        }
        let c  = 0;
        for(let i=0; i<arr.length; i++){
            c+=arr[i];
        }
        alert(c/2);
    }

    //درست کردن کلاس ساخت جدید داانش اموز و جست جو
    //درستکردن پبدا کرن بر اساس تیکه تیکه 
   
}
let arr = [];
for (let index = 0; index < 1; index++) {
    let s  = new students (prompt("name ro bzn"),prompt("lname ro bzn"),prompt("age ro bzn"),prompt("id ro bzn"));
    arr.push(s);
    alert('Please enter your nomreh');
    s.getmoadel();
}
console.log(arr);
function jostejo(j = prompt("id tarf ro bzn"))
{
    for (let i=0; i<arr.length; i++) {
        if(arr[i].id == j)
        {
            alert('pyda shod');
           console.log(arr[i]);
        }
        else{
            alert('pyda nshod');

        }
    }
}
jostejo();



