import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario as UsuarioEntity } from './entities/usuario.entity';
import { Usuario, UsuarioSchema } from './schemas/usuario.schema';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    // Configuración para MongoDB (Mongoose)
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),

    // Configuración para MySQL (TypeORM)
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,  // Ajusta el puerto si es necesario
      username: 'root',
      password: 'password',
      database: 'nombre_base_datos',
      autoLoadEntities: true,
      synchronize: true,  // Solo para desarrollo
    }),

    // Importamos el módulo de usuarios (si lo tienes)
    UsuariosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
