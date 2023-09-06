import {pool} from "../conexion.js"

export const getEstados = async (req, res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM estados');
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
};

export const getEstado = async (req, res) => {
    const {id} = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM estados WHERE id_estado = ?', [id]);
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
};

export const getEstadoByNombre = async (req, res) => {
    const {nombre} = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM estados WHERE nombre_estado = ?', [nombre]);
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
}