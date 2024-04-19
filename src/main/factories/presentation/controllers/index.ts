import { CreateUserController, TreatmentDecorator, LoginUserController, RegisterTicketController } from "@/layers/presentation"
import { createUserUseCase, loginUserUseCase, registerTicketUseCase } from "@/main/factories"

export const createUserController = new TreatmentDecorator(new CreateUserController(createUserUseCase));
export const loginUserController = new TreatmentDecorator(new LoginUserController(loginUserUseCase));

export const registerTicketController = new TreatmentDecorator(new RegisterTicketController(registerTicketUseCase));



