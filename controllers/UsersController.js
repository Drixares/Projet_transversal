import { default as client } from '../config/prisma.js'


class UserController {

  async index(req, res) {

    try {
      
      const user = await client.user.findMany({
        take: 5,
        orderBy: {
          id: "desc"
        }
      })

      if (!user.length) return res.status(404).json("Aucun utilisateur trouvé")

      return res.status(200).json(user)

    } catch (error) {
      
      return res.status(500).json("Erreur lors de la récupération des utilisateurs du jeu")
    }
  }

  async showUser(req, res) {

    const id = parseInt(req.params.id);

    try {
      
      const user = await client.user.findUnique({
        where: {
          id: id
        }
      })

      if (!user) return res.status(404).json({ message: 'User nnot found.' })
      return res.status(200).json(user)

    } catch (error) {
      
      return res.status(500).json({ message: error.message })
    }

  }

  async create(req, res) {
    
    try {

      const body = req.body;
      if (typeof body.fin !== 'number' && body.fin !== 1 && body.fin !== 2) {
        return res.status(400).json('La fin doit correspondre à 1 ou 2')
      }

      const user = await client.user.create({
        data: {
          name: body.name,
          fin: body.fin
        }
      })

      return res.status(200).json({ message: "Partie enregistré !"})
      
    } catch (error) {
      
      return res.status(500).json({ message: error.message })
    }
  }

  async getStats(req, res) {

    try {
      
      const users = await client.user.findMany({
        select: {
          fin: true,
        }
      })

      if(!users) return res.status(404).json({ message: "Aucune stats trouvées."})

      let stats = {
        "fin1": 0,
        "fin2": 0
      }

      for (const user of users) {
        if (user.fin === 1) stats.fin1++
        if (user.fin === 2) stats.fin2++
      }

      return res.status(200).json(stats)

    } catch (error) {
      
    }

  }
}

export default new UserController(); 