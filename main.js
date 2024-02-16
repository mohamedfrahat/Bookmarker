var SiteNameInput=document.getElementById("SiteName");
var SiteurlInput=document.getElementById("Siteurl");
var SiteList =[];
if(localStorage.getItem('me')){
SiteList=JSON.parse(localStorage.getItem('me'));
display();
}



function Show() {


var contain ={
    name:SiteNameInput.value,
    url:SiteurlInput.value
}
if(validationSite(contain.name) && validationURL(contain.url)){
SiteList.push(contain);
display();
clearform();
localStorage.setItem('me',JSON.stringify(SiteList));
}

else{

msg.classList.replace('z-n1','z-5')

clearform();

}
  

// localStorage.clear();


}


function clearform(){
  SiteNameInput.value='';
  SiteurlInput.value='';
  

}
function display(){
   var row='';
  for(var i=0 ;i<SiteList.length;i++)
{
 row += `
 <tr>
  <td>${i+1}</td>
  <td>${SiteList[i].name}</td>
  <td><a href="${SiteList[i].url}"><button class="btn btn-info"> <i class="fa-solid fa-eye pe-2"></i>Visit</button></a></td>
  <td><button class="btn btn-danger" onclick="Del(${i})"><i class="fa-solid fa-trash-can"></i> Delete </button></td>
  </tr>
  `
}
document.getElementById('FormBody').innerHTML=row;

}

function Del(index)
{
 

SiteList.splice(index,1);
localStorage.setItem('me',JSON.stringify(SiteList));
 display();

}

function validationSite(name){
  var regex=/^[A-Za-z]{3,}/;
  

  if(regex.test(name) )
  {
    SiteNameInput.classList.replace('is-invalid','is-valid');
  
    return true;

  }
  else {
    SiteNameInput.classList.add('is-invalid');

    return false;
  }
}
function validationURL (URL){

  var ValidURL=/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
if(ValidURL.test(URL)) 
{
  SiteurlInput.classList.replace('is-invalid','is-valid');

return true;}
else
{
  SiteurlInput.classList.add('is-invalid');

return false;
}
}
function reload()
{ 
msg.classList.replace( 'z-5','z-n1');
  
}