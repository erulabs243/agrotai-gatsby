import axios from "axios"

export const getCampaignsData = async () => {
    try{
        const response = await axios.get('http://localhost:1337/api/campaigns');
        console.log(response)
        return response
    } catch(e) {
        console.error(e)
    }
}