import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);

    const parseAgeToNumber = parseInt(value.age.toString());
    if (isNaN(parseAgeToNumber)) {
      throw new HttpException(
        'Invalid DataType for Property Age, Expected Number',
        HttpStatus.BAD_REQUEST,
      );
    }
    return {
      ...value,
      age: parseAgeToNumber,
    };
  }
}
