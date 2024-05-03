//  document.querySelector('.b1').addEventListener('click', async ()=>{
//     const myData = await formatData();


//     console.log(myData);
//     let table  = document.querySelector('tbody');
//     for (let index = 0; index < 3; index++) {
//         let newRow = document.createElement('tr');
//         table.appendChild(newRow);
//         let idCol = document.createElement('td');
//         let titleCol = document.createElement('td');
//         let bodyCol = document.createElement('td');

//         idCol.innerHTML = myData[index]["id"];
//         titleCol.innerHTML = myData[index]["title"];
//         bodyCol.innerHTML = myData[index]["body"];

//         newRow.appendChild(idCol);
//         newRow.appendChild(titleCol);
//         newRow.appendChild(bodyCol);


//     }
// })

document.querySelector('.b1').addEventListener('click', fu)
async function fu (){
    const myData = await formatData();
    console.log(myData);
    console.log(1);

        let table  = document.querySelector('tbody');
        for (let index = 0; index < 100; index++) {
            let newRow = document.createElement('tr');
            table.appendChild(newRow);
            let idCol = document.createElement('td');
            let titleCol = document.createElement('td');
            let bodyCol = document.createElement('td');
    
            idCol.innerHTML = myData[index]["id"];
            titleCol.innerHTML = myData[index]["title"];
            bodyCol.innerHTML = myData[index]["body"];
    
            newRow.appendChild(idCol);
            newRow.appendChild(titleCol);
            newRow.appendChild(bodyCol);
        }
}


function getDadeh()
{
    return fetch("https://jsonplaceholder.typicode.com/posts/",{
    'method': 'GET'
    })
    .then((response) => response.json())
}
async function formatData()
{
    const myData  = await getDadeh();
    // console.log(myData);
    return myData;
}
// formatData();