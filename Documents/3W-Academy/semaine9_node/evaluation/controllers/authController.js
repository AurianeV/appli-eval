import {join} from 'node:path'

const cwd = process.cwd()

export const home = (req,res) => {
    res.sendFile(join(cwd, 'views', 'header.html'), (err) => {
        if(err) {
            console.log(err)
            res.status(500).send('something broke');
        }
    })
}
