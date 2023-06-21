import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express'; 

const router = express.Router();
 
router.use('/', (req,res)=> res.send("Not configured. Swagger is in TODO state")); 
export default router;
