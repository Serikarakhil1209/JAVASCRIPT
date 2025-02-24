function data(data_id){
    let p= new Promise((resolve,reject)=>
        {
            setTimeout(() => {
                console.log("data_id",data_id)
            }, 1000);
            resolve()
        }
    )
    
}
data(4)
data(2)
data(3)
data(5)