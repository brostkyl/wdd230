const ONE_DAY = 24 * 60 * 60 * 100

function showForecast(forecasts){
    console.log(forecasts)
    let date = []
    let mydate = new DataTransfer();
    for (let i=0; i <3; i++){
        mydate = new Date(mydate.getTime() + ONE_DAY)
        nextdate = mydate.toISOString().slice(0,10)
    }

}