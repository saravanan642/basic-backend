const listen =(app) =>{
app.listen(process.env.PORT, () => {
    console.log("Successfully running");
})
};

module.exports =listen;