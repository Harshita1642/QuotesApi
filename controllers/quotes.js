const getQuote= async(req,res)=>{
    try{
        const apiUrl="https://api.kanye.rest/";
        const p=fetch(`${apiUrl}`);
        var quote="";
        p.then((response)=>{
            // console.log(response);
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data=>{
            quote=data.quote;
            // console.log(quote);
            res.status(200).json({ "quote": quote });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const getQuoteTest= async(req,res)=>{
    res.status(200).json({"quote": "I am getQuoteTest"});
};
module.exports={getQuote,getQuoteTest};