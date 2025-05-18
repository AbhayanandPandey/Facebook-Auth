exports.logoutUser = (req, res) => {
  req.logout(err => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }

    res.clearCookie('FaceBookToken');
    res.redirect(process.env.CLIENT_URL);
  });
};
