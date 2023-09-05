class Controller {
   constructor(service) {
      this.service = service;
   }

   findAll(req, res) {
      res.json({ message: "Estamos en findAll" });
   }
   findById({ params }, res) {
      const { id } = params;
      res.json({ message: `Recibimos el id ${id}` });
   }
   create() { }
   delete() { }

};

module.exports = Controller;


