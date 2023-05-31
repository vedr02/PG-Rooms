// let ele1 = document.createElement("div");
// ele1.classList.add("main")

// let ele2 = documnet.createElement("h2");
// ele2.innerHTML="Hello Developers"

// let ele3 = documnt.creatElement("p");
// ele3.innerHTML="How are you?"

// ele1.appendChild(ele2)
// ele1.appendChild(ele3)

// document.getElementById("ele").appendChild(ele1)


let products = [
    {
        id:1,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price: 289,
        category: "shirt",
        pic:"https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/e/q/g/s-double-threshold-blue-shirt-qlonz-store-original-imafufjvfd9wdh3a-bb.jpeg?q=70"
    },
    {
        id:2,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  299,
        category: "T-shirt",
        pic:"https://rukminim1.flixcart.com/image/612/612/kz8qsnk0/t-shirt/f/b/g/m-db1024-03-3bros-original-imagbawkgggkpdfb.jpeg?q=70"
    },

    {
        id:3,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price: 179,
        category: "T-shirt",
        pic:"https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/v/5/k/m-st-boxhead-black-smartees-original-imaggegtpgz5dhjj.jpeg?q=70"
    },

    {
        id:4,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  299,
        category: "T-shirt",
        pic:"https://rukminim1.flixcart.com/image/612/612/katyzrk0/t-shirt/z/y/w/xxl-ds01-try-this-original-imafsb8ju76qqhqw.jpeg?q=70"
    },

    {
        id:5,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  475,
        category: "T-shirt",
        pic:"https://rukminim1.flixcart.com/image/612/612/l1b1oy80/t-shirt/j/n/9/xl-pe2021-proriders-original-imagcwnfcnd3utud.jpeg?q=70"
    },

    {
        id:6,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  400,
        category: "T-shirt",
        pic:"https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/1/n/l/xl-mtsh00181-dustypink-n-cantabil-original-imagmv69fj4nc5kc.jpeg?q=70"
    },

    {
        id:7,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  700,
        category: "T-shirt",
        pic:"https://rukminim1.flixcart.com/image/612/612/k0r15e80/t-shirt/p/e/k/m-askporgfj72665-allen-solly-original-imafkh3zfzgjuxch.jpeg?q=70"
    },

    {
        id:8,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  600,
        category: "shirt",
        pic:"https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/z/s/9/xl-linekurta-aly-john-original-imagcysazjfb9gtb-bb.jpeg?q=70"
    },

    {
        id:9,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  799,
        category: "jeans",
        pic:"https://rukminim1.flixcart.com/image/612/612/k1118cw0/jean/f/r/w/30-10064535-roadster-original-imafkzsgnkhs5ysa.jpeg?q=70"
    },

    {
        id:10,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  699,
        category: "jeans",
        pic:"https://rukminim1.flixcart.com/image/612/612/kfoapow0-0/jean/w/o/d/30-000877-highlander-original-imafw2hyqbj3bsph.jpeg?q=70"
    },

    {
        id:11,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  909,
        category: "jeans",
        pic:"https://rukminim1.flixcart.com/image/612/612/xif0q/trouser/l/k/g/30-pmtx06911-b6-park-avenue-original-imagjzz26cghgfgq.jpeg?q=70"
    },

    {
        id:12,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  594,
        category: "jeans",
        pic:"https://rukminim1.flixcart.com/image/612/612/l4fxh8w0/track-pant/e/g/c/s-petpntbr521550-peter-england-original-imagfc5dmy3dgpdk.jpeg?q=70"
    },

    {
        id:13,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  450,
        category: "short",
        pic:"https://rukminim1.flixcart.com/image/612/612/l4x2rgw0/three-fourth/t/q/m/xl-cap-proxima-original-imagfpqkftnrvh8z.jpeg?q=70"
    },

    {
        id:14,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price: 569,
        category: "short",
        pic:"https://rukminim1.flixcart.com/image/612/612/xif0q/v/9/u/vego-grey-melange-cuff-3-4th-777-vego-38-original-imaebujcpkuydyfz-bb.jpeg?q=70"
    },

    {
        id:15,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  289,
        category: "short",
        pic:"https://rukminim1.flixcart.com/image/612/612/xif0q/three-fourth/c/y/a/l-gg-101-3-4-navy-gray-l-feel-track-original-imafwgefuyzr7xff-bb.jpeg?q=70"
    },


    {
        id:16,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  350,
        category: "short",
        pic:"https://rukminim1.flixcart.com/image/612/612/l08gsy80/three-fourth/k/2/r/l-uz93capri-green-uzarus-original-imagc2t2bpg6vhsw.jpeg?q=70"
    },


    {
        id:17,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  2450,
        category: "short",
        pic:"https://rukminim1.flixcart.com/image/612/612/xif0q/three-fourth/5/s/a/s-gg-101-3-4-black-gray-s-feel-track-original-imafwhqwatzyjasz-bb.jpeg?q=70"
    },

    {
        id:18,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  699,
        category: "short",
        pic:"https://rukminim1.flixcart.com/image/612/612/xif0q/m/f/3/vego-greymelange-3-4th-555-vego-42-original-imaebuzzm65hcsuq-bb.jpeg?q=70"
    },

    {
        id:19,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  289,
        category: "short",
        pic:"https://rukminim1.flixcart.com/image/612/612/xif0q/three-fourth/y/w/2/34-0d3by4capribeige-0-degree-original-imafkjh9nzx7nmbk-bb.jpeg?q=70"
    },

    {
        id:20,
        product_name: "Men Regular Fit Solid Mandarin Collar Casual Shirt",
        price:  289,
        category: "short",
        pic:"https://rukminim1.flixcart.com/image/612/612/xif0q/three-fourth/i/8/y/3xl-mc-4121-ghostwhite-mountain-colours-original-imag4fcw8rshqcyw-bb.jpeg?q=70"
    },
]

function displayData(){
    products.forEach((product,index)=>{

        let card = document.createElement("div");
        card.classList.add("card_item");

        let imgContainer = document.createElement("div");
        imgContainer.classList.add("img_container");

        let img = document.createElement("img")
        img.setAttribute("src",product.pic);
        imgContainer.appendChild(img);

        let product_info = document.createElement("div");
        product_info.classList.add("product_info");

        let title = document.createElement("h2");
        title.append(product.product_name);
        product_info.appendChild(title)

        let para = document.createElement("p");
        para.append("₹ "+product.price);
        product_info.appendChild(para)

        card.appendChild(imgContainer)
        card.append(product_info)

        document.getElementById("card_product").appendChild(card);

    }
    )

}
displayData()


let filterStatus = false;

function openFilter(){
    if(filterStatus===false){
        document.getElementById("filter").style.marginLeft="0%"
        filterStatus=true;
    }
    else{
        document.getElementById("filter").style.mardinLeft="-35%"
        filterStatus=false;
    }
}

let filters = {
    product_name:null,
    category:null,
    minPrice:null,
    maxPrice:null
}

function setFilter(property,value){
    if(value!==""){
        filter[property]=value;
    }
    else{
        filter[property]=null;
    }
}

function filterData(){
    let filterArr = products;

    if(filters.product_name!==null){
        filterArr = filterArr.filter((product,index)=>{
            return product.product_name.toLowerCase().includes(filters.product_name.toLowerCase())
        })
    }

    if(filters.category!==null){
        filterArr = filterArr.filter((product,index)=>{
            return product.category.toLowerCase === filters.category.toLowerCase()
        })
    }

    if(filters.minPrice!==null){
        filterArr = filterArr.filter((product,index)=>{
            return Number(product.price) >= Number(filter.minPrice)
        })
    }

    if(filters.minPrice!==null){
        filterArr = filterArr.filter((product,index)=>{
            return Number(product.price) <= Number(filter.minPrice)
        })
    }

    displayData(filterArr);
    console.log(filterArr)
}