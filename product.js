const productContainer = document.querySelector("#productdetails");
		
const product = (Category, Name,Status ,Description,ProductPicUrl,Price,Quantity) => `
<div id="product">
<div class="container">
	<div class="row details_row">

		<!-- Product Image -->
		<div class="col-lg-6">
			<div class="details_image">
				<div class="image"></div>
				<img src="${ProductPicUrl}" alt="" class="image">
				 <!-- <div class="details_image_large"><img src="images/details_1.jpg" alt=""></div> -->
				<div class="details_image_thumbnails d-flex flex-row align-items-start justify-content-between">
				</div>
			</div>
		</div>
	
		<!-- Product Content -->
		<div class="col-lg-6">
			<div class="details_content">
					<div class="details_name">${Name}</div>
				<div class="category">${Category}</div>
			
				<div class="details_price">$${Price}</div>
				

				<!-- In Stock -->
				<div class="in_stock_container">
					<div class="availability">Status:</div>
					<span>${Status}</span>
					<div>Quantity in stock: ${Quantity}</div>
				
				</div>
				
				<div class="details_text">
					<p>${Description} </p>
				</div>

				<!-- Product Quantity -->
				<div class="product_quantity_container">
					<div class="product_quantity clearfix">
						<span>Qty</span>
						<input id="quantity_input" type="text" pattern="[0-9]*" value="1">
						<div class="quantity_buttons">
							<div id="quantity_inc_button" class="quantity_inc quantity_control"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>
							<div id="quantity_dec_button" class="quantity_dec quantity_control"><i class="fa fa-chevron-down" aria-hidden="true"></i></div>
						</div>
						
					</div>
					<div class="button cart_button"><a href="#">Add to cart</a></div>
				</div>

				<!-- Share -->
				<div class="details_share">
					<span>Share:</span>
					<ul>
						<li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
						<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
						<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
					</ul>
				</div>
				
			</div>
		</div>
		
	</div>`;
	async function getApi(ProductId) {
const req = await fetch("https://afternoon-falls-30227.herokuapp.com/api/v1/products/"+ProductId);
const resp = await req.json();
const detail=resp.data;

let htmlString = "";

htmlString += product(detail.Category, detail.Name,detail.Status,detail.Description, detail.ProductPicUrl,detail.Price,detail.Quantity);


productContainer.innerHTML = htmlString;
}