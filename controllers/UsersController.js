class UserController {

  async index(req, res) {
    return res.status(200).json("Tous les utilisateurs du jeu")
  }

  async show(req, res) {
    const id = parseInt(req.params.id)
    return res.status(200).json(`Un utilisateur (id : ${id}) précis du jeu`)
  }
}

export default new UserController(); 