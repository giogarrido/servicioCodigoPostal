import { pool } from "../conexion.js";

export const getEstados = async (req, res) => {

  try {
    const [rows] = await pool.query("SELECT * FROM estados");
    res.json(rows);
  } catch (error) {
    //console.log(error);
    return res.status(500).json({
        
      // 500 Internal Server Error (error interno del servidor)
      message: "Error en el servidor",
      
    });
  }
};

export const getEstado = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query(
      "SELECT * FROM estados WHERE id_estado = ?",
      [id]
    );

    if (rows.length <= 0)
      return res.status(404).json({
        // 404 Not Found (no encontrado)
        message: "El estado no existe",
      });

    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      // 500 Internal Server Error (error interno del servidor)
      message: "Error en el servidor",
    });
  }
};

export const getEstadoByNombre = async (req, res) => {
    
  const { nombre } = req.params;
  try {
    const [rows] = await pool.query(
      "SELECT * FROM estados WHERE nombre_estado = ?",
      [nombre]
    );

    if (rows.length <= 0)
      return res.status(404).json({
        // 404 Not Found (no encontrado)
        message: "El estado no existe",
      });
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      // 500 Internal Server Error (error interno del servidor)
      message: "Error en el servidor",
      
    });
  }
};
