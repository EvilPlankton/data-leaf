exports.render = function (req, res) {
  res.render('index', {
    title: 'Data Leaf - SQL results in CSV format via URL',
    user: JSON.stringify(req.user)
  })
}
