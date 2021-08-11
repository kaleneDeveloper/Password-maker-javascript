document
    .getElementById("password-length")
    .addEventListener("input", function () {
        document.getElementById("display-password-length").value = this.value;
    });

const dataLowercase = "qwertyuiopasdfghjklzxcvbnm";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = '!@#$%^&*()_+][}{":?><,./}]';
const rangeValue = document.getElementById("password-length");
const displayPass = document.getElementById("password-output");

const generatePassword = () => {
    let data = [];
    let password = "";
    let x = 0;
    lowercase.checked ? data.push(...dataLowercase) : null;
    uppercase.checked ? data.push(...dataUppercase) : null;
    numbers.checked ? data.push(...dataNumbers) : null;
    symbols.checked ? data.push(...dataSymbols) : null;

    if (data.length == 0) {
        alert("Please select box");
        return;
    } else {
        if (lowercase.checked) {
            const splitDataLowercase = dataLowercase.split("");
            for (i = 0; i < 1; i++) {
                dataIndex = Math.floor(
                    Math.random() * splitDataLowercase.length
                );
                password += splitDataLowercase[dataIndex];
            }
            x++;
        }
        if (uppercase.checked) {
            const splitDatauppercase = dataUppercase.split("");
            for (i = 0; i < 1; i++) {
                dataIndex = Math.floor(
                    Math.random() * splitDatauppercase.length
                );
                password += splitDatauppercase[dataIndex];
            }
            x++;
        }
        if (numbers.checked) {
            const splitDatanumbers = dataNumbers.split("");
            for (i = 0; i < 1; i++) {
                dataIndex = Math.floor(Math.random() * splitDatanumbers.length);
                password += splitDatanumbers[dataIndex];
            }
            x++;
        }
        if (symbols.checked) {
            const splitDatasymbols = dataSymbols.split("");
            for (i = 0; i < 1; i++) {
                dataIndex = Math.floor(Math.random() * splitDatasymbols.length);
                password += splitDatasymbols[dataIndex];
            }
            x++;
        }

        for (i = 0; i < rangeValue.value - x; i++) {
            dataIndex = Math.floor(Math.random() * data.length);
            password += data[dataIndex];
        }

        displayPass.value = password;
        displayPass.select();
        document.execCommand("copy");
        document.getSelection().removeAllRanges();

        generateButton.textContent = "Text copy !";
        setTimeout(() => {
            generateButton.textContent = "Generate password";
        }, 1500);
    }
};
generateButton.addEventListener("click", generatePassword);
