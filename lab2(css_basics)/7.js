
const form = document.getElementById("form")

form.addEventListener("submit", function(event)
{
    const age = document.getElementById("age")
    const agewarning = document.getElementById("warning")

    if (age.value < 16) 
    {
        event.preventDefault();                //yo use garena bhane error ta dekhauxa tara form ni submit hunxa
        agewarning.style.display = "block";
        return;
    }

    agewarning.style.display = "none";
    alert("form submitted succesfully")

    
});
