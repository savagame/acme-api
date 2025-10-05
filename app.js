import express;
import cors;

const app = express();   // create app
app.use(cors())		 // use cors as a middleware

app.get('/health', (req, res) => {
	res.json({msg: "your health is ok"}, {status: 200});
})

app.post('/user/:id', (req,res) => {
	res.json({msg: "your body is configured"}, {status: 200})
})
