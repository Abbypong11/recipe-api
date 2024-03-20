import { Router } from "express";

//Create a route
const router = Router();

//Define routes
router.post('/', (req, res) => {
  res.send("Add single recipe"); 
});

router.get('/',  (req, res) => {
    res.send("Get all recipes!");
});

router.get('/:id',  (req, res) => {
    res.send(`Get single recipe with id: ${req.params.id}`);
});

router.patch('/:id', (req,res)=>{
    res.send("Update single recipe");
});

router.delete('/:id',(req,res)=> {
    res.send("Delete single recipe");
});

//Export router
export default router;