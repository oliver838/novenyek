let queryUrl = `https://viragbolt-backend.onrender.com/api/flowers`
let categoryUrl = `https://viragbolt-backend.onrender.com/api/categories`
let dataa
let szamolo = 1
let nev 

getData(queryUrl, alma)
function alma(barmi) {
    dataa = barmi
    console.log(dataa);
    
}
function handleClick(kap) {
    let url = kap
    getData(url, renderData)  
}

function renderData(data) {
    
    let a = 0
    data.forEach(element => {
        console.log(element.nev);
        
        a++
        document.querySelector('.gombok').innerHTML+=`<button onclick="filterCateg(this)" class="gomb" id="gomb${a}">${element.nev}</button>`
    });
}

function filterCateg(obj) {
    nev = obj.innerHTML
    let url = queryUrl
    getData(url, betolt)  
}

function betolt(data){
    
    console.log(data);
    
    document.querySelector(".result").innerHTML=``
    data.forEach(element => {
        if(element.kategoria_nev == nev){
           
            document.querySelector(".result").innerHTML+=`
        

                <div class="max-w-sm kartya bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="${element.kepUrl}" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${element.nev}</h5>
                        </a>
                        
                        <button href="#" popovertarget="mypopover-${element.id}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            További
                             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </button>
                        <div id="mypopover-${element.id}" popover class="popover-container max-w-screen-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                           
                            <img class="popover_img rounded-t-lg min-w-full bg-center bg-cover h-auto max-h-full" src=${element.kepUrl} alt="">
                            <div class="p-2 pt-0 mt-2 m-5 text-justify">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${element.nev}</h5>
                                
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${element.leiras } </p>
                                <span  class="mellet m-0 p-0 mt-5">
                                    
                                    <h3>Készleten: ${element.keszlet}</h3>
                                    <h3>Ár: ${element.ar}</h3>
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>

            `
            
        }
    });
}
document.getElementById("keresomotor").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log(dataa);
          document.querySelector(".result").innerHTML=""
        dataa.forEach(element => {
          
            
            if(element.nev.toUpperCase().includes(event.target.value.toUpperCase()) || element.leiras.toUpperCase().includes(event.target.value.toUpperCase())){
                
               
                document.querySelector(".result").innerHTML+=`
            
    
                    <div class="max-w-sm kartya bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg" src="${element.kepUrl}" alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${element.nev}</h5>
                            </a>
                            
                            <button href="#" popovertarget="mypopover-${element.id}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                További
                                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                            <div id="mypopover-${element.id}" popover class="popover-container max-w-screen-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                               
                                <img class="popover_img rounded-t-lg min-w-full bg-center bg-cover h-auto max-h-full" src=${element.kepUrl} alt="">
                                <div class="p-2 pt-0 mt-2 m-5 text-justify">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${element.nev}</h5>
                                    
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${element.leiras } </p>
                                    <span  class="mellet m-0 p-0 mt-5">
                                        
                                        <h3>Készleten: ${element.keszlet}</h3>
                                        <h3>Ár: ${element.ar}</h3>
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
    
                `
                
            }
           
        });
      
    }
});

function keres(data){
    dataa = data
    console.log(data);
    document.querySelector(".result").innerHTML=``
    data.forEach(element => {
        if(element.kategoria_nev == nev){
           
            document.querySelector(".result").innerHTML+=`
        

                <div class="max-w-sm kartya bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="${element.kepUrl}" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${element.nev}</h5>
                        </a>
                        
                        <button href="#" popovertarget="mypopover-${element.id}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            További
                             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </button>
                        <div id="mypopover-${element.id}" popover class="popover-container max-w-screen-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                           
                            <img class="popover_img rounded-t-lg min-w-full bg-center bg-cover h-auto max-h-full" src=${element.kepUrl} alt="">
                            <div class="p-2 pt-0 mt-2 m-5 text-justify">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${element.nev}</h5>
                                
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${element.leiras } </p>
                                <span  class="mellet m-0 p-0 mt-5">
                                    
                                    <h3>Készleten: ${element.keszlet}</h3>
                                    <h3>Ár: ${element.ar}</h3>
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>

            `
            
        }
    });
}

function popover (){}
handleClick(categoryUrl)