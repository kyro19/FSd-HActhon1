function submit() {
    var data=document.getElementById("data1").value;
    var data= data.split(",");
    alert(data);
    console.log(data);
    return data;
}
function enter(){
    var key=document.getElementById("data2").value;
    alert(key);
    console.log(key);
    return key;
}
function linear_search(){
let list= submit();
let key=enter();
let result=-1;
for(let i = 0; i < list.length; i++){
    if(list[i] === key){
        result = i;
        console.log(key+" found at index "+ result);
    }
   
}
if(result === -1){
    console.log("elememt not found");
}

return result;
}
