function calculateEMI() {
  let P = document.getElementById("loan").value;
  let annualRate = document.getElementById("rate").value;
  let years = document.getElementById("time").value;

  if (P === "" || annualRate === "" || years === "") {
    alert("Please fill all fields");
    return;
  }

  let r = annualRate / 12 / 100;
  let n = years * 12;

  let emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  let totalPayment = emi * n;
  let totalInterest = totalPayment - P;

  document.getElementById("emi").innerText = "Monthly EMI: ₹" + emi.toFixed(2);
  document.getElementById("interest").innerText = "Total Interest: ₹" + totalInterest.toFixed(2);
  document.getElementById("total").innerText = "Total Payment: ₹" + totalPayment.toFixed(2);
}
