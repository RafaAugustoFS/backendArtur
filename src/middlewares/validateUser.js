/*
req = request
res = response
next = next function
*/
const validateUser = (req, res, next) => {
  const { nome, email, password } = req.body;
  if (!nome || !email || !password) {
    return res.status(400).json({
      msg: "campos invalidos, revise!!",
    });
  }
  //avança
  return next();
};

const validateUserId = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      msg: "Parâmetro faltando",
    });
  }
  return next();
};

module.exports = { validateUser, validateUserId };
