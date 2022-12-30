
function getElementByclass(elementId) {
    let element = document.getElementsByClassName(elementId)
    return element;
}
function getElementById(elementId) {
    let element = document.getElementById(elementId)
    return element;
}


let cartItem = getElementByclass('add-to-cart'),
    showcaseItem = getElementByclass('showcase-item'),
    incdec = getElementByclass('incdec');
const mensFashion = getElementById('mens-fashion'),
    womensFashion = getElementById('womens-fashion'),
    aceesoriesFashion = getElementById('accesories-fashion'),
    searchFashion = getElementById('search-fashion');



function insertShowcaseItem(data, len, elementId) {
    let htmlCode = ''
    for (let idx = 0; idx < len; idx++) {
        htmlCode += `
    <div title = ${data[idx]['id']} class="cat-item  showcase-item rounded shadow-lg  w-equi  mb-2 p-1">
   <div class="imahe-part centre overflow-hidden ">
   <img class="search hover-cat"
                src=${data[idx]["image src"]}
                alt="product"> </div>
          <div class="text-pat  p-1 "> <p class="name text-center">
              ${data[idx]['name'].slice(0, 20)}...
            </p>
          </div>
        
        </div>
    `
    }


    elementId.innerHTML = htmlCode;

}


function setToLocalStorage(data, cprSrc, keyValue, href = false) {
    data.forEach(element => {
        console.log(cprSrc === element['image src']);
        if (cprSrc === element['image src']) {
            //   localStorage.removeItem('porductView')
            if (href) {
                localStorage.setItem(keyValue, JSON.stringify(element));

                (window.location.href = './Pages/productView.html')
            }
            else {
                let cartData = localStorage.getItem(keyValue);
                let newSet=[];

                if (cartData === null){
                    newSet.push(element)
                    localStorage.setItem(keyValue, JSON.stringify(newSet));
                }
            

                    else {
                       let cartDataSet = JSON.parse(cartData)
                         console.log(cartDataSet);
                         newSet = cartDataSet
                         
                      let duplicate = newSet.forEach(ele=>{
                          if(ele.id === element.id) {
                            console.log('already present');
                            return true;
                          }
                         });

                            (!duplicate)&&(newSet.push(element))
                         
                         localStorage.setItem(keyValue, JSON.stringify(newSet));


                    }   
            }
            
        }
    });
}


function handleProductView(data, keyValue, href) {
    for (const elements of data) {
        elements.addEventListener('click', () => {

            let imageSrc = elements.title;
            console.log(imageSrc);
            setToLocalStorage(categories, imageSrc, keyValue, href)



        })
    }
}

function handelSearchFashion(data, len, elementId) {

    let htmlCode = ''
    for (let idx = 0; idx < len; idx++) {
        htmlCode += `
     <div class="cat-item  rounded  shadow-all  w-equi   mb-2 p-1">
    
     <div class="imahe-part centre overflow-hidden overflow-y ">

       <a href="/">
         <img class="search hover-cat"
           src=${data[idx]["image src"]}
           alt="product">
       </a>

     </div>
     <div class="text-pat  p-1 ">

       <p class="name text-center">
       ${data[idx]["name"].slice(0, 20)}...
       </p>
     </div>
     <div class="price addtoCart buy-now  flex item-centre justify-between">
       <div class="price flex justify-start item-centre pl-2 font-bold text-3xl  h-1-2 ">
         <span>
           <span class="font-satisfy text-xs  text-price ">Rs</span>
           <span id="price" class="font-satisfy  font-thin
          ">
           ${data[idx]["price"]}
           </span>
           </span>
        </div>
        <div  title=${data[idx]['id']}  class="p-0 add-to-cart  m-1 h-10 w-10 flex justify-centre bg-green text-white text-2xl item-centre rounded text-center pointer" > +</div>
      
     </div>
   </div>
    `
    }

    elementId.innerHTML = htmlCode;

}

function handleItemQuantity(){
    let count = getElementById('count')

    for (const item of incdec) {
        let min =2 ,max = 9;
        item.addEventListener('click',()=>{
            if(item.className.match('plus-s')){
                
              ( Number(item.nextElementSibling.textContent)<=max)  && (item.nextElementSibling.textContent = Number(item.nextElementSibling.textContent) + 1); 
            }
            else if(item.className.match('minus-s')){
                ( Number(item.previousElementSibling.textContent)>=min)  &&(item.previousElementSibling.textContent = Number(item.previousElementSibling.textContent) - 1);    
            }
            else if(item.className.match('rmv-btn')){
					let cartData = localStorage.getItem('cartProduct') ;
                    let data = [];
                    data = JSON.parse(cartData)
                   data.forEach(e=>{
                    if(e.id = item.title){
                        
                        data.pop(data.indexOf(e));
                        localStorage.removeItem('cartProduct');
                        localStorage.setItem('cartProduct',JSON.stringify(data))
                         window.location.reload();
                    }
                    
                   })
            }
           
        })
    }
}




(mensFashion != null) && (insertShowcaseItem(shirt, 4, mensFashion));
(womensFashion != null) && (insertShowcaseItem(women, 4, womensFashion));
(aceesoriesFashion != null) && (insertShowcaseItem(aceesories, 4, aceesoriesFashion));
(searchFashion != null) && (handelSearchFashion(shirt, 15, searchFashion));
(searchFashion != null) && (handelSearchFashion(women, 15, searchFashion));
(searchFashion != null) && (handelSearchFashion(categories, 15, searchFashion));

handleProductView(showcaseItem, 'porductView', true);
handleProductView(cartItem, 'cartProduct', false);
    
handleItemQuantity();




