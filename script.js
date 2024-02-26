window.onload = function() {
    const imprintElement = document.getElementById("imprint");
    const contentTextElement = document.querySelector(".box-content-text");
    const defaultText = contentTextElement.innerHTML;

    imprintElement.addEventListener("click", () => {
        if (imprintElement.innerHTML === "Imprint") {
            contentTextElement.innerHTML = `
                <p>Imprint §5 TGM</p>
                <br>
                <p>Address</p>
                Simon Rappenecker <br>
                Fichtenweg 7 <br>
                72076 Tübingen <br>
                <p>Contact</p>
                E-Mail: simon@rappenecker.me
            `;
            imprintElement.innerHTML = "Home";
        } else {
            contentTextElement.innerHTML = defaultText;
            imprintElement.innerHTML = "Imprint";
        }
    });
  }