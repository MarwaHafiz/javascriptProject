var request = new XMLHttpRequest();
var requests = [];


// var id = window.localStorage.setItem("id",JSON.stringify(itemArr))
var ids = JSON.parse(localStorage.getItem("id"))

itemPrice =0
if (ids.length>0) {
    
    for (let j = 0; j < ids.length; j++) {
    
        requests.push(new XMLHttpRequest())
    }
    
    document.getElementById("navCount").innerHTML="(" + ids.length + ")"

    for (let i = 0; i < ids.length; i++) {
        console.log(ids[i])
    
        var req = requests[i].open('GET','https://afternoon-falls-30227.herokuapp.com/api/v1/products/' + ids[i],true);   
        console.log('https://afternoon-falls-30227.herokuapp.com/api/v1/products/' + ids[i])
        requests[i].onload = function () {
            var data = JSON.parse(this.response)
            console.log(data)
            if (requests[i].status>=200 && requests[i].status<400) {
                console.log(data)
                
                    var x= window.localStorage.setItem("product",JSON.stringify(data.data))
                    console.log(x)
                    var getP=JSON.parse(window.localStorage.getItem("product"))
                    console.log(getP)
                    var pcat= getP.Category
                    console.log(pcat)
                    var pname= getP.Name
                    console.log(pname)
                    var price= getP.Price
                    console.log(price)
                    var img= getP.ProductPicUrl
                    
                     
                    
                    var row = document.createElement("div");
                    row.setAttribute('class', 'row cart_items_row');
                    var col = document.createElement("div");
                    col.setAttribute('class', 'col');
                    var parent = document.createElement("div");
                    parent.setAttribute('class', 'cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start');
                    
                    var myDIV = document.createElement("div");
                    myDIV.setAttribute('class', 'cart_item_product d-flex flex-row align-items-center justify-content-start');
                    var imgDiv = document.createElement("div");
                    imgDiv.setAttribute('class', 'cart_item_image img-fluid');
    
                    var imgEl = document.createElement("img"); 
                    imgEl.src = img
                    var details = document.createElement("div"); 
                    details.setAttribute('class', 'cart_item_name_container');
                    
                    var name = document.createElement("div"); 
                    name.setAttribute('class', 'cart_item_name');
                    var cat = document.createElement("div");  
                    cat.setAttribute('class', 'cart_item_cat');
                    var pprice = document.createElement("div");
                    pprice.setAttribute('class', 'cart_item_price');
                    name.innerHTML = pname; 
                    cat.innerHTML = pcat;
                    pprice.innerHTML = "$" + price;
                    var quan = document.createElement("div");  
                    quan.setAttribute('class', 'cart_item_quantity');
                    var quanCont = document.createElement("div"); 
                    quanCont.setAttribute('class', 'product_quantity_container');
                    var quanProd = document.createElement("div"); 
                    quanProd.setAttribute('class', 'product_quantity clearfix');
                    var qty = document.createElement("span");  
                    qty.innerHTML="Qty"
                    var inp = document.createElement("input");  
                    inp.setAttribute('id','quantity_input')
                    inp.setAttribute('type','text')
                    inp.setAttribute('pattern','[0-9]*')
                    inp.setAttribute('value','1')
                    var qbtn = document.createElement("div");
                    qbtn.setAttribute('class','quantity_buttons')
                    var up = document.createElement("div");
                    up.setAttribute('class','quantity_inc quantity_control')
                    up.setAttribute('id','quantity_inc_button')
                    var upI = document.createElement("i")
                    upI.setAttribute('class','fa fa-chevron-up')
                    upI.setAttribute('aria-hidden','true')
                    var down = document.createElement("div");
                    down.setAttribute('class','quantity_dec quantity_control')
                    down.setAttribute('id','quantity_dec_button')
                    var downI = document.createElement("i")
                    downI.setAttribute('class','fa fa-chevron-down')
                    downI.setAttribute('aria-hidden','true')
                    var total = document.createElement("div");
                    total.setAttribute('class','cart_item_total')
                    
                    document.getElementById("item").appendChild(row)
                    row.appendChild(col)
                    col.appendChild(parent)
                    parent.appendChild(myDIV)
                    myDIV.appendChild(imgDiv)
                    imgDiv.appendChild(imgEl)
                    myDIV.appendChild(details)
                    details.appendChild(name);
                    details.appendChild(cat);
                    parent.appendChild(pprice);
                    parent.appendChild(quan)
                    quan.appendChild(quanCont)
                    quanCont.appendChild(quanProd)
                    quanProd.appendChild(qty)
                    quanProd.appendChild(inp)
                    quanProd.appendChild(qbtn)
                    qbtn.appendChild(up)
                    up.appendChild(upI)
                    qbtn.appendChild(down)
                    down.appendChild(downI)
                    parent.appendChild(total)
    
                    var originalVal;
                    var endVal;
                    
                    up.onclick = function () {
                        originalVal = inp.value;
                        console.log(originalVal)
                        endVal = parseFloat(originalVal) + 1;
                        console.log(endVal)
                        inp.value=endVal;
                        console.log(endVal)
                        total.innerHTML = "$" + (endVal*parseFloat(price) )
                        
                    };
                    down.onclick = function () {
                        originalVal = inp.value;
                        if(originalVal > 1)
                        {
                            endVal = parseFloat(originalVal) - 1;
                            inp.value=endVal;
                            // console.log(endVal)
                            total.innerHTML = "$" + (endVal*parseFloat(price) )
                            
                        }
                    };
                    
                    totalPrice=document.getElementById("total-price")
                    
                    itemPrice = itemPrice + (parseFloat(price))
                    totalPrice.innerHTML = "$" + itemPrice
                
            }
            else{
                console.log("error")
            }
        }
        
        requests[i].send();
        
    }
    
}
function remove() {
    for (let k = 0; k< ids.length; k++) {
        localStorage.removeItem("id")
        localStorage.removeItem("product")
        itemArr.pop()
    }
    
}
// function initQuantity()
// 	{
// 		// Handle product quantity input
// 		if($('.product_quantity').length)
// 		{
// 			var input = $('#quantity_input');
// 			var incButton = $('#quantity_inc_button');
// 			var decButton = $('#quantity_dec_button');

// 			var originalVal;
// 			var endVal;

// 			incButton.on('click', function()
// 			{
// 				originalVal = input.val();
// 				endVal = parseFloat(originalVal) + 1;
// 				input.val(endVal);
// 				console.log(endval)
// 			});

// 			decButton.on('click', function()
// 			{
// 				originalVal = input.val();
// 				if(originalVal > 0)
// 				{
// 					endVal = parseFloat(originalVal) - 1;
// 					input.val(endVal);
// 					console.log(endVal)
// 				}
// 			});
			
// 			// localStorage.setItem("quantity","endVal")
// 		}
// 	}

// request.onload = function () {
//     var data = JSON.parse(this.response)
//     if (request.status>=200 && request.status<400) {
//         console.log(data)
        
//             var x= window.localStorage.setItem("product",JSON.stringify(data.data))
//             console.log(x)
//             var getP=JSON.parse(window.localStorage.getItem("product"))
//             console.log(getP)
//             var pcat= getP.Category
//             console.log(pcat)
//             var pname= getP.Name
//             console.log(pname)
//             var price= getP.Price
//             console.log(price)
//             var img= getP.ProductPicUrl
            
//             document.getElementById('pname').innerHTML = pname
//             document.getElementById('cat').innerHTML = pcat
//             document.getElementById('price').innerHTML = "$" + price
//             document.getElementById('imge').src = img
        
//     }
//     else{
//         console.log("error")
//     }
// }

// request.send();


//prevent default
// var product = {
//     "name" : "laptop",
//     "price": 1500
// }
// window.localStorage.setItem("product",JSON.stringify(data))
// var getP=JSON.parse(window.localStorage.getItem("product"))
// var pcat= getP.category
// var pname= getP.Name
// document.getElementById('parent').innerHTML = pname
// document.getElementById('parent').innerHTML = pcat
