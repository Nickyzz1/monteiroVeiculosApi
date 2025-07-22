// import vehicleService  from '../services/vehicleService';

// async function create(req, res) {
//   try {
//     const vehicle = await vehicleService.createVehicle(req.body);
//     res.status(201).json(vehicle);
//   } catch (err) {
//     res.status(500).json({ error: 'Erro ao criar veículo.' });
//   }
// }

// async function list(req, res) {
//   const vehicles = await vehicleService.getVehicles();
//   res.json(vehicles);
// }

// async function update(req, res) {
//   const { id } = req.params;
//   const updated = await vehicleService.updateVehicle(id, req.body);
//   if (!updated) return res.status(404).json({ error: 'Veículo não encontrado' });
//   res.json(updated);
// }

// module.exports = { create, list, update };
