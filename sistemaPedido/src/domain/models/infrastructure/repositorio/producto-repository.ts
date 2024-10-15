import { FieldPacket, ResultSetHeader } from "mysql2";
import { getPoolConnection } from "../../../../../config/data-source";
import { Productos } from "../../Productos";

export class ProductoRepository {

   async agregarProducto(producto: Productos) {
        const connection = getPoolConnection();
        //Nota: Importante ek orden de los parametros
        const querySql = `INSERT INTO Productos (nombre, descripcion, precio, cantidad_disponible) VALUES (?, ?, ?, ?)`;// vulnerabilidad, sql inyeccion. para evitar se coloca en ?
        const values = [producto.nombre, producto.descripcion, producto.precio, producto.cantidad_disponible];
        const result = await connection.query(querySql, values);
        return result;
    }
}