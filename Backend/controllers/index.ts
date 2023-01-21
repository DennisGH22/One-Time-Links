import express from "express";
import cors from "cors";
import { shareData } from "../models/share";
import { fetchData } from "../models/fetch";
import { deleteData } from "../models/delete";
import { validatePath } from "../models/path";

const app = express();
const router = express.Router();
const PORT = 3000;
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessState: 200,
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

router.post('/share', shareData);
router.get('/fetch', fetchData);
router.delete('/delete', deleteData);
router.get('/path', validatePath);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});