let info=document.querySelector(".info")
let temp;
let categories=[]

let zangvac=[]



function FetchInfo(targetId,Index){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(function(response){
        return response.json()
    }).then(function(response){
	
        category = {
            id: response.categories[Index].idCategory,
            thumb: response.categories[Index].strCategoryThumb,
            description: response.categories[Index].strCategoryDescription,
            name: response.categories[Index].strCategory
        };
        categories.push(category)
        let tvyalner=JSON.stringify(response.categories[Index].strCategory)
         temp=tvyalner.slice(1,tvyalner.length-1)
         document.querySelector(targetId).innerHTML=temp
         document.querySelector(targetId).addEventListener("click", function(){
		zangvac.push(response.categories[Index])
		renderItem()

        })
	})
}


function deleteItem(id) {
    let index = -1;
    for (let i = 0; i < zangvac.length; i++) {
  
       if(+zangvac[i].idCategory===id){
        index=i
       }
    }
    if (index !== -1) {
        zangvac.splice(index, 1);
        renderItem();
    }
}






function renderItem(){
    info.innerHTML=""
	zangvac.forEach(element=>{
        info.innerHTML+=`<h1>${element.idCategory}</h1>
        <p>${element.strCategoryDescription}</p>
       <img src="${element.strCategoryThumb}">
       <button class="btn1" onclick=AddItem(${element.idCategory})>Add</button>
       <button class="btn2" onclick=deleteItem(${element.idCategory})>Remove</button`
      
    })
}

function AddItem(id) {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            let category = response.categories[+id - 1].strCategory;
            let r = Math.round(Math.random() * 255);
            let g = Math.round(Math.random() * 255);
            let b = Math.round(Math.random() * 255);
            let color = `rgb(${r},${g},${b})`;

            let cat = document.querySelector(".category");
            let newItem = document.createElement("div");
            newItem.classList.add("a98"); 
            newItem.innerHTML = `
                <h2>${category}</h2>
            `;
            newItem.style.backgroundColor = color;
            cat.appendChild(newItem);
        })
    }

FetchInfo(".target",0)
FetchInfo(".target1",1)
FetchInfo(".target2",2)
FetchInfo(".target3",3)
FetchInfo(".target4",4)
FetchInfo(".target5",5)
FetchInfo(".target6",6)
FetchInfo(".target7",7)
FetchInfo(".target8",8)
FetchInfo(".target9",9)
FetchInfo(".target10",10)
FetchInfo(".target11",11)
FetchInfo(".target12",12)
FetchInfo(".target13",13)
