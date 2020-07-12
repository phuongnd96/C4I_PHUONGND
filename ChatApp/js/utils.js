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

utils.checkEmailFormat=(email)=>{
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}