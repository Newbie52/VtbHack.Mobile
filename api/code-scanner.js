export function sendQrData(data) {
  return fetch('https://vtbhack.azurewebsites.net/api/Receipt/Recognize?data="' + data + '"').then(res => res.json())
}

export function openSession() {
  args = {
    "addresses": [],
    "deviceId": DeviceInfo.getUniqueID(),
    "deviceType": 0
  }
  fetch('http://89.208.84.235:31080/api/v1/session', {
    method: 'post',
    body: JSON.stringify(args)
  }).then(function (response) {
    return response.json().data;
  });
}
export function createInvoice(invoiceName, fpsid, payerAddress, recipientAddress, amount) {
  args = {
    "amount": amount,
    "currencyCode": 810,
    "description": "",
    "number": invoiceName,
    "payer": payerAddress,
    "recipient": recipientAddress
  }
  fetch('http://89.208.84.235:31080/api/v1/invoice', {
    method: 'post',
    body: JSON.stringify(args)
  },
    {
      headers: {
        'FPSID': fpsid,
      }
    }
  ).then(function (response) {
    return response.json().data;
  });

}

export function GetInvoiceStatuses(fpsid, invoiceNumber, recipientAddress) {
  return fetch("http://89.208.84.235:31080/api/v1/invoice/810/" + invoiceNumber + "/" + recipientAddress, {
    headers: {
      'FPSID': fpsid,
    }
  }).then(res => res.json);
}