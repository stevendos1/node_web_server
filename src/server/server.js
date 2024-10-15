import express from 'express'
import path from 'path'

export const startServer = (options) => {
    const { port, public_path = 'public' } = options;
    const app= express()
    app.use(express.static(public_path))
    app.get('*',(req,res) => {
        const indexPath= path.join(___dirname, + `../../../${public_path}/index.html`)
        res.sendfile(indexPath)
    })
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
};

