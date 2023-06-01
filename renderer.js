const { shell } = require('electron')

document.getElementById('trashButton').addEventListener('click', () => {
  shell.trashItem('to_be_deleted')
    .then(() => {
      console.log('File moved to trash successfully')
    })
    .catch((error) => {
      console.error(`Failed to move file to trash: ${error}`)
    })
})