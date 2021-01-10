const successBtn = document.getElementById('success')
const failBtn = document.getElementById('fail')
const infoBtn = document.getElementById('info')
const toasts = document.getElementById('toasts')

const messages = [
  'Success',
  'Failed',
  'New Message',
]

const types = ['info', 'success', 'failed']

successBtn.addEventListener('click', () => createNotification('Successful!', 'success'))
failBtn.addEventListener('click', () => createNotification('Failed.', 'failed'))
infoBtn.addEventListener('click', () => createNotification('This is an alert.', 'info'))

function createNotification(message = null, type = null) {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : null)

  notif.innerText = message ? message : null

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}
