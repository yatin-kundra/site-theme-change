const lightbutotn = document.getElementById("light")
const darkbutotn = document.getElementById("dark")
const solarbutotn = document.getElementById("solar")

const body = document.body

//  caching the theme into the browser
const theme = localStorage.getItem("theme")
const issolar = localStorage.getItem("issolar")

if (theme) {
    body.classList.add(theme);
    issolar && body.classList.add('solar');
  }


lightbutotn.onclick = () => {
    body.classList.remove("dark");
    body.classList.add("light")
    localStorage.setItem('theme', 'light');

    // can be done with one line 
    // body.classList.replace("dark", "light")

};

darkbutotn.onclick = () => {
    body.classList.replace("light", "dark")
    localStorage.setItem('theme', 'dark');
    
};



solarbutotn.onclick = () => {
    // body.classList.toggle("solar")
    if (body.classList.contains("solar"))
    {
    body.classList.remove("solar")
    solarbutotn.innerText = "solarize";
    localStorage.removeItem('isSolar');

    }

    else {
    body.classList.add("solar")
    solarbutotn.innerText = 'normalize';
    localStorage.setItem('issolar', true);



    }

};
