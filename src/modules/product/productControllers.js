export const productLoadAll = (req, res) => {
  const product = {
    title: 'X BOX',
    price: 500,
  };

  res.status(200).json(product);
};

export async function productCreate(req, res) {
  console.log(req.body);

  const product = {
    title: 'X BOX ONE',
    price: 500,
    id: req.body.id,
  };

  res.status(200).json(product);
}

export async function productUpdateById(req, res) {
  res.status(200).json('OK productUpdateById');
}

export const productDeleteById = (req, res) => {
  res.status(200).json('OK productDeleteById');
};
