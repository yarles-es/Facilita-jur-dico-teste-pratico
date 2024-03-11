import { BadRequestError } from '../middlewares/asyncError';

function validateFieldSchema(
  data: any, // objeto a ser validado
  fieldName: string, // nome do campo
  expectedType: string, // tipo esperado
  optional: boolean = false, // se o campo é opcional
) {
  if (optional && (data[fieldName] === null || data[fieldName] === undefined)) return;

  if (!(fieldName in data) || data[fieldName] === null || data[fieldName] === undefined) {
    throw new BadRequestError(`${fieldName[0].toUpperCase() + fieldName.slice(1)} é obrigatório`);
  }

  const validateType: { [key: string]: (value: any) => boolean } = {
    number: (value: any) => !isNaN(Number(value)),
    array: (value: any) => Array.isArray(value),
    boolean: (value: any) => typeof value === 'boolean',
    string: (value: any) => typeof value === 'string',
  };

  if (expectedType in validateType && !validateType[expectedType](data[fieldName])) {
    throw new BadRequestError(
      `${fieldName[0].toUpperCase() + fieldName.slice(1)} deve ser  um/uma ${expectedType}`,
    );
  } else if (!(expectedType in validateType)) {
    console.warn(`Tipo de validação '${expectedType}' não é suportado.`);
    throw new BadRequestError(`Tipo de validação '${expectedType}' não é suportado`);
  }
}

export default validateFieldSchema;
