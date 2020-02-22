// console.log(`Child process ${process.argv[2]} is running`)

console.log(`Child process is running`)

process.on('message', message => {
  console.log('Message to child: ', message)
  // process.exit()
})

process.send('Ping parent')
