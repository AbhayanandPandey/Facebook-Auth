exporss.LogoutUser = (req, res)=>{
    res.clearCookie('FacebookToken');
    res.status(200).json({ message: 'Logout successful' });
}