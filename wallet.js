async function connectWallet() {
  if (typeof window.ton !== 'undefined') {
  try {
  const accounts = await window.ton.requestAccounts();
  Wrap
  document.getElementById('wallet-info').innerText = `Connected: 
 ${accounts[0]}`;
  } catch (error) {
  alert("Connection failed.");
  }
  } else {
  alert("Please install a TON wallet.");
  }
  }