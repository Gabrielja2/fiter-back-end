import { CreateUserController, TreatmentDecorator, LoginUserController } from "@/layers/presentation"
import { createUserUseCase, loginUserUseCase } from "@/main/factories"

export const createUserController = new TreatmentDecorator(new CreateUserController(createUserUseCase));
export const loginUserController = new TreatmentDecorator(new LoginUserController(loginUserUseCase));



