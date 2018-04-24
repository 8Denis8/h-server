export async function list(req, res) {
const listTodo =
  console.log(req.body);

  const product = {
    title: 'List',
    id: req.body,
  };

  res.status(200).json(product);
}

export async function productUpdateById(req, res) {
  res.status(200).json('OK productUpdateById');
};
