import { MissingParamError, InvalidTypeError } from "@/layers/presentation";


export class Validate {
	static fields(fields: { name: string, type: string, nullable?: boolean }[], body: { [key: string]: string }) {
		const errors: Error[] = [];
		fields.forEach(element => {
			const value = body[element.name];

			const missingParams = !value && !element.nullable
			if (missingParams) errors.push(new MissingParamError(element.name));

			const existsParamsWithInvalidType = value && typeof value !== element.type
			if (existsParamsWithInvalidType) errors.push(new InvalidTypeError(element.name));

		});
		if (errors.length > 0) return errors[0];
	}
}



