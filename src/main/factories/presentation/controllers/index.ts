import {
    CreateUserController,
    TreatmentDecorator,
    LoginUserController,
    RegisterTicketController,
    CreateTicketConfigController,
    FindTicketConfigController,
    CreatePrizeDrawConfigController,
    FindPrizeDrawConfigController,
    RegisterPrizeDrawController,
} from "@/layers/presentation"
import {
    createTicketConfigUseCase,
    createUserUseCase,
    loginUserUseCase,
    registerTicketUseCase,
    findTicketConfigUseCase,
    createPrizeDrawConfigUseCase,
    findPrizeDrawConfigUseCase,
    registerPrizeDrawUseCase,
} from "@/main/factories"

export const createUserController = new TreatmentDecorator(new CreateUserController(createUserUseCase));
export const loginUserController = new TreatmentDecorator(new LoginUserController(loginUserUseCase));

export const registerTicketController = new TreatmentDecorator(new RegisterTicketController(registerTicketUseCase));

export const createTicketConfigController = new TreatmentDecorator(new CreateTicketConfigController(createTicketConfigUseCase));
export const findTicketConfigController = new TreatmentDecorator(new FindTicketConfigController(findTicketConfigUseCase));

export const createPrizeDrawConfigController = new TreatmentDecorator(new CreatePrizeDrawConfigController(createPrizeDrawConfigUseCase));
export const findPrizeDrawConfigController = new TreatmentDecorator(new FindPrizeDrawConfigController(findPrizeDrawConfigUseCase));

export const registerPrizeDrawController = new TreatmentDecorator(new RegisterPrizeDrawController(registerPrizeDrawUseCase));


