const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const euro = document.querySelector('#euro');

const fetchData = async () => {
  try {
    const response = await fetch('change.json');
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const convert = async (currency, targetInput, isTrue) => {
  currency.oninput = async () => {
    try {
      const data = await fetchData();
      if (isTrue) {
        targetInput.value = (currency.value / data.usd).toFixed(2);
      } else {
        targetInput.value = (currency.value * data.usd).toFixed(2);
      }
      currency.value === '' && (targetInput.value = '');
    } catch (error) {
      console.error(error);
    }
  };
};

const convertEuro = async (currency, targetInput, isTrue) => {
  currency.oninput = async () => {
    try {
      const data = await fetchData();
      if (isTrue) {
        targetInput.value = (currency.value / data.euro).toFixed(2);
      } else {
        targetInput.value = (currency.value * data.euro).toFixed(2);
      }
      currency.value === '' && (targetInput.value = '');
    } catch (error) {
      console.error(error);
    }
  };
};

convert(som, usd, true);
convert(usd, som, false);
convertEuro(som, euro, true);
convertEuro(euro, som, false);
