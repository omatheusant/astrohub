async function spaceNews (req, res) {
   const newsResponse = await fetch("https://spacenewsapi-production.up.railway.app/")
   const newsResponseJson = await newsResponse.json()
   const news = await newsResponseJson.data

   res.send({
    results: news
   })
}
    

export default spaceNews
