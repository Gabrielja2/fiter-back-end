import {
    CreateUserController,
    TreatmentDecorator,
    LoginUserController,
    RegisterTicketController,
    CreateTicketConfigController,
    FindTicketConfigController,
    CreatePrizeDrawConfigController,
    FindPrizeDrawConfigController,
    CreatePrizeDrawController,
} from "@/layers/presentation"
import {
    createTicketConfigUseCase,
    createUserUseCase,
    loginUserUseCase,
    registerTicketUseCase,
    findTicketConfigUseCase,
    createPrizeDrawConfigUseCase,
    findPrizeDrawConfigUseCase,
    createPrizeDrawUseCase,
} from "@/main/factories"

export const createUserController = new TreatmentDecorator(new CreateUserController(createUserUseCase));
export const loginUserController = new TreatmentDecorator(new LoginUserController(loginUserUseCase));

export const registerTicketController = new TreatmentDecorator(new RegisterTicketController(registerTicketUseCase));

export const createTicketConfigController = new TreatmentDecorator(new CreateTicketConfigController(createTicketConfigUseCase));
export const findTicketConfigController = new TreatmentDecorator(new FindTicketConfigController(findTicketConfigUseCase));

export const createPrizeDrawConfigController = new TreatmentDecorator(new CreatePrizeDrawConfigController(createPrizeDrawConfigUseCase));
export const findPrizeDrawConfigController = new TreatmentDecorator(new FindPrizeDrawConfigController(findPrizeDrawConfigUseCase));

export const createPrizeDrawController = new TreatmentDecorator(new CreatePrizeDrawController(createPrizeDrawUseCase));


