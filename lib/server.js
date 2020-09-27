
import express  from 'express';
import config from './config';


const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render(`index`,{name:`IndikaM`});
});

app.listen(config.port, () =>{
    console.log(`Running Server on ${config.port}`);
});