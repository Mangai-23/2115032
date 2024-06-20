const express=require('express');
const axios=require('axios');
const app= express();
const port=9876;
const window_size=10;
const TIMEOUT=500;
const API_URL="http://20.244.56.144/test";
let queue=[];

app.get('/numbers/:numberid',async(req,res)=>{
    const numid=req.params.numberid;
    console.log(numid);
    if(!['p','f','e','r'].includes(numid)){
        return res.status(400).json({error:'Invalid numid'});
    }
    try{
        const resp= await axios.get('/prime',{timeout: TIMEOUT});
        console.log("Error in Api-url",resp.data);
        const newnumbers=resp.data.numbers;
        newnumbers.forEach(num =>{
            if(!queue.includes(num)){
                queue.push(num);
                if(queue.length > window_size){
                    queue.shift();
                }
            }
        })
        const tsum= queue.reduce((x,y) => x+y,0);
        const avg=tsum/queue.length;

        res.json({
            "windowPrevState": [...queue].slice(0,-newnumbers.length),
            "windowCurrState": queue,
            "numbers": newnumbers,
            "avg": avg.toFixed(2)
        })

    }
    catch(e){
        console.error(e);
        res.status(404).json({error: 'Fetching numbers'});

    }
});

app.listen(port, () =>{
    console.log(`Listen to port:${port}`)
})