const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Getting all products..." });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "Testing the API" });
};

module.exports = { getAllProducts, getAllProductsTesting };
