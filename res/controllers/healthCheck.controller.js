const Healthcheck = (req, res) => {
  res.status(200).json("this is healthcheck route");
};

export { Healthcheck };
