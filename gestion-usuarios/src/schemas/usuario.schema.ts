import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema() // Indica que esta clase es un esquema de MongoDB
export class Usuario extends Document {
  @Prop({ required: true }) // Propiedad requerida
  nombre: string;

  @Prop({ required: true, unique: true }) // Propiedad única
  correo: string;

  @Prop({ default: true }) // Valor por defecto
  activo: boolean;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
