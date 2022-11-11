// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//API Key --> 791b5ae6-9a86-487f-8319-d64de62537e3
export default function handler(req, res) {
  const getData = async () => {

    const response = await fetch(
    //   `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.NEXT_BACKEND_CMC_API_KEY}`,
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=791b5ae6-9a86-487f-8319-d64de62537e3`,
      {
        method: "GET",
        headers: {
          Accept: "*/*",
        },
      }
    );
    const data = await response.json();
    res.status(200).json({ data });
  };

  getData();
}
