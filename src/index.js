import {getLBTlinks} from '../utils/airtable'
import {getLBTLinksTemplate} from '../utils/templates'

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

    const lbtRecords = await getLBTlinks();
    const lbtTamplate = getLBTLinksTemplate(lbtRecords);
    const returnTamplate = lbtTamplate;

    return new Response (returnTamplate,{
        headers: {'content-type':'text/html'}
    })
}
