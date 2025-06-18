const title = document.createElement("h1");
title.innerText = "Hello from DOM!";
title.style.textDecoration = "underline";
title.style.textDecorationColor = "magenta";

const title1 = document.createElement("h1");
title1.innerText = "Hello from DOM 2 !";
title1.style.textDecoration = "underline";
title1.style.textDecorationColor = "lime";

const parent = document.getElementById("root");
parent.append(title);
parent.prepend(title1);
