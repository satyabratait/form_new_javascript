let button = document.getElementById("buttons");
let Name, Mail, message;
let btn = document.getElementById("showinfo");
let info = document.getElementById("infodiv");
document.getElementById("showinfo").style.display = 'none';

button.addEventListener("click", function (e) {
    Name = document.getElementById("name-form").value,
    Mail = document.getElementById("mail-form").value,
    message = document.getElementById("message-form").value;
    info.remove();


    document.getElementById("greetings").innerHTML = 'Thank You';
    document.getElementById("showinfo").style.display = 'block';
    nextpage();
    
    // let current = input.innerHTML;
    // console.log(Name);
    // document.write('Thank You , Your form has been submitted');
    // document.write(Name);
    // document.write(Mail);
    // document.write(message);
    // alert(message);
});

    function nextpage(){
    // document.write('Thank You');

    let show = document.getElementById("showinfo");

    show.addEventListener("click", function (e) {
    document.write(Name);
    });

    }