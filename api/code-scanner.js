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
export function createInvoice(fpsid, payerAddress, recipientAddress, amount) {
  var uuid = uuidv4();
  args = {
    "amount": amount,
    "currencyCode": 810,
    "description": "",
    "number": uuid,
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
    return uuid;
  });

}

export function GetInvoiceStatus(fpsid, invoiceNumber, recipientAddress) {
  return fetch("http://89.208.84.235:31080/api/v1/invoice/810/" + invoiceNumber + "/" + recipientAddress, {
    headers: {
      'FPSID': fpsid,
    }
  }).then(res => res.json);
}


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}