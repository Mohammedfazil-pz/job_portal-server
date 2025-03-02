const jsonserver=require('json-server')

const myServer=jsonserver.create()

const router=jsonserver.router('./db.json')

const middleware=jsonserver.defaults()

const PORT=3000||process.env.PORT

myServer.use(middleware)
myServer.use(router)

myServer.listen(PORT,()=>{
    console.log(`Port running on ${PORT}`)
})