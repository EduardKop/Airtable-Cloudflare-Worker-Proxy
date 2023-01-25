const getLBTLinksTemplate = (records) => {
return records
 .map (
    (record) =>
         `<li><a href="${record.link}">${record.Name}</a> by ${record.Status} </li>`
 )
    .join("")
 }


module.exports = { getLBTLinksTemplate }