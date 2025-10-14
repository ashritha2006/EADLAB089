const ex = require('express')
const ap = ex()

const logMiddleware=(req,res,next)=>
{
    console.log(`[LOG] ${req.method} request made to ${req.url}`);
    next();
};
 
ap.get('/',(req,res)=>
{
    res.send("Welcome to the Home Page!")
})

ap.get('/about',logMiddleware,(req,res)=>
{
    res.send("Welcome to the About Page!(logMiddleware)")
})

ap.get('/conatct',(req,res)=>{
    res.send('This is conatact Page');
});

const ser=ap.listen(3000,function()
{
    console.log("server running on 3000");
})
