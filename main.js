
var site =document.getElementById("site")
var url=document.getElementById("URL")
// var alertName=document.getElementById("alertName")


var productList=[]
if(JSON.parse(localStorage.getItem ('allproduct')) !==null){



 
 productList=JSON.parse(localStorage.getItem ('allproduct')   )   ;
 displayproduct()

}


function addproduct(){


if(valid()==true){



var product={
name:site.value,
url:url.value


}




productList.push(product)


localStorage.setItem('allproduct', JSON.stringify (productList))

// console.log(productList);



clear()
displayproduct()

}



if(seturl()==true){



    var product={
    name:site.value,
    url:url.value
    
    
    }
    
    
    
    
    productList.push(product)
    
    
    localStorage.setItem('allproduct', JSON.stringify (productList))
    
    // console.log(productList);
    
    
    
    clear()
    displayproduct()
    
    }




}

function clear(){

site.value=''
url.value=''





}




function displayproduct(){


var cartoona=''
for (var i=0;i<productList.length;i++){

cartoona+=`
        
            <tr>
        
                <td>${i}</td>
                <td>${productList[i].name}</td>
                <td><button  class="visit"><a href="https://www.facebook.com">visit</a></button></td>
                
            <td>  <button onclick='deleteproduct(${i})' class='delete'> delete   </button>  </td>
        


`



}

document.getElementById("rowData").innerHTML=cartoona

}





function valid(){


var nameRegex=/^[A-Z][a-z]{2,8}$/;
var myStr=site.value

if(nameRegex.test(myStr)==true){
    // console.log('Match');
    document.getElementById('alertName').classList.add('d-none')
    // document.querySelector('.modal').classList.add('d-none')
    return true
    
    
}else{
    // console.log('No Match');
document.getElementById('alertName').classList.remove('d-none')
// document.querySelector('.modal').classList.remove('d-none')
    return false
    
}


}








function seturl(){


    var urlRegex=/^[a-z]{5}[a-z]{3}[.com]/;
    var myurl=url.value
    
    if(urlRegex.test(myurl)==true){
        // console.log('Match');
        document.getElementById('modaltext').classList.add('d-none')
        document.querySelector('.modal').classList.add('d-none')
   
        return true
        
        
    }else{
        // console.log('No Match');
    document.getElementById('modaltext').classList.remove('d-none')
    document.querySelector('.modal').classList.remove('d-none')
        return false
        
    }
    
    
    }






function deleteproduct(index){
 
  

    productList.splice(       index,   1    )
    
    localStorage.setItem('allproduct',  JSON.stringify( productList))
    
    
    displayproduct()

}

// var productList=[]









// function addproduct(){


// var product={


// Name:productNameInput.value,
// price:productpriceInput.value,
// category:productcategoryInput.value,
// desc:productdescInput.value,
// img:'./images/products/iphone.jfif'


// }


// productList.push(product)
// displayproduct()
// clear()


// localStorage.setItem('allproduct',  JSON.stringify( productList))


// }



// function clear(){

// productNameInput.value=''
// productpriceInput.value=''
// productdescInput.value=''
// productcategoryInput.value=''





// }




// function displayproduct(){


//   var cartoona=''
//   for(var i=0;i<productList.length;i++){
  
//   cartoona+=`
  
//   <div class="col-md-4">
//   <img src="${productList[i].img}" alt="${productList[i].Name}">
//   <h1>${productList[i].Name}</h1>
//   <h4>${productList[i].price}</h4>
//   <h6>${productList[i].category}</h6>
//   <p>${productList[i].desc}.</p>
//   <button onclick='deleteproduct(${i})'>delete</button>
//   <button onclick='setformupdate(${i})'>update</button>
  
  
//   </div>
  
  
  
//   `
  
  
  
  
  
//   }
  
  
//   document.getElementById('rowData').innerHTML=cartoona;
  
  
//   }
  






// function deleteproduct(index){
 
  

// productList.splice(       index,   1    )

// localStorage.setItem('allproduct',  JSON.stringify( productList))


// displayproduct()




// }







// function searchproduct(){

// var term=search.value;  // text that write it




// var cartoona=''
// for(var i=0;i<productList.length;i++){




//   if( productList[i].Name.includes (term   )){


//     cartoona+=`

//     <div class="col-md-4">
//     <img src="${productList[i].img}" alt="${productList[i].Name}">
//     <h1>${productList[i].Name}</h1>
//     <h4>${productList[i].price}</h4>
//     <h6>${productList[i].category}</h6>
//     <p>${productList[i].desc}.</p>
//     <button onclick='deleteproduct(${i})'>delete</button>
//      <button onclick='setformupdate(${i})'>update</button>
    
    
    
//     </div>
    
    
    
//     `
//   }




//   }

//   document.getElementById('rowData').innerHTML=cartoona;







// }




// var currentIndex=0

// function setformupdate(index){
// // console.log(productList[index]);
            
// currentIndex=index


// productNameInput.value=productList[index].Name
// productpriceInput.value=productList[index].price
// productcategoryInput.value=productList[index].category
// productdescInput.value=productList[index].desc

// addbtn.classList.add('d-none')
// updatebtn.classList.remove('d-none')

// }


// function updateproduct(){

//   addbtn.classList.remove('d-none')
//   updatebtn.classList.add('d-none')
  


//   var product={


//     Name:productNameInput.value,
//     price:productpriceInput.value,
//     category:productcategoryInput.value,
//     desc:productdescInput.value,
//     img:'./images/products/iphone.jfif'
    
    
//     }
// productList.splice( currentIndex   ,   1    ,  product        )    

// localStorage.setItem('allproduct',  JSON.stringify( productList))

// displayproduct()

// }



























