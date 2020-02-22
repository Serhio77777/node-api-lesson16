const child_process = require('child_process')

// const cd = child_process.spawn('cd'['/srv/app'])

// cd.on('error', error => console.log('Cannot change dir: \n', error))

// const ls = child_process.spawn('ls')

// ls.stdout.on('data', data => console.log('Files list: \n', data))
// ls.stderr.on('error', error => console.log('Error: \n', error))


const child3 = child_process.fork('child.js', [3])
const child9 = child_process.fork('child.js', [9])

child3.on('close', code => console.log(`Child process 3 exited. Code: ${code}`))
child9.on('close', code => console.log(`Child process 9 exited. Code: ${code}`))


const child = child_process.fork('child.js')

child.send('Ping child')

child.on('message', code => {
  console.log(`Message to parent: ${code}`)
  process.exit()
})

child.on('close', code => console.log(`Child process exited. Code: ${code}`))
