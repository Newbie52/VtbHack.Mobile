export function sendQrData(data) {
  return fetch('https://vtbhack.azurewebsites.net/api/Receipt/Recognize?data="' + data +'"').then(res => res.json())
}
