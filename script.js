fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((data)=>{
    //console.log(data);
    return data.json();
}).then((objectdata)=>{
    console.log(objectdata[0].id);
    let tabledata="";
     objectdata.map((values)=>{
   tabledata=`
<tr>
<td scope="row">${values.name}</td>
<td>${values.id}</td>
<td>${values.symbol}</td>
<td>${values.current_price}</td>
<td>${values.total_volume}</td>
</tr>
`;
});
document.getElementById("tabledata");
innerHTML=tabledata;

});
try {

} catch (error) {
    
}(error => console.error(error));