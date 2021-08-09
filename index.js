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
    lowercase.checked ? data.push(...dataLowercase) : null;
    uppercase.checked ? data.push(...dataUppercase) : null;
    numbers.checked ? data.push(...dataNumbers) : null;
    symbols.checked ? data.push(...dataSymbols) : null;

    if (data.length == 0) {
        alert("Please select box");
        return;
    } else {
        for (i = 0; i < rangeValue.value; i++) {
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
