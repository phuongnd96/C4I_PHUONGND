const utils={}
// Lấy ra 1
utils.getDataFromDoc = (doc) => {
  const data = doc.data();
  data.id = doc.id;
  return data;
};

// Lấy ra nhiều 
utils.getDataFromDocs=(docs)=>{
return docs.map(utils.getDataFromDoc);
}