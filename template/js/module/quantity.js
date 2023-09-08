export default function Quantity() {
    const boxQuantity = document.querySelector(".box-quantity");
    if (boxQuantity) {
        const btnPlus = boxQuantity.querySelector(".btn-plus");
        const btnMinus = boxQuantity.querySelector(".btn-minus");
        let ipValue = boxQuantity.querySelector(".ip-value");
        let numberChange = boxQuantity.querySelector(".number-change");
        var i = 1;

        btnPlus.addEventListener("click", (e) => {
            if (i >= 10) {
                console.log("asdsad")
                e.preventDefault();

            } else {
                i++;
                numberChange.innerHTML = i;
                ipValue.setAttribute("value", i);
            }

        })

        btnMinus.addEventListener("click", (e) => {
            if (i <= 1) {
                e.preventDefault();
            } else {
                i--;
                numberChange.innerHTML = i;
                ipValue.setAttribute("value", i);
            }

        })
    }
}