
const AIRTABLE_BASE_ID = ''//put your AIRTABLE_BASE_ID
const AIRTABLE_API_KEY = ''//put your AIRTABLE_API_KEY
const TABLE_NAME = ''//put your AIRTABLE name
const getMinifiedRecord = (record) => {
    return {
        id:record.id,
        ...record.fields,
    }
}
const getMinifiedRecords = (records) => {
    return records.map((record)=>getMinifiedRecord(record))
}


const getLBTlinks = async () =>{
    try{
        const response = await fetch(
            `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/SallesWiki`,
            {
                headers:{
                    Authorization: `Bearer ${AIRTABLE_API_KEY}`,
                    'Content-type': 'application/json',
                }
        },
        )
        console.log(response.status);
        const data = await response.json()
        return getMinifiedRecords(data.records || [])
    }catch(err){
        console.error(err)
        return[]
    }
}


module.exports = {  getLBTlinks }