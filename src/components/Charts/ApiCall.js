export default async function GetCurrentPrice() {
    try{
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        return await response.json();
    }catch(error) {
        return [];
    }
}