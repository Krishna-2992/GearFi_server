const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(cors());
app.use("/",routes)
app.use(express.json());

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

// - /assets/(collection_address or nft_address)/nft_id -> Shows the particular nft 
// - /assets/collection_address -> All nfts of the collection
// - /assets -> All the nfts(with filters)

/* NFT Database
  nft_id
  contract_address
  token_stndr
  traits
  metadata
  owner
  collection_name
  collection_address
  chain
  price
  status(listed, offers)
  category
*/
