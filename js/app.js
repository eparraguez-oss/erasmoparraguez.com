document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("formTimestamp").value=Date.now();
  document.getElementById("formToken").value=Math.random().toString(36).substring(2)+Date.now();
});
