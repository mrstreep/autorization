import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = Number(process.env.PORT) || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Авторизация')
    .setDescription(
      'Делаю авторизацию, как мне поручил ОтецРусскогоХипХопа OGsMay',
    )
    .setVersion('0.0.1')
    .addTag('Eleven')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(port, () => console.log(`Server started on port ${port}`));
}

bootstrap();
