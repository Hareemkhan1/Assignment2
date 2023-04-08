function updateTotal() {
  const value1 = parseFloat(document.getElementById("value1").value);
  const value2 = parseFloat(document.getElementById("value2").value);
  const value3 = parseFloat(document.getElementById("value3").value);
  const total = value1 + value2 + value3;
  document.getElementById("total").value = total.toFixed(2);
  const withTax = total * 1.13;
  document.getElementById("with-tax").value = withTax.toFixed(2);
}
