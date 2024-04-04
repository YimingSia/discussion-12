document.querySelector("#bill").addEventListener("click", function(){
    console.log("this works")
    if(this.checked){
        var billingAddress = document.getElementById("bill").value
        document.getElementById("home").value = billingAddress
    }
    else{
    
    }
})