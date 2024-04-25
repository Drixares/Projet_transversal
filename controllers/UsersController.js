// import client from '../config/prisma.js'


class UserController {

  async index(req, res) {

    try {
      
      const user = await client.user.findMany()

      if (!user) return res.status(404).json("Aucun utilisateur trouvé")

      return res.status(200).json(user)

    } catch (error) {
      
      return res.status(500).json("Erreur lors de la récupération des utilisateurs du jeu")
    }
  }

  async show(req, res) {
    const id = parseInt(req.params.id)
    return res.status(200).json(`Un utilisateur (id : ${id}) précis du jeu`)
  }

  async create(req, res) {
    
    try {
      
    } catch (error) {
      
      return res.status(500).json("Erreur lors de la création de l'utilisateur")
    }
  }
}

export default new UserController(); 