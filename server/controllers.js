export const getApiInformation = (req, res) => {
  res.status(200).send({
    'name': 'Hagenhaus API',
    'method': req.method,
    'url': req.url,
    'timestamp': new Date().toISOString()
  });
};

export const postMessage = (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.status(204).end();
};
