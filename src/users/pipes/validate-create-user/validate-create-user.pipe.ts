import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);

    const parseAgeToNumber = parseInt(value.age.toString());
    if (isNaN(parseAgeToNumber)) {
      throw new HttpException(
        'Invalid DataType for Property Age, Expected Number',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return {
        ...value,
        age: parseAgeToNumber,
      };
    }
    return value;
  }
}
