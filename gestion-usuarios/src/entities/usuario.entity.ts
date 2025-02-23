import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Indica que esta clase representa una tabla en MySQL
export class Usuario {
  @PrimaryGeneratedColumn() // ID autoincremental
  id: number;

  @Column() // Columna de nombre
  nombre: string;

  @Column() // Columna de correo
  correo: string;

  @Column({ default: true }) // Columna con valor por defecto
  activo: boolean;
}
