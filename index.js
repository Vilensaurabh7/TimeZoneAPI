let lat=document.getElementById("lat");
let long=document.getElementById("long");
let Name=document.getElementById("name");
let offsetSTD=document.getElementById("offsetSTD");
let offsetSTDseconds=document.getElementById("offsetSTDseconds");
let offsetDST=document.getElementById("offsetDST");
let offsetDSTseconds=document.getElementById("offsetDSTseconds");
let country=document.getElementById("country");
let postcode=document.getElementById("postcode");
let city=document.getElementById("city");
let button=document.getElementById("button");
let output=document.getElementById("output");
let last=document.getElementById("last");




const FetchTimeZone=(elem)=>{
    console.log(elem)
    fetch(` https://api.geoapify.com/v1/geocode/search?text=Carrer%20del%20Pintor%20Navarro%20Llorens%2C%207%2C%2046008%20Val%C3%A8ncia%2C%20Valencia%2C%20Spain&format=json&apiKey=cd4ca2cc86e34aa787e0c7a740fc216d`)
    .then(resp1 => resp1.json())
    .then((val1) => {
  console.log(val1)
if (val1.results[0].city==elem) {
    var html=" <div class=main>" 
 html="<div class= mainS  >"
 
html+="<div class=equal>"
html+="<label >"+ `Name of time zone :` + "</label>";
html+=`<input type="text"id="name" value=${val1.results[0].timezone.name}>`
html+="</div>";

html+="<div class=long>"
html+="<div class=equal>"
html+="<label >"+ `Lat :` + "</label>";
html+=`<input type="number"id="lat" value=${val1.results[0].lat}>`
html+="</div>";

html+="<div class=equal>"
html+="<label >"+ ` Long :` + "</label>";
html+=`<input type="number"id="long" value=${val1.results[0].lon}>`
html+="</div>";

html+="</div>";
html+="<div class=equal>"
html+="<label >"+ ` Offset STD :` + "</label>";
html+=`<input type="text"id="offsetSTD" value=${val1.results[0].timezone.offset_STD}`
html+="</div>";

html+="<div class=equal>"
html+="<label >"+ ` Offset STD Seconds :` + "</label>";
html+=`<input type="text"id="offsetSTDseconds" value=${val1.results[0].timezone.offset_STD_seconds}>`
html+="</div>";

html+="<div class=equal>"
html+="<label >"+ ` Offset DST :` + "</label>";
html+=`<input type="text"id="offsetDST" value=${val1.results[0].timezone.offset_DST}>`
html+="</div>";

html+="<div class=equal>"
html+="<label >"+ `Offset DST Seconds : ` + "</label>";
html+=`<input type="text"id="offsetDSTseconds" value=${val1.results[0].timezone.offset_DST_seconds}>`
html+="</div>";

html+="<div class=equal>"
html+="<label >"+ `Country : ` + "</label>";
html+=`<input type="text"id="country" value=${val1.results[0].country}>`
html+="</div>";

html+="<div class=equal>"
html+="<label >"+ `Postcode :` + "</label>";
html+=`<input type="number"id="postcode" value=${val1.results[0].postcode}>`
html+="</div>";

html+="<div class=equal>"
html+="<label >"+ `City :` + "</label>";
html+=`<input type="text"id="city" value=${val1.results[0].city}>`
html+="</div>";



// Valencia


html+="</div>";
html+="</div>";
document.getElementById("box").innerHTML = html;
output.innerText= "";
}
else {
    html=" ";
    document.getElementById("box").innerHTML = html;
  output.innerText= "Time zone could not be found";
     }


    })
  
}

last.addEventListener("change",()=>{
    let ele=last.value;
    console.log(ele)
    button.addEventListener("click",()=>{
        FetchTimeZone(ele);
      })
      
})


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    let x=position.coords.latitude ;
    let y=position.coords.longitude ;
    lat.value =position.coords.latitude ;
    long.value= position.coords.longitude ;
    
    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${x}&lon=${y}&format=json&apiKey=cd4ca2cc86e34aa787e0c7a740fc216d`)
  .then(resp => resp.json())
  .then((val) => {
    
    if (val.results.length) {
        city.value= val.results[0].city;
        Name.value= val.results[0].timezone.name;
        offsetSTD.value= val.results[0].timezone.offset_STD;
        offsetSTDseconds.value= val.results[0].timezone.offset_STD_seconds;
        offsetDST.value= val.results[0].timezone.offset_DST;
        offsetDSTseconds.value= val.results[0].timezone.offset_DST_seconds;
        country.value= val.results[0].country;
        postcode.value= val.results[0].postcode;

    } 
  });
   
  }

 



























