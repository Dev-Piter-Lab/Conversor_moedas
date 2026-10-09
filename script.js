const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyInitialSelect = document.querySelector(".currency-initial-select")
const currencyImg = document.querySelector(".img-converted")


function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value)
    const currencyValueConverted = document.querySelector(".currency-value")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    const realToDolar = 5.01
    const realToEuro = 5.6
    const realToLibra = 6.61
    const realToBitcoin = 400000

    const dolartoEuro = 0.893
    const dolartoLibra = 0.757
    const dolartoBitcoin = 0.000012

    const eurotoDolar = 1.12
    const eurotoLibra = 0.85
    const eurotoBitcoin = 0.000014

    const libratoDolar = 1.32
    const libratoEuro = 1.18
    const libratoBitcoin = 0.000016

    const origem = currencyInitialSelect.value
    const destino = currencySelect.value


    if (origem === "current-euro" && destino === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToEuro)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-euro" && destino === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * (realToEuro / realToDolar))

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        return
    }

    if (origem === "current-euro" && destino === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-euro" && destino === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * (realToEuro / realToLibra))

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-euro" && destino === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue * (realToEuro / realToBitcoin)) + " BTC"

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-libra" && destino === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * (realToLibra))

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-libra" && destino === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * (realToLibra / realToDolar))

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-libra" && destino === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * (realToLibra / realToEuro))

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-libra" && destino === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-libra" && destino === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue * (realToLibra / realToBitcoin)) + " BTC"

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-bitcoin" && destino === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToBitcoin)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue) + " BTC"
        return
    }

    if (origem === "current-bitcoin" && destino === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * (realToBitcoin / realToDolar))
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue) + " BTC"
        return
    }

    if (origem === "current-bitcoin" && destino === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * (realToBitcoin / realToEuro))
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue) + " BTC"
        return
    }

    if (origem === "current-bitcoin" && destino === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * (realToBitcoin / realToLibra))
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue) + " BTC"
        return
    }

    if (origem === "current-bitcoin" && destino === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue) + " BTC"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue) + " BTC"
        return
    }

    if (origem === "current-real" && destino === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-real" && destino === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / realToDolar)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-real" && destino === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / realToEuro)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-real" && destino === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / realToLibra)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-real" && destino === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue / realToBitcoin) + " BTC"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-dolar" && destino === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-dolar" && destino === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * dolartoEuro)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-dolar" && destino === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * dolartoLibra)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        return
    }

    if (origem === "current-dolar" && destino === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue * dolartoBitcoin) + " BTC"
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        return
    }
}
function changeCurrency() {
    const currencyName = document.querySelector(".currency-converted")
    const currencyNumber = document.querySelector(".currency-value")

    if (currencySelect.value === "real") {
        currencyName.innerHTML = "Real"
        currencyNumber.innerHTML = "R$ 0.0"
        currencyImg.src = "./assets/brasil.png"
    }

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyNumber.innerHTML = "US$ 0.0"
        currencyImg.src = "./assets/estados-unidos.png"
    }

    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyNumber.innerHTML = "€ 0.0"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra esterlina"
        currencyNumber.innerHTML = "£ 0.0"
        currencyImg.src = "./assets/libra.png"
    }

    if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyNumber.innerHTML = "₿ 0.0"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertValues()

}

function initialChangeCurrency() {
    const currencyInitialName = document.querySelector(".currency")
    const currencyNumber = document.querySelector(".currency-value-to-convert")
    const currencyImg = document.querySelector(".img-to-convert")

    if (currencyInitialSelect.value === "current-real") {
        currencyInitialName.innerHTML = "Real"
        currencyNumber.innerHTML = "R$ 0.0"
        currencyImg.src = "./assets/brasil.png"
    }

    if (currencyInitialSelect.value === "current-dolar") {
        currencyInitialName.innerHTML = "Dólar"
        currencyNumber.innerHTML = "US$ 0.0"
        currencyImg.src = "./assets/estados-unidos.png"
    }

    if (currencyInitialSelect.value === "current-euro") {
        currencyInitialName.innerHTML = "Euro"
        currencyNumber.innerHTML = "€ 0.0"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencyInitialSelect.value === "current-libra") {
        currencyInitialName.innerHTML = "Libra esterlina"
        currencyNumber.innerHTML = "£ 0.0"
        currencyImg.src = "./assets/libra.png"
    }

    if (currencyInitialSelect.value === "current-bitcoin") {
        currencyInitialName.innerHTML = "Bitcoin"
        currencyNumber.innerHTML = "₿ 0.0"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertValues()

}

currencyInitialSelect.addEventListener("change", initialChangeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)