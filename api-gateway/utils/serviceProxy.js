const axios = require("axios");

const serviceProxy = async (req, res, next, baseURL) => {
  try {
    const response = await axios({
      method: req.method,
      url: `${baseURL}${req.url}`,
      data: req.body,
      headers: {
        Authorization: req.headers.authorization || "",
      },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    next(error);
  }
};

module.exports = serviceProxy;